/* ============================================================
   YOUROWNPDF.COM - FILE ACTIONS SYSTEM
   Centralized button management for ALL tools
   ID Range: FA-001 to FA-050
   ============================================================ */

// ============================================================
// [FA-001] CORE STATE MANAGEMENT
// ============================================================

/**
 * [FA-002] Create a file manager for a tool
 * @param {string} toolId - Unique ID for this tool instance
 * @param {object} options - Configuration options
 * @returns {object} File manager API
 */
function createFileManager(toolId, options = {}) {
    const defaults = {
        maxFiles: 1,              // 1 = single file, 0 = unlimited
        acceptedTypes: '*/*',     // e.g., 'application/pdf' or 'image/*'
        maxFileSize: 100 * 1024 * 1024, // 100MB default
        showPreview: false,
        onFilesSelected: null,
        onFilesRemoved: null,
        onProcessStart: null,
        onProcessComplete: null,
        onError: null,
        uploadBoxId: `${toolId}-upload-box`,
        processBtnId: `${toolId}-process-btn`,
        downloadBtnId: `${toolId}-download-btn`,
        removeBtnId: `${toolId}-remove-btn`,
        clearBtnId: `${toolId}-clear-btn`,
        retryBtnId: `${toolId}-retry-btn`,
        cancelBtnId: `${toolId}-cancel-btn`,
        addMoreBtnId: `${toolId}-add-more-btn`,
    };
    
    const config = { ...defaults, ...options };
    
    // [FA-003] Internal state
    const state = {
        files: [],
        resultBlobs: [],
        isProcessing: false,
        isComplete: false,
        hasError: false,
        abortController: null,
    };
    
    // [FA-004] Cache DOM elements
    const elements = {};
    
    function getElement(id) {
        if (!elements[id]) {
            elements[id] = document.getElementById(id);
        }
        return elements[id];
    }
    
    // ============================================================
    // [FA-005] FILE SELECTION
    // ============================================================
    
    /**
     * [FA-006] Handle file selection from input or drop
     */
    function addFiles(newFiles) {
        if (state.isProcessing) {
            showNotification('⚠️ Please wait for current processing to finish — YOUROWNPDF.COM');
            return;
        }
        
        // Filter by accepted types
        let validFiles = Array.from(newFiles).filter(file => {
            if (config.acceptedTypes !== '*/*') {
                if (config.acceptedTypes.includes('/')) {
                    const [category, ext] = config.acceptedTypes.split('/');
                    if (ext !== '*' && !file.type.match(config.acceptedTypes)) {
                        return file.name.toLowerCase().endsWith('.' + ext);
                    }
                    return file.type.match(config.acceptedTypes);
                }
            }
            return true;
        });
        
        // Check file size
        validFiles = validFiles.filter(file => {
            if (file.size > config.maxFileSize) {
                showNotification(`⚠️ "${file.name}" exceeds max size of ${formatFileSize(config.maxFileSize)} — YOUROWNPDF.COM`);
                return false;
            }
            return true;
        });
        
        if (validFiles.length === 0) {
            if (newFiles.length > 0) {
                showNotification('⚠️ No valid files selected. Please check file types — YOUROWNPDF.COM');
            }
            return;
        }
        
        // Check max files limit
        if (config.maxFiles === 1) {
            // Single file mode - replace
            state.files = [validFiles[0]];
        } else if (config.maxFiles > 0 && (state.files.length + validFiles.length) > config.maxFiles) {
            showNotification(`⚠️ Maximum ${config.maxFiles} files allowed — YOUROWNPDF.COM`);
            return;
        } else {
            // Add to existing
            state.files = [...state.files, ...validFiles];
        }
        
        // Reset processing state
        state.resultBlobs = [];
        state.isComplete = false;
        state.hasError = false;
        
        // Update UI
        updateUI();
        
        // Callback
        if (typeof config.onFilesSelected === 'function') {
            config.onFilesSelected(state.files);
        }
    }
    
    /**
     * [FA-007] Remove a single file by index
     */
    function removeFile(index) {
        if (state.isProcessing) {
            showNotification('⚠️ Processing in progress. Cancel first — YOUROWNPDF.COM');
            return;
        }
        
        const removedFile = state.files[index];
        state.files.splice(index, 1);
        state.resultBlobs = [];
        state.isComplete = false;
        state.hasError = false;
        
        updateUI();
        
        if (typeof config.onFilesRemoved === 'function') {
            config.onFilesRemoved(removedFile, state.files);
        }
    }
    
    /**
     * [FA-008] Clear all files
     */
    function clearAllFiles() {
        if (state.isProcessing) {
            cancelProcessing();
        }
        
        const oldFiles = [...state.files];
        state.files = [];
        state.resultBlobs = [];
        state.isComplete = false;
        state.hasError = false;
        
        updateUI();
        
        if (typeof config.onFilesRemoved === 'function') {
            config.onFilesRemoved(null, []);
        }
        
        showNotification('🗑️ All files cleared — YOUROWNPDF.COM');
    }
    
    // ============================================================
    // [FA-009] UI UPDATES
    // ============================================================
    
    /**
     * [FA-010] Update all button states and displays
     */
    function updateUI() {
        updateUploadBox();
        updateFileListDisplay();
        updateButtonStates();
        updateDownloadArea();
    }
    
    /**
     * [FA-011] Update upload box display
     */
    function updateUploadBox() {
        const uploadBox = getElement(config.uploadBoxId);
        if (!uploadBox) return;
        
        if (state.files.length > 0) {
            uploadBox.classList.add('has-file');
            const iconEl = uploadBox.querySelector('.upload-icon');
            const textEl = uploadBox.querySelector('.upload-text');
            const hintEl = uploadBox.querySelector('.upload-hint');
            
            if (iconEl) iconEl.textContent = state.files.length > 1 ? '📚' : '📄';
            if (textEl) textEl.textContent = state.files.length === 1 
                ? state.files[0].name 
                : `${state.files.length} files selected`;
            if (hintEl) hintEl.textContent = formatFileSize(
                state.files.reduce((sum, f) => sum + f.size, 0)
            );
            
            // Add badge for multiple files
            removeBadge(uploadBox);
            if (state.files.length > 1) {
                addBadge(uploadBox, state.files.length);
            }
        } else {
            uploadBox.classList.remove('has-file');
            const iconEl = uploadBox.querySelector('.upload-icon');
            const textEl = uploadBox.querySelector('.upload-text');
            const hintEl = uploadBox.querySelector('.upload-hint');
            
            if (iconEl) iconEl.textContent = '📁';
            if (textEl) textEl.textContent = 'Drag & Drop files here';
            if (hintEl) hintEl.textContent = 'or click to select';
            
            removeBadge(uploadBox);
        }
    }
    
    /**
     * [FA-012] Update file list display (if custom container exists)
     */
    function updateFileListDisplay() {
        const listContainer = getElement(`${config.uploadBoxId}-list`);
        if (!listContainer) return;
        
        if (state.files.length === 0) {
            listContainer.style.display = 'none';
            return;
        }
        
        listContainer.style.display = 'block';
        listContainer.innerHTML = state.files.map((file, index) => `
            <div class="file-display-item" style="
                display: flex;
                align-items: center;
                gap: 0.75rem;
                padding: 0.6rem 0.75rem;
                background: var(--bg-tertiary);
                border-radius: var(--radius-sm);
                margin-bottom: 0.35rem;
            ">
                <span style="font-size: 1.3rem;">📄</span>
                <span style="flex: 1; font-size: 0.9rem; color: var(--text-primary); overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${file.name}</span>
                <span style="font-size: 0.75rem; color: var(--text-tertiary); white-space: nowrap;">${formatFileSize(file.size)}</span>
                ${config.maxFiles !== 1 ? `
                    <button onclick="fileManager_${toolId}.removeFile(${index})" 
                            style="background: none; border: none; cursor: pointer; font-size: 1rem; color: var(--color-error); padding: 0.25rem;"
                            title="Remove file">
                        ✕
                    </button>
                ` : ''}
            </div>
        `).join('');
    }
    
    /**
     * [FA-013] Update all button enable/disable states
     */
    function updateButtonStates() {
        const hasFiles = state.files.length > 0;
        const isProcessing = state.isProcessing;
        const isComplete = state.isComplete;
        const hasError = state.hasError;
        
        // Process button
        updateButton(config.processBtnId, {
            disabled: !hasFiles || isProcessing,
            text: isProcessing ? '⏳ Processing...' : '🛠️ Process',
            visible: !isComplete && !hasError,
        });
        
        // Remove button (single file)
        updateButton(config.removeBtnId, {
            disabled: !hasFiles || isProcessing,
            visible: hasFiles && config.maxFiles === 1,
        });
        
        // Clear all button (multiple files)
        updateButton(config.clearBtnId, {
            disabled: !hasFiles || isProcessing,
            visible: hasFiles && config.maxFiles !== 1,
        });
        
        // Add more button (multiple files)
        updateButton(config.addMoreBtnId, {
            disabled: isProcessing,
            visible: config.maxFiles !== 1,
        });
        
        // Download button
        updateButton(config.downloadBtnId, {
            disabled: !isComplete,
            visible: isComplete && !hasError,
        });
        
        // Retry button
        updateButton(config.retryBtnId, {
            disabled: false,
            visible: hasError,
        });
        
        // Cancel button
        updateButton(config.cancelBtnId, {
            disabled: !isProcessing,
            visible: isProcessing,
        });
    }
    
    /**
     * [FA-014] Update individual button
     */
    function updateButton(buttonId, options) {
        if (!buttonId) return;
        const btn = getElement(buttonId);
        if (!btn) return;
        
        if (options.visible !== undefined) {
            btn.style.display = options.visible ? '' : 'none';
        }
        if (options.disabled !== undefined) {
            if (options.disabled) {
                disableButton(buttonId);
            } else {
                enableButton(buttonId);
            }
        }
        if (options.text && !btn.disabled) {
            btn.textContent = options.text;
        }
    }
    
    /**
     * [FA-015] Update download area
     */
    function updateDownloadArea() {
        const downloadArea = getElement(`${toolId}-download-area`);
        if (!downloadArea) return;
        
        if (state.isComplete && state.resultBlobs.length > 0) {
            downloadArea.style.display = 'block';
            
            const filenameEl = document.getElementById(`${toolId}-download-filename`);
            if (filenameEl) {
                const blob = state.resultBlobs[0];
                filenameEl.textContent = `yourownpdf-result (${formatFileSize(blob.size)})`;
            }
        } else {
            downloadArea.style.display = 'none';
        }
    }
    
    // ============================================================
    // [FA-016] PROCESSING
    // ============================================================
    
    /**
     * [FA-017] Start processing with progress tracking
     */
    async function startProcessing(processFunction) {
        if (state.files.length === 0) {
            if (typeof config.onError === 'function') {
                config.onError('No files selected');
            }
            return;
        }
        
        state.isProcessing = true;
        state.isComplete = false;
        state.hasError = false;
        state.abortController = new AbortController();
        
        updateUI();
        
        if (typeof config.onProcessStart === 'function') {
            config.onProcessStart(state.files);
        }
        
        // Show progress
        const progressArea = getElement(`${toolId}-progress-area`);
        if (progressArea) progressArea.style.display = 'block';
        const progressBar = createProgressBar(`${toolId}-progress-area`);
        
        try {
            if (progressBar) progressBar.update(10, 'Starting...');
            
            // Execute the tool's processing function
            const result = await processFunction({
                files: state.files,
                updateProgress: (percent, message) => {
                    if (progressBar) progressBar.update(percent, message);
                },
                signal: state.abortController.signal,
            });
            
            state.resultBlobs = Array.isArray(result) ? result : [result];
            state.isProcessing = false;
            state.isComplete = true;
            state.hasError = false;
            
            if (progressBar) progressBar.complete('✅ Complete!');
            
            updateUI();
            
            if (typeof config.onProcessComplete === 'function') {
                config.onProcessComplete(state.resultBlobs);
            }
            
            // Show success dialog
            showSuccessDialog(
                'Your file has been processed successfully!',
                '⬇ Download Now',
                () => downloadResults()
            );
            
        } catch (error) {
            if (error.name === 'AbortError') {
                // User cancelled
                if (progressBar) progressBar.complete('⏹️ Cancelled');
                showNotification('⏹️ Processing cancelled — YOUROWNPDF.COM');
            } else {
                console.error('Processing error:', error);
                state.isProcessing = false;
                state.hasError = true;
                
                if (progressBar) progressBar.update(0, '❌ Error');
                
                updateUI();
                
                if (typeof config.onError === 'function') {
                    config.onError(error.message || 'Unknown error');
                }
                
                showErrorDialog(
                    error.message || 'Failed to process file. Please try again.',
                    '🔄 Retry',
                    () => startProcessing(processFunction)
                );
            }
        }
        
        state.isProcessing = false;
        state.abortController = null;
        updateUI();
    }
    
    /**
     * [FA-018] Cancel current processing
     */
    function cancelProcessing() {
        if (state.abortController) {
            state.abortController.abort();
        }
    }
    
    // ============================================================
    // [FA-019] DOWNLOAD
    // ============================================================
    
    /**
     * [FA-020] Download all results
     */
    function downloadResults() {
        if (state.resultBlobs.length === 0) {
            showErrorDialog('No results to download.');
            return;
        }
        
        if (state.resultBlobs.length === 1) {
            // Single file download
            downloadFile(state.resultBlobs[0], 'yourownpdf-result');
        } else {
            // Multiple files - create ZIP
            createAndDownloadZip(state.resultBlobs, 'yourownpdf-results.zip');
        }
        
        showNotification('✅ Download started! Thank you for using YOUROWNPDF.COM', 3000);
    }
    
    /**
     * [FA-021] Create ZIP from multiple blobs
     */
    async function createAndDownloadZip(blobs, zipFilename) {
        try {
            const zip = new JSZip();
            blobs.forEach((blob, index) => {
                zip.file(`yourownpdf-file-${index + 1}`, blob);
            });
            const zipBlob = await zip.generateAsync({ type: 'blob' });
            downloadFile(zipBlob, zipFilename);
        } catch (error) {
            // If JSZip not available, download individually
            blobs.forEach((blob, index) => {
                downloadFile(blob, `yourownpdf-file-${index + 1}`);
            });
        }
    }
    
    // ============================================================
    // [FA-022] BADGE MANAGEMENT
    // ============================================================
    
    /**
     * [FA-023] Add count badge to upload box
     */
    function addBadge(container, count) {
        removeBadge(container);
        const badge = document.createElement('span');
        badge.className = 'file-count-badge no-select';
        badge.style.cssText = `
            position: absolute;
            top: 10px;
            right: 10px;
            background: var(--color-accent);
            color: white;
            width: 28px;
            height: 28px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 700;
            font-size: 0.85rem;
            z-index: 10;
        `;
        badge.textContent = count > 99 ? '99+' : count;
        container.style.position = 'relative';
        container.appendChild(badge);
    }
    
    /**
     * [FA-024] Remove badge from container
     */
    function removeBadge(container) {
        const badge = container.querySelector('.file-count-badge');
        if (badge) badge.remove();
    }
    
    // ============================================================
    // [FA-025] PUBLIC API
    // ============================================================
    
    const api = {
        addFiles,
        removeFile,
        clearAllFiles,
        startProcessing,
        cancelProcessing,
        downloadResults,
        updateUI,
        getState: () => ({ ...state }),
        getFiles: () => [...state.files],
        getResults: () => [...state.resultBlobs],
    };
    
    // [FA-026] Store reference globally for inline handlers
    window[`fileManager_${toolId}`] = api;
    
    return api;
}

// ============================================================
// [FA-027] QUICK SETUP FUNCTION
// ============================================================

/**
 * [FA-028] Quick setup for a simple single-file tool
 * Automatically sets up upload box, buttons, and handlers
 */
function setupSimpleTool(config) {
    const {
        toolId,
        uploadBoxId = `${toolId}-upload-box`,
        processBtnId = `${toolId}-process-btn`,
        downloadBtnId = `${toolId}-download-btn`,
        removeBtnId = `${toolId}-remove-btn`,
        downloadAreaId = `${toolId}-download-area`,
        progressAreaId = `${toolId}-progress-area`,
        acceptedTypes = '*/*',
        maxFileSize = 100 * 1024 * 1024,
        processFunction,
        onFileSelected,
    } = config;
    
    // Create file manager
    const manager = createFileManager(toolId, {
        maxFiles: 1,
        acceptedTypes,
        maxFileSize,
        uploadBoxId,
        processBtnId,
        downloadBtnId,
        removeBtnId,
        onFilesSelected: (files) => {
            if (files.length > 0 && typeof onFileSelected === 'function') {
                onFileSelected(files[0]);
            }
        },
        onFilesRemoved: () => {
            // Hide download area
            const downloadArea = document.getElementById(downloadAreaId);
            if (downloadArea) downloadArea.style.display = 'none';
        },
    });
    
    // Setup drag and drop
    setupDragAndDrop(uploadBoxId, (files) => manager.addFiles(files));
    
    // Setup file input
    const fileInput = document.getElementById(`${uploadBoxId}-input`);
    if (fileInput) {
        fileInput.addEventListener('change', (e) => {
            if (e.target.files.length > 0) manager.addFiles(e.target.files);
        });
    }
    
    // Setup process button
    const processBtn = document.getElementById(processBtnId);
    if (processBtn) {
        processBtn.addEventListener('click', () => {
            if (typeof processFunction === 'function') {
                manager.startProcessing(processFunction);
            }
        });
    }
    
    // Setup remove button
    const removeBtn = document.getElementById(removeBtnId);
    if (removeBtn) {
        removeBtn.addEventListener('click', () => {
            const files = manager.getFiles();
            if (files.length > 0) manager.removeFile(0);
        });
    }
    
    // Setup download button
    const downloadBtn = document.getElementById(downloadBtnId);
    if (downloadBtn) {
        downloadBtn.addEventListener('click', () => manager.downloadResults());
    }
    
    return manager;
}

// ============================================================
// [FA-029] PRE-BUILT BUTTON HTML GENERATORS
// ============================================================

/**
 * [FA-030] Generate standard tool buttons HTML
 * Includes: Remove, Process, Download buttons
 */
function generateToolButtons(toolId) {
    return `
    <!-- [${toolId}-BTN-001] Tool Action Buttons -->
    <div style="text-align: center; margin-top: 1.5rem;">
        <!-- Remove File Button -->
        <button class="btn btn-secondary" id="${toolId}-remove-btn" style="display: none; font-size: 0.85rem;">
            ❌ Remove File
        </button>
        
        <!-- Process Button -->
        <button class="btn btn-primary disabled" id="${toolId}-process-btn" disabled>
            🛠️ Process
        </button>
        
        <!-- Cancel Button -->
        <button class="btn btn-secondary" id="${toolId}-cancel-btn" style="display: none;" onclick="window.fileManager_${toolId}.cancelProcessing()">
            ⏹️ Cancel
        </button>
        
        <!-- Retry Button -->
        <button class="btn btn-secondary" id="${toolId}-retry-btn" style="display: none;">
            🔄 Retry
        </button>
    </div>
    
    <!-- [${toolId}-BTN-002] Download Area -->
    <div style="text-align: center; margin-top: 1rem; display: none;" id="${toolId}-download-area">
        <button class="btn btn-download" id="${toolId}-download-btn">
            ⬇ Download
        </button>
        <p style="font-size: 0.8rem; color: var(--text-tertiary); margin-top: 0.3rem;">
            File: <span id="${toolId}-download-filename">yourownpdf-result</span>
        </p>
    </div>
    `;
}

/**
 * [FA-031] Generate multi-file tool buttons HTML
 */
function generateMultiFileToolButtons(toolId) {
    return `
    <!-- [${toolId}-BTN-001] Multi-File Tool Buttons -->
    <div style="text-align: center; margin-top: 1.5rem; display: flex; gap: 0.5rem; justify-content: center; flex-wrap: wrap;">
        <!-- Add More Button -->
        <button class="btn btn-secondary" id="${toolId}-add-more-btn" style="font-size: 0.85rem;">
            ➕ Add More Files
        </button>
        
        <!-- Clear All Button -->
        <button class="btn btn-secondary" id="${toolId}-clear-btn" style="display: none; font-size: 0.85rem;">
            🗑️ Clear All
        </button>
        
        <!-- Process Button -->
        <button class="btn btn-primary disabled" id="${toolId}-process-btn" disabled>
            🛠️ Process All
        </button>
        
        <!-- Cancel Button -->
        <button class="btn btn-secondary" id="${toolId}-cancel-btn" style="display: none;">
            ⏹️ Cancel
        </button>
    </div>
    
    <!-- [${toolId}-BTN-002] Download Area -->
    <div style="text-align: center; margin-top: 1rem; display: none;" id="${toolId}-download-area">
        <button class="btn btn-download" id="${toolId}-download-btn">
            ⬇ Download All (ZIP)
        </button>
        <p style="font-size: 0.8rem; color: var(--text-tertiary); margin-top: 0.3rem;">
            File: <span id="${toolId}-download-filename">yourownpdf-results.zip</span>
        </p>
    </div>
    `;
}

// ============================================================
// [FA-032] CONSOLE BRANDING
// ============================================================
console.log('%c🦾 YOUROWNPDF.COM File Actions %c— Loaded', 
    'font-weight: bold; color: #E11D48;', 
    'color: #64748B;');
console.log('%cCentralized button management for all 94 tools ✅', 'color: #10B981;');