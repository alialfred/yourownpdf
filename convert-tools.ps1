$newHeader = @'
  <header class="header">
    <div class="container">
      <div class="header-inner">
        <a href="/" class="logo" data-scroll-to="top">
          <span class="logo-1">Your</span><span class="logo-2">Own</span><span class="logo-3">PDF</span><span class="logo-4">.com</span>
        </a>
        <nav class="nav" id="mainNav">
          <a href="/" class="nav-link" data-route="/" data-scroll-to="top">Home</a>
          <a href="#" class="nav-link" data-scroll-to="pdf-tools">PDF Tools</a>
          <a href="#" class="nav-link" data-scroll-to="image-tools">Image Tools</a>
        </nav>
        <div class="header-controls">
          <div class="search-box hide-mobile">
            <span class="search-icon">🔍</span>
            <input type="text" class="search-input" placeholder="Search 90+ tools..." id="globalSearch">
          </div>
          <button class="theme-toggle" aria-label="Toggle theme">🌙</button>
          <button class="menu-toggle" id="menuToggle" aria-label="Toggle menu">
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>
    </div>
    <div class="mobile-nav" id="mobileNav">
      <div class="mobile-nav-content">
        <a href="/" class="mobile-nav-link" data-route="/" data-scroll-to="top">Home</a>
        <a href="#" class="mobile-nav-link" data-scroll-to="pdf-tools">PDF Tools</a>
        <a href="#" class="mobile-nav-link" data-scroll-to="image-tools">Image Tools</a>
        <div class="mobile-search">
          <span class="search-icon">🔍</span>
          <input type="text" class="search-input" placeholder="Search 90+ tools..." id="mobileSearch">
        </div>
      </div>
    </div>
  </header>
'@

$newFooter = @'
  <footer class="footer">
    <div class="container">
      <div class="footer-inner">
        <div class="footer-links">
          <a href="/about" class="footer-link" onclick="if(window.navigateTo){event.preventDefault(); navigateTo('/about')}">About</a>
          <a href="/contact" class="footer-link" onclick="if(window.navigateTo){event.preventDefault(); navigateTo('/contact')}">Contact</a>
          <a href="/privacy" class="footer-link" onclick="if(window.navigateTo){event.preventDefault(); navigateTo('/privacy')}">Privacy Policy</a>
          <a href="/terms" class="footer-link" onclick="if(window.navigateTo){event.preventDefault(); navigateTo('/terms')}">Terms of Service</a>
        </div>
        <p class="footer-text">&copy; 2026 <span class="logo-1">Your</span><span class="logo-2">Own</span><span class="logo-3">PDF</span><span class="logo-4">.com</span> &mdash; All rights reserved.</p>
      </div>
    </div>
  </footer>
'@

$dirs = @(
    "D:\zWordPress\yourownpdf\tools\pdf",
    "D:\zWordPress\yourownpdf\tools\image"
)

foreach ($dir in $dirs) {
    Get-ChildItem -Path $dir -Filter "*.html" | ForEach-Object {
        $filePath = $_.FullName
        $content = Get-Content -Path $filePath -Raw

        if ($filePath -match 'tool-template') { return }
        if ($content -match 'master-tool\.js') { return }

        Write-Host "Converting: $($_.Name)"

        # Replace header
        $idx = $content.IndexOf('<header')
        $endIdx = $content.IndexOf('</header>', $idx)
        if ($idx -ge 0 -and $endIdx -ge 0) {
            $endIdx = $endIdx + '</header>'.Length
            $content = $content.Substring(0, $idx) + $newHeader + $content.Substring($endIdx)
        }

        # Replace footer
        $idx = $content.IndexOf('<footer')
        $endIdx = $content.IndexOf('</footer>', $idx)
        if ($idx -ge 0 -and $endIdx -ge 0) {
            $endIdx = $endIdx + '</footer>'.Length
            $content = $content.Substring(0, $idx) + $newFooter + $content.Substring($endIdx)
        }

        # Add CSS
        if ($content -notmatch 'master-styles\.css') {
            $insert = "  <link rel=`"stylesheet`" href=`"../../css/master-styles.css`">`r`n  <link rel=`"stylesheet`" href=`"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css`">`r`n"
            $content = $content -replace '</head>', ($insert + '</head>')
        } elseif ($content -notmatch 'font-awesome\.min\.css') {
            $insert = "  <link rel=`"stylesheet`" href=`"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css`">`r`n"
            $content = $content -replace '</head>', ($insert + '</head>')
        }

        # Add scripts (after router.js)
        if ($content -notmatch 'tools-config\.js') {
            $content = $content -replace 'router\.js"></script>', 'router.js"></script>  <script src="../../js/tools-config.js"></script>'
        }
        if ($content -notmatch 'master-tool\.js') {
            $content = $content -replace 'tools-config\.js"></script>', 'tools-config.js"></script>  <script src="../../js/master-tool.js"></script>'
        }

        # Ensure main has id
        if ($content -match '<main class="main"([^>]*)>') {
            $content = $content -replace '<main class="main"([^>]*)>', '<main class="main" id="mainContent">'
        } elseif ($content -match '<main[^>]*>') {
            $content = $content -replace '<main([^>]*)>', '<main class="main" id="mainContent">'
        }

        Set-Content -Path $filePath -Value $content -NoNewline
    }
}

Write-Host "Done!"
