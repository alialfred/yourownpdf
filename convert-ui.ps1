# PowerShell script to standardize UI of all tools to match merge-pdf.html pattern
$ErrorActionPreference = 'Stop'

$newHeader = @"
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
"@

$newFooter = @"
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
"@

$skipPdf = @('merge-pdf.html','split-pdf.html','rotate-pdf.html','pdf-to-png.html','pdf-to-jpg.html','organize-pdf.html','compress-pdf.html')

function Convert-FileUi {
    param([string]$path)
    
    Write-Host "Processing: $path"
    $content = Get-Content -LiteralPath $path -Raw -Encoding UTF8
    $orig = $content
    
    # 1. Add CSS links if master-styles.css missing
    if ($content -notmatch [regex]::Escape('master-styles.css')) {
        $content = $content -replace '([.]{2}[/][.]{2}[/]css/style[.]css[^<]*)',
            ('${1}' + [Environment]::NewLine + '  <link rel="stylesheet" href="../../css/master-styles.css">' +
             [Environment]::NewLine + '  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">')
        Write-Host "  + Added CSS links"
    }
    
    # 2. Replace old header with new
    $hdrIdx = $content.IndexOf('<header class="header">')
    if ($hdrIdx -ge 0) {
        $hdrEnd = $content.IndexOf('</header>', $hdrIdx) + 9
        $oldHdr = $content.Substring($hdrIdx, $hdrEnd - $hdrIdx)
        if ($oldHdr -notmatch 'data-scroll-to') {
            $content = $content.Substring(0, $hdrIdx) + $newHeader + $content.Substring($hdrEnd)
            Write-Host "  + Replaced header"
        } else { Write-Host "  - Header modern" }
    }
    
    # 3. Remove breadcrumbs
    $content = $content -replace '(?s)<div class="container">\s*<nav class="breadcrumbs">.*?</nav>\s*</div>\s*', ''
    if ($content.Length -ne $orig.Length) { Write-Host "  + Removed breadcrumbs" }
    
    # 4. Remove ad placeholders
    $content = $content -replace '(?s)<div class="container">\s*<div class="ad-placeholder".*?</div>\s*</div>\s*', ''
    $content = $content -replace '(?s)<div class="ad-placeholder"[^>]*>.*?</div>', ''
    if ($content.Length -ne $orig.Length) { Write-Host "  + Removed ads" }
    
    # 5. Replace tool-header with tool-header-section
    $content = $content -replace '(?s)<div class="tool-header"[^>]*>\s*<h1[^>]*>(.*?)</h1>\s*<p[^>]*>(.*?)</p>\s*</div>',
        ('<div class="tool-header-section">' + [Environment]::NewLine +
         '          <h1 class="tool-title-text" id="toolTitleDisplay">$1</h1>' + [Environment]::NewLine +
         '          <p class="tool-description-text" id="toolDescDisplay">$2</p>' + [Environment]::NewLine +
         '        </div>')
    Write-Host "  + Fixed tool-header"
    
    # 6. Fix logo casing: Your<span>pdf</span> -> Your<span>Own</span>, <span>own</span> -> <span>PDF</span>
    $content = $content -replace '<span class="logo-2">pdf</span>', '<span class="logo-2">Own</span>'
    $content = $content -replace '<span class="logo-3">own</span>', '<span class="logo-3">PDF</span>'
    Write-Host "  + Fixed logo"
    
    # 7. Wrap upload/text area in tool-main
    if ($content -notmatch 'class="tool-main"') {
        # Try upload-area pattern
        $content = $content -replace '(?s)(<div class="tool-layout">)\s*(<div class="upload-area")', '${1}<div class="tool-main">${2}'
        $content = $content -replace '(?s)(</div>\s*<div class="tool-info")', '</div>${1}'
        # Handle text-input-area (text-to-pdf)
        $content = $content -replace '(?s)(<div class="tool-layout">)\s*(<div class="text-input-area")', '${1}<div class="tool-main">${2}'
        Write-Host "  + Wrapped in tool-main"
    }
    
    # 8. Fix button classes
    $content = $content -replace 'class="btn btn-convert"', 'class="action-btn primary-btn"'
    $content = $content -replace 'class="btn btn-download"', 'class="action-btn success-btn"'
    $content = $content -replace 'class="btn" style="background: var\(--color-card-bg\); border: 1px solid var\(--color-border\);"', 'class="action-btn secondary-btn"'
    $content = $content -replace 'class="btn" style="background:var\(--color-card-bg\);border:1px solid var\(--color-border\);"', 'class="action-btn secondary-btn"'
    $content = $content -replace 'class="btn-convert"', 'class="action-btn primary-btn"'
    $content = $content -replace 'class="btn-download"', 'class="action-btn success-btn"'
    Write-Host "  + Fixed buttons"
    
    # 9. Footer
    if ($content -notmatch 'footer-links') {
        $fIdx = $content.IndexOf('<footer class="footer">')
        if ($fIdx -ge 0) {
            $fEnd = $content.IndexOf('</footer>', $fIdx) + 9
            $content = $content.Substring(0, $fIdx) + $newFooter + $content.Substring($fEnd)
            Write-Host "  + Replaced footer"
        }
    }
    
    # 10. Main element id
    $content = $content -replace '<main class="main">', '<main class="main" id="mainContent">'
    
    if ($content -ne $orig) {
        Set-Content -LiteralPath $path -Value $content -NoNewline -Encoding UTF8
        Write-Host "  [SAVED]"
    } else {
        Write-Host "  [No changes]"
    }
}

# === PDF tools ===
Write-Host "====== PDF TOOLS ======"
$pdfDir = "D:\zWordPress\yourownpdf\tools\pdf"
Get-ChildItem -LiteralPath $pdfDir -Filter "*.html" | ForEach-Object {
    if ($skipPdf -contains $_.Name) { Write-Host "Skip: $($_.Name)"; return }
    $c = Get-Content -LiteralPath $_.FullName -Raw -Encoding UTF8
    if ($c -match 'data-scroll-to="top"') { Write-Host "Skip (modern): $($_.Name)"; return }
    Convert-FileUi -path $_.FullName
}

# === Image tools ===
Write-Host "====== IMAGE TOOLS ======"
$imgDir = "D:\zWordPress\yourownpdf\tools\image"
Get-ChildItem -LiteralPath $imgDir -Filter "*.html" | ForEach-Object {
    $c = Get-Content -LiteralPath $_.FullName -Raw -Encoding UTF8
    if ($c -match 'master-tool\.js') { Write-Host "Skip (MasterTool): $($_.Name)"; return }
    if ($c -match 'data-scroll-to="top"') { Write-Host "Skip (modern): $($_.Name)"; return }
    Convert-FileUi -path $_.FullName
}

Write-Host "====== DONE ======"
