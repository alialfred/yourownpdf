// J-101: Components JavaScript - Reusable UI components for YOUROWNPDF.COM

(function() {
  'use strict';

  // J-102: UploadBox class - Drag & drop file upload component
  class UploadBox {
    constructor(options = {}) {
      this.container = options.container || document.body;
      this.multiple = options.multiple !== false;
      this.accept = options.accept || '*';
      this.onFilesSelected = options.onFilesSelected || (() => {});
      this.maxFiles = options.maxFiles || 50;
      this.files = [];
      this.render();
    }

    // J-103: Render upload box
    render() {
      this.element = document.createElement('div');
      this.element.className = 'upload-box';
      this.element.innerHTML = `
        <div class="upload-box-icon">📁</div>
        <div class="upload-box-text">Drag & drop files here or click to browse</div>
        <div class="upload-box-hint">${this.getHintText()}</div>
        <input type="file" class="file-input-hidden" ${this.multiple ? 'multiple' : ''} accept="${this.accept}">
      `;
      this.container.appendChild(this.element);
      this.fileInput = this.element.querySelector('input[type="file"]');
      this.bindEvents();
    }

    // J-104: Get hint text based on accepted types
    getHintText() {
      if (this.accept.includes('pdf')) return 'PDF files only';
      if (this.accept.includes('image')) return 'Images: JPG, PNG, GIF, WebP';
      return 'Select files to upload';
    }

    // J-105: Bind drag/drop and click events
    bindEvents() {
      // Click to open file picker
      this.element.addEventListener('click', () => this.fileInput.click());

      // Drag over
      this.element.addEventListener('dragover', (e) => {
        e.preventDefault();
        this.element.classList.add('dragover');
      });

      // Drag leave
      this.element.addEventListener('dragleave', () => {
        this.element.classList.remove('dragover');
      });

      // Drop
      this.element.addEventListener('drop', (e) => {
        e.preventDefault();
        this.element.classList.remove('dragover');
        this.handleFiles(e.dataTransfer.files);
      });

      // File input change
      this.fileInput.addEventListener('change', (e) => {
        this.handleFiles(e.target.files);
      });
    }

    // J-106: Handle selected files
    handleFiles(fileList) {
      const newFiles = Array.from(fileList);

      if (!this.multiple) {
        this.files = newFiles.slice(0, 1);
      } else {
        const remaining = this.maxFiles - this.files.length;
        this.files = [...this.files, ...newFiles.slice(0, remaining)];
      }

      this.updateDisplay();
      this.onFilesSelected(this.files);
    }

    // J-107: Update display with file list
    updateDisplay() {
      if (this.files.length === 0) {
        this.element.querySelector('.upload-box-hint').textContent = this.getHintText();
        return;
      }

      this.element.querySelector('.upload-box-hint').textContent =
        `${this.files.length} file${this.files.length > 1 ? 's' : ''} selected`;

      // Create file list if not exists
      let fileList = this.element.querySelector('.file-list');
      if (!fileList) {
        fileList = document.createElement('div');
        fileList.className = 'file-list';
        this.element.appendChild(fileList);
      }

      fileList.innerHTML = this.files.map((file, index) => this.renderFileItem(file, index)).join('');

      // Add clear button
      this.addClearButton(fileList);
    }

    // J-108: Render individual file item
    renderFileItem(file, index) {
      const icon = this.getFileIcon(file);
      const size = window.YOUROWNPDF.Utils.formatSize(file.size);
      return `
        <div class="file-item" data-index="${index}">
          <div class="file-info">
            <span class="file-icon">${icon}</span>
            <span class="file-name">${file.name}</span>
            <span class="file-size">${size}</span>
          </div>
          <button class="clear-btn" onclick="event.stopPropagation(); uploadBox_${this.id}?.removeFile(${index})">✕</button>
        </div>
      `;
    }

    // J-109: Get file icon based on type
    getFileIcon(file) {
      const ext = window.YOUROWNPDF.Utils.getExtension(file.name);
      if (ext === 'pdf') return '📄';
      if (['jpg', 'jpeg', 'png', 'gif', 'webp', 'bmp'].includes(ext)) return '🖼️';
      return '📁';
    }

    // J-110: Add clear all button
    addClearButton(fileList) {
      if (fileList.querySelector('.clear-all-btn')) return;

      const clearBtn = document.createElement('button');
      clearBtn.className = 'btn btn-secondary clear-all-btn';
      clearBtn.textContent = 'Clear All';
      clearBtn.style.marginTop = '1rem';
      clearBtn.onclick = () => this.clearAll();
      fileList.appendChild(clearBtn);
    }

    // J-111: Remove single file
    removeFile(index) {
      this.files.splice(index, 1);
      this.updateDisplay();
      this.onFilesSelected(this.files);
    }

    // J-112: Clear all files
    clearAll() {
      this.files = [];
      const fileList = this.element.querySelector('.file-list');
      if (fileList) fileList.remove();
      this.updateDisplay();
      this.onFilesSelected(this.files);
      this.fileInput.value = '';
    }

    // J-113: Get current files
    getFiles() {
      return this.files;
    }

    // J-114: Set unique ID for instance
    setId(id) {
      this.id = id;
    }
  }

  // J-115: ToolCard component - Clickable tool cards
  class ToolCard {
    constructor(options = {}) {
      this.icon = options.icon || '🔧';
      this.title = options.title || 'Tool';
      this.description = options.description || '';
      this.path = options.path || '#';
      this.category = options.category || 'pdf';
      this.popularity = options.popularity || 0;
    }

    // J-116: Render tool card HTML
    render() {
      const card = document.createElement('a');
      card.href = this.path;
      card.className = 'tool-card';
      card.dataset.title = this.title;
      card.dataset.desc = this.description;
      card.dataset.category = this.category;
      card.innerHTML = `
        <span class="tool-icon">${this.icon}</span>
        <div class="tool-title">${this.title}</div>
        <div class="tool-desc">${this.description}</div>
      `;
      return card;
    }

    // J-117: Create and append to container
    appendTo(container) {
      const card = this.render();
      container.appendChild(card);
      return card;
    }
  }

  // J-118: Breadcrumbs component
  class Breadcrumbs {
    constructor(options = {}) {
      this.items = options.items || [];
      this.container = options.container || document.body;
    }

    // J-119: Render breadcrumbs
    render() {
      this.element = document.createElement('div');
      this.element.className = 'breadcrumbs';

      const html = this.items.map((item, index) => {
        if (item.current) {
          return `<span class="breadcrumb-current">${item.label}</span>`;
        }
        return `
          <a href="${item.path}" class="breadcrumb-item">${item.label}</a>
          ${index < this.items.length - 1 ? '<span class="breadcrumb-separator">›</span>' : ''}
        `;
      }).join('');

      this.element.innerHTML = html;
      this.container.appendChild(this.element);
      return this.element;
    }

    // J-120: Update breadcrumbs items
    setItems(items) {
      this.items = items;
      this.element.innerHTML = items.map((item, index) => {
        if (item.current) {
          return `<span class="breadcrumb-current">${item.label}</span>`;
        }
        return `
          <a href="${item.path}" class="breadcrumb-item">${item.label}</a>
          ${index < items.length - 1 ? '<span class="breadcrumb-separator">›</span>' : ''}
        `;
      }).join('');
    }
  }

  // J-121: DownloadButton component
  class DownloadButton {
    constructor(options = {}) {
      this.text = options.text || 'Download';
      this.onClick = options.onClick || (() => {});
      this.disabled = options.disabled || true;
      this.icon = options.icon || '⬇️';
      this.container = options.container || document.body;
    }

    // J-122: Render download button
    render() {
      this.element = document.createElement('button');
      this.element.className = 'download-btn';
      this.element.disabled = this.disabled;
      this.element.innerHTML = `
        <span class="download-btn-icon">${this.icon}</span>
        <span class="download-btn-text">${this.text}</span>
      `;

      this.element.addEventListener('click', () => {
        if (!this.disabled) {
          this.onClick();
        }
      });

      this.container.appendChild(this.element);
      return this.element;
    }

    // J-123: Enable button
    enable() {
      this.disabled = false;
      if (this.element) {
        this.element.disabled = false;
        this.element.classList.add('btn-enabled');
      }
    }

    // J-124: Disable button
    disable() {
      this.disabled = true;
      if (this.element) {
        this.element.disabled = true;
        this.element.classList.remove('btn-enabled');
      }
    }

    // J-125: Update button text
    setText(text) {
      this.text = text;
      if (this.element) {
        this.element.querySelector('.download-btn-text').textContent = text;
      }
    }

    // J-126: Show loading state
    showLoading(text = 'Processing...') {
      this.setText(text);
      this.disable();
      this.element.classList.add('loading');
    }

    // J-127: Hide loading state
    hideLoading() {
      this.setText(this.text);
      this.element.classList.remove('loading');
    }
  }

  // J-128: ProgressBar component
  class ProgressBar {
    constructor(options = {}) {
      this.label = options.label || 'Progress';
      this.showPercent = options.showPercent !== false;
      this.showSpeed = options.showSpeed || false;
      this.container = options.container || document.body;
    }

    // J-129: Render progress bar
    render() {
      this.element = document.createElement('div');
      this.element.className = 'progress-container';
      this.element.innerHTML = `
        <div class="progress-label">
          <span class="progress-text">${this.label}</span>
          ${this.showPercent ? '<span class="progress-percent">0%</span>' : ''}
        </div>
        <div class="progress-bar">
          <div class="progress-fill" style="width: 0%"></div>
        </div>
        ${this.showSpeed ? '<div class="progress-speed">0 KB/s</div>' : ''}
      `;
      this.container.appendChild(this.element);
      return this.element;
    }

    // J-130: Update progress value
    setProgress(percent, speed = null) {
      const fill = this.element.querySelector('.progress-fill');
      const percentText = this.element.querySelector('.progress-percent');
      const speedText = this.element.querySelector('.progress-speed');

      if (fill) fill.style.width = `${percent}%`;
      if (percentText) percentText.textContent = `${Math.round(percent)}%`;
      if (speedText && speed !== null) speedText.textContent = `${speed} KB/s`;
    }

    // J-131: Complete progress
    complete() {
      this.setProgress(100);
      const fill = this.element.querySelector('.progress-fill');
      if (fill) fill.style.backgroundColor = '#16a34a';
    }

    // J-132: Reset progress
    reset() {
      this.setProgress(0);
      const fill = this.element.querySelector('.progress-fill');
      if (fill) fill.style.backgroundColor = '';
    }
  }

  // J-133: OptionsPanel component
  class OptionsPanel {
    constructor(options = {}) {
      this.title = options.title || 'Options';
      this.options = options.options || [];
      this.container = options.container || document.body;
    }

    // J-134: Render options panel
    render() {
      this.element = document.createElement('div');
      this.element.className = 'options-panel';
      this.element.innerHTML = `
        <div class="options-title">${this.title}</div>
        ${this.options.map(opt => this.renderOption(opt)).join('')}
      `;
      this.container.appendChild(this.element);
      return this.element;
    }

    // J-135: Render individual option
    renderOption(option) {
      if (option.type === 'select') {
        return `
          <div class="option-item">
            <label class="option-label">${option.label}</label>
            <select class="select-input" data-option="${option.name}">
              ${option.options.map(o => `<option value="${o.value}">${o.label}</option>`).join('')}
            </select>
          </div>
        `;
      }

      if (option.type === 'checkbox') {
        return `
          <div class="option-item">
            <input type="checkbox" class="checkbox-input" id="${option.name}" data-option="${option.name}" ${option.checked ? 'checked' : ''}>
            <label class="option-label" for="${option.name}">${option.label}</label>
          </div>
        `;
      }

      if (option.type === 'range') {
        return `
          <div class="option-item">
            <label class="option-label">${option.label}</label>
            <input type="range" class="range-slider" min="${option.min || 0}" max="${option.max || 100}" value="${option.value || 50}" data-option="${option.name}">
            <span class="option-value">${option.value || 50}</span>
          </div>
        `;
      }

      if (option.type === 'text') {
        return `
          <div class="input-group">
            <label class="input-label">${option.label}</label>
            <input type="text" class="text-input" placeholder="${option.placeholder || ''}" data-option="${option.name}">
          </div>
        `;
      }

      return '';
    }

    // J-136: Get option values
    getValues() {
      const values = {};
      this.element.querySelectorAll('[data-option]').forEach(el => {
        const name = el.dataset.option;
        values[name] = el.type === 'checkbox' ? el.checked : el.value;
      });
      return values;
    }
  }

  // J-137: ToolPage component
  class ToolPage {
    constructor(options = {}) {
      this.title = options.title || 'Tool';
      this.description = options.description || '';
      this.icon = options.icon || '🔧';
      this.category = options.category || 'pdf';
      this.options = options.options || [];
      this.container = options.container || document.body;
    }

    // J-138: Render tool page
    render() {
      this.element = document.createElement('div');
      this.element.className = 'tool-page';
      this.element.innerHTML = `
        <div class="tool-header">
          <div class="tool-icon" style="font-size: 3rem; margin-bottom: 1rem;">${this.icon}</div>
          <h1>${this.title}</h1>
          <p>${this.description}</p>
        </div>
        <div class="tool-upload-section"></div>
        <div class="tool-options-section"></div>
        <div class="tool-actions"></div>
      `;
      this.container.appendChild(this.element);

      this.uploadSection = this.element.querySelector('.tool-upload-section');
      this.optionsSection = this.element.querySelector('.tool-options-section');
      this.actionsSection = this.element.querySelector('.tool-actions');

      if (this.options.length > 0) {
        this.renderOptions();
      }

      return this.element;
    }

    // J-139: Render options
    renderOptions() {
      const panel = new OptionsPanel({
        title: 'Options',
        options: this.options,
        container: this.optionsSection
      });
      panel.render();
    }

    // J-140: Add upload box
    addUploadBox(options = {}) {
      const uploadBox = new UploadBox({
        container: this.uploadSection,
        multiple: options.multiple !== false,
        accept: options.accept || '*',
        onFilesSelected: options.onFilesSelected || (() => {})
      });
      return uploadBox;
    }

    // J-141: Add download button
    addDownloadButton(options = {}) {
      const btn = new DownloadButton({
        text: options.text || 'Download',
        disabled: options.disabled !== false,
        icon: options.icon || '⬇️',
        onClick: options.onClick || (() => {}),
        container: this.actionsSection
      });
      btn.render();
      return btn;
    }

    // J-142: Add action button
    addActionButton(options = {}) {
      const btn = document.createElement('button');
      btn.className = options.primary ? 'btn btn-primary' : 'btn btn-secondary';
      btn.textContent = options.text || 'Action';
      if (options.onClick) {
        btn.addEventListener('click', options.onClick);
      }
      this.actionsSection.appendChild(btn);
      return btn;
    }

    // J-143: Show error message
    showError(message) {
      const error = document.createElement('div');
      error.className = 'error-message';
      error.textContent = message;
      this.element.insertBefore(error, this.actionsSection);
      return error;
    }

    // J-144: Show success message
    showSuccess(message) {
      const success = document.createElement('div');
      success.className = 'success-message';
      success.textContent = message;
      this.element.insertBefore(success, this.actionsSection);
      return success;
    }

    // J-145: Add loading spinner
    showLoading(message = 'Processing...') {
      const loading = document.createElement('div');
      loading.className = 'loading-spinner';
      loading.innerHTML = `
        <div class="spinner"></div>
        <p>${message}</p>
      `;
      loading.style.textAlign = 'center';
      loading.style.padding = '2rem';
      this.element.insertBefore(loading, this.actionsSection);
      return loading;
    }

    // J-146: Remove loading spinner
    hideLoading(loadingElement) {
      if (loadingElement) loadingElement.remove();
    }
  }

  // J-147: Alert component
  class Alert {
    constructor(options = {}) {
      this.type = options.type || 'info';
      this.message = options.message || '';
      this.dismissible = options.dismissible !== false;
      this.container = options.container || document.body;
    }

    // J-148: Render alert
    render() {
      this.element = document.createElement('div');
      this.element.className = `alert alert-${this.type}`;
      this.element.innerHTML = `
        ${this.message}
        ${this.dismissible ? '<button class="alert-close" onclick="this.parentElement.remove()">✕</button>' : ''}
      `;

      if (this.dismissible) {
        this.element.style.position = 'relative';
        const closeBtn = this.element.querySelector('.alert-close');
        if (closeBtn) {
          closeBtn.style.position = 'absolute';
          closeBtn.style.top = '0.5rem';
          closeBtn.style.right = '0.5rem';
          closeBtn.style.background = 'none';
          closeBtn.style.border = 'none';
          closeBtn.style.cursor = 'pointer';
        }
      }

      this.container.appendChild(this.element);
      return this.element;
    }
  }

  // J-149: TabContainer component
  class TabContainer {
    constructor(options = {}) {
      this.tabs = options.tabs || [];
      this.container = options.container || document.body;
      this.activeTab = options.activeTab || 0;
    }

    // J-150: Render tabs
    render() {
      this.element = document.createElement('div');
      this.element.className = 'tabs-container';

      const tabsHtml = `
        <div class="tabs">
          ${this.tabs.map((tab, index) => `
            <div class="tab ${index === this.activeTab ? 'active' : ''}" data-tab="${index}">${tab.label}</div>
          `).join('')}
        </div>
        <div class="tab-contents">
          ${this.tabs.map((tab, index) => `
            <div class="tab-content ${index === this.activeTab ? 'active' : ''}" data-content="${index}"></div>
          `).join('')}
        </div>
      `;

      this.element.innerHTML = tabsHtml;
      this.container.appendChild(this.element);

      this.bindEvents();
      this.renderTabContent(this.activeTab);

      return this.element;
    }

    // J-151: Bind tab click events
    bindEvents() {
      const tabElements = this.element.querySelectorAll('.tab');
      tabElements.forEach(tab => {
        tab.addEventListener('click', () => {
          const index = parseInt(tab.dataset.tab);
          this.activateTab(index);
        });
      });
    }

    // J-152: Activate specific tab
    activateTab(index) {
      const tabElements = this.element.querySelectorAll('.tab');
      const contentElements = this.element.querySelectorAll('.tab-content');

      tabElements.forEach(t => t.classList.remove('active'));
      contentElements.forEach(c => c.classList.remove('active'));

      tabElements[index].classList.add('active');
      contentElements[index].classList.add('active');

      this.renderTabContent(index);
    }

    // J-153: Render tab content
    renderTabContent(index) {
      const content = this.element.querySelector(`[data-content="${index}"]`);
      if (this.tabs[index].content) {
        content.innerHTML = this.tabs[index].content;
      }
    }
  }

  // J-154: Accordion component
  class AccordionContainer {
    constructor(options = {}) {
      this.items = options.items || [];
      this.container = options.container || document.body;
    }

    // J-155: Render accordion
    render() {
      this.element = document.createElement('div');
      this.element.className = 'accordion';
      this.element.innerHTML = this.items.map(item => `
        <div class="accordion-item">
          <div class="accordion-header">
            <span>${item.title}</span>
            <span class="accordion-icon">▼</span>
          </div>
          <div class="accordion-body">${item.content}</div>
        </div>
      `).join('');

      this.container.appendChild(this.element);

      this.element.querySelectorAll('.accordion-header').forEach(header => {
        header.addEventListener('click', () => {
          const item = header.parentElement;
          item.classList.toggle('active');
        });
      });

      return this.element;
    }
  }

  // J-156: CardGrid component
  class CardGrid {
    constructor(options = {}) {
      this.cards = options.cards || [];
      this.container = options.container || document.body;
      this.columns = options.columns || 4;
    }

    // J-157: Render card grid
    render() {
      this.element = document.createElement('div');
      this.element.className = 'tools-grid';
      this.element.style.gridTemplateColumns = `repeat(${this.columns}, 1fr)`;

      this.cards.forEach(cardData => {
        const card = new ToolCard(cardData);
        card.appendTo(this.element);
      });

      this.container.appendChild(this.element);
      return this.element;
    }

    // J-158: Add card
    addCard(cardData) {
      this.cards.push(cardData);
      const card = new ToolCard(cardData);
      card.appendTo(this.element);
    }

    // J-159: Clear all cards
    clear() {
      this.element.innerHTML = '';
      this.cards = [];
    }
  }

  // J-160: StatCard component
  class StatCard {
    constructor(options = {}) {
      this.value = options.value || '0';
      this.label = options.label || '';
      this.icon = options.icon || '';
      this.container = options.container || document.body;
    }

    // J-161: Render stat card
    render() {
      this.element = document.createElement('div');
      this.element.className = 'stat-card';
      this.element.innerHTML = `
        <div class="stat-icon">${this.icon}</div>
        <div class="stat-value">${this.value}</div>
        <div class="stat-label">${this.label}</div>
      `;
      this.container.appendChild(this.element);
      return this.element;
    }

    // J-162: Update value
    setValue(value) {
      this.value = value;
      const valueEl = this.element.querySelector('.stat-value');
      if (valueEl) valueEl.textContent = value;
    }
  }

  // J-163: FeatureList component
  class FeatureList {
    constructor(options = {}) {
      this.features = options.features || [];
      this.container = options.container || document.body;
    }

    // J-164: Render feature list
    render() {
      this.element = document.createElement('ul');
      this.element.className = 'feature-list';
      this.element.innerHTML = this.features.map(feature => `
        <li class="feature-item">
          <span class="feature-icon">✓</span>
          <span class="feature-text">${feature}</span>
        </li>
      `).join('');
      this.container.appendChild(this.element);
      return this.element;
    }
  }

  // J-165: ToastContainer component
  class ToastContainer {
    constructor() {
      this.toasts = [];
    }

    // J-166: Show toast
    show(message, type = 'info', duration = 3000) {
      const toast = document.createElement('div');
      toast.className = `toast toast-${type}`;
      toast.textContent = message;

      let container = document.querySelector('.toast-container');
      if (!container) {
        container = document.createElement('div');
        container.className = 'toast-container';
        document.body.appendChild(container);
      }

      container.appendChild(toast);
      this.toasts.push(toast);

      setTimeout(() => {
        toast.classList.add('show');
      }, 10);

      setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => {
          toast.remove();
          this.toasts = this.toasts.filter(t => t !== toast);
        }, 300);
      }, duration);
    }

    // J-167: Success toast
    success(message) {
      this.show(message, 'success');
    }

    // J-168: Error toast
    error(message) {
      this.show(message, 'error');
    }

    // J-169: Info toast
    info(message) {
      this.show(message, 'info');
    }
  }

  // J-170: BadgeCount component
  class BadgeCount {
    constructor(options = {}) {
      this.count = options.count || 0;
      this.container = options.container || document.body;
    }

    // J-171: Render badge
    render() {
      if (this.count <= 0) return null;

      this.element = document.createElement('span');
      this.element.className = 'badge-count';
      this.element.textContent = this.count;
      this.container.appendChild(this.element);
      return this.element;
    }

    // J-172: Update count
    setCount(count) {
      this.count = count;
      if (this.element) {
        this.element.textContent = count;
        this.element.style.display = count > 0 ? '' : 'none';
      }
    }
  }

  // J-173: Tooltip component
  class Tooltip {
    constructor(options = {}) {
      this.message = options.message || '';
      this.container = options.container || document.body;
    }

    // J-174: Render tooltip
    render() {
      this.element = document.createElement('div');
      this.element.className = 'tooltip';
      this.element.dataset.tooltip = this.message;
      this.container.appendChild(this.element);
      return this.element;
    }
  }

  // J-175: Divider component
  class Divider {
    constructor(options = {}) {
      this.container = options.container || document.body;
    }

    // J-176: Render divider
    render() {
      this.element = document.createElement('div');
      this.element.className = 'divider';
      this.container.appendChild(this.element);
      return this.element;
    }
  }

  // J-177: Spinner component
  class Spinner {
    constructor(options = {}) {
      this.size = options.size || 'medium';
      this.container = options.container || document.body;
    }

    // J-178: Render spinner
    render() {
      this.element = document.createElement('div');
      this.element.className = `spinner spinner-${this.size}`;
      this.container.appendChild(this.element);
      return this.element;
    }
  }

  // J-179: EmptyState component
  class EmptyState {
    constructor(options = {}) {
      this.icon = options.icon || '📭';
      this.title = options.title || 'No items';
      this.message = options.message || '';
      this.container = options.container || document.body;
    }

    // J-180: Render empty state
    render() {
      this.element = document.createElement('div');
      this.element.className = 'empty-state';
      this.element.innerHTML = `
        <div class="empty-state-icon">${this.icon}</div>
        <h3>${this.title}</h3>
        ${this.message ? `<p>${this.message}</p>` : ''}
      `;
      this.container.appendChild(this.element);
      return this.element;
    }
  }

  // J-181: AdPlaceholder component
  class AdPlaceholder {
    constructor(options = {}) {
      this.size = options.size || 'medium';
      this.container = options.container || document.body;
    }

    // J-182: Render ad placeholder
    render() {
      this.element = document.createElement('div');
      this.element.className = 'ad-placeholder';
      this.element.textContent = `Advertisement (${this.size})`;
      this.container.appendChild(this.element);
      return this.element;
    }
  }

  // J-183: Breadcrumbs instance creator
  function createBreadcrumbs(items, container) {
    const breadcrumbs = new Breadcrumbs({ items, container });
    breadcrumbs.render();
    return breadcrumbs;
  }

  // J-184: UploadBox instance creator
  function createUploadBox(container, options = {}) {
    const uploadBox = new UploadBox({
      container,
      multiple: options.multiple !== false,
      accept: options.accept || '*',
      onFilesSelected: options.onFilesSelected || (() => {})
    });
    uploadBox.setId('uploadBox-' + Date.now());
    window['uploadBox_' + uploadBox.id.split('-')[1]] = uploadBox;
    return uploadBox;
  }

  // J-185: DownloadButton instance creator
  function createDownloadButton(container, options = {}) {
    const btn = new DownloadButton({
      text: options.text || 'Download',
      disabled: options.disabled !== false,
      icon: options.icon || '⬇️',
      onClick: options.onClick || (() => {}),
      container
    });
    btn.render();
    return btn;
  }

  // J-186: ProgressBar instance creator
  function createProgressBar(container, options = {}) {
    const progress = new ProgressBar({
      label: options.label || 'Progress',
      showPercent: options.showPercent !== false,
      showSpeed: options.showSpeed || false,
      container
    });
    progress.render();
    return progress;
  }

  // J-187: ToolPage instance creator
  function createToolPage(container, options = {}) {
    const page = new ToolPage({
      title: options.title || 'Tool',
      description: options.description || '',
      icon: options.icon || '🔧',
      category: options.category || 'pdf',
      options: options.options || [],
      container
    });
    page.render();
    return page;
  }

  // J-188: Alert instance creator
  function createAlert(container, options = {}) {
    const alert = new Alert({
      type: options.type || 'info',
      message: options.message || '',
      dismissible: options.dismissible !== false,
      container
    });
    alert.render();
    return alert;
  }

  // J-189: CardGrid instance creator
  function createCardGrid(container, options = {}) {
    const grid = new CardGrid({
      cards: options.cards || [],
      container,
      columns: options.columns || 4
    });
    grid.render();
    return grid;
  }

  // J-190: Export all components to global scope
  window.YOUROWNPDF.Components = {
    UploadBox,
    ToolCard,
    Breadcrumbs,
    DownloadButton,
    ProgressBar,
    OptionsPanel,
    ToolPage,
    Alert,
    TabContainer,
    AccordionContainer,
    CardGrid,
    StatCard,
    FeatureList,
    ToastContainer,
    BadgeCount,
    Tooltip,
    Divider,
    Spinner,
    EmptyState,
    AdPlaceholder,
    createBreadcrumbs,
    createUploadBox,
    createDownloadButton,
    createProgressBar,
    createToolPage,
    createAlert,
    createCardGrid
  };

  // J-191: Create global toast instance
  window.YOUROWNPDF.Toast = new ToastContainer();

  // J-192: Helper to create tool card from data
  function createToolCard(container, cardData) {
    const card = new ToolCard(cardData);
    return card.appendTo(container);
  }

  // J-193: Helper to create multiple tool cards
  function createToolCards(container, cardsData) {
    return cardsData.map(cardData => createToolCard(container, cardData));
  }

  // J-194: Helper to render option panel
  function renderOptionsPanel(container, title, options) {
    const panel = new OptionsPanel({ title, options, container });
    panel.render();
    return panel;
  }

  // J-195: Helper to get option values
  function getOptionsValues(panelElement) {
    const values = {};
    panelElement.querySelectorAll('[data-option]').forEach(el => {
      const name = el.dataset.option;
      values[name] = el.type === 'checkbox' ? el.checked : el.value;
    });
    return values;
  }

  // J-196: Helper to create stats display
  function createStatsDisplay(container, stats) {
    const statsGrid = document.createElement('div');
    statsGrid.className = 'stats-grid';
    statsGrid.innerHTML = stats.map(stat => `
      <div class="stat-card">
        <div class="stat-icon">${stat.icon || ''}</div>
        <div class="stat-value">${stat.value}</div>
        <div class="stat-label">${stat.label}</div>
      </div>
    `).join('');
    container.appendChild(statsGrid);
    return statsGrid;
  }

  // J-197: Helper to create feature list
  function createFeatureList(container, features) {
    const featureList = new FeatureList({ features, container });
    return featureList.render();
  }

  // J-198: Helper to create step indicator
  function createStepIndicator(container, steps, currentStep = 0) {
    const stepsContainer = document.createElement('div');
    stepsContainer.className = 'steps';
    stepsContainer.innerHTML = steps.map((step, index) => `
      <div class="step ${index <= currentStep ? 'active' : ''}">
        <div class="step-number">${index + 1}</div>
        <div class="step-title">${step}</div>
      </div>
    `).join('');
    container.appendChild(stepsContainer);
    return stepsContainer;
  }

  // J-199: Helper to update step indicator
  function updateStepIndicator(stepsContainer, currentStep) {
    const steps = stepsContainer.querySelectorAll('.step');
    steps.forEach((step, index) => {
      if (index <= currentStep) {
        step.classList.add('active');
      } else {
        step.classList.remove('active');
      }
    });
  }

  // J-200: Export helpers
  window.YOUROWNPDF.Helpers = {
    createToolCard,
    createToolCards,
    renderOptionsPanel,
    getOptionsValues,
    createStatsDisplay,
    createFeatureList,
    createStepIndicator,
    updateStepIndicator
  };

})();

// ============================================================
// HOME PAGE: Tool Card Data & Renderer (always available)
// ============================================================
// IDX-023: PDF Tools Data (74 tools - ordered by popularity)
var pdfTools = [
  { id: 'merge-pdf', name: 'Merge PDF', desc: 'Combine multiple PDF files into one', icon: '<i class="fas fa-object-group"></i>', path: '/tools/pdf/merge-pdf.html' },
  { id: 'compress-pdf', name: 'Compress PDF', desc: 'Reduce PDF file size while maintaining quality', icon: '🗜️', path: '/tools/pdf/compress-pdf.html' },
  { id: 'split-pdf', name: 'Split PDF', desc: 'Extract pages from a PDF file', icon: '✂️', path: '/tools/pdf/split-pdf.html' },
  { id: 'pdf-to-jpg', name: 'PDF to JPG', desc: 'Convert PDF pages to JPEG images', icon: '🖼️', path: '/tools/pdf/pdf-to-jpg.html' },
  { id: 'pdf-to-word', name: 'PDF to Word', desc: 'Convert PDF to editable Word document', icon: '📝', path: '/tools/pdf/pdf-to-word.html' },
  { id: 'rotate-pdf', name: 'Rotate PDF', desc: 'Rotate PDF pages 90, 180, or 270 degrees', icon: '🔄', path: '/tools/pdf/rotate-pdf.html' },
  { id: 'protect-pdf', name: 'Protect PDF', desc: 'Add password protection to PDF files', icon: '🔒', path: '/tools/pdf/protect-pdf.html' },
  { id: 'unlock-pdf', name: 'Unlock PDF', desc: 'Remove password protection from PDF', icon: '🔓', path: '/tools/pdf/unlock-pdf.html' },
  { id: 'organize-pdf', name: 'Organize PDF', desc: 'Reorder, delete, or add pages', icon: '📋', path: '/tools/pdf/organize-pdf.html' },
  { id: 'pdf-to-png', name: 'PDF to PNG', desc: 'Convert PDF pages to PNG images', icon: '🖼️', path: '/tools/pdf/pdf-to-png.html' },
  { id: 'extract-pages-pdf', name: 'Extract Pages', desc: 'Extract specific pages from PDF', icon: '📄', path: '/tools/pdf/extract-pages-pdf.html' },
  { id: 'remove-pages-pdf', name: 'Remove Pages', desc: 'Delete specific pages from PDF', icon: '❌', path: '/tools/pdf/remove-pages-pdf.html' },
  { id: 'pdf-to-excel', name: 'PDF to Excel', desc: 'Convert PDF tables to Excel spreadsheets', icon: '📊', path: '/tools/pdf/pdf-to-excel.html' },
  { id: 'watermark-pdf', name: 'Add Watermark', desc: 'Add text or image watermark to PDF', icon: '💧', path: '/tools/pdf/watermark-pdf.html' },
  { id: 'page-numbers-pdf', name: 'Add Page Numbers', desc: 'Add numbering to PDF pages', icon: '🔢', path: '/tools/pdf/page-numbers-pdf.html' },
  { id: 'repair-pdf', name: 'Repair PDF', desc: 'Fix corrupted or damaged PDF files', icon: '🔧', path: '/tools/pdf/repair-pdf.html' },
  { id: 'compare-pdf', name: 'Compare PDFs', desc: 'Compare two PDF documents', icon: '⚖️', path: '/tools/pdf/compare-pdf.html' },
  { id: 'ppt-to-pdf', name: 'PPT to PDF', desc: 'Convert PowerPoint to PDF format', icon: '📽️', path: '/tools/pdf/ppt-to-pdf.html' },
  { id: 'pdf-to-ppt', name: 'PDF to PowerPoint', desc: 'Convert PDF to PowerPoint slides', icon: '📽️', path: '/tools/pdf/pdf-to-ppt.html' },
  { id: 'pdf-to-text', name: 'PDF to Text', desc: 'Extract text content from PDF', icon: '📃', path: '/tools/pdf/pdf-to-text.html' },
  { id: 'pdf-to-html', name: 'PDF to HTML', desc: 'Convert PDF to HTML web page', icon: '🌐', path: '/tools/pdf/pdf-to-html.html' },
  { id: 'flatten-pdf', name: 'Flatten PDF', desc: 'Merge layers into single flat image', icon: '📐', path: '/tools/pdf/flatten-pdf.html' },
  { id: 'extract-images-pdf', name: 'Extract Images', desc: 'Extract all images from PDF', icon: '🖼️', path: '/tools/pdf/extract-images-pdf.html' },
  { id: 'sign-pdf', name: 'Sign PDF', desc: 'Add digital signature to PDF', icon: '✍️', path: '/tools/pdf/sign-pdf.html' },
  { id: 'annotate-pdf', name: 'Annotate PDF', desc: 'Add comments and highlights', icon: '📝', path: '/tools/pdf/annotate-pdf.html' },
  { id: 'crop-pdf', name: 'Crop PDF', desc: 'Adjust page margins and crop', icon: '📐', path: '/tools/pdf/crop-pdf.html' },
  { id: 'resize-pdf', name: 'Resize PDF', desc: 'Change PDF page dimensions', icon: '📏', path: '/tools/pdf/resize-pdf.html' },
  { id: 'pdf-to-images', name: 'PDF to Images', desc: 'Convert all pages to images', icon: '🖼️', path: '/tools/pdf/pdf-to-images.html' },
  { id: 'merge-pdf-options', name: 'Merge with Options', desc: 'Combine with page selection', icon: '📑', path: '/tools/pdf/merge-pdf-options.html' },
  { id: 'compress-pdf-options', name: 'Compress Options', desc: 'Custom compression settings', icon: '🗜️', path: '/tools/pdf/compress-pdf-options.html' },
  { id: 'rotate-all-pdf', name: 'Rotate All Pages', desc: 'Rotate all pages at once', icon: '🔄', path: '/tools/pdf/rotate-all-pdf.html' },
  { id: 'reverse-pdf', name: 'Reverse Pages', desc: 'Reverse page order in PDF', icon: '↩️', path: '/tools/pdf/reverse-pdf.html' },
  { id: 'extract-text-pdf', name: 'Extract Text Only', desc: 'Extract plain text from PDF', icon: '📃', path: '/tools/pdf/extract-text-pdf.html' },
  { id: 'optimize-pdf', name: 'Optimize PDF', desc: 'Optimize for web and print', icon: '⚡', path: '/tools/pdf/optimize-pdf.html' },
  { id: 'convert-pdf-a', name: 'Convert to PDF/A', desc: 'Create archival PDF format', icon: '📚', path: '/tools/pdf/convert-pdf-a.html' },
  { id: 'pdf-to-mail', name: 'PDF to Email', desc: 'Convert PDF to email body', icon: '📧', path: '/tools/pdf/pdf-to-mail.html' },
  { id: 'redact-pdf', name: 'Redact PDF', desc: 'Remove sensitive information', icon: '🛡️', path: '/tools/pdf/redact-pdf.html' },
  { id: 'fill-form-pdf', name: 'Fill PDF Form', desc: 'Fill interactive PDF forms', icon: '📋', path: '/tools/pdf/fill-form-pdf.html' },
  { id: 'create-form-pdf', name: 'Create PDF Form', desc: 'Create fillable PDF forms', icon: '📝', path: '/tools/pdf/create-form-pdf.html' },
  { id: 'add-bookmarks-pdf', name: 'Add Bookmarks', desc: 'Add navigation bookmarks', icon: '🔖', path: '/tools/pdf/add-bookmarks-pdf.html' },
  { id: 'extract-links-pdf', name: 'Extract Links', desc: 'Extract all hyperlinks from PDF', icon: '🔗', path: '/tools/pdf/extract-links-pdf.html' },
  { id: 'convert-html-to-pdf', name: 'HTML to PDF', desc: 'Convert web pages to PDF', icon: '🌐', path: '/tools/pdf/convert-html-to-pdf.html' },
  { id: 'pdf-reviews', name: 'PDF Reviews', desc: 'Add review comments to PDF', icon: '⭐', path: '/tools/pdf/pdf-reviews.html' },
  { id: 'pdf-encrypt', name: 'Encrypt PDF', desc: 'Encrypt PDF with AES-256', icon: '🔐', path: '/tools/pdf/pdf-encrypt.html' },
  { id: 'pdf-decrypt', name: 'Decrypt PDF', desc: 'Remove encryption from PDF', icon: '🔓', path: '/tools/pdf/pdf-decrypt.html' },
  { id: 'pdf-digitalsignature', name: 'Digital Signature', desc: 'Add certificate-based signature', icon: '📜', path: '/tools/pdf/pdf-digitalsignature.html' },
  { id: 'pdf-timestamp', name: 'Timestamp', desc: 'Add trusted timestamp', icon: '⏰', path: '/tools/pdf/pdf-timestamp.html' },
  { id: 'pdf-to-xps', name: 'PDF to XPS', desc: 'Convert PDF to XPS format', icon: '📄', path: '/tools/pdf/pdf-to-xps.html' },
  { id: 'pdf-to-svg', name: 'PDF to SVG', desc: 'Convert PDF to vector graphics', icon: '🎨', path: '/tools/pdf/pdf-to-svg.html' },
  { id: 'pdf-to-rtf', name: 'PDF to RTF', desc: 'Convert PDF to Rich Text', icon: '📝', path: '/tools/pdf/pdf-to-rtf.html' },
  { id: 'pdf-to-epub', name: 'PDF to EPUB', desc: 'Convert PDF to eBook', icon: '📱', path: '/tools/pdf/pdf-to-epub.html' },
  { id: 'pdf-to-txt', name: 'PDF to TXT', desc: 'Convert to plain text', icon: '📃', path: '/tools/pdf/pdf-to-txt.html' },
  { id: 'pdf-to-tiff', name: 'PDF to TIFF', desc: 'Convert to TIFF image', icon: '🖼️', path: '/tools/pdf/pdf-to-tiff.html' },
  { id: 'pdf-to-bmp', name: 'PDF to BMP', desc: 'Convert to BMP image', icon: '🖼️', path: '/tools/pdf/pdf-to-bmp.html' },
  { id: 'pdf-to-gif', name: 'PDF to GIF', desc: 'Convert to GIF animation', icon: '🎞️', path: '/tools/pdf/pdf-to-gif.html' },
  { id: 'merge-2-pdf', name: 'Merge 2 PDFs', desc: 'Combine two PDF files', icon: '📑', path: '/tools/pdf/merge-2-pdf.html' },
  { id: 'merge-3-pdf', name: 'Merge 3 PDFs', desc: 'Combine three PDF files', icon: '📑', path: '/tools/pdf/merge-3-pdf.html' },
  { id: 'merge-4-pdf', name: 'Merge 4 PDFs', desc: 'Combine four PDF files', icon: '📑', path: '/tools/pdf/merge-4-pdf.html' },
  { id: 'merge-5-pdf', name: 'Merge 5 PDFs', desc: 'Combine five PDF files', icon: '📑', path: '/tools/pdf/merge-5-pdf.html' },
  { id: 'split-3-pdf', name: 'Split into 3', desc: 'Divide PDF into 3 parts', icon: '✂️', path: '/tools/pdf/split-3-pdf.html' },
  { id: 'split-4-pdf', name: 'Split into 4', desc: 'Divide PDF into 4 parts', icon: '✂️', path: '/tools/pdf/split-4-pdf.html' },
  { id: 'split-range-pdf', name: 'Split by Range', desc: 'Split by page ranges', icon: '✂️', path: '/tools/pdf/split-range-pdf.html' },
  { id: 'split-every-pdf', name: 'Split Every N', desc: 'Split every N pages', icon: '✂️', path: '/tools/pdf/split-every-pdf.html' },
  { id: 'extract-first-pdf', name: 'Extract First Page', desc: 'Get first page only', icon: '📄', path: '/tools/pdf/extract-first-pdf.html' },
  { id: 'extract-last-pdf', name: 'Extract Last Page', desc: 'Get last page only', icon: '📄', path: '/tools/pdf/extract-last-pdf.html' },
  { id: 'extract-odd-pdf', name: 'Extract Odd Pages', desc: 'Get odd-numbered pages', icon: '📄', path: '/tools/pdf/extract-odd-pdf.html' },
  { id: 'extract-even-pdf', name: 'Extract Even Pages', desc: 'Get even-numbered pages', icon: '📄', path: '/tools/pdf/extract-even-pdf.html' },
  { id: 'delete-first-pdf', name: 'Delete First Page', desc: 'Remove first page', icon: '❌', path: '/tools/pdf/delete-first-pdf.html' },
  { id: 'delete-last-pdf', name: 'Delete Last Page', desc: 'Remove last page', icon: '❌', path: '/tools/pdf/delete-last-pdf.html' },
  { id: 'delete-blank-pdf', name: 'Remove Blank Pages', desc: 'Delete empty pages', icon: '❌', path: '/tools/pdf/delete-blank-pdf.html' },
  { id: 'delete-duplicate-pdf', name: 'Remove Duplicates', desc: 'Delete duplicate pages', icon: '❌', path: '/tools/pdf/delete-duplicate-pdf.html' },
  { id: 'reorder-pdf', name: 'Reorder Pages', desc: 'Drag and drop reorder', icon: '📋', path: '/tools/pdf/reorder-pdf.html' }
];

var imageTools = [
  { id: 'compress-image', name: 'Compress Image', desc: 'Reduce image file size', icon: '🗜️', path: '/tools/image/compress-image' },
  { id: 'resize-image', name: 'Resize Image', desc: 'Change image dimensions', icon: '📏', path: '/tools/image/resize-image' },
  { id: 'crop-image', name: 'Crop Image', desc: 'Cut image to specific area', icon: '✂️', path: '/tools/image/crop-image' },
  { id: 'rotate-image', name: 'Rotate Image', desc: 'Rotate image 90/180/270 degrees', icon: '🔄', path: '/tools/image/rotate-image' },
  { id: 'jpg-to-png', name: 'JPG to PNG', desc: 'Convert JPEG to PNG', icon: '🔄', path: '/tools/image/convert.html' },
  { id: 'png-to-jpg', name: 'PNG to JPG', desc: 'Convert PNG to JPEG', icon: '🔄', path: '/tools/image/convert.html' },
  { id: 'image-to-pdf', name: 'Image to PDF', desc: 'Convert images to PDF', icon: '📄', path: '/tools/image/image-to-pdf.html' },
  { id: 'jpg-to-pdf', name: 'JPG to PDF', desc: 'Convert JPG images to a PDF document', icon: '📄', path: '/tools/image/jpg-to-pdf.html' },
  { id: 'remove-background', name: 'Remove Background', desc: 'AI-powered background removal', icon: '🎯', path: '/tools/image/background-remove.html' },
  { id: 'flip-image', name: 'Flip Image', desc: 'Horizontal or vertical flip', icon: '↔️', path: '/tools/image/flip.html' },
  { id: 'grayscale-image', name: 'Grayscale', desc: 'Convert to black and white', icon: '⬛', path: '/tools/image/filters.html' },
  { id: 'brightness-image', name: 'Adjust Brightness', desc: 'Increase or decrease brightness', icon: '☀️', path: '/tools/image/brightness.html' },
  { id: 'contrast-image', name: 'Adjust Contrast', desc: 'Improve image contrast', icon: '◐', path: '/tools/image/contrast.html' },
  { id: 'blur-image', name: 'Blur Image', desc: 'Apply blur effect', icon: '🌫️', path: '/tools/image/blur.html' },
  { id: 'sharpen-image', name: 'Sharpen Image', desc: 'Enhance image clarity', icon: '🔪', path: '/tools/image/sharpen.html' },
  { id: 'webp-to-jpg', name: 'WebP to JPG', desc: 'Convert WebP to JPEG', icon: '🔄', path: '/tools/image/convert.html' },
  { id: 'gif-to-png', name: 'GIF to PNG', desc: 'Convert GIF to PNG', icon: '🔄', path: '/tools/image/convert.html' },
  { id: 'filter-image', name: 'Apply Filter', desc: 'Add artistic filters', icon: '🎨', path: '/tools/image/filters.html' },
  { id: 'invert-image', name: 'Invert Colors', desc: 'Invert image colors', icon: '🔄', path: '/tools/image/filters.html' },
  { id: 'saturation', name: 'Adjust Saturation', desc: 'Increase or decrease color saturation', icon: '🎨', path: '/tools/image/saturation.html' },
  { id: 'text-overlay', name: 'Text Overlay', desc: 'Add text to images', icon: 'T', path: '/tools/image/text-overlay.html' }
];

function renderToolCards() {
  var working = (window.YOUROWNPDF && window.YOUROWNPDF.workingTools) || [];

  function isWorking(tool) {
    return working.indexOf(tool.name) !== -1;
  }

  function sortWorkingFirst(arr) {
    var w = [];
    var c = [];
    for (var i = 0; i < arr.length; i++) {
      if (isWorking(arr[i])) w.push(arr[i]);
      else c.push(arr[i]);
    }
    return { sorted: w.concat(c), workingCount: w.length };
  }

  var pdfResult = sortWorkingFirst(pdfTools);
  var imageResult = sortWorkingFirst(imageTools);
  var totalWorking = pdfResult.workingCount + imageResult.workingCount;

  var heroValue = document.querySelector('.hero-stat-value');
  if (heroValue) heroValue.textContent = totalWorking;

  var totalTools = pdfTools.length + imageTools.length;
  var heroRibbon = document.querySelector('.hero-coming-ribbon');
  if (heroRibbon) {
    var comingCount = totalTools - totalWorking;
    heroRibbon.textContent = '+' + comingCount + ' Coming Soon';
    heroRibbon.style.display = comingCount > 0 ? '' : 'none';
  }

  var pdfBadge = document.querySelector('#pdf-tools .section-badge');
  if (pdfBadge) pdfBadge.textContent = pdfResult.workingCount;

  var imageBadge = document.querySelector('#image-tools .section-badge');
  if (imageBadge) imageBadge.textContent = imageResult.workingCount;

  function cardHtml(tool) {
    if (isWorking(tool)) {
      return '<a href="' + tool.path + '" class="tool-card" onclick="event.preventDefault(); navigateTo(\'' + tool.path + '\')" data-tool-id="' + tool.id + '" data-tool-url="' + tool.path + '" data-tool-name="' + tool.name + '" data-title="' + tool.name + '" data-desc="' + tool.desc + '">' +
        '<span class="tool-icon">' + tool.icon + '</span>' +
        '<div class="tool-title">' + tool.name + '</div>' +
        '<div class="tool-desc">' + tool.desc + '</div>' +
      '</a>';
    }
    return '<div class="tool-card" data-tool-id="' + tool.id + '" data-tool-url="' + tool.path + '" data-tool-name="' + tool.name + '" data-title="' + tool.name + '" data-desc="' + tool.desc + '">' +
      '<span class="tool-icon">' + tool.icon + '</span>' +
      '<div class="tool-title">' + tool.name + '</div>' +
      '<div class="tool-desc">' + tool.desc + '</div>' +
    '</div>';
  }

  var pdfGrid = document.getElementById('pdfToolsGrid');
  if (pdfGrid) pdfGrid.innerHTML = pdfResult.sorted.map(cardHtml).join('');

  var imageGrid = document.getElementById('imageToolsGrid');
  if (imageGrid) imageGrid.innerHTML = imageResult.sorted.map(cardHtml).join('');
}