// J-201: Router JavaScript - History API navigation for YOUROWNPDF.COM

(function() {
  'use strict';

  // J-202: Router configuration
  const Router = {
    // J-203: Current route
    currentRoute: null,

    // J-204: Routes registry
    routes: {
      '/': 'index.html',
      '/tools': 'index.html',
      '/about': 'about.html',
      '/contact': 'contact.html',
      '/privacy': 'privacy.html',
      '/terms': 'terms.html',
      '/login': 'login.html',
      '/404': '404.html'
    },

    // J-205: Initialize router
    init: function() {
      // J-206: Intercept all internal links
      document.addEventListener('click', (e) => {
        const link = e.target.closest('a[href^="/"]');
        if (link) {
          // Let Navigation module handle data-scroll-to links
          if (link.hasAttribute('data-scroll-to')) {
            return;
          }
          
          const href = link.getAttribute('href');
          console.log('DEBUG click: intercepted link', href);
          e.preventDefault();
          this.navigateTo(href);
        }
      });

      // J-207: Handle browser back/forward buttons
      window.addEventListener('popstate', (e) => this.handlePopState(e));
      // J-208: Handle initial page load
      let path = window.location.pathname;

      // CLEANER FIX: Normalize path for local or server environments
      if (path.endsWith('index.html') || path === '' || path === '/') {
          path = '/index.html';
      }

      // J-209: Register tool routes
      this.registerToolRoutes();

      // J-209b: Update URL to show index.html for homepage
      if (path === '/index.html' && window.location.pathname === '/') {
        history.replaceState({}, '', '/index.html');
      }
    },

    // J-210: Navigate to URL (NO HASHTAGS)
    navigateTo: function(path, sectionToScroll) {
      // Always push state to update URL
      history.pushState({}, '', path);

      // Always try to load content (this handles both same-page and different-page)
      this.loadContent(path);

      // Handle scroll based on where we are now
      if (sectionToScroll) {
        // Store for after content loads
        window._scrollAfterNav = sectionToScroll;
      }
      // If no sectionToScroll, let loadContent handle it (it may scroll to top by default)

      // Close mobile menu after navigation
      if (window.YOUROWNPDF && window.YOUROWNPDF.MobileMenu && typeof window.YOUROWNPDF.MobileMenu.closeMenu === 'function') {
        window.YOUROWNPDF.MobileMenu.closeMenu();
      }

      // J-213: Update current route
      this.currentRoute = path;

      // J-214: Emit navigation event
      window.YOUROWNPDF.Events.emit('routeChange', { path });
    },

    // J-215: Handle popstate (back/forward buttons)
    handlePopState: function(e) {
      let path = window.location.pathname;
        // Fix local file routing
          if (
            path.includes('index.html') ||
            path.startsWith('/D:/') ||
            path === ''
          ) {
            path = '/index.html';
          }

      this.loadContent(path);
      this.currentRoute = path;

      // J-216: Emit navigation event
      window.YOUROWNPDF.Events.emit('routeChange', { path });
    },

    // J-217: Load content based on pathname
    loadContent: function(pathname) {
      // J-218: Find matching route
      const route = this.matchRoute(pathname);

      // J-219: Determine which page to load
      let pagePath;

      if (route) {
        pagePath = this.routes[route] || this.routes['/404'];
      } else if (pathname.startsWith('/tools/pdf/')) {
        // J-220: Load PDF tool pages
        const toolName = pathname.split('/').pop();
        pagePath = `tools/pdf/${toolName}.html`;
      } else if (pathname.startsWith('/tools/image/')) {
        // J-221: Load image tool pages
        const toolName = pathname.split('/').pop();
        pagePath = `tools/image/${toolName}.html`;
      } else if (pathname === '/tools' || pathname.startsWith('/tools/')) {
        pagePath = 'index.html';
      } else {
        pagePath = 'index.html';
      }

      // J-222: Fetch and render page content
      console.log('DEBUG loadContent: pathname=', pathname, 'route=', route, 'pagePath=', pagePath, 'cleanPath will be:', pagePath.startsWith('/') ? pagePath.substring(1) : pagePath);
      this.fetchPage(pagePath).then(html => {
        this.renderPage(html, pathname);
        this.updateActiveNav(pathname);
      }).catch(err => {
        console.error('Page load error:', err);
        this.loadErrorPage();
      });
    },
      // J-223: Match route pattern (Improved)
      matchRoute: function(pathname) {
        // Sort keys by length so specific paths are checked before the home page "/"
        const routes = Object.keys(this.routes).sort((a, b) => b.length - a.length);
        
        for (const route of routes) {
          if (route === pathname || (route !== '/' && pathname.startsWith(route))) {
            return route;
          }
        }
        return null;
      },

// J-224: Fetch page from server (Simplified)
  fetchPage: function(pagePath) {
    return new Promise((resolve, reject) => {
      // Always use absolute path from root to avoid relative URL issues
      const cleanPath = pagePath.startsWith('/') ? pagePath : '/' + pagePath;
      const fullPath = window.location.origin + cleanPath;

      fetch(fullPath)
        .then(response => {
          if (!response.ok) throw new Error(`Could not find: ${cleanPath}`);
          return response.text();
        })
        .then(html => resolve(html))
        .catch(err => {
          console.error("Fetch error:", err);
          reject(err);
        });
    });
  },

  // J-225: Try with base path (Is Deleted)

  // J-226: Render page content (Cleaned)
renderPage: function(html, pathname) {
  const main = document.querySelector('main');
  if (!main) return;

  const temp = document.createElement('div');
  temp.innerHTML = html;

  // Check if this is a tool page
  const isToolPage = pathname.startsWith('/tools/pdf/') || pathname.startsWith('/tools/image/');

  let content;
  if (isToolPage) {
    // For tool pages: extract only .tool-page content (no header/footer)
    const toolContent = temp.querySelector('.tool-page');
    content = toolContent ? toolContent.innerHTML : '';
  } else {
    // For regular pages: extract main content
    content = temp.querySelector('main')?.innerHTML || html;
  }

  // 1. Update Content
  main.innerHTML = content;

  // 2. Update Title
  document.title = temp.querySelector('title')?.textContent || 'YOUROWNPDF.COM';

  // 3. Remove old page scripts to prevent memory leaks
  document.querySelectorAll('.page-script').forEach(s => s.remove());

  // 4. Add new scripts and styles (specifically from the new page) - for tool pages only
  // Always remove old tool-specific styles first
  const existingStyle = document.getElementById('tool-specific-styles');
  if (existingStyle) existingStyle.remove();

  if (isToolPage) {
    // Add tool-specific styles
    const styleContent = temp.querySelector('style');
    if (styleContent) {
      const newStyle = document.createElement('style');
      newStyle.id = 'tool-specific-styles';
      newStyle.textContent = styleContent.textContent;
      document.head.appendChild(newStyle);
    }

    // Add new scripts
    const scripts = temp.querySelectorAll('script');
    scripts.forEach(script => {
      // Skip core scripts that are loaded globally on index.html
      if (script.src && (
          script.src.includes('main.js') || 
          script.src.includes('router.js') || 
          script.src.includes('components.js') ||
          script.src.includes('master-tool.js')
      )) {
        return;
      }
      const newScript = document.createElement('script');
      newScript.className = 'page-script';
      if (script.src) {
        newScript.src = script.src;
      } else {
        // Dynamically convert top-level let/const to var to prevent SPA routing SyntaxErrors
        // This solves the 'Identifier has already been declared' bug across all 80+ tool files
        let code = script.textContent;
        code = code.replace(/^(\s*)(let|const)\s+/gm, '$1var ');
        newScript.textContent = code;
      }
      document.body.appendChild(newScript);
    });
  }

  // 5. Reinitialize UI components
  this.reinitializeComponents();

  // 6. Scroll to section if one was pending
  if (window._scrollAfterNav) {
    const sectionId = window._scrollAfterNav;
    window._scrollAfterNav = null;
    setTimeout(() => {
      if (sectionId === 'top') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }
      
      const section = document.getElementById(sectionId);
      if (section) {
        if (window.YOUROWNPDF && window.YOUROWNPDF.Navigation) {
          window.YOUROWNPDF.Navigation._performScroll(section);
        } else {
          section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    }, 100);
  }

  // 7. For tool pages, manually call init functions since DOMContentLoaded already fired
  if (isToolPage) {
    // Try to call any init function defined in the tool's inline script
    if (typeof initUpload === 'function') {
      initUpload();
    }
    if (typeof initReorder === 'function') {
      initReorder();
    }

    // Scroll to top when a tool page opens
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);

    if (typeof initTheme === 'function') {
      initTheme();
    }
  }
},

    // J-232: Reinitialize all components after page load
    reinitializeComponents: function() {
      // Re-render tool cards ONLY if on home page (grids exist)
      const pdfGrid = document.getElementById('pdfToolsGrid');
      const imageGrid = document.getElementById('imageToolsGrid');
      const isHomePage = pdfGrid && imageGrid;

      if (isHomePage && typeof renderToolCards === 'function') {
        renderToolCards();
      }

      // Re-apply tool overlays (uses data-name to match workingTools config)
      if (window.YOUROWNPDF && typeof window.YOUROWNPDF.applyToolOverlays === 'function') {
        window.YOUROWNPDF.applyToolOverlays();
      }

      // Reinitialize search
      if (window.YOUROWNPDF && window.YOUROWNPDF.Search) window.YOUROWNPDF.Search.init();

      // Reinitialize accordions
      if (window.YOUROWNPDF && window.YOUROWNPDF.Accordion) window.YOUROWNPDF.Accordion.init();

      // Reinitialize dropdowns
      if (window.YOUROWNPDF && window.YOUROWNPDF.Dropdown) window.YOUROWNPDF.Dropdown.init();

      // Reinitialize tabs
      if (window.YOUROWNPDF && window.YOUROWNPDF.Tabs) window.YOUROWNPDF.Tabs.init();

      // Reinitialize lazy loading
      if (window.YOUROWNPDF && window.YOUROWNPDF.LazyLoad) window.YOUROWNPDF.LazyLoad.init();
    },

    // J-233: Update active navigation state
    updateActiveNav: function(pathname) {
      const navLinks = document.querySelectorAll('.nav-link');
      navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === pathname || (href !== '/' && pathname.startsWith(href))) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      });
    },

    // J-234: Load error page
    loadErrorPage: function() {
      const main = document.querySelector('main');
      if (main) {
        main.innerHTML = `
          <div class="container">
            <div class="empty-state">
              <div class="empty-state-icon">😕</div>
              <h2>Page Not Found</h2>
              <p>The page you're looking for doesn't exist.</p>
              <button onclick="navigateTo('/')" class="btn btn-primary" style="margin-top: 1rem; cursor: pointer;">Go Home</button>
            </div>
          </div>
        `;
        document.title = '404 - YOUROWNPDF.COM';
      }
    },

    // J-235: Register dynamic tool routes
    registerToolRoutes: function() {
      // J-236: PDF tools routes
      const pdfTools = [
        'merge-pdf', 'compress-pdf', 'split-pdf', 'rotate-pdf',
        'protect-pdf', 'unlock-pdf', 'organize-pdf', 'repair-pdf',
        'compare-pdf', 'watermark-pdf', 'page-numbers-pdf',
        'extract-pdf', 'remove-pages-pdf', 'extract-images-pdf',
        'pdf-to-jpg', 'pdf-to-png', 'pdf-to-word', 'pdf-to-excel',
        'pdf-to-ppt', 'pdf-to-text', 'pdf-to-html', 'pdf-to-images'
      ];

      pdfTools.forEach(tool => {
        this.routes[`/tools/pdf/${tool}`] = `tools/pdf/${tool}.html`;
      });

      // J-237: Image tools routes
      const imageTools = [
        'compress-image', 'resize-image', 'crop-image', 'rotate-image',
        'flip-image', 'filter-image', 'brightness-image', 'contrast-image',
        'grayscale-image', 'invert-image', 'blur-image', 'sharpen-image',
        'remove-background', 'image-to-pdf', 'jpg-to-png', 'png-to-jpg',
        'webp-to-jpg', 'gif-to-png', 'ico-converter', 'base64-encode'
      ];

      imageTools.forEach(tool => {
        this.routes[`/tools/image/${tool}`] = `tools/image/${tool}.html`;
      });
    },

    // J-238: Get current route
    getCurrentRoute: function() {
      return this.currentRoute || window.location.pathname;
    },

    // J-239: Get route parameters
    getParams: function() {
      const pathname = window.location.pathname;
      const parts = pathname.split('/').filter(p => p);
      return parts;
    },

    // J-240: Check if route matches pattern
    isRoute: function(pattern) {
      const pathname = window.location.pathname;
      if (pattern instanceof RegExp) {
        return pattern.test(pathname);
      }
      return pathname === pattern || pathname.startsWith(pattern + '/');
    },

    // J-241: Redirect to URL
    redirect: function(path) {
      this.navigateTo(path);
    },

    // J-242: Reload current page
    reload: function() {
      this.loadContent(window.location.pathname);
    },

    // J-243: Add custom route
    addRoute: function(path, pagePath) {
      this.routes[path] = pagePath;
    },

    // J-244: Remove route
    removeRoute: function(path) {
      delete this.routes[path];
    },

    // J-245: Generate URL for route
    urlFor: function(routeName, params = {}) {
      let path = routeName;
      Object.keys(params).forEach(key => {
        path = path.replace(`:${key}`, params[key]);
      });
      return path;
    }
  };

  // J-246: Page loader for tool pages
  const PageLoader = {
    // J-247: Load tool page content
    loadToolPage: function(toolId, toolName, category) {
      const path = `/tools/${category}/${toolName}`;
      Router.navigateTo(path);
    },

    // J-248: Preload tool pages
    preloadTools: function() {
      const tools = Object.keys(Router.routes).filter(r => r.startsWith('/tools/'));
      tools.forEach(tool => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = Router.routes[tool];
        link.as = 'document';
        document.head.appendChild(link);
      });
    },

    // J-249: Cache page content
    cache: new Map(),

    // J-250: Get cached page or fetch
    getPage: function(path) {
      if (this.cache.has(path)) {
        return Promise.resolve(this.cache.get(path));
      }
      return Router.fetchPage(path).then(html => {
        this.cache.set(path, html);
        return html;
      });
    }
  };

  // J-251: Export router to global scope
  if (!window.YOUROWNPDF) window.YOUROWNPDF = {};
  window.YOUROWNPDF.Router = Router;
  window.YOUROWNPDF.PageLoader = PageLoader;

  // J-252: Initialize router on DOM ready
  document.addEventListener('DOMContentLoaded', () => {
    Router.init();
  });

  // J-253: Expose navigate function globally
  window.navigateTo = function(path) {
    Router.navigateTo(path);
  };

  // J-254: Expose reload function globally
  window.reloadPage = function() {
    Router.reload();
  };

  // J-255: History state wrapper
  window.History = {
    pushState: function(state, title, url) {
      history.pushState(state, title, url);
    },
    replaceState: function(state, title, url) {
      history.replaceState(state, title, url);
    },
    go: function(delta) {
      history.go(delta);
    },
    back: function() {
      history.back();
    },
    forward: function() {
      history.forward();
    }
  };

})();

// J-256: Global route change handler
document.addEventListener('routeChange', function(e) {
  const path = e.detail.path;
  console.log('Route changed to:', path);
});

// J-257: Utility to get all registered routes
function getRoutes() {
  return window.YOUROWNPDF.Router.routes;
}
// J-258: Utility to check if current page is tool page
function isToolPage() {
  let path = window.location.pathname;

  // Fix local file routing
  if (
    path.includes('index.html') ||
    path.startsWith('/D:/') ||
    path === ''
  ) {
    path = '/index.html';
  }

  return path.startsWith('/tools/pdf/') || path.startsWith('/tools/image/');
}

// J-259: Utility to get current tool ID
function getCurrentToolId() {
  let path = window.location.pathname;

  // Fix local file routing
  if (
    path.includes('index.html') ||
    path.startsWith('/D:/') ||
    path === ''
  ) {
    path = '/index.html';
  }

  const parts = path.split('/');
  return parts[parts.length - 1];
}
// J-260: Utility to generate tool URL
function toolUrl(category, toolName) {
  return `/tools/${category}/${toolName}`;
}