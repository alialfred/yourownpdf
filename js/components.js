/* ============================================================
   YOUROWNPDF.COM - COMPONENTS (Header & Footer)
   Part 2: Reusable Components
   ID Range: J-001 to J-050
   ============================================================ */

// [J-001] Inject header HTML into any page
function injectHeader(currentPage = 'home') {
    const headerHTML = `
    <!-- [HDR-001] Site Header -->
    <header class="site-header no-select">
        <div class="header-inner">
            <!-- [HDR-002] Logo -->
            <a href="index.html" class="header-logo">YOUROWNPDF</a>
            
            <!-- [HDR-003] Desktop Navigation -->
            <nav class="header-nav">
                <a href="index.html">Home</a>
                <a href="index.html#pdf-tools">PDF Tools</a>
                <a href="index.html#image-tools">Image Tools</a>
            </nav>
            
            <!-- [HDR-004] Search Bar -->
            <div class="header-search">
                <span class="header-search-icon">🔍</span>
                <input type="text" id="header-search-input" placeholder="Search 90+ tools..." oninput="filterTools(this.value)">
            </div>
            
            <!-- [HDR-005] Theme Toggle -->
            <button class="theme-toggle" onclick="toggleTheme()" title="Toggle theme" aria-label="Toggle dark/light mode">
                <span id="theme-icon">🌙</span>
            </button>
            
            <!-- [HDR-006] Login Button -->
            <a href="login.html" class="header-login-btn">Login</a>
            
            <!-- [HDR-007] Hamburger Button (Mobile) -->
            <button class="hamburger-btn" onclick="toggleMobileMenu()" aria-label="Menu">
                <span class="hamburger-line"></span>
                <span class="hamburger-line"></span>
                <span class="hamburger-line"></span>
            </button>
        </div>
    </header>
    
    <!-- [HDR-008] Mobile Menu -->
    <div class="mobile-menu" id="mobile-menu">
        <a href="index.html">🏠 Home</a>
        <a href="index.html#pdf-tools">📄 PDF Tools</a>
        <a href="index.html#image-tools">🖼️ Image Tools</a>
        <a href="login.html">👤 Login</a>
    </div>
    
    <!-- [HDR-009] Mobile Overlay -->
    <div class="mobile-overlay" id="mobile-overlay" onclick="toggleMobileMenu()"></div>
    `;
    
    // Insert header at start of body
    document.body.insertAdjacentHTML('afterbegin', headerHTML);
    
    // [J-002] Set initial theme icon based on system preference
    updateThemeIcon();
}

// [J-003] Inject footer HTML into any page
function injectFooter() {
    const footerHTML = `
    <!-- [FTR-001] Site Footer -->
    <footer class="site-footer">
        <div class="footer-inner">
            <!-- [FTR-002] Brand Column -->
            <div class="footer-col">
                <h4>YOUROWNPDF.COM</h4>
                <a href="about.html">About Us</a>
                <a href="contact.html">Contact</a>
                <a href="privacy.html">Privacy Policy</a>
                <a href="terms.html">Terms of Service</a>
            </div>
            
            <!-- [FTR-003] PDF Tools Column -->
            <div class="footer-col">
                <h4>Popular PDF Tools</h4>
                <a href="tools/pdf/merge-pdf.html">Merge PDF</a>
                <a href="tools/pdf/compress-pdf.html">Compress PDF</a>
                <a href="tools/pdf/pdf-to-word.html">PDF to Word</a>
                <a href="tools/pdf/split-pdf.html">Split PDF</a>
            </div>
            
            <!-- [FTR-004] Image Tools Column -->
            <div class="footer-col">
                <h4>Popular Image Tools</h4>
                <a href="tools/image/remove-background.html">Background Remover</a>
                <a href="tools/image/resize-image.html">Resize Image</a>
                <a href="tools/image/jpg-to-png.html">JPG to PNG</a>
                <a href="tools/image/compress-image.html">Compress Image</a>
            </div>
            
            <!-- [FTR-005] More Column -->
            <div class="footer-col">
                <h4>More</h4>
                <a href="template.html">Add New Tool</a>
                <a href="#">Advertise</a>
                <a href="#">Report Bug</a>
            </div>
        </div>
        
        <!-- [FTR-006] Copyright -->
        <div class="footer-bottom">
            <p>© 2024 YOUROWNPDF.COM — All rights reserved. All tools run 100% in your browser. No files ever leave your device.</p>
        </div>
    </footer>
    `;
    
    // Insert footer at end of body
    document.body.insertAdjacentHTML('beforeend', footerHTML);
}

// [J-004] Toggle mobile menu open/close
function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    const overlay = document.getElementById('mobile-overlay');
    const hamburger = document.querySelector('.hamburger-btn');
    
    if (menu && overlay && hamburger) {
        menu.classList.toggle('open');
        overlay.classList.toggle('open');
        hamburger.classList.toggle('open');
        
        // Prevent body scroll when menu is open
        if (menu.classList.contains('open')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }
}

// [J-005] Toggle between dark and light theme
function toggleTheme() {
    const html = document.documentElement;
    html.classList.toggle('dark');
    
    // [J-006] Save preference to localStorage
    const isDark = html.classList.contains('dark');
    localStorage.setItem('yourownpdf-theme', isDark ? 'dark' : 'light');
    
    updateThemeIcon();
}

// [J-007] Update theme icon based on current mode
function updateThemeIcon() {
    const icon = document.getElementById('theme-icon');
    if (!icon) return;
    
    const isDark = document.documentElement.classList.contains('dark');
    icon.textContent = isDark ? '☀️' : '🌙';
}

// [J-008] Load saved theme on page load
function loadSavedTheme() {
    const saved = localStorage.getItem('yourownpdf-theme');
    
    if (saved === 'dark') {
        document.documentElement.classList.add('dark');
    } else if (saved === 'light') {
        document.documentElement.classList.remove('dark');
    } else {
        // [J-009] No saved preference — use system preference
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        if (prefersDark) {
            document.documentElement.classList.add('dark');
        }
    }
    
    updateThemeIcon();
}

// [J-010] Listen for system theme changes
function listenForSystemThemeChanges() {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        // Only auto-switch if user hasn't manually set a preference
        const saved = localStorage.getItem('yourownpdf-theme');
        if (!saved) {
            if (e.matches) {
                document.documentElement.classList.add('dark');
            } else {
                document.documentElement.classList.remove('dark');
            }
            updateThemeIcon();
        }
    });
}

// [J-011] Dynamically load file-actions.js for centralized button management
function loadFileActions() {
    const script = document.createElement('script');
    script.src = '../../js/file-actions.js';
    script.onload = () => {
        console.log('%c✅ File Actions System Ready', 'color: #10B981;');
    };
    document.head.appendChild(script);
}

// [J-012] Initialize all components on page load
function initializeComponents(currentPage = 'home') {
    loadSavedTheme();
    injectHeader(currentPage);
    injectFooter();
    listenForSystemThemeChanges();
    loadFileActions(); // [J-013] Load file-actions system
}

