import{f as e,p as t}from"./index-C0n88cLd.js";t();var n=e(),r=({onNavigate:e})=>{let t=(t,n)=>{t.preventDefault(),e(n)};return(0,n.jsxs)(`div`,{className:`guide-page-wrapper`,style:{padding:`3rem 1.5rem`,background:`var(--color-bg)`,minHeight:`80vh`},children:[(0,n.jsx)(`style`,{children:`
        .guide-container {
          max-width: 950px;
          margin: 0 auto;
          font-family: var(--font-sans, system-ui, -apple-system, sans-serif);
          color: var(--color-text);
          line-height: 1.65;
        }

        .guide-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .guide-header h1 {
          font-size: 2.75rem;
          font-weight: 800;
          margin-bottom: 1rem;
          letter-spacing: -0.8px;
          background: linear-gradient(135deg, var(--color-b, #10b981), #0ea5e9);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .guide-header p {
          font-size: 1.25rem;
          color: var(--color-text-muted);
          max-width: 700px;
          margin: 0 auto 2rem;
          font-weight: 400;
        }

        .privacy-alert-box {
          background: rgba(16, 185, 129, 0.06);
          border: 1px dashed rgba(16, 185, 129, 0.3);
          border-radius: 1rem;
          padding: 1.5rem;
          max-width: 680px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          gap: 1.25rem;
          text-align: left;
        }

        .privacy-alert-box span.shield-icon {
          font-size: 2.5rem;
          line-height: 1;
        }

        .privacy-alert-box h4 {
          margin: 0 0 0.25rem 0;
          font-size: 1.1rem;
          font-weight: 700;
          color: var(--color-text);
        }

        .privacy-alert-box p {
          margin: 0;
          font-size: 0.9rem;
          color: var(--color-text-muted);
          line-height: 1.5;
        }

        /* Stacked Step Cards */
        .guide-steps-list {
          display: flex;
          flex-direction: column;
          gap: 3.5rem;
          margin-bottom: 5rem;
        }

        .guide-step-card {
          display: flex;
          align-items: center;
          gap: 3rem;
          background: var(--color-card-bg);
          border: 1px solid var(--color-border);
          border-radius: 1.25rem;
          padding: 2.5rem;
          box-shadow: 0 4px 20px rgba(0,0,0,0.02);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .guide-step-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 30px rgba(0,0,0,0.04);
        }

        .guide-step-text {
          flex: 1.2;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .guide-step-badge-row {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .guide-badge {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: var(--color-b);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 1.1rem;
        }

        .guide-step-card h3 {
          font-size: 1.5rem;
          font-weight: 700;
          margin: 0;
          color: var(--color-text);
        }

        .guide-step-card p {
          font-size: 1rem;
          color: var(--color-text-muted);
          margin: 0;
          line-height: 1.65;
        }

        .guide-step-highlight {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-weight: 600;
          font-size: 0.875rem;
          color: var(--color-b);
        }

        .guide-step-screenshot-wrapper {
          flex: 1;
          display: flex;
          justify-content: center;
          min-width: 320px;
        }

        /* Browser Mockup / Screenshot CSS Drawing */
        .browser-mockup {
          width: 100%;
          max-width: 380px;
          background: var(--color-card-bg);
          border: 1px solid var(--color-border);
          border-radius: 0.75rem;
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.08);
          overflow: hidden;
          box-sizing: border-box;
        }

        .browser-bar {
          background: var(--color-card-hover);
          border-bottom: 1px solid var(--color-border);
          padding: 0.6rem 0.8rem;
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .browser-dots {
          display: flex;
          gap: 5px;
        }

        .browser-dots span {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          display: block;
        }

        .dot-red { background: #ff5f56; }
        .dot-yellow { background: #ffbd2e; }
        .dot-green { background: #27c93f; }

        .browser-address {
          background: var(--color-card-bg);
          border: 1px solid var(--color-border);
          border-radius: 0.25rem;
          font-size: 0.65rem;
          color: var(--color-text-muted);
          padding: 0.15rem 1.5rem 0.15rem 0.5rem;
          flex: 1;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          position: relative;
        }

        .browser-address::after {
          content: "🔒";
          position: absolute;
          right: 0.4rem;
          top: 50%;
          transform: translateY(-50%);
          font-size: 0.6rem;
          opacity: 0.7;
        }

        .browser-content {
          padding: 1.5rem;
          height: 160px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background: var(--color-card-bg);
          box-sizing: border-box;
          position: relative;
        }

        /* Simulated Elements inside Mockups */
        .mock-upload-area {
          border: 2px dashed var(--color-border);
          border-radius: 0.5rem;
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 0.4rem;
          background: var(--color-card-hover);
        }

        .mock-upload-area i {
          font-size: 1.75rem;
          color: var(--color-b);
        }

        .mock-upload-label {
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--color-text);
        }

        .mock-upload-sub {
          font-size: 0.6rem;
          color: var(--color-text-muted);
        }

        .mock-settings-panel {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          width: 100%;
        }

        .mock-settings-row {
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
        }

        .mock-settings-label {
          font-size: 0.7rem;
          font-weight: 700;
          color: var(--color-text-muted);
          text-transform: uppercase;
        }

        .mock-btn-group {
          display: flex;
          gap: 0.5rem;
          width: 100%;
        }

        .mock-btn {
          flex: 1;
          border: 1px solid var(--color-border);
          background: var(--color-card-bg);
          border-radius: 0.4rem;
          padding: 0.4rem 0.2rem;
          font-size: 0.7rem;
          font-weight: 600;
          text-align: center;
          color: var(--color-text);
        }

        .mock-btn.active {
          border-color: var(--color-b);
          background: rgba(16, 185, 129, 0.1);
          color: var(--color-b);
        }

        .mock-checkbox-row {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.7rem;
          font-weight: 500;
          margin-top: 0.25rem;
        }

        .mock-checkbox {
          width: 12px;
          height: 12px;
          border-radius: 3px;
          border: 1.5px solid var(--color-b);
          background: var(--color-b);
          position: relative;
        }

        .mock-checkbox::after {
          content: "";
          position: absolute;
          left: 3px;
          top: 1px;
          width: 3px;
          height: 6px;
          border: solid white;
          border-width: 0 1.5px 1.5px 0;
          transform: rotate(45deg);
        }

        .mock-process-box {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.6rem;
          width: 100%;
        }

        .mock-spinner {
          width: 28px;
          height: 28px;
          border: 3px solid rgba(16, 185, 129, 0.15);
          border-radius: 50%;
          border-top-color: var(--color-b);
          animation: spin 0.8s linear infinite;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        .mock-progress-bar-container {
          width: 80%;
          height: 6px;
          background: var(--color-border);
          border-radius: 3px;
          overflow: hidden;
          margin-top: 0.25rem;
        }

        .mock-progress-bar-fill {
          height: 100%;
          background: var(--color-b);
          width: 72%;
          border-radius: 3px;
        }

        .mock-process-status {
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--color-b);
        }

        .mock-download-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.6rem;
          width: 100%;
        }

        .mock-success-icon {
          font-size: 1.75rem;
          color: var(--color-b);
          line-height: 1;
        }

        .mock-download-btn {
          background: var(--color-b);
          color: white;
          border: none;
          border-radius: 0.5rem;
          padding: 0.5rem 1.5rem;
          font-size: 0.8rem;
          font-weight: 700;
          cursor: default;
          box-shadow: 0 4px 10px rgba(16, 185, 129, 0.2);
          display: flex;
          align-items: center;
          gap: 0.4rem;
        }

        .mock-file-info {
          font-size: 0.65rem;
          color: var(--color-text-muted);
          font-weight: 500;
        }

        /* FAQ Accordion */
        .guide-faq-section {
          background: var(--color-card-bg);
          border: 1px solid var(--color-border);
          border-radius: 1.25rem;
          padding: 2.5rem;
          margin-bottom: 4rem;
        }

        .guide-faq-section h2 {
          font-size: 1.75rem;
          font-weight: 800;
          margin-top: 0;
          margin-bottom: 1.5rem;
          text-align: center;
        }

        .guide-faq-grid {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .guide-faq-item {
          border-bottom: 1px solid var(--color-border);
          padding-bottom: 1.5rem;
        }

        .guide-faq-item:last-child {
          border-bottom: none;
          padding-bottom: 0;
        }

        .guide-faq-item h4 {
          font-size: 1.05rem;
          font-weight: 700;
          margin: 0 0 0.5rem 0;
          color: var(--color-text);
        }

        .guide-faq-item p {
          font-size: 0.925rem;
          color: var(--color-text-muted);
          margin: 0;
          line-height: 1.6;
        }

        /* Action Footer */
        .guide-footer-action {
          text-align: center;
          padding: 2rem 1.5rem;
          background: var(--color-card-hover);
          border: 1px solid var(--color-border);
          border-radius: 1.25rem;
          margin-bottom: 2rem;
        }

        .guide-footer-action h3 {
          font-size: 1.5rem;
          font-weight: 700;
          margin-top: 0;
          margin-bottom: 0.5rem;
        }

        .guide-footer-action p {
          color: var(--color-text-muted);
          margin-bottom: 1.5rem;
          font-size: 1rem;
        }

        .guide-footer-btn {
          padding: 0.85rem 2.5rem;
          background: var(--color-b);
          color: white;
          border: none;
          border-radius: 0.6rem;
          font-size: 1.05rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
        }

        .guide-footer-btn:hover {
          background: #16a34a;
          transform: translateY(-1px);
        }

        /* Responsive */
        @media (max-width: 800px) {
          .guide-step-card {
            flex-direction: column !important;
            padding: 1.5rem;
            gap: 1.5rem;
          }

          .guide-step-screenshot-wrapper {
            width: 100%;
            min-width: 100%;
          }

          .browser-mockup {
            max-width: 100%;
          }

          .guide-header h1 {
            font-size: 2.25rem;
          }

          .guide-header p {
            font-size: 1.1rem;
          }
        }
      `}),(0,n.jsxs)(`div`,{className:`guide-container`,children:[(0,n.jsxs)(`nav`,{"aria-label":`breadcrumb`,style:{marginBottom:`1.5rem`,fontSize:`0.85rem`,color:`var(--color-text-muted)`,display:`flex`,alignItems:`center`,gap:`0.5rem`,flexWrap:`wrap`,userSelect:`none`},children:[(0,n.jsx)(`a`,{href:`/`,onClick:t=>{t.preventDefault(),e(`/`,`top`)},style:{color:`var(--color-text-muted)`,textDecoration:`none`,transition:`color 0.2s`,fontWeight:`500`},onMouseEnter:e=>e.currentTarget.style.color=`var(--color-b)`,onMouseLeave:e=>e.currentTarget.style.color=`var(--color-text-muted)`,children:`Home`}),(0,n.jsx)(`span`,{style:{opacity:.4,fontSize:`0.75rem`},children:(0,n.jsx)(`i`,{className:`fas fa-chevron-right`})}),(0,n.jsx)(`span`,{style:{fontWeight:`600`,color:`var(--color-text)`},children:`How to Use`})]}),(0,n.jsxs)(`div`,{className:`guide-header`,children:[(0,n.jsxs)(`h1`,{children:[`How to Use `,(0,n.jsxs)(`span`,{className:`logo-inline`,children:[(0,n.jsx)(`span`,{className:`logo-1`,children:`Your`}),(0,n.jsx)(`span`,{className:`logo-2`,children:`Own`}),(0,n.jsx)(`span`,{className:`logo-3`,children:`PDF`})]})]}),(0,n.jsxs)(`p`,{children:[`Welcome to the beginner-friendly guide! `,(0,n.jsxs)(`span`,{className:`logo-inline`,children:[(0,n.jsx)(`span`,{className:`logo-1`,children:`Your`}),(0,n.jsx)(`span`,{className:`logo-2`,children:`Own`}),(0,n.jsx)(`span`,{className:`logo-3`,children:`PDF`})]}),` operates 100% inside your web browser. No files are uploaded to any server, making the tools completely private and incredibly fast.`]}),(0,n.jsxs)(`div`,{className:`privacy-alert-box`,children:[(0,n.jsx)(`span`,{className:`shield-icon`,children:`🛡️`}),(0,n.jsxs)(`div`,{children:[(0,n.jsx)(`h4`,{children:`Your Privacy is Guaranteed`}),(0,n.jsx)(`p`,{children:`Every operation runs on your physical device using browser WebAssembly. You can even disconnect your internet completely after the website loads, and the tools will continue working!`})]})]})]}),(0,n.jsxs)(`div`,{className:`guide-steps-list`,children:[(0,n.jsxs)(`div`,{className:`guide-step-card`,children:[(0,n.jsxs)(`div`,{className:`guide-step-text`,children:[(0,n.jsxs)(`div`,{className:`guide-step-badge-row`,children:[(0,n.jsx)(`div`,{className:`guide-badge`,children:`1`}),(0,n.jsxs)(`span`,{className:`guide-step-highlight`,children:[(0,n.jsx)(`i`,{className:`fas fa-file-import`}),` Easy Import`]})]}),(0,n.jsx)(`h3`,{children:`Select and Upload Your Files`}),(0,n.jsx)(`p`,{children:`Choose the PDF documents or images you want to edit. Click the dashed selection box to browse files on your device, or simply drag & drop them directly into the interface. You can upload multiple files at once.`}),(0,n.jsx)(`p`,{style:{fontSize:`0.85rem`,fontStyle:`italic`},children:`Note: The interface supports combined file uploads up to a total of 20MB across all files.`})]}),(0,n.jsx)(`div`,{className:`guide-step-screenshot-wrapper`,children:(0,n.jsxs)(`div`,{className:`browser-mockup`,children:[(0,n.jsxs)(`div`,{className:`browser-bar`,children:[(0,n.jsxs)(`div`,{className:`browser-dots`,children:[(0,n.jsx)(`span`,{className:`browser-dots span dot-red`}),(0,n.jsx)(`span`,{className:`browser-dots span dot-yellow`}),(0,n.jsx)(`span`,{className:`browser-dots span dot-green`})]}),(0,n.jsx)(`div`,{className:`browser-address`,children:`https://yourownpdf.com/tools/pdf/merge-pdf`})]}),(0,n.jsx)(`div`,{className:`browser-content`,children:(0,n.jsxs)(`div`,{className:`mock-upload-area`,children:[(0,n.jsx)(`i`,{className:`fas fa-cloud-upload-alt`}),(0,n.jsx)(`span`,{className:`mock-upload-label`,children:`Drag & drop files here`}),(0,n.jsx)(`span`,{className:`mock-upload-sub`,children:`or click to browse from device`})]})})]})})]}),(0,n.jsxs)(`div`,{className:`guide-step-card`,style:{flexDirection:`row-reverse`},children:[(0,n.jsxs)(`div`,{className:`guide-step-text`,children:[(0,n.jsxs)(`div`,{className:`guide-step-badge-row`,children:[(0,n.jsx)(`div`,{className:`guide-badge`,children:`2`}),(0,n.jsxs)(`span`,{className:`guide-step-highlight`,children:[(0,n.jsx)(`i`,{className:`fas fa-sliders-h`}),` Full Control`]})]}),(0,n.jsx)(`h3`,{children:`Adjust Your Settings`}),(0,n.jsx)(`p`,{children:`Once your files are imported, configure the tool options below the upload zone. For PDF compression, select a level (Low, Medium, High) and an optimization engine. For page organizer tools, drag and drop cards to change page sequences.`})]}),(0,n.jsx)(`div`,{className:`guide-step-screenshot-wrapper`,children:(0,n.jsxs)(`div`,{className:`browser-mockup`,children:[(0,n.jsxs)(`div`,{className:`browser-bar`,children:[(0,n.jsxs)(`div`,{className:`browser-dots`,children:[(0,n.jsx)(`span`,{className:`browser-dots span dot-red`}),(0,n.jsx)(`span`,{className:`browser-dots span dot-yellow`}),(0,n.jsx)(`span`,{className:`browser-dots span dot-green`})]}),(0,n.jsx)(`div`,{className:`browser-address`,children:`https://yourownpdf.com/tools/pdf/compress-pdf`})]}),(0,n.jsx)(`div`,{className:`browser-content`,children:(0,n.jsxs)(`div`,{className:`mock-settings-panel`,children:[(0,n.jsxs)(`div`,{className:`mock-settings-row`,children:[(0,n.jsx)(`span`,{className:`mock-settings-label`,children:`Compression Level`}),(0,n.jsxs)(`div`,{className:`mock-btn-group`,children:[(0,n.jsx)(`div`,{className:`mock-btn`,children:`Low`}),(0,n.jsx)(`div`,{className:`mock-btn active`,children:`Medium`}),(0,n.jsx)(`div`,{className:`mock-btn`,children:`High`})]})]}),(0,n.jsxs)(`div`,{className:`mock-checkbox-row`,children:[(0,n.jsx)(`div`,{className:`mock-checkbox`}),(0,n.jsx)(`span`,{children:`Preserve original document text metadata`})]})]})})]})})]}),(0,n.jsxs)(`div`,{className:`guide-step-card`,children:[(0,n.jsxs)(`div`,{className:`guide-step-text`,children:[(0,n.jsxs)(`div`,{className:`guide-step-badge-row`,children:[(0,n.jsx)(`div`,{className:`guide-badge`,children:`3`}),(0,n.jsxs)(`span`,{className:`guide-step-highlight`,children:[(0,n.jsx)(`i`,{className:`fas fa-bolt`}),` Local Sandbox`]})]}),(0,n.jsx)(`h3`,{children:`Convert and Process Offline`}),(0,n.jsxs)(`p`,{children:[`Click the action button (e.g. `,(0,n.jsx)(`strong`,{children:`"Merge Files"`}),` or `,(0,n.jsx)(`strong`,{children:`"Compress PDF"`}),`). The system compiles the logic in your local browser tab. A processing indicator will update you on the progress. No files are transmitted onto a server network, ensuring your files never leave your device.`]})]}),(0,n.jsx)(`div`,{className:`guide-step-screenshot-wrapper`,children:(0,n.jsxs)(`div`,{className:`browser-mockup`,children:[(0,n.jsxs)(`div`,{className:`browser-bar`,children:[(0,n.jsxs)(`div`,{className:`browser-dots`,children:[(0,n.jsx)(`span`,{className:`browser-dots span dot-red`}),(0,n.jsx)(`span`,{className:`browser-dots span dot-yellow`}),(0,n.jsx)(`span`,{className:`browser-dots span dot-green`})]}),(0,n.jsx)(`div`,{className:`browser-address`,children:`https://yourownpdf.com/tools/pdf/merge-pdf`})]}),(0,n.jsx)(`div`,{className:`browser-content`,children:(0,n.jsxs)(`div`,{className:`mock-process-box`,children:[(0,n.jsx)(`div`,{className:`mock-spinner`}),(0,n.jsx)(`span`,{className:`mock-process-status`,children:`Merging your files... 72%`}),(0,n.jsx)(`div`,{className:`mock-progress-bar-container`,children:(0,n.jsx)(`div`,{className:`mock-progress-bar-fill`})})]})})]})})]}),(0,n.jsxs)(`div`,{className:`guide-step-card`,style:{flexDirection:`row-reverse`},children:[(0,n.jsxs)(`div`,{className:`guide-step-text`,children:[(0,n.jsxs)(`div`,{className:`guide-step-badge-row`,children:[(0,n.jsx)(`div`,{className:`guide-badge`,children:`4`}),(0,n.jsxs)(`span`,{className:`guide-step-highlight`,children:[(0,n.jsx)(`i`,{className:`fas fa-download`}),` Save Instantly`]})]}),(0,n.jsx)(`h3`,{children:`Save the Output Document`}),(0,n.jsxs)(`p`,{children:[`Once compilation completes, a success notice appears. Simply click the primary `,(0,n.jsx)(`strong`,{children:`"Download"`}),` button to save the newly created file directly to your downloads directory.`]}),(0,n.jsx)(`p`,{style:{fontSize:`0.85rem`,fontStyle:`italic`},children:`Since everything runs in client memory, closing or refreshing the tab automatically deletes all history, leaving no security footprint.`})]}),(0,n.jsx)(`div`,{className:`guide-step-screenshot-wrapper`,children:(0,n.jsxs)(`div`,{className:`browser-mockup`,children:[(0,n.jsxs)(`div`,{className:`browser-bar`,children:[(0,n.jsxs)(`div`,{className:`browser-dots`,children:[(0,n.jsx)(`span`,{className:`browser-dots span dot-red`}),(0,n.jsx)(`span`,{className:`browser-dots span dot-yellow`}),(0,n.jsx)(`span`,{className:`browser-dots span dot-green`})]}),(0,n.jsx)(`div`,{className:`browser-address`,children:`https://yourownpdf.com/tools/pdf/merge-pdf`})]}),(0,n.jsx)(`div`,{className:`browser-content`,children:(0,n.jsxs)(`div`,{className:`mock-download-card`,children:[(0,n.jsx)(`i`,{className:`fas fa-check-circle mock-success-icon`}),(0,n.jsx)(`span`,{className:`mock-file-info`,children:`Merged PDF Successfully Generated!`}),(0,n.jsxs)(`div`,{className:`mock-download-btn`,children:[(0,n.jsx)(`i`,{className:`fas fa-download`}),` Download File`]})]})})]})})]})]}),(0,n.jsxs)(`div`,{className:`guide-faq-section`,children:[(0,n.jsx)(`h2`,{children:`Frequently Asked Questions`}),(0,n.jsxs)(`div`,{className:`guide-faq-grid`,children:[(0,n.jsxs)(`div`,{className:`guide-faq-item`,children:[(0,n.jsx)(`h4`,{children:`Is it really 100% private? How do I verify this?`}),(0,n.jsx)(`p`,{children:`Yes. Since all conversion scripts run inside your browser cache, you can verify this by importing your files, disconnecting your computer or phone from Wi-Fi/data, and running the tools. The processing and download will complete successfully because no servers are involved.`})]}),(0,n.jsxs)(`div`,{className:`guide-faq-item`,children:[(0,n.jsx)(`h4`,{children:`What is the maximum file limit I can process?`}),(0,n.jsx)(`p`,{children:`To prevent your browser from running out of RAM and crashing, we enforce a total combined file size limit of 20MB per task. We recommend compressing larger files first before performing multi-file merges.`})]}),(0,n.jsxs)(`div`,{className:`guide-faq-item`,children:[(0,n.jsx)(`h4`,{children:`Does the tool support mobile browsers?`}),(0,n.jsx)(`p`,{children:`Absolutely. The responsive layouts are designed for phones, tablets, and computers alike. On mobile devices, you can select files from your photos library, camera, or local file manager.`})]}),(0,n.jsxs)(`div`,{className:`guide-faq-item`,children:[(0,n.jsx)(`h4`,{children:`Why is it completely free? Are there account limits?`}),(0,n.jsx)(`p`,{children:`We do not collect subscriptions, charge for premium upgrades, or require accounts because we do not host backend processing servers. Since you provide the processing power locally, we keep operations completely free and uncapped.`})]})]})]}),(0,n.jsxs)(`div`,{className:`guide-footer-action`,children:[(0,n.jsx)(`h3`,{children:`Ready to process some files?`}),(0,n.jsx)(`p`,{children:`Go back to the homepage and select from our 70+ client-side utilities.`}),(0,n.jsxs)(`button`,{className:`guide-footer-btn`,onClick:e=>t(e,`/`),children:[(0,n.jsx)(`i`,{className:`fas fa-arrow-left`}),` Go to Homepage`]})]})]})]})};export{r as HowToUsePage};