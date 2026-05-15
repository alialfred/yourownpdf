================================================================================
YOUROWNPDF.COM - DEVELOPER GUIDE FOR ADDING NEW TOOLS
================================================================================

Version: 1.0 | Last Updated: May 2026
Guide ID: GUIDE-001 to GUIDE-020

================================================================================
TABLE OF CONTENTS
================================================================================

GUIDE-001: Overview
GUIDE-002: Folder Structure
GUIDE-003: Tool ID Naming Convention
GUIDE-004: Step-by-Step: Adding a New Tool
GUIDE-005: Example: PDF to HTML Tool
GUIDE-010: CDN Library Requirements
GUIDE-015: Heavy Library First-Time Modal
GUIDE-020: Branding Requirements

================================================================================
GUIDE-001: OVERVIEW
================================================================================

This guide explains how to add new PDF or Image tools to YOUROWNPDF.COM.
All tools follow the same pattern: 100% client-side processing, no server
uploads, consistent UI, and two-color branding.

The entire site is built with vanilla HTML/CSS/JS - no frameworks required.

================================================================================
GUIDE-002: FOLDER STRUCTURE
================================================================================

Root directory structure:
-------------------------
yourownpdf.com/
├── index.html              # Home page
├── login.html              # Login page
├── about.html              # About page
├── contact.html            # Contact page
├── privacy.html           # Privacy policy
├── terms.html             # Terms of service
├── tools.html             # All tools listing
├── css/
│   └── style.css          # Global styles
├── js/
│   ├── main.js            # Global JavaScript
│   ├── components.js      # UI components
│   └── router.js          # Navigation router
├── tools/
│   ├── pdf/               # PDF tools (e.g., merge.html, split.html)
│   │   ├── merge.html
│   │   ├── split.html
│   │   ├── compress.html
│   │   └── ... (more tools)
│   └── image/             # Image tools (e.g., resize.html, crop.html)
│       ├── resize.html
│       ├── crop.html
│       ├── rotate.html
│       └── ... (more tools)
└── template.html          # Tool template (for developers)

Clean URL requirement: All tool URLs should be clean (no hashtags):
  - CORRECT: /tools/pdf/merge.html
  - WRONG:   /tools/pdf/#merge (never use hashtags)

================================================================================
GUIDE-003: TOOL ID NAMING CONVENTION
================================================================================

Each tool has a unique ID in format: XXX-000
  - First 3 letters: Tool type (see below)
  - Last 3 digits: Sequential number

PDF Tool IDs:
-------------
MRG - Merge PDF
SPL - Split PDF
CMP - Compress PDF
CNV - Convert PDF
EXT - Extract from PDF
EDT - Edit PDF
SEC - PDF Security
SGN - Sign PDF
... and more

Image Tool IDs:
---------------
RSZ - Resize
CMP - Compress
CNV - Convert
CRP - Crop
ROT - Rotate
FLP - Flip
BRT - Brightness
CON - Contrast
... and more

Page IDs:
---------
LOG - Login
ABT - About
CNT - Contact
PRV - Privacy
TRM - Terms (note: TRM-002 to avoid conflict with older version)

Template ID:
------------
TMP - Template placeholders (TMP-001 through TMP-050)

Guide IDs:
----------
GUIDE - Developer guide sections (GUIDE-001 through GUIDE-020)

Example tool IDs:
-----------------
MRG-001: Merge PDF Tool
SPL-002: Split PDF Tool
RSZ-002: Resize Image Tool
CRC-001: Circle Crop Tool

Element ID convention:
----------------------
Use descriptive IDs: uploadArea, fileInput, previewCanvas, processBtn, etc.

================================================================================
GUIDE-004: STEP-BY-STEP: ADDING A NEW TOOL
================================================================================

STEP 1: Copy the template
--------------------------
Copy template.html to the appropriate folder:
  - For PDF tools: copy to tools/pdf/tool-name.html
  - For Image tools: copy to tools/image/tool-name.html

Example:
  cp template.html tools/pdf/pdf-to-html.html

STEP 2: Update file name and path
----------------------------------
Rename the file to describe the tool:
  - Good: pdf-to-html.html, merge-pdf.html, resize-image.html
  - Avoid: tool1.html, new.html, test.html

STEP 3: Update meta tags
------------------------
In the <head> section, update:
  - <title>: "[Tool Name] | YOUROWNPDF.COM"
  - <meta name="description">: "[Description] - Free tool by YOUROWNPDF.COM"

Example:
  <title>PDF to HTML | YOUROWNPDF.COM</title>
  <meta name="description" content="Convert PDF to HTML online. Free tool by YOUROWNPDF.COM">

STEP 4: Update breadcrumbs
---------------------------
In the breadcrumbs nav, change:
  - The category link (PDF Tools or Image Tools)
  - The current page name

Example:
  <a href="/tools" class="breadcrumb-item">PDF Tools</a>
  <span class="breadcrumb-current">PDF to HTML</span>

STEP 5: Add tool-specific JavaScript
-------------------------------------
Inside the <script> tag, find the comments marked TMP-014, TMP-015,
TMP-016, etc., and replace with your tool's logic.

Key functions to implement:
  - handleFile(file): Validate and load the file
  - processFile(): Main processing logic
  - downloadFile(): Handle the download

STEP 6: Add tool-specific CSS
------------------------------
Inside the <style> tag, add any custom styles needed for your tool.
Keep the base styles from the template and add on top.

STEP 7: Add CDN libraries if needed
------------------------------------
If your tool needs external libraries (like pdf-lib, JSZip), add them
in the TMP-011 section. See GUIDE-010 for details.

STEP 8: Update navigation if needed
------------------------------------
If you want the tool in the main navigation, update js/router.js
to include the new tool path.

================================================================================
GUIDE-005: EXAMPLE: ADDING A "PDF TO HTML" TOOL
================================================================================

1. Copy template:
   cp template.html tools/pdf/pdf-to-html.html

2. Update <head>:
   <title>PDF to HTML | YOUROWNPDF.COM</title>
   <meta name="description" content="Convert PDF to HTML online. Free tool by YOUROWNPDF.COM">

3. Update breadcrumbs:
   <span class="breadcrumb-current">PDF to HTML</span>

4. Update tool header:
   <h1>📄 PDF to HTML</h1>
   <p>Convert PDF documents to HTML web pages</p>

5. Update upload area:
   <div>Drag & drop your PDF here</div>
   <input type="file" accept=".pdf">

6. Add settings (if needed):
   <select id="htmlMode">
     <option value="plain">Plain HTML</option>
     <option value="styled">Styled HTML</option>
   </select>

7. Implement JavaScript:
   - handleFile(): Load PDF file
   - processFile(): Extract text from PDF pages
   - downloadFile(): Download as .html file

8. Add CDN library:
   <script src="https://unpkg.com/pdf-lib@1.17.1/dist/pdf-lib.min.js"></script>

9. Test and verify:
   - Upload a PDF
   - Process converts PDF pages to HTML
   - Download produces HTML file
   - "yourownpdf-pdftohtml.html" as filename

================================================================================
GUIDE-010: CDN LIBRARY REQUIREMENTS
================================================================================

Common libraries used on YOUROWNPDF.COM:

PDF Processing:
---------------
pdf-lib: https://unpkg.com/pdf-lib@1.17.1/dist/pdf-lib.min.js
  Used for: PDF creation, modification, reading, merging, splitting, etc.

Image Processing:
----------------
All image tools use native HTML5 Canvas API - no external libraries needed.

ZIP Creation:
------------
JSZip: https://unpkg.com/jszip@3.10.1/dist/jszip.min.js
  Used for: Creating ZIP files from multiple files

Adding a library:
-----------------
1. Add in the TMP-011 section of your tool's HTML
2. Use loadPdfLib() helper function to load on-demand
3. Example:

<script src="https://unpkg.com/pdf-lib@1.17.1/dist/pdf-lib.min.js"></script>
<script>
  async function loadLibs() {
    if (typeof PDFLib === 'undefined') {
      await loadPdfLib();
    }
    // Now PDFLib is available
  }
</script>

================================================================================
GUIDE-015: HEAVY LIBRARY FIRST-TIME MODAL
================================================================================

When a user first uses a tool that requires a heavy library (like pdf-lib),
you may want to show a modal explaining that the library is being loaded
for the first time.

Implementation:
--------------
1. Check if library is already loaded:
   const isLoaded = typeof PDFLib !== 'undefined';

2. If not loaded, show info modal:
   if (!isLoaded) {
     showModal('Loading PDF library... This may take a moment on first use.', true);
   }

3. Load the library:
   await loadPdfLib();

4. Hide loading modal:
   closeModal();

Full example:
-------------
async function processFile() {
  showModal('Processing...', true);
  try {
    if (typeof PDFLib === 'undefined') {
      showModal('Loading PDF library...', true);
      await loadPdfLib();
      closeModal();
    }
    // Now process the PDF...
    const pdfDoc = await PDFLib.PDFDocument.load(arrayBuffer);
    // ... rest of processing
  } catch (e) {
    showModal('Error: ' + e.message, false, true);
  }
}

================================================================================
GUIDE-020: BRANDING REQUIREMENTS
================================================================================

Two-Color Branding:
------------------
YOUROWNPDF.COM uses a two-color branding system:
  - Primary color (Slate): #0f172a (logo-part-a)
  - Accent color (Crimson): #dc2626 (logo-part-b)

In HTML, use the span classes:
  <span class="logo-part-a">Your</span><span class="logo-part-a">pdf</span>
  <span class="logo-part-b">own</span><span class="logo-part-b">.com</span>

This renders as: Yourpdf own .com
  - "Your" + "pdf" in slate (#0f172a)
  - "own" + ".com" in crimson (#dc2626)

Where to use branding:
----------------------
1. Logo in header: Always use the span classes
2. Logo in footer: Always use the span classes
3. Page titles: Include in title tag and h1
4. How-to sections: Include in headings like "How to [tool] on YOUROWNPDF.COM"
5. Any other mention: Use the span classes for consistent branding

Branding in CSS:
----------------
Use CSS variable for the accent color:
  var(--color-b) = #dc2626 (Crimson)

Never hardcode #dc2626 directly - always use var(--color-b) for flexibility.

Logo example:
-------------
<a href="/" class="logo">
  <span class="logo-part-a">Your</span><span class="logo-part-a">pdf</span>
  <span class="logo-part-b">own</span><span class="logo-part-b">.com</span>
</a>

Clean URL Reminder:
------------------
Always use clean URLs without hashtags:
  - CORRECT: /tools/pdf/merge.html
  - WRONG:   /tools/pdf/#merge

This ensures proper routing and bookmarking support.

================================================================================
END OF DEVELOPER GUIDE
================================================================================

For questions or support, contact: support@yourownpdf.com