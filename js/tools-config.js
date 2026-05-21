// TC-001: Tools Configuration - Tool Status & Related Tools Mapping

window.YOUROWNPDF = window.YOUROWNPDF || {};

// ============================================================
// 🛠️ TOOL STATUS CONFIG
// ============================================================
// Uncomment a line  → tool is WORKING (no overlay)
// Comment out a line → tool shows "🔜 Coming Soon" overlay
// Simply edit this array and refresh the page!
// ============================================================
window.YOUROWNPDF.workingTools = [
  // --- PDF Tools ---        
  "Merge PDF",                // ✅ Working
  "Compress PDF",             // ✅ Working
  "JPG to PDF",               // ✅ Working
  "PDF to Word",               // ✅ Working
  "Split PDF",               // ✅ Working
  "PDF to JPG",                // ✅ Working
  "PDF to PNG",               // ✅ Working
  "Rotate PDF",               // ✅ Working
  // "Protect PDF",
  // "Unlock PDF",
  "Organize PDF",             // ✅ Working
  // "PPT to PDF",✅ not Working
  // "Extract Pages",
  // "Remove Pages",
  // "PDF to Excel",
  // "Add Watermark",
  // "Add Page Numbers",
  // "Repair PDF",
  // "Compare PDFs",
  // "PDF to PowerPoint",
  // "PDF to Text",
  // "PDF to HTML",
  // "Flatten PDF",
  // "Extract Images",
  // "Sign PDF",
  // "Annotate PDF",
  // "Crop PDF",
  // "Resize PDF",
  // "PDF to Images",
  // "Merge with Options",
  // "Compress Options",
  // "Rotate All Pages",
  // "Reverse Pages",
  // "Extract Text Only",
  // "Optimize PDF",
  // "Convert to PDF/A",
  // "PDF to Email",
  // "Redact PDF",
  // "Fill PDF Form",
  // "Create PDF Form",
  // "Add Bookmarks",
  // "Extract Links",
  // "HTML to PDF",
  // "PDF Reviews",
  // "Encrypt PDF",
  // "Decrypt PDF",
  // "Digital Signature",
  // "Timestamp",
  // "PDF to XPS",
  // "PDF to SVG",
  // "PDF to RTF",
  // "PDF to EPUB",
  // "PDF to TXT",
  // "PDF to TIFF",
  // "PDF to BMP",
  // "PDF to GIF",
  // "Merge 2 PDFs",
  // "Merge 3 PDFs",
  // "Merge 4 PDFs",
  // "Merge 5 PDFs",
  // "Split into 2",
  // "Split into 3",
  // "Split into 4",
  // "Split by Range",
  // "Split Every N",
  // "Extract First Page",
  // "Extract Last Page",
  // "Extract Odd Pages",
  // "Extract Even Pages",
  // "Delete First Page",
  // "Delete Last Page",
  // "Remove Blank Pages",
  // "Remove Duplicates",
  // "Reorder Pages",

  // --- Image Tools ---
  "Compress Image",             // ✅ Working
  "Resize Image",             // ✅ Working
  "Crop Image",               // ✅ Working
  // "Rotate Image",
  // "JPG to PNG",
  // "PNG to JPG",
  // "Image to PDF",
  // "Remove Background",
  // "Flip Image",
  // "Grayscale",
  // "Adjust Brightness",
  // "Adjust Contrast",
  // "Blur Image",
  // "Sharpen Image",
  // "WebP to JPG",
  // "GIF to PNG",
  // "Apply Filter",
  // "Invert Colors",
  // "Adjust Saturation",
  // "Text Overlay",
];

// ============================================================
// Related Tools Mapping
// ============================================================

window.YOUROWNPDF.RelatedTools = {
  // PDF Tools
  'merge-pdf': ['compress-pdf', 'pdf-to-word'],
  'compress-pdf': ['merge-pdf', 'pdf-to-jpg'],
  'split-pdf': ['merge-pdf', 'extract-pages-pdf'],
  'rotate-pdf': ['pdf-to-jpg', 'organize-pdf'],
  'protect-pdf': ['unlock-pdf', 'pdf-to-word'],
  'unlock-pdf': ['protect-pdf', 'merge-pdf'],
  'organize-pdf': ['merge-pdf', 'split-pdf'],
  'ppt-to-pdf': ['pdf-to-word', 'compress-pdf'],
  'repair-pdf': ['compress-pdf', 'pdf-to-word'],
  'compare-pdf': ['pdf-to-word', 'merge-pdf'],
  'watermark-pdf': ['page-numbers-pdf', 'compress-pdf'],
  'page-numbers-pdf': ['watermark-pdf', 'extract-pages-pdf'],
  'extract-pdf': ['split-pdf', 'pdf-to-jpg'],
  'remove-pages-pdf': ['split-pdf', 'extract-pdf'],
  'extract-images-pdf': ['pdf-to-jpg', 'compress-image'],
  'pdf-to-jpg': ['pdf-to-png', 'compress-image'],
  'pdf-to-png': ['pdf-to-jpg', 'image-to-pdf'],
  'pdf-to-word': ['pdf-to-excel', 'pdf-to-ppt'],
  'pdf-to-excel': ['pdf-to-word', 'pdf-to-ppt'],
  'pdf-to-ppt': ['pdf-to-word', 'pdf-to-excel'],
  'pdf-to-text': ['pdf-to-word', 'pdf-to-html'],
  'pdf-to-html': ['pdf-to-text', 'pdf-to-word'],
  'pdf-to-images': ['pdf-to-jpg', 'extract-images-pdf'],
  'pdf-margin': ['compress-pdf', 'rotate-pdf'],

  // Image Tools
  'compress-image': ['resize-image', 'image-to-pdf'],
  'resize-image': ['compress-image', 'crop-image'],
  'crop-image': ['resize-image', 'rotate-image'],
  'rotate-image': ['flip-image', 'resize-image'],
  'flip-image': ['rotate-image', 'grayscale-image'],
  'filter-image': ['brightness-image', 'contrast-image'],
  'brightness-image': ['contrast-image', 'blur-image'],
  'contrast-image': ['brightness-image', 'sharpen-image'],
  'grayscale-image': ['invert-image', 'filter-image'],
  'invert-image': ['grayscale-image', 'filter-image'],
  'blur-image': ['sharpen-image', 'brightness-image'],
  'sharpen-image': ['blur-image', 'contrast-image'],
  'remove-background': ['resize-image', 'image-to-pdf'],
  'image-to-pdf': ['compress-image', 'pdf-to-jpg'],
  'jpg-to-pdf': ['compress-image', 'merge-pdf'],
  'jpg-to-png': ['png-to-jpg', 'webp-to-jpg'],
  'png-to-jpg': ['jpg-to-png', 'webp-to-jpg'],
  'webp-to-jpg': ['jpg-to-png', 'png-to-jpg'],
  'gif-to-png': ['jpg-to-png', 'png-to-jpg'],
  'ico-converter': ['png-to-jpg', 'jpg-to-png'],
  'base64-encode': ['image-to-pdf', 'compress-image'],

  // Default fallback
  'default': ['merge-pdf', 'compress-pdf']
};

// TC-002: Tool data - name, icon, category for each tool
window.YOUROWNPDF.ToolData = {
  'merge-pdf': { name: 'Merge PDF', icon: '📑', category: 'pdf' },
  'compress-pdf': { name: 'Compress PDF', icon: '🗜️', category: 'pdf' },
  'split-pdf': { name: 'Split PDF', icon: '✂️', category: 'pdf' },
  'rotate-pdf': { name: 'Rotate PDF', icon: '🔄', category: 'pdf' },
  'protect-pdf': { name: 'Protect PDF', icon: '🔒', category: 'pdf' },
  'unlock-pdf': { name: 'Unlock PDF', icon: '🔓', category: 'pdf' },
  'organize-pdf': { name: 'Organize PDF', icon: '📂', category: 'pdf' },
  'ppt-to-pdf': { name: 'PPT to PDF', icon: '📽️', category: 'pdf' },
  'repair-pdf': { name: 'Repair PDF', icon: '🔧', category: 'pdf' },
  'compare-pdf': { name: 'Compare PDF', icon: '📊', category: 'pdf' },
  'watermark-pdf': { name: 'Watermark PDF', icon: '💧', category: 'pdf' },
  'page-numbers-pdf': { name: 'Page Numbers', icon: '123', category: 'pdf' },
  'extract-pdf': { name: 'Extract PDF', icon: '📤', category: 'pdf' },
  'remove-pages-pdf': { name: 'Remove Pages', icon: '🗑️', category: 'pdf' },
  'extract-images-pdf': { name: 'Extract Images', icon: '🖼️', category: 'pdf' },
  'pdf-to-jpg': { name: 'PDF to JPG', icon: '🖼️', category: 'pdf' },
  'pdf-to-png': { name: 'PDF to PNG', icon: '🎨', category: 'pdf' },
  'pdf-to-word': { name: 'PDF to Word', icon: '📝', category: 'pdf' },
  'pdf-to-excel': { name: 'PDF to Excel', icon: '📊', category: 'pdf' },
  'pdf-to-ppt': { name: 'PDF to PPT', icon: '📽️', category: 'pdf' },
  'pdf-to-text': { name: 'PDF to Text', icon: '📃', category: 'pdf' },
  'pdf-to-html': { name: 'PDF to HTML', icon: '🌐', category: 'pdf' },
  'pdf-to-images': { name: 'PDF to Images', icon: '🖼️', category: 'pdf' },
  'pdf-margin': { name: 'PDF Margin', icon: '📐', category: 'pdf' },
  'jpg-to-pdf': { name: 'JPG to PDF', icon: '📄', category: 'image' },

  // Image Tools
  'compress-image': { name: 'Compress Image', icon: '🗜️', category: 'image' },
  'resize-image': { name: 'Resize Image', icon: '📏', category: 'image' },
  'crop-image': { name: 'Crop Image', icon: '✂️', category: 'image' },
  'rotate-image': { name: 'Rotate Image', icon: '🔄', category: 'image' },
  'flip-image': { name: 'Flip Image', icon: '↔️', category: 'image' },
  'filter-image': { name: 'Filter Image', icon: '🎭', category: 'image' },
  'brightness-image': { name: 'Brightness', icon: '☀️', category: 'image' },
  'contrast-image': { name: 'Contrast', icon: '◐', category: 'image' },
  'grayscale-image': { name: 'Grayscale', icon: '⚫', category: 'image' },
  'invert-image': { name: 'Invert', icon: '🔃', category: 'image' },
  'blur-image': { name: 'Blur', icon: '🌫️', category: 'image' },
  'sharpen-image': { name: 'Sharpen', icon: '🔪', category: 'image' },
  'remove-background': { name: 'Remove BG', icon: '🎯', category: 'image' },
  'image-to-pdf': { name: 'Image to PDF', icon: '📄', category: 'image' },
  'jpg-to-png': { name: 'JPG to PNG', icon: '🔄', category: 'image' },
  'png-to-jpg': { name: 'PNG to JPG', icon: '🔄', category: 'image' },
  'webp-to-jpg': { name: 'WEBP to JPG', icon: '🔄', category: 'image' },
  'gif-to-png': { name: 'GIF to PNG', icon: '🔄', category: 'image' },
  'ico-converter': { name: 'ICO Converter', icon: '🖿', category: 'image' },
  'base64-encode': { name: 'Base64 Encode', icon: '🔤', category: 'image' }
};

// TC-003: Get current tool page filename
window.YOUROWNPDF.RelatedTools.getCurrentTool = function () {
  let path = window.location.pathname;

  // Handle local file routing
  if (path.includes('index.html') || path.startsWith('/D:/') || path === '' || path === '/') {
    path = '/index.html';
  }

  // Extract just the filename without .html
  let filename = path.split('/').pop().replace('.html', '');

  // If empty, try to get from the last segment
  if (!filename || filename === 'index.html' || filename === '/') {
    // Check if this is a tool page by looking at the URL pattern
    const urlParts = path.split('/').filter(p => p);
    filename = urlParts[urlParts.length - 1] || 'merge-pdf';
  }

  console.log('Current tool filename:', filename, 'path:', path);
  return filename || 'merge-pdf';
};

// TC-004: Get related tools for current page
window.YOUROWNPDF.RelatedTools.getRelated = function () {
  const currentTool = this.getCurrentTool();
  const related = this[currentTool] || this['default'];
  return related.map(toolId => {
    const toolData = this.ToolData[toolId];
    if (toolData) {
      return { ...toolData, id: toolId };
    }
    return null;
  }).filter(Boolean);
};

// TC-005: Render related tools HTML
window.YOUROWNPDF.RelatedTools.render = function (containerId, explicitToolId) {
  const container = document.getElementById(containerId);
  if (!container) {
    console.log('Container not found:', containerId);
    return;
  }

  // Use explicit tool ID if provided, otherwise auto-detect
  const currentTool = explicitToolId || this.getCurrentTool();
  console.log('Current tool:', currentTool);

  // Get related tools config for this tool
  const relatedToolIds = this[currentTool] || this['default'];
  console.log('Related tool IDs:', relatedToolIds);

  if (!relatedToolIds || relatedToolIds.length === 0) {
    console.log('No related tools configured');
    return;
  }

  // Map tool IDs to tool data
  const relatedTools = relatedToolIds.map(toolId => {
    const toolData = this.ToolData[toolId];
    if (toolData) {
      return { ...toolData, id: toolId };
    }
    return null;
  }).filter(Boolean);

  console.log('Related tools:', relatedTools);

  if (relatedTools.length === 0) {
    return;
  }

  container.innerHTML = relatedTools.map(tool => `
    <a href="/tools/${tool.category}/${tool.id}" class="tool-card" data-tool-name="${tool.name}" onclick="event.preventDefault(); navigateTo('/tools/${tool.category}/${tool.id}')">
      <div class="tool-card-icon">${tool.icon}</div>
      <div class="tool-card-title">${tool.name}</div>
      <div class="tool-card-desc">Free online tool</div>
    </a>
  `).join('');

  console.log('Rendered', relatedTools.length, 'tools');
};

// Helper to get tool ID from name (for ToolData keys)
function getToolIdFromName(name) {
  const map = {
    'Merge PDF': 'merge-pdf',
    'Compress PDF': 'compress-pdf',
    'Split PDF': 'split-pdf',
    'Rotate PDF': 'rotate-pdf',
    'Protect PDF': 'protect-pdf',
    'Unlock PDF': 'unlock-pdf',
    'Organize PDF': 'organize-pdf',
    'PPT to PDF': 'ppt-to-pdf',
    'Repair PDF': 'repair-pdf',
    'Compare PDF': 'compare-pdf',
    'Watermark PDF': 'watermark-pdf',
    'Page Numbers': 'page-numbers-pdf',
    'Extract PDF': 'extract-pdf',
    'Remove Pages': 'remove-pages-pdf',
    'Extract Images': 'extract-images-pdf',
    'PDF to JPG': 'pdf-to-jpg',
    'PDF to PNG': 'pdf-to-png',
    'PDF to Word': 'pdf-to-word',
    'PDF to Excel': 'pdf-to-excel',
    'PDF to PPT': 'pdf-to-ppt',
    'PDF to Text': 'pdf-to-text',
    'PDF to HTML': 'pdf-to-html',
    'PDF to Images': 'pdf-to-images',
    'PDF Margin': 'pdf-margin',
    'JPG to PDF': 'jpg-to-pdf',
    'Compress Image': 'compress-image',
    'Resize Image': 'resize-image',
    'Crop Image': 'crop-image',
    'Rotate Image': 'rotate-image',
    'Flip Image': 'flip-image',
    'Filter Image': 'filter-image',
    'Brightness': 'brightness-image',
    'Contrast': 'contrast-image',
    'Grayscale': 'grayscale-image',
    'Invert': 'invert-image',
    'Blur': 'blur-image',
    'Sharpen': 'sharpen-image',
    'Remove BG': 'remove-background',
    'Image to PDF': 'image-to-pdf',
    'JPG to PNG': 'jpg-to-png',
    'PNG to JPG': 'png-to-jpg',
    'WEBP to JPG': 'webp-to-jpg',
    'GIF to PNG': 'gif-to-png',
    'ICO Converter': 'ico-converter',
    'Base64 Encode': 'base64-encode'
  };
  return map[name] || 'merge-pdf';
}