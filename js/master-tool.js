/**
 * ==========================================================================
 * MASTER TOOL LOGIC
 * Single Source of Truth for all tool UI logic (uploading, dragging, modals)
 * ==========================================================================
 */

class MasterTool {
  constructor(config, logicCallback) {
    this.config = config;
    this.logicCallback = logicCallback;
    this.files = [];
    this.processedDataBytes = null;
  }

  init() {
    this.initTemplateUI();
    this.initUpload();
    this.initReorder();
  }

  initTemplateUI() {
    const titleEl = document.getElementById('toolTitleDisplay');
    const descEl = document.getElementById('toolDescDisplay');
    const btnTextEl = document.getElementById('processBtnText');
    const featuresEl = document.getElementById('featuresList');
    const fileInput = document.getElementById('fileInput');

    if (titleEl) titleEl.textContent = this.config.title || "Tool";
    if (descEl) descEl.textContent = this.config.description || "";
    if (btnTextEl) btnTextEl.textContent = this.config.buttonText || "Process";

    if (fileInput && this.config.allowedFileTypes && this.config.allowedFileTypes.length > 0) {
      fileInput.accept = this.config.allowedFileTypes.join(',');
    }

    if (featuresEl && this.config.features) {
      featuresEl.innerHTML = this.config.features.map(f =>
        `<li><i class="fas fa-check feature-icon"></i> ${f}</li>`
      ).join('');
    }
  }

  initUpload() {
    const uploadArea = document.getElementById('uploadArea');
    const fileInput = document.getElementById('fileInput');
    const clearBtn = document.getElementById('clearBtn');
    const processBtn = document.getElementById('processBtn');
    const downloadBtn = document.getElementById('downloadBtn');

    if (!uploadArea || !fileInput) return;

    this.files = [];
    this.updateFileList();
    this.updateButtons();

    uploadArea.addEventListener('click', (e) => {
      if (e.target.closest('.file-item') || e.target.closest('.file-remove') || e.target.closest('.file-drag-handle')) {
        return;
      }
      fileInput.click();
    });

    uploadArea.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        fileInput.click();
      }
    });

    uploadArea.addEventListener('dragover', (e) => {
      e.preventDefault();
      uploadArea.classList.add('dragover');
    });

    uploadArea.addEventListener('dragleave', () => {
      uploadArea.classList.remove('dragover');
    });

    uploadArea.addEventListener('drop', (e) => {
      e.preventDefault();
      uploadArea.classList.remove('dragover');
      this.handleFiles(e.dataTransfer.files);
    });

    fileInput.addEventListener('change', (e) => {
      this.handleFiles(e.target.files);
    });

    if (clearBtn) {
      clearBtn.addEventListener('click', () => this.clearFiles());
    }
    if (processBtn) {
      processBtn.addEventListener('click', () => this.processFiles());
    }
    if (downloadBtn) {
      downloadBtn.addEventListener('click', () => this.downloadResult());
    }

    // Global Modal click-away
    if (!document._modalOverlayAttached) {
      document.addEventListener('click', (e) => {
        const overlay = document.getElementById('modalOverlay');
        if (overlay && e.target === overlay) this.closeModal();
      });
      document._modalOverlayAttached = true;
    }
  }

  handleFiles(fileList) {
    let newFiles = Array.from(fileList);

    if (this.config.allowedFileTypes && this.config.allowedFileTypes.length > 0) {
      newFiles = newFiles.filter(f => {
        const ext = '.' + f.name.split('.').pop().toLowerCase();
        return this.config.allowedFileTypes.includes(f.type) || this.config.allowedFileTypes.includes(ext);
      });
    }

    if (this.config.maxFiles > 0 && (this.files.length + newFiles.length > this.config.maxFiles)) {
      this.showErrorModal(`Maximum of ${this.config.maxFiles} files allowed.`);
      newFiles = newFiles.slice(0, this.config.maxFiles - this.files.length);
    }

    newFiles.forEach(file => {
      const reader = new FileReader();
      reader.onload = (e) => {
        this.files.push({
          name: file.name,
          size: file.size,
          data: e.target.result,
          originalFile: file
        });
        this.updateFileList();
        this.updateButtons();

        if (this.files.length >= 2) {
          setTimeout(() => {
            const actionButtons = document.querySelector('.tool-actions');
            if (actionButtons) actionButtons.scrollIntoView({ behavior: 'smooth', block: 'end' });
          }, 150);
        }
      };
      reader.readAsArrayBuffer(file);
    });

    const fileInput = document.getElementById('fileInput');
    if (fileInput) fileInput.value = '';
  }

  updateFileList() {
    const uploadArea = document.getElementById('uploadArea');
    if (!uploadArea) return;

    let fileListEl = document.querySelector('.file-list');
    if (!fileListEl) {
      fileListEl = document.createElement('div');
      fileListEl.className = 'file-list';
      uploadArea.appendChild(fileListEl);
    }

    fileListEl.innerHTML = this.files.map((file, index) => `
      <div class="file-item" draggable="true" data-index="${index}">
        <div class="file-drag-handle" title="Drag to reorder" aria-label="Drag to reorder"><i class="fas fa-grip-lines"></i></div>
        <div class="file-info">
          <span class="file-icon">📄</span>
          <div class="file-details">
            <span class="file-name">${file.name}</span>
            <span class="file-size">${this.formatSize(file.size)}</span>
          </div>
        </div>
        <button class="file-remove" aria-label="Remove file" data-index="${index}"><i class="fas fa-times"></i></button>
      </div>
    `).join('');

    // Attach remove listeners
    fileListEl.querySelectorAll('.file-remove').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        this.removeFile(parseInt(btn.getAttribute('data-index')));
      });
    });
  }

  formatSize(bytes) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  }

  removeFile(index) {
    this.files.splice(index, 1);
    this.updateFileList();
    this.updateButtons();
  }

  clearFiles() {
    this.files = [];
    const fileListEl = document.querySelector('.file-list');
    if (fileListEl) fileListEl.remove();
    this.updateButtons();

    const downloadBtn = document.getElementById('downloadBtn');
    if (downloadBtn) downloadBtn.classList.remove('visible');

    this.processedDataBytes = null;

    const uploadArea = document.getElementById('uploadArea');
    if (uploadArea) {
      uploadArea.scrollIntoView({ behavior: 'smooth', block: 'center' });
      uploadArea.focus();
    }
  }

  updateButtons() {
    const processBtn = document.getElementById('processBtn');
    const clearBtn = document.getElementById('clearBtn');

    const minFiles = this.config.minFilesRequired !== undefined ? this.config.minFilesRequired : 1;

    if (processBtn) processBtn.disabled = this.files.length < minFiles;
    if (clearBtn) clearBtn.disabled = this.files.length === 0;
  }

  async processFiles() {
    const minFiles = this.config.minFilesRequired !== undefined ? this.config.minFilesRequired : 1;
    if (this.files.length < minFiles) return;

    this.showLoadingModal(`Processing... Please wait.`);

    try {
      if (typeof this.logicCallback !== 'function') {
        throw new Error("logicCallback is not a function.");
      }
      this.processedDataBytes = await this.logicCallback(this.files, this.config);

      this.closeModal();
      const downloadBtn = document.getElementById('downloadBtn');
      if (downloadBtn) downloadBtn.classList.add('visible');
      this.showSuccessModal(this.config.successMessage || "Processed successfully!");

    } catch (error) {
      console.error(error);
      this.closeModal();
      this.showErrorModal((this.config.errorMessage || "Error processing files: ") + error.message);
    }
  }

  downloadResult() {
    if (!this.processedDataBytes) return;

    let blob;
    if (this.processedDataBytes instanceof Blob) {
      blob = this.processedDataBytes;
    } else {
      blob = new Blob([this.processedDataBytes], { type: this.config.downloadMimeType || 'application/pdf' });
    }

    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = this.config.downloadFilename || 'processed.pdf';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  initReorder() {
    window.__reorderToolInstance = this;

    if (document._reorderAttached) return;
    document._reorderAttached = true;

    let draggedItem = null;
    let draggedIndex = null;
    let dropIndicator = null;
    let selectedItem = null;

    document.addEventListener('click', (e) => {
      const fileItem = e.target.closest('.file-item');
      const fileRemoveBtn = e.target.closest('.file-remove');

      if (fileRemoveBtn) return;

      if (fileItem) {
        if (selectedItem && selectedItem !== fileItem) selectedItem.classList.remove('selected');
        if (selectedItem === fileItem) {
          fileItem.classList.remove('selected');
          selectedItem = null;
        } else {
          fileItem.classList.add('selected');
          selectedItem = fileItem;
        }
        e.stopPropagation();
      } else {
        if (selectedItem) {
          selectedItem.classList.remove('selected');
          selectedItem = null;
        }
      }
    });

    const createDropIndicator = () => {
      const indicator = document.createElement('div');
      indicator.className = 'drop-indicator';
      indicator.style.cssText = 'height: 3px; background: var(--color-b); border-radius: 2px; margin: 4px 0; display: none;';
      return indicator;
    }

    document.addEventListener('dragstart', (e) => {
      const fileItem = e.target.closest('.file-item');
      if (fileItem) {
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('text/plain', '');
        if (selectedItem) {
          selectedItem.classList.remove('selected');
          selectedItem = null;
        }
        draggedItem = fileItem;
        draggedIndex = parseInt(fileItem.dataset.index);
        fileItem.classList.add('dragging');
        fileItem.style.opacity = '0.6';

        dropIndicator = createDropIndicator();
        document.querySelector('.file-list')?.appendChild(dropIndicator);
      }
    });

    document.addEventListener('dragend', (e) => {
      if (draggedItem) {
        draggedItem.classList.remove('dragging');
        draggedItem.style.opacity = '1';
        draggedItem = null;
      }
      if (dropIndicator) {
        dropIndicator.remove();
        dropIndicator = null;
      }
      document.querySelectorAll('.file-item.drag-over').forEach(item => item.classList.remove('drag-over'));
    });

    document.addEventListener('dragover', (e) => {
      e.preventDefault();
      const fileItem = e.target.closest('.file-item');
      if (fileItem && dropIndicator) {
        const rect = fileItem.getBoundingClientRect();
        const midpoint = rect.top + rect.height / 2;

        document.querySelectorAll('.file-item.drag-over').forEach(item => {
          if (item !== fileItem) item.classList.remove('drag-over');
        });

        fileItem.classList.add('drag-over');

        const fileListEl = document.querySelector('.file-list');
        if (fileListEl) {
          if (e.clientY < midpoint) {
            fileListEl.insertBefore(dropIndicator, fileItem);
          } else {
            fileListEl.insertBefore(dropIndicator, fileItem.nextSibling);
          }
        }
        dropIndicator.style.display = 'block';
      }
    });

    document.addEventListener('dragleave', (e) => {
      const fileItem = e.target.closest('.file-item');
      if (fileItem && !fileItem.contains(e.relatedTarget)) {
        fileItem.classList.remove('drag-over');
      }
    });

    document.addEventListener('drop', (e) => {
      e.preventDefault();
      const targetItem = e.target.closest('.file-item');
      if (draggedIndex !== null && targetItem) {
        const targetIndex = parseInt(targetItem.dataset.index);
        const rect = targetItem.getBoundingClientRect();
        const midpoint = rect.top + rect.height / 2;
        const actualTargetIndex = e.clientY < midpoint ? targetIndex : targetIndex + 1;

        if (draggedIndex !== actualTargetIndex && draggedIndex !== actualTargetIndex - 1) {
          const tool = window.__reorderToolInstance;
          if (!tool) return;
          const [movedFile] = tool.files.splice(draggedIndex, 1);
          const insertAt = draggedIndex < actualTargetIndex ? actualTargetIndex - 1 : actualTargetIndex;
          tool.files.splice(insertAt, 0, movedFile);
          tool.updateFileList();
        }
      }
      draggedIndex = null;
    });
  }

  showLoadingModal(message) {
    const modalContent = document.getElementById('modalContent');
    const modalOverlay = document.getElementById('modalOverlay');
    if (!modalContent || !modalOverlay) return;
    modalContent.innerHTML = `
      <div style="text-align: center;">
        <div class="spinner" style="margin: 0 auto 1rem;"></div>
        <p>${message}</p>
      </div>
    `;
    modalOverlay.classList.add('active');
  }

  showSuccessModal(message) {
    const modalContent = document.getElementById('modalContent');
    const modalOverlay = document.getElementById('modalOverlay');
    if (!modalContent || !modalOverlay) return;
    modalContent.innerHTML = `
      <div style="text-align: center;">
        <div style="font-size: 3rem; margin-bottom: 1rem;">✅</div>
        <h3 style="margin-bottom: 1rem;">Success!</h3>
        <p>${message}</p>
        <button id="modalDownloadBtn" style="margin-top: 1.5rem; padding: 0.75rem 2rem; background: var(--color-b); color: white; border: none; border-radius: 0.5rem; cursor: pointer; font-size: 1.1rem; font-weight: 600; display: inline-flex; align-items: center; gap: 0.5rem; justify-content: center;">
          <i class="fas fa-download"></i> Download File
        </button>
      </div>
    `;
    modalOverlay.classList.add('active');

    // Auto start the download after 500ms
    setTimeout(() => {
        try {
            this.downloadResult();
            this.closeModal();
        } catch (e) {
            // Download failed — keep modal open so user can retry via the button
        }
    }, 500);

    document.getElementById('modalDownloadBtn').addEventListener('click', () => {
      this.downloadResult();
      this.closeModal();
    });
  }

  showErrorModal(message) {
    const modalContent = document.getElementById('modalContent');
    const modalOverlay = document.getElementById('modalOverlay');
    if (!modalContent || !modalOverlay) return;
    modalContent.innerHTML = `
      <div style="text-align: center;">
        <div style="font-size: 3rem; margin-bottom: 1rem;">❌</div>
        <h3 style="margin-bottom: 1rem; color: var(--color-b);">Error</h3>
        <p>${message}</p>
        <button id="modalOkBtn" style="margin-top: 1.5rem; padding: 0.75rem 2rem; background: var(--color-b); color: white; border: none; border-radius: 0.5rem; cursor: pointer;">
          OK
        </button>
      </div>
    `;
    modalOverlay.classList.add('active');
    document.getElementById('modalOkBtn').addEventListener('click', () => this.closeModal());
  }

  closeModal() {
    const modalOverlay = document.getElementById('modalOverlay');
    if (modalOverlay) modalOverlay.classList.remove('active');
  }
}

window.MasterTool = MasterTool;

// Helper to show reorder guide globally via inline onclick
window.showReorderGuide = function (e) {
  if (e) {
    e.preventDefault();
    e.stopPropagation();
  }
  const modalContent = document.getElementById('modalContent');
  const modalOverlay = document.getElementById('modalOverlay');
  if (!modalContent || !modalOverlay) return;
  modalContent.innerHTML = `
        <div style="text-align: left; max-width: 450px;">
        <h3 style="margin-bottom: 1rem; color: var(--color-b);"><i class="fas fa-sort-amount-up"></i> How File Reordering Works</h3>
        <p style="margin-bottom: 1rem; color: var(--color-text-muted); font-size: 0.9rem;">The files will be processed in the exact sequence they appear in your list.</p>
        <div style="background: var(--color-card-bg); border-radius: 0.5rem; padding: 1rem; margin-bottom: 1rem;">
            <h4 style="font-size: 0.95rem; margin-bottom: 0.75rem;">Quick Tips:</h4>
            <ul style="font-size: 0.85rem; color: var(--color-text-muted); padding-left: 1.25rem; margin: 0;">
            <li style="margin-bottom: 0.5rem;">Click a file to select it (highlights in blue)</li>
            <li style="margin-bottom: 0.5rem;">Drag the grip handle (☰) to reorder</li>
            <li style="margin-bottom: 0.5rem;">First file = first in processed output</li>
            <li>Last file = last in processed output</li>
            </ul>
        </div>
        <button id="modalReorderOkBtn" style="margin-top: 1rem; padding: 0.75rem 2rem; background: var(--color-b); color: white; border: none; border-radius: 0.5rem; cursor: pointer; width: 100%;">
            Got it!
        </button>
        </div>
    `;
  modalOverlay.classList.add('active');
  document.getElementById('modalReorderOkBtn').addEventListener('click', () => {
    modalOverlay.classList.remove('active');
  });
};
