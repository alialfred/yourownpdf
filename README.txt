╔══════════════════════════════════════════════════════════════╗
║                                                              ║
║     YOUROWNPDF.COM - NEW TOOL CREATION GUIDE                 ║
║                                                              ║
╚══════════════════════════════════════════════════════════════╝

================================================================
HOW TO ADD A NEW TOOL TO YOUROWNPDF.COM
================================================================

Follow these 8 steps to add a new tool. Each step must be
completed in order. Total time: ~15-30 minutes per tool.



STEP 1: COPY THE TEMPLATE
----------------------------------------------------------------
1. Go to: /tools/template.html
2. Copy this file
3. Paste into the correct folder:
   - /tools/pdf/  (for PDF tools)
   - /tools/image/ (for image tools)
4. Rename the file (use lowercase, hyphens between words):
   
   Examples:
   ✅ merge-pdf.html
   ✅ remove-background.html
   ✅ jpg-to-png.html
   ✅ pdf-to-excel.html
   
   ❌ MergePDF.html (no camelCase)
   ❌ merge_pdf.html (underscores instead of hyphens)
   ❌ Merge PDF.html (no spaces)



STEP 2: CHOOSE YOUR ID PREFIX
----------------------------------------------------------------
Every tool gets a unique 3-letter ID prefix. Choose one that
makes sense for your tool:

   Examples:
   Merge PDF       → MRG
   Compress PDF    → CMP
   PDF to Word     → PTW
   Split PDF       → SPL
   JPG to PNG      → JTP
   Crop Image      → CRP
   Resize Image    → RSZ

   Your new tool prefix: ___ (Write yours here)

Use this prefix for ALL IDs in your new file:
   <!-- [XXX-001] Description -->
   <!-- [XXX-002] Description -->
   (Replace XXX with your 3-letter prefix)



STEP 3: REPLACE ALL PLACEHOLDERS IN THE TEMPLATE
----------------------------------------------------------------
Open your copied template file and replace these:

   [TMP-000] → [XXX-000] YOUR TOOL NAME
   TOOL_NAME → Your tool's display name (e.g., "Merge PDF")
   DESCRIPTION → One-line description
   KEYWORDS → Comma-separated keywords
   FILE_NAME → Your file name (e.g., "merge-pdf")
   CATEGORY → "pdf" or "image"
   SECTION_ID → "pdf-tools" or "image-tools"
   CATEGORY_NAME → "PDF" or "Image"
   SUPPORTED_FORMATS → e.g., "PDF files only"
   ACCEPTED_FILE_TYPES → e.g., "application/pdf" or "image/*"
   FEATURE_X → List 3-4 key features
   STEP_X_TITLE → Step title for how-to section
   STEP_X_DESCRIPTION → Step instructions
   STEP_X_IMAGE_DESCRIPTION → Alt text for step image
   RESULT.FORMAT → Output file extension (pdf, png, jpg, etc.)

   🎨 ICON: Choose gradient colors matching your tool:
   - Red/Pink: #E11D48, #F43F5E
   - Blue: #3B82F6, #60A5FA
   - Green: #10B981, #34D399
   - Purple: #8B5CF6, #A78BFA
   - Orange: #F97316, #FB923C
   - Teal: #14B8A6, #2DD4BF



STEP 4: ADD YOUR TOOL'S PROCESSING LOGIC
----------------------------------------------------------------
Find this section in the template:
   // ==========================================
   // ADD YOUR TOOL'S PROCESSING LOGIC HERE
   // ==========================================

Replace with your actual processing code. Common patterns:

   📄 For PDF tools:
   - Use pdf-lib library (already included in most tools)
   - Load with: await PDFLib.PDFDocument.load(arrayBuffer)
   - Save with: await pdfDoc.save()

   🖼️ For Image tools:
   - Use Canvas API
   - Load with: loadImageFromFile(file)
   - Draw with: ctx.drawImage()
   - Export with: canvas.toBlob()

   📦 For libraries:
   - Add CDN script in <head>
   - If no CDN: download to /js/libs/ and use local path
   - Document any first-time downloads



STEP 5: UPDATE DOWNLOAD FILENAME
----------------------------------------------------------------
Change the download filename to follow the pattern:
   yourownpdf-[action-description].[format]

   Examples:
   ✅ yourownpdf-merged.pdf
   ✅ yourownpdf-compressed.pdf
   ✅ yourownpdf-nobg.png
   ✅ yourownpdf-resized.png
   ✅ yourownpdf-converted.docx



STEP 6: ADD CARD TO index.html
----------------------------------------------------------------
1. Open /index.html
2. Find the correct section:
   - <!-- PDF Tools Grid --> for PDF tools
   - <!-- Image Tools Grid --> for image tools
3. Add a new card at the appropriate position (by popularity)
4. Use this card template:

   <!-- [IDX-XXX] Tool XX: TOOL_NAME -->
   <a href="tools/CATEGORY/FILE_NAME.html" class="tool-card">
       <div class="tool-card-icon">
           <div class="tool-3d-icon" style="background: linear-gradient(135deg, #COLOR1, #COLOR2); color: white;">ICON_EMOJI</div>
       </div>
       <span class="tool-card-title">TOOL_NAME</span>
       <span class="tool-card-subtitle">yourownpdf.com</span>
   </a>

5. Replace:
   - IDX-XXX with next available ID number
   - Tool XX with correct tool number
   - CATEGORY with "pdf" or "image"
   - FILE_NAME with your file name
   - COLOR1, COLOR2 with gradient colors
   - ICON_EMOJI with relevant emoji
   - TOOL_NAME with display name



STEP 7: UPDATE IDs AND COMMENTS
----------------------------------------------------------------
1. Replace all remaining [TMP-XXX] with your [XXX-XXX] IDs
2. Number sequentially starting from [XXX-001]
3. Ensure NO ID repeats within your file
4. Check that IDs match your 3-letter prefix
5. Add comments above functions explaining what they do



STEP 8: TEST YOUR TOOL
----------------------------------------------------------------
Before considering it complete, test these:

   ✅ File upload works (click and drag-drop)
   ✅ Processing completes without errors
   ✅ Progress bar shows during processing
   ✅ Download button works
   ✅ Downloaded file has correct name (yourownpdf-...)
   ✅ Downloaded file opens correctly
   ✅ Success dialog appears after completion
   ✅ Error dialog appears for invalid files
   ✅ Smart buttons enable/disable correctly
   ✅ Works in both light and dark mode
   ✅ Works on mobile view
   ✅ Breadcrumbs are correct
   ✅ YOUROWNPDF branding appears naturally



================================================================
COMMON ISSUES & SOLUTIONS
================================================================

Q: "The library I need isn't on CDN"
A: Download the .js file and place it in /js/libs/
   Then add: <script src="../../js/libs/my-library.js"></script>
   In your README, note: "Requires my-library.js in /js/libs/"

Q: "My tool needs to download a large model first"
A: Follow the pattern in remove-background.html:
   1. Check localStorage for 'model-downloaded' flag
   2. If not found, show modal explaining the download
   3. Show progress bar during download
   4. Save flag when complete
   5. Store model in IndexedDB or Cache API

Q: "How do I handle multiple file selection?"
A: Add 'multiple' attribute to the file input:
   <input type="file" ... multiple>
   Then handle the array of files in your handler.

Q: "My tool needs specific file validation"
A: Add validation in handleDroppedFiles() or handleFileSelect():
   if (!file.type.match(/allowed-types/)) {
       showNotification('⚠️ Invalid file type');
       return;
   }

Q: "How do I position my tool card correctly in index.html?"
A: Tools are ordered by popularity. New tools should be
   added near the end of their section, unless they are
   particularly popular. Check current order and insert
   at the appropriate position.



================================================================
QUICK REFERENCE: FILE STRUCTURE
================================================================
/yourpdf/
  ├── index.html          ← Add card here (Step 6)
  ├── /tools/
  │   ├── template.html   ← Copy this (Step 1)
  │   ├── /pdf/           ← PDF tools go here
  │   └── /image/         ← Image tools go here
  ├── /css/
  │   └── style.css       ← Add CSS classes if needed
  ├── /js/
  │   ├── main.js         ← Add utility functions if needed
  │   ├── components.js   ← Add to header/footer if needed
  │   └── /libs/          ← Manual library downloads



================================================================
CHECKLIST BEFORE PUBLISHING
================================================================
Before making your tool live, verify:

   [ ] Template copied and renamed correctly
   [ ] 3-letter ID prefix chosen and used everywhere
   [ ] All [TMP-XXX] placeholders replaced
   [ ] SEO meta tags updated (title, description, keywords)
   [ ] Canonical URL is correct
   [ ] 3D icon has proper gradient colors
   [ ] Upload box accepts correct file types
   [ ] Processing logic works (test 3+ files)
   [ ] Progress bar displays correctly
   [ ] Download filename follows yourownpdf-*.format pattern
   [ ] Success dialog appears with YOUROWNPDF branding
   [ ] Error handling works for invalid files
   [ ] How-to section has 3 clear steps
   [ ] Features list is accurate
   [ ] Card added to index.html
   [ ] New IDs don't conflict with existing ones
   [ ] Tested on desktop and mobile
   [ ] Tested in light and dark mode
   [ ] Breadcrumbs navigate correctly
   [ ] No console errors



================================================================
YOUROWNPDF.COM - Build something great! 🚀
================================================================
For help: Add comments in your code or contact the team.
Remember: All tools must run 100% in the browser.
No file uploads. No server processing.
================================================================