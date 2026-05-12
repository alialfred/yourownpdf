/* ============================================================
   YOUROWNPDF.COM - MAIN JAVASCRIPT
   Part 2: Core Functionality
   ID Range: J-012 to J-050
   ============================================================ */

// [J-012] Filter tool cards on home page (live search)
function filterTools(query) {
    const cards = document.querySelectorAll('.tool-card');
    const sections = document.querySelectorAll('.tools-section');
    const lowerQuery = query.toLowerCase().trim();
    
    let visibleCount = 0;
    let pdfVisible = false;
    let imageVisible = false;
    
    cards.forEach(card => {
        const title = card.querySelector('.tool-card-title')?.textContent.toLowerCase() || '';
        const subtitle = card.querySelector('.tool-card-subtitle')?.textContent.toLowerCase() || '';
        const parentSection = card.closest('.tools-section');
        
        if (!lowerQuery || title.includes(lowerQuery) || subtitle.includes(lowerQuery)) {
            card.style.display = '';
            visibleCount++;
            
            // Track which sections have visible cards
            if (parentSection) {
                if (parentSection.id === 'pdf-tools') pdfVisible = true;
                if (parentSection.id === 'image-tools') imageVisible = true;
            }
        } else {
            card.style.display = 'none';
        }
    });
    
    // [J-013] Hide empty sections during search
    sections.forEach(section => {
        if (lowerQuery && !section.querySelector('.tool-card[style*="display: none"]') && 
            section.querySelectorAll('.tool-card').length === 
            section.querySelectorAll('.tool-card[style*="display: none"]').length) {
            section.style.display = 'none';
        } else {
            section.style.display = '';
        }
    });
    
    // [J-014] Update no-results message
    let noResultsMsg = document.getElementById('no-results-msg');
    if (visibleCount === 0 && lowerQuery) {
        if (!noResultsMsg) {
            noResultsMsg = document.createElement('p');
            noResultsMsg.id = 'no-results-msg';
            noResultsMsg.style.cssText = 'text-align: center; padding: 2rem; color: var(--text-secondary); font-size: 1.1rem;';
            const main = document.querySelector('main') || document.body;
            main.appendChild(noResultsMsg);
        }
        noResultsMsg.textContent = `No tools found for "${query}". Try another search! — YOUROWNPDF.COM`;
        noResultsMsg.style.display = '';
    } else if (noResultsMsg) {
        noResultsMsg.style.display = 'none';
    }
}

// [J-015] Enable a button (remove disabled state)
function enableButton(buttonId) {
    const btn = document.getElementById(buttonId);
    if (btn) {
        btn.disabled = false;
        btn.classList.remove('disabled');
    }
}

// [J-016] Disable a button
function disableButton(buttonId) {
    const btn = document.getElementById(buttonId);
    if (btn) {
        btn.disabled = true;
        btn.classList.add('disabled');
    }
}

// [J-017] Show completion/error dialog
function showDialog(type, title, message, buttonText, buttonAction) {
    // Remove any existing dialog
    const existing = document.getElementById('global-dialog');
    if (existing) existing.remove();
    
    // Default button text if none provided
    if (!buttonText) {
        buttonText = 'OK';
    }
    
    const icons = {
        success: '✅',
        error: '❌',
        info: 'ℹ️',
        warning: '⚠️'
    };
    
    const dialogHTML = `
    <!-- [DLG-001] Global Dialog Overlay -->
    <div class="dialog-overlay open" id="global-dialog">
        <div class="dialog-box" id="dialog-box">
            <div class="dialog-icon">${icons[type] || icons.info}</div>
            <h3 class="dialog-title">${title}</h3>
            <p class="dialog-message">${message}</p>
            <button class="btn btn-primary" id="dialog-action-btn">${buttonText}</button>
            <button class="btn btn-secondary" id="dialog-ok-btn" style="margin-left: 0.5rem;">OK</button>
            <p style="font-size: 0.75rem; color: var(--text-tertiary); margin-top: 0.5rem;">Click anywhere to close ✦</p>
        </div>
    </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', dialogHTML);
    document.body.style.overflow = 'hidden';
    
    const overlay = document.getElementById('global-dialog');
    const box = document.getElementById('dialog-box');
    const actionBtn = document.getElementById('dialog-action-btn');
    const okBtn = document.getElementById('dialog-ok-btn');
    
    // [J-018] Close dialog function
    function closeDialog() {
        if (overlay) {
            overlay.style.opacity = '0';
            overlay.style.transition = 'opacity 0.3s ease';
            setTimeout(() => {
                overlay.remove();
                document.body.style.overflow = '';
            }, 300);
        }
        // Clear blink timer
        if (overlay._blinkTimer) clearTimeout(overlay._blinkTimer);
        if (overlay._closeTimer) clearTimeout(overlay._closeTimer);
    }
    
    // [J-019] Click outside dialog to close
    overlay.addEventListener('click', function(e) {
        if (e.target === overlay) closeDialog();
    });
    
    // [J-020] Action button click
    actionBtn.addEventListener('click', function() {
        closeDialog();
        if (typeof buttonAction === 'function') {
            setTimeout(buttonAction, 300);
        }
    });
    
    // OK button click - just close
    okBtn.addEventListener('click', function() {
        closeDialog();
    });
    
    // [J-021] Set 10-second blink timer
    overlay._blinkTimer = setTimeout(() => {
        if (box && overlay) {
            box.classList.add('blink');
        }
    }, 10000);
    
    // [J-022] Auto-close after blink (approx 12 seconds total)
    overlay._closeTimer = setTimeout(() => {
        if (overlay) closeDialog();
    }, 12200);
    
    return { close: closeDialog };
}

// [J-023] Show success dialog with YOUROWNPDF branding
function showSuccessDialog(message, buttonText = 'OK', buttonAction = null) {
    return showDialog(
        'success',
        'Success!',
        `${message}\n\n— YOUROWNPDF.COM`,
        buttonText,
        buttonAction
    );
}

// [J-024] Show error dialog with YOUROWNPDF branding
function showErrorDialog(message, buttonText = 'OK', buttonAction = null) {
    return showDialog(
        'error',
        'Oops!',
        message + '\n\nPlease try again — if the problem persists, contact YOUROWNPDF.COM',
        buttonText,
        buttonAction
    );
}

// [J-025] Show info notification (smaller, auto-dismiss)
function showNotification(message, duration = 4000) {
    const id = 'notification-' + Date.now();
    const notificationHTML = `
    <div id="${id}" style="
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: var(--bg-secondary);
        border: 2px solid var(--color-accent);
        border-radius: var(--radius-md);
        padding: 1rem 1.5rem;
        box-shadow: var(--shadow-lg);
        z-index: 3000;
        animation: dialogIn 0.3s ease;
        max-width: 350px;
    ">
        <p style="color: var(--text-primary); font-size: 0.9rem;">${message}</p>
    </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', notificationHTML);
    
    setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
            el.style.opacity = '0';
            el.style.transition = 'opacity 0.3s ease';
            setTimeout(() => el.remove(), 300);
        }
    }, duration);
}

// [J-026] Create progress bar
function createProgressBar(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return null;
    
    container.innerHTML = `
    <div class="progress-container">
        <div class="progress-bar-outer">
            <div class="progress-bar-inner" id="${containerId}-bar" style="width: 0%;"></div>
        </div>
        <p class="progress-text" id="${containerId}-text">0% — Preparing...</p>
    </div>
    `;
    
    return {
        update: function(percent, text) {
            const bar = document.getElementById(`${containerId}-bar`);
            const textEl = document.getElementById(`${containerId}-text`);
            if (bar) bar.style.width = percent + '%';
            if (textEl && text) textEl.textContent = text;
        },
        complete: function(text) {
            const bar = document.getElementById(`${containerId}-bar`);
            const textEl = document.getElementById(`${containerId}-text`);
            if (bar) bar.style.width = '100%';
            if (textEl) textEl.textContent = text || '100% — Complete!';
        }
    };
}

// [J-027] Handle file drop on upload boxes
function setupDragAndDrop(boxId, onFileDrop) {
    const box = document.getElementById(boxId);
    if (!box) return;
    
    box.addEventListener('dragover', (e) => {
        e.preventDefault();
        box.classList.add('drag-over');
    });
    
    box.addEventListener('dragleave', () => {
        box.classList.remove('drag-over');
    });
    
    box.addEventListener('drop', (e) => {
        e.preventDefault();
        box.classList.remove('drag-over');
        const files = Array.from(e.dataTransfer.files);
        if (files.length > 0 && typeof onFileDrop === 'function') {
            onFileDrop(files);
        }
    });
    
    box.addEventListener('click', () => {
        const input = document.getElementById(boxId + '-input');
        if (input) input.click();
    });
}

// [J-028] Format file size for display
function formatFileSize(bytes) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

// [J-029] Trigger download of a file
function downloadFile(blob, filename) {
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    // Show success notification
    showNotification(`✅ Your file "${filename}" is ready! — YOUROWNPDF.COM`);
}

// [J-030] Generate yourownpdf-branded filename
function generateFilename(action, extension) {
    return `yourownpdf-${action}.${extension}`;
}

// [J-031] Console branding
console.log('%c🦾 YOUROWNPDF.COM %c— All tools run 100% in your browser', 
    'font-weight: bold; color: #E11D48; font-size: 1.1em;', 
    'color: #64748B;');
console.log('%cNo files ever leave your device 🔒', 'color: #10B981; font-style: italic;');