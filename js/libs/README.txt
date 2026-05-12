╔══════════════════════════════════════════════════════════════╗
║  YOUROWNPDF.COM - /js/libs/ DIRECTORY                       ║
║  Manual Library Dependencies                                ║
╚══════════════════════════════════════════════════════════════╝

This directory contains JavaScript libraries that are NOT
available on CDN or are too large to load from CDN efficiently.

================================================================
HOW TO ADD A LIBRARY
================================================================

1. Download the library .js file
2. Place it in this folder
3. Reference it in your tool's HTML:
   <script src="../../js/libs/library-name.js"></script>
4. Document it below

================================================================
CURRENT LIBRARIES
================================================================

[None yet - add libraries as needed]

Example entry:
----------------------------------------
File: tesseract-ocr.js
Version: 4.1.1
Size: ~4.2MB
Download from: https://github.com/naptha/tesseract.js/releases
Used by: /tools/pdf/pdf-ocr.html
Purpose: OCR (text recognition) for PDF to Text conversion
First-time notice: "Downloading 4MB OCR engine — first time only"
----------------------------------------

================================================================
NOTES
================================================================

- All libraries here are loaded client-side only
- Files are NEVER sent to any server
- Large libraries (>5MB) should show first-time download notice
- Keep libraries updated for security
- Remove unused libraries to keep the repo clean

================================================================
YOUROWNPDF.COM 🔒
================================================================