// J-001: Main JavaScript - Core functionality for YOUROWNPDF.COM

(function() {
  'use strict';

  // J-002: Theme detection and management
  const ThemeManager = {
    // J-003: Detect system preference
    getSystemTheme: function() {
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    },

    // J-004: Initialize theme
    init: function() {
      const stored = localStorage.getItem('yourownpdf-theme');
      const theme = stored || this.getSystemTheme();
      this.setTheme(theme);
    },

    // J-005: Set theme
    setTheme: function(theme) {
      document.documentElement.setAttribute('data-theme', theme);
      localStorage.setItem('yourownpdf-theme', theme);
      this.updateToggleButton(theme);
    },

    // J-006: Toggle theme
    toggle: function() {
      const current = document.documentElement.getAttribute('data-theme');
      const next = current === 'dark' ? 'light' : 'dark';
      this.setTheme(next);
    },

    // J-007: Update toggle button icon
    updateToggleButton: function(theme) {
      const btn = document.querySelector('.theme-toggle');
      if (btn) {
        btn.textContent = theme === 'dark' ? '☀️' : '🌙';
      }
    }
  };

  // J-008: Mobile menu functionality
  const MobileMenu = {
    // J-009: Initialize mobile menu
    init: function() {
      this.toggle = document.querySelector('.menu-toggle');
      this.nav = document.querySelector('.nav');
      this.mobileNav = document.getElementById('mobileNav');
      if (this.toggle) {
        this.toggle.addEventListener('click', () => this.toggleMenu());
      }
    },

    // J-010: Toggle menu open/close
    toggleMenu: function() {
      this.toggle.classList.toggle('active');
      if (this.nav) this.nav.classList.toggle('active');
      if (this.mobileNav) this.mobileNav.classList.toggle('active');
    },

    // J-011: Close menu
    closeMenu: function() {
      if (this.toggle) this.toggle.classList.remove('active');
      if (this.nav) this.nav.classList.remove('active');
      if (this.mobileNav) this.mobileNav.classList.remove('active');
    }
  };

  // J-012: Search functionality
  const SearchFilter = {
    // J-013: Initialize search - target specific search inputs
    init: function() {
      // Only initialize on specific search inputs, not all search-input elements
      const globalSearch = document.getElementById('globalSearch');
      const mobileSearch = document.getElementById('mobileSearch');

      if (globalSearch) {
        globalSearch.addEventListener('input', (e) => this.filter(e.target.value));
      }
      if (mobileSearch) {
        mobileSearch.addEventListener('input', (e) => this.filter(e.target.value));
      }
    },

    // J-014: Filter tools by search query - get fresh cards each time
    filter: function(query) {
      const term = query.toLowerCase().trim();
      const cards = document.querySelectorAll('.tool-card');
      let pdfCount = 0;
      let imageCount = 0;

      cards.forEach(card => {
        const title = card.dataset.title || '';
        const desc = card.dataset.desc || '';
        const toolId = card.dataset.toolId || '';
        const path = card.getAttribute('href') || '';
        const match = title.toLowerCase().includes(term) ||
                      desc.toLowerCase().includes(term) ||
                      toolId.toLowerCase().includes(term) ||
                      path.toLowerCase().includes(term);

        if (match) {
          card.style.display = '';
          if (card.closest('#pdfToolsGrid')) pdfCount++;
          if (card.closest('#imageToolsGrid')) imageCount++;
        } else {
          card.style.display = 'none';
        }
      });

      // Show/hide section headers
      const pdfSection = document.getElementById('pdf-tools');
      const imageSection = document.getElementById('image-tools');

      if (pdfSection) {
        const pdfHeader = pdfSection.querySelector('.section-header');
        if (pdfHeader) pdfHeader.style.display = pdfCount ? '' : 'none';
      }
      if (imageSection) {
        const imageHeader = imageSection.querySelector('.section-header');
        if (imageHeader) imageHeader.style.display = imageCount ? '' : 'none';
      }
    },

    // J-015: Clear search
    clear: function() {
      const cards = document.querySelectorAll('.tool-card');
      cards.forEach(card => card.style.display = '');
    }
  };

  // J-016: Modal dialog system
  const Modal = {
    // J-017: Show modal
    show: function(content, duration = 10000) {
      const overlay = document.querySelector('.modal-overlay');
      const modal = document.querySelector('.modal');
      if (!overlay || !modal) return;

      modal.innerHTML = content;
      overlay.classList.add('active');

      // J-018: Add blink/flash then fade out after 10 seconds
      modal.classList.add('modal-blink');
      setTimeout(() => {
        modal.classList.remove('modal-blink');
      }, duration);

      // J-019: Auto close after duration
      this.timeout = setTimeout(() => this.hide(), duration);
    },

    // J-020: Hide modal
    hide: function() {
      const overlay = document.querySelector('.modal-overlay');
      const modal = document.querySelector('.modal');
      if (overlay) overlay.classList.remove('active');
      if (modal) {
        modal.classList.remove('modal-blink');
        modal.innerHTML = '';
      }
      if (this.timeout) clearTimeout(this.timeout);
    },

    // J-021: Show error modal
    showError: function(message) {
      this.show(`<div class="error-message">${message}</div>`);
    },

    // J-022: Show success modal
    showSuccess: function(message) {
      this.show(`<div class="success-message">${message}</div>`);
    }
  };

  // J-023: Heavy library download handler
  const LibraryLoader = {
    // J-024: Libraries to download
    libraries: [
      { name: 'PDF-lib', url: 'https://unpkg.com/pdf-lib@1.17.1/dist/pdf-lib.min.js', size: 450 },
      { name: 'PDF.js', url: 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js', size: 1200 },
      { name: 'jsPDF', url: 'https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js', size: 600 },
      { name: 'Tesseract', url: 'https://unpkg.com/tesseract.js@v5.0.0/dist/tesseract.min.js', size: 800 },
      { name: 'Compressor', url: 'https://unpkg.com/browser-image-compression@2.0.2/dist/browser-image-compression.js', size: 50 }
    ],

    // J-025: Check if already downloaded
    isDownloaded: function() {
      return localStorage.getItem('yourownpdf-libs-loaded') === 'true';
    },

    // J-026: Download all libraries with progress
    downloadAll: function() {
      if (this.isDownloaded()) return Promise.resolve();

      return new Promise((resolve, reject) => {
        const totalSize = this.libraries.reduce((sum, lib) => sum + lib.size, 0);
        let downloaded = 0;
        let progress = 0;

        this.showProgressModal();

        const downloadNext = (index) => {
          if (index >= this.libraries.length) {
            localStorage.setItem('yourownpdf-libs-loaded', 'true');
            this.hideProgressModal();
            resolve();
            return;
          }

          const lib = this.libraries[index];
          this.downloadLibrary(lib).then(() => {
            downloaded += lib.size;
            progress = Math.round((downloaded / totalSize) * 100);
            this.updateProgress(progress, lib.size / 1024); // Speed in KB/s
            downloadNext(index + 1);
          }).catch(reject);
        };

        downloadNext(0);
      });
    },

    // J-027: Download single library
    downloadLibrary: function(lib) {
      return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = lib.url;
        script.onload = resolve;
        script.onerror = () => reject(new Error(`Failed to load ${lib.name}`));
        document.head.appendChild(script);
      });
    },

    // J-028: Show progress modal
    showProgressModal: function() {
      const progressHtml = `
        <h3>Downloading Libraries...</h3>
        <div class="progress-container">
          <div class="progress-label">
            <span>Loading required libraries</span>
            <span class="progress-percent">0%</span>
          </div>
          <div class="progress-bar">
            <div class="progress-fill" style="width: 0%"></div>
          </div>
          <div class="progress-speed">0 KB/s</div>
        </div>
      `;
      Modal.show(progressHtml, 60000); // 60 seconds timeout
    },

    // J-029: Update progress display
    updateProgress: function(percent, speed) {
      const fill = document.querySelector('.progress-fill');
      const percentText = document.querySelector('.progress-percent');
      const speedText = document.querySelector('.progress-speed');

      if (fill) fill.style.width = `${percent}%`;
      if (percentText) percentText.textContent = `${percent}%`;
      if (speedText) speedText.textContent = `${speed.toFixed(1)} KB/s`;
    },

    // J-030: Hide progress modal
    hideProgressModal: function() {
      Modal.hide();
    }
  };

  // J-031: Utility functions
  const Utils = {
    // J-032: Format file size
    formatSize: function(bytes) {
      if (bytes === 0) return '0 Bytes';
      const k = 1024;
      const sizes = ['Bytes', 'KB', 'MB', 'GB'];
      const i = Math.floor(Math.log(bytes) / Math.log(k));
      return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    },

    // J-033: Get file extension
    getExtension: function(filename) {
      return filename.split('.').pop().toLowerCase();
    },

    // J-034: Generate unique ID
    generateId: function() {
      return 'id-' + Date.now() + '-' + Math.random().toString(36).substr(2, 9);
    },

    // J-035: Debounce function
    debounce: function(func, wait) {
      let timeout;
      return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
      };
    },

    // J-036: Throttle function
    throttle: function(func, limit) {
      let inThrottle;
      return function(...args) {
        if (!inThrottle) {
          func.apply(this, args);
          inThrottle = true;
          setTimeout(() => inThrottle = false, limit);
        }
      };
    },

    // J-037: Copy to clipboard
    copyToClipboard: function(text) {
      return navigator.clipboard.writeText(text);
    },

    // J-038: Download file
    downloadFile: function(blob, filename) {
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    },

    // J-039: Validate file type
    isPdf: function(file) {
      return file.type === 'application/pdf' || this.getExtension(file.name) === 'pdf';
    },

    // J-040: Validate image type
    isImage: function(file) {
      return file.type.startsWith('image/');
    }
  };

  // J-041: Back to top functionality
  const BackToTop = {
    // J-042: Initialize
    init: function() {
      this.btn = document.querySelector('.back-to-top');
      if (this.btn) {
        window.addEventListener('scroll', Utils.throttle(() => this.toggle(), 100));
        this.btn.addEventListener('click', () => this.scrollUp());
      }
    },

    // J-043: Toggle visibility
    toggle: function() {
      if (window.scrollY > 300) {
        this.btn.classList.add('visible');
      } else {
        this.btn.classList.remove('visible');
      }
    },

    // J-044: Scroll to top
    scrollUp: function() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // J-045: Accordion functionality
  const Accordion = {
    // J-046: Initialize all accordions
    init: function() {
      const headers = document.querySelectorAll('.accordion-header');
      headers.forEach(header => {
        header.addEventListener('click', () => {
          const item = header.parentElement;
          item.classList.toggle('active');
        });
      });
    }
  };

  // J-047: Dropdown functionality
  const Dropdown = {
    // J-048: Initialize all dropdowns
    init: function() {
      const dropdowns = document.querySelectorAll('.dropdown');
      dropdowns.forEach(dropdown => {
        const trigger = dropdown.querySelector('.dropdown-trigger');
        if (trigger) {
          trigger.addEventListener('click', (e) => {
            e.stopPropagation();
            dropdown.classList.toggle('active');
          });
        }
      });

      // J-049: Close on outside click
      document.addEventListener('click', () => {
        dropdowns.forEach(d => d.classList.remove('active'));
      });
    }
  };

  // J-050: Tabs functionality
  const Tabs = {
    // J-051: Initialize tabs
    init: function() {
      const tabHeaders = document.querySelectorAll('.tab');
      tabHeaders.forEach(tab => {
        tab.addEventListener('click', () => {
          const target = tab.dataset.tab;
          this.activateTab(tab, target);
        });
      });
    },

    // J-052: Activate specific tab
    activateTab: function(tab, target) {
      // Remove active class from all tabs
      document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));

      // Add active class to clicked tab
      tab.classList.add('active');
      const content = document.querySelector(`#${target}`);
      if (content) content.classList.add('active');
    }
  };

  // J-053: Toast notification system
  const Toast = {
    // J-054: Show toast message
    show: function(message, type = 'info', duration = 3000) {
      const container = document.querySelector('.toast-container') || this.createContainer();
      const toast = document.createElement('div');
      toast.className = `toast toast-${type}`;
      toast.textContent = message;
      container.appendChild(toast);

      setTimeout(() => toast.classList.add('show'), 10);
      setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
      }, duration);
    },

    // J-055: Create toast container
    createContainer: function() {
      const container = document.createElement('div');
      container.className = 'toast-container';
      document.body.appendChild(container);
      return container;
    },

    // J-056: Success toast
    success: function(message) {
      this.show(message, 'success');
    },

    // J-057: Error toast
    error: function(message) {
      this.show(message, 'error');
    },

    // J-058: Info toast
    info: function(message) {
      this.show(message, 'info');
    }
  };

  // J-059: Clipboard functionality
  const Clipboard = {
    // J-060: Copy element text
    copyElement: function(element) {
      const text = element.textContent || element.innerText;
      return Utils.copyToClipboard(text);
    }
  };

  // J-061: Lazy loading for images
  const LazyLoad = {
    // J-062: Initialize lazy loading
    init: function() {
      const images = document.querySelectorAll('img[data-src]');
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
            observer.unobserve(img);
          }
        });
      });
      images.forEach(img => observer.observe(img));
    }
  };

  // J-063: Form validation
  const FormValidator = {
    // J-064: Validate email
    isEmail: function(email) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    },

    // J-065: Validate URL
    isUrl: function(url) {
      try {
        new URL(url);
        return true;
      } catch {
        return false;
      }
    },

    // J-066: Validate required
    isRequired: function(value) {
      return value && value.trim().length > 0;
    },

    // J-067: Validate min length
    minLength: function(value, min) {
      return value && value.length >= min;
    },

    // J-068: Validate max length
    maxLength: function(value, max) {
      return value && value.length <= max;
    }
  };

  // J-069: Local storage wrapper
  const Storage = {
    // J-070: Get item
    get: function(key, defaultValue) {
      try {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : defaultValue;
      } catch {
        return defaultValue;
      }
    },

    // J-071: Set item
    set: function(key, value) {
      try {
        localStorage.setItem(key, JSON.stringify(value));
        return true;
      } catch {
        return false;
      }
    },

    // J-072: Remove item
    remove: function(key) {
      localStorage.removeItem(key);
    },

    // J-073: Clear all
    clear: function() {
      localStorage.clear();
    }
  };

  // J-074: Event emitter for custom events
  const Events = {
    // J-075: Listen to event
    on: function(event, callback) {
      document.addEventListener(event, callback);
    },

    // J-076: Emit event
    emit: function(event, detail = {}) {
      document.dispatchEvent(new CustomEvent(event, { detail }));
    },

    // J-077: Remove event listener
    off: function(event, callback) {
      document.removeEventListener(event, callback);
    }
  };

  // J-078: Initialize everything when DOM is ready
  document.addEventListener('DOMContentLoaded', function() {
    // J-079: Initialize theme
    ThemeManager.init();

    // J-080: Initialize mobile menu
    MobileMenu.init();

    // J-081: Initialize search
    SearchFilter.init();

    // J-082: Initialize back to top
    BackToTop.init();

    // J-083: Initialize accordions
    Accordion.init();

    // J-084: Initialize dropdowns
    Dropdown.init();

    // J-085: Initialize tabs
    Tabs.init();

    // J-086: Initialize lazy loading
    LazyLoad.init();

    // J-087: Close modal on overlay click
    const overlay = document.querySelector('.modal-overlay');
    if (overlay) {
      overlay.addEventListener('click', (e) => {
        if (e.target === overlay) Modal.hide();
      });
    }

    // J-088: Close modal on escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') Modal.hide();
    });

    // J-089: Theme toggle click handler
    document.addEventListener('click', (e) => {
      if (e.target.closest('.theme-toggle')) {
        ThemeManager.toggle();
      }
    });

    // J-090: Preload heavy libraries on first visit
    if (!LibraryLoader.isDownloaded()) {
      LibraryLoader.downloadAll().catch(err => {
        console.warn('Library loading warning:', err.message);
      });
    }
  });

  // J-091: Listen for system theme changes
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem('yourownpdf-theme')) {
      ThemeManager.setTheme(e.matches ? 'dark' : 'light');
    }
  });

  // J-092: Export utilities to global scope
  window.YOUROWNPDF = {
    Theme: ThemeManager,
    MobileMenu: MobileMenu,
    Search: SearchFilter,
    Modal: Modal,
    LibraryLoader: LibraryLoader,
    Utils: Utils,
    BackToTop: BackToTop,
    Accordion: Accordion,
    Dropdown: Dropdown,
    Tabs: Tabs,
    Toast: Toast,
    Clipboard: Clipboard,
    FormValidator: FormValidator,
    Storage: Storage,
    Events: Events
  };

})();

// J-093: Download file with formatted name
function downloadFile(blob, action) {
  const filename = `yourownpdf-${action}.pdf`;
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

// J-094: Download image with formatted name
function downloadImage(blob, action) {
  const filename = `yourownpdf-${action}.png`;
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

// J-095: Handle file drop
function handleFileDrop(event, callback) {
  event.preventDefault();
  event.stopPropagation();

  const files = event.dataTransfer ? event.dataTransfer.files : event.target.files;
  if (files.length > 0) {
    callback(files);
  }
}

// J-096: Validate PDF files
function validatePdfFiles(files) {
  const validFiles = Array.from(files).filter(file =>
    file.type === 'application/pdf' || file.name.toLowerCase().endsWith('.pdf')
  );
  return validFiles;
}

// J-097: Validate image files
function validateImageFiles(files) {
  const validTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp', 'image/bmp'];
  const validFiles = Array.from(files).filter(file =>
    validTypes.includes(file.type) || /\.(jpg|jpeg|png|gif|webp|bmp)$/i.test(file.name)
  );
  return validFiles;
}

// J-098: Show loading state
function showLoading(button) {
  if (button) {
    button.disabled = true;
    button.dataset.originalText = button.textContent;
    button.innerHTML = '<span class="spinner"></span> Processing...';
  }
}

// J-099: Hide loading state
function hideLoading(button) {
  if (button && button.dataset.originalText) {
    button.disabled = false;
    button.textContent = button.dataset.originalText;
  }
}

// J-100: Format timestamp
function formatTimestamp(date) {
  return new Date(date).toLocaleString();
}