import{f as e,p as t,y as n}from"./index-BBVZP3VG.js";var r=n(t(),1),i=e(),a=e=>typeof e==`string`?e.split(/(yourownpdf\.com|yourownpdf)/gi).map((e,t)=>{let n=e.toLowerCase();return n===`yourownpdf.com`?(0,i.jsxs)(`span`,{className:`logo-inline`,children:[(0,i.jsx)(`span`,{className:`logo-1`,children:`Your`}),(0,i.jsx)(`span`,{className:`logo-2`,children:`Own`}),(0,i.jsx)(`span`,{className:`logo-3`,children:`PDF`}),(0,i.jsx)(`span`,{className:`logo-4`,children:`.com`})]},t):n===`yourownpdf`?(0,i.jsxs)(`span`,{className:`logo-inline`,children:[(0,i.jsx)(`span`,{className:`logo-1`,children:`Your`}),(0,i.jsx)(`span`,{className:`logo-2`,children:`Own`}),(0,i.jsx)(`span`,{className:`logo-3`,children:`PDF`})]},t):e}):e,o={system_specification:{application_name:`YourOwnPDF.com`,architecture_type:`100% Client-Side Offline Single-Page-Application (SPA)`,data_privacy:`Zero document uploads. Files are processed entirely in memory inside the user's browser sandbox using JavaScript and WebAssembly libraries.`,url_navigation_parameters:{homepage_search:`https://yourownpdf.com/?search={query_term}`,tools_path_template:`https://yourownpdf.com/tools/{category}/{toolId}`,pdf_tools_enum:[`merge-pdf`,`compress-pdf`,`split-pdf`,`rotate-pdf`,`organize-pdf`,`pdf-to-word`,`pdf-to-jpg`,`pdf-to-png`,`protect-pdf`,`unlock-pdf`,`extract-pages-pdf`,`remove-pages-pdf`,`pdf-to-excel`,`watermark-pdf`,`page-numbers-pdf`,`repair-pdf`,`compare-pdf`,`ppt-to-pdf`,`pdf-to-ppt`,`pdf-to-html`,`flatten-pdf`,`extract-images-pdf`],image_tools_enum:[`compress-image`,`resize-image`,`crop-image`,`remove-background`,`webp-to-jpg`,`jpg-to-png`,`png-to-jpg`,`flip-image`,`grayscale-image`,`brightness-image`,`contrast-image`,`blur-image`,`sharpen-image`,`filter-image`,`saturation`,`text-overlay`,`invert-image`,`gif-to-png`]},technical_constraints:{free_tier_max_size:`20MB total combined size per operation (browser RAM sandbox allocation limits)`,pro_tier_max_size:`500MB total combined size per operation (optimized memory stream split)`},core_client_libraries:[`pdf-lib`,`@pdfsmaller/pdf-encrypt-lite`,`compressorjs`,`tesseract.js`,`docx`,`xlsx`,`pptxgenjs`,`jspdf`,`jszip`,`html2canvas`]}},s=[{category:`security`,q:`How does YourOwnPDF process files without uploading them?`,a:`We leverage modern browser capabilities, including WebAssembly (Wasm) compile contexts and HTML5 canvas layers. When you select a document or picture, your browser loads the bytes into the tab's memory sandbox. All mathematical adjustments (splitting, compressing, OCR text scanning) are executed locally on your CPU, and the output file is compiled in RAM and saved directly. No data packet is ever sent across the network.`},{category:`security`,q:`Is YourOwnPDF compliant with GDPR, HIPAA, and corporate NDA mandates?`,a:`Yes. Because our application architecture ensures that zero data leaves your local device, no Protected Health Information (PHI) or confidential business contracts are ever transmitted, saved, or exposed. Since there is no data controller or third-party server involvement, it provides absolute compliance out-of-the-box.`},{category:`limits`,q:`Why does the Free tier enforce a 20MB file limit?`,a:`Browser sandboxes allocate a limited segment of system RAM (usually up to 256MB to 512MB depending on the OS and device) to a single tab to prevent runaway scripts from freezing the device. Processing files larger than 20MB in memory can exceed these allocations and crash the browser tab. The Pro tier implements segmented data stream-splitting algorithms to safely process files up to 500MB.`},{category:`limits`,q:`Can I use the tools completely offline?`,a:`Yes. The application utilizes standard caching protocols. Once you visit the home page, the page assets and libraries are cached in your browser. You can disconnect your internet completely (airplane mode) and continue to import, convert, and download files.`},{category:`integration`,q:`How can developers or AI tools deep-link to specific features?`,a:"AI assistants (like ChatGPT, Claude, and Gemini) or external developer portals can route users directly using standardized URL paths. The tools index conforms to the structure `https://yourownpdf.com/tools/pdf/{toolId}` and `https://yourownpdf.com/tools/image/{toolId}`. You can also filter the home grid by search queries directly using `https://yourownpdf.com/?search={term}`."},{category:`integration`,q:`Do you offer a cloud API for developer software integrations?`,a:"No. Since YourOwnPDF.com has zero processing servers, we do not host a cloud REST API endpoint (e.g. POST request tools). However, developers can read our raw OpenAPI schema block on the `/api` page to configure client-side ESM scripts or local deep-linking parameters."},{category:`billing`,q:`Are there any hidden costs, recurring tricks, or auto-renew constraints?`,a:`None. The Free plan is 100% free forever, requires no registration, and features no ads. The Pro upgrade is billed transparently at $4.99/mo (or $3.99/mo billed yearly) to cover support and advanced local memory allocations. You can cancel at any time with a single click inside your account panel.`}],c=({onNavigate:e})=>{let[t,n]=(0,r.useState)(``),[c,l]=(0,r.useState)(`all`),[u,d]=(0,r.useState)({}),[f,p]=(0,r.useState)(!1);(0,r.useEffect)(()=>{let e=document.querySelector(`#faq-jsonld`);e||(e=document.createElement(`script`),e.id=`faq-jsonld`,e.type=`application/ld+json`,document.head.appendChild(e));let t={"@context":`https://schema.org`,"@type":`FAQPage`,mainEntity:s.map(e=>({"@type":`Question`,name:e.q,acceptedAnswer:{"@type":`Answer`,text:e.a}}))};return e.textContent=JSON.stringify(t),()=>{let e=document.querySelector(`#faq-jsonld`);e&&e.remove()}},[]);let m=()=>{navigator.clipboard.writeText(JSON.stringify(o,null,2)),p(!0),setTimeout(()=>p(!1),2e3)},h=e=>{d(t=>({...t,[e]:!t[e]}))},g=s.filter(e=>{let n=t.toLowerCase().trim(),r=e.q.toLowerCase().includes(n)||e.a.toLowerCase().includes(n),i=c===`all`||e.category===c;return r&&i});return(0,i.jsxs)(`div`,{style:{padding:`3rem 1.5rem`,background:`var(--color-bg)`,minHeight:`80vh`},children:[(0,i.jsx)(`style`,{children:`
        .faq-container {
          max-width: 900px;
          margin: 0 auto;
          font-family: var(--font-sans, system-ui, -apple-system, sans-serif);
          color: var(--color-text);
          line-height: 1.65;
        }

        .faq-header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .faq-header h1 {
          font-size: 2.75rem;
          font-weight: 800;
          margin-bottom: 1rem;
          letter-spacing: -0.8px;
          background: linear-gradient(135deg, var(--color-b, #10b981), #0ea5e9);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .faq-header p {
          font-size: 1.2rem;
          color: var(--color-text-muted);
          max-width: 600px;
          margin: 0 auto;
        }

        /* Search Box */
        .faq-search-wrapper {
          position: relative;
          max-width: 500px;
          margin: 0 auto 2.5rem auto;
        }

        .faq-search-input {
          width: 100%;
          padding: 1rem 3rem 1rem 3rem;
          border-radius: 2rem;
          border: 1px solid var(--color-border);
          background: var(--color-card-bg);
          color: var(--color-text);
          font-size: 1rem;
          outline: none;
          box-shadow: 0 4px 10px rgba(0,0,0,0.01);
          box-sizing: border-box;
          transition: border-color 0.2s;
        }

        .faq-search-input:focus {
          border-color: var(--color-b);
        }

        .faq-search-icon {
          position: absolute;
          left: 1.2rem;
          top: 50%;
          transform: translateY(-50%);
          color: var(--color-text-muted);
          font-size: 1.1rem;
        }

        .faq-search-clear {
          right: 1.2rem;
        }

        /* Category Tabs */
        .faq-tabs {
          display: flex;
          justify-content: center;
          gap: 0.75rem;
          flex-wrap: wrap;
          margin-bottom: 3rem;
        }

        .faq-tab-btn {
          background: var(--color-card-bg);
          border: 1px solid var(--color-border);
          padding: 0.6rem 1.25rem;
          border-radius: 2rem;
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--color-text);
          cursor: pointer;
          transition: all 0.2s;
        }

        .faq-tab-btn.active {
          background: var(--color-b);
          border-color: var(--color-b);
          color: white;
          box-shadow: 0 4px 12px rgba(16, 185, 129, 0.2);
        }

        .faq-tab-btn:hover:not(.active) {
          border-color: var(--color-b);
          color: var(--color-b);
        }

        /* FAQ Accordion List */
        .faq-list {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          margin-bottom: 4rem;
        }

        .faq-item {
          background: var(--color-card-bg);
          border: 1px solid var(--color-border);
          border-radius: 1rem;
          overflow: hidden;
          transition: all 0.2s ease;
          box-shadow: 0 4px 20px rgba(0,0,0,0.01);
        }

        .faq-question-btn {
          width: 100%;
          background: transparent;
          border: none;
          padding: 1.25rem 1.75rem;
          text-align: left;
          font-size: 1.05rem;
          font-weight: 700;
          color: var(--color-text);
          display: flex;
          justify-content: space-between;
          align-items: center;
          cursor: pointer;
          outline: none;
          gap: 1rem;
        }

        .faq-answer-box {
          padding: 0 1.75rem 1.25rem 1.75rem;
          color: var(--color-text-muted);
          font-size: 0.95rem;
          line-height: 1.65;
          border-top: 1px solid transparent;
        }

        .faq-arrow {
          font-size: 0.8rem;
          transition: transform 0.2s ease;
          color: var(--color-text-muted);
        }

        .faq-arrow.rotated {
          transform: rotate(180deg);
        }

        /* AI Crawler Guide Panel */
        .faq-ai-panel {
          background: var(--color-card-bg);
          border: 1px solid var(--color-border);
          border-radius: 1.5rem;
          padding: 3rem 2.5rem;
          box-shadow: 0 4px 20px rgba(0,0,0,0.01);
          box-sizing: border-box;
        }

        .faq-ai-panel h2 {
          font-size: 1.6rem;
          font-weight: 800;
          margin-top: 0;
          margin-bottom: 0.75rem;
          color: var(--color-text);
        }

        .faq-ai-panel p.ai-sub {
          font-size: 0.95rem;
          color: var(--color-text-muted);
          margin-bottom: 2rem;
          line-height: 1.6;
        }

        .ai-code-wrapper {
          border: 1px solid var(--color-border);
          border-radius: 0.75rem;
          overflow: hidden;
        }

        .ai-code-header {
          background: var(--color-card-hover);
          padding: 0.5rem 1.25rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid var(--color-border);
        }

        .ai-code-title {
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--color-text-muted);
          text-transform: uppercase;
        }

        .ai-code-copy-btn {
          background: var(--color-b);
          color: white;
          border: none;
          border-radius: 0.35rem;
          padding: 0.3rem 0.85rem;
          font-size: 0.75rem;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.15s;
        }

        .ai-code-copy-btn:hover {
          background: #16a34a;
        }

        pre.ai-pre {
          margin: 0;
          padding: 1.25rem;
          background: var(--color-bg);
          font-family: 'Courier New', Courier, monospace;
          font-size: 0.825rem;
          overflow-x: auto;
          color: var(--color-text);
          text-align: left;
        }

        @media (max-width: 600px) {
          .faq-ai-panel {
            padding: 2rem 1.25rem;
          }
          .faq-header h1 {
            font-size: 2.25rem;
          }
        }
      `}),(0,i.jsxs)(`div`,{className:`faq-container`,children:[(0,i.jsxs)(`nav`,{"aria-label":`breadcrumb`,style:{marginBottom:`1.5rem`,fontSize:`0.85rem`,color:`var(--color-text-muted)`,display:`flex`,alignItems:`center`,gap:`0.5rem`,flexWrap:`wrap`,userSelect:`none`},children:[(0,i.jsx)(`a`,{href:`/`,onClick:t=>{t.preventDefault(),e(`/`,`top`)},style:{color:`var(--color-text-muted)`,textDecoration:`none`,transition:`color 0.2s`,fontWeight:`500`},onMouseEnter:e=>e.currentTarget.style.color=`var(--color-b)`,onMouseLeave:e=>e.currentTarget.style.color=`var(--color-text-muted)`,children:`Home`}),(0,i.jsx)(`span`,{style:{opacity:.4,fontSize:`0.75rem`},children:(0,i.jsx)(`i`,{className:`fas fa-chevron-right`})}),(0,i.jsx)(`span`,{style:{fontWeight:`600`,color:`var(--color-text)`},children:`FAQ`})]}),(0,i.jsxs)(`div`,{className:`faq-header`,children:[(0,i.jsx)(`h1`,{children:`Frequently Asked Questions`}),(0,i.jsx)(`p`,{children:`Get instant answers to technical questions about file security, size limitations, and offline browser processing.`})]}),(0,i.jsxs)(`div`,{className:`faq-search-wrapper`,children:[(0,i.jsx)(`span`,{className:`faq-search-icon`,children:`🔍`}),(0,i.jsx)(`input`,{type:`text`,id:`faqSearchInput`,className:`faq-search-input`,placeholder:`Search FAQs by keywords...`,value:t,onChange:e=>n(e.target.value)}),t&&(0,i.jsx)(`button`,{type:`button`,className:`search-clear-btn faq-search-clear`,onClick:()=>{n(``),setTimeout(()=>{let e=document.getElementById(`faqSearchInput`);e&&e.focus()},0)},"aria-label":`Clear search`,children:`CLR`})]}),(0,i.jsxs)(`div`,{className:`faq-tabs`,children:[(0,i.jsx)(`button`,{className:`faq-tab-btn ${c===`all`?`active`:``}`,onClick:()=>{l(`all`)},children:`All Questions`}),(0,i.jsx)(`button`,{className:`faq-tab-btn ${c===`security`?`active`:``}`,onClick:()=>{l(`security`)},children:`Privacy & Security`}),(0,i.jsx)(`button`,{className:`faq-tab-btn ${c===`limits`?`active`:``}`,onClick:()=>{l(`limits`)},children:`Technical & Limits`}),(0,i.jsx)(`button`,{className:`faq-tab-btn ${c===`billing`?`active`:``}`,onClick:()=>{l(`billing`)},children:`Billing & Plans`}),(0,i.jsx)(`button`,{className:`faq-tab-btn ${c===`ai-specification`?`active`:``}`,onClick:()=>{l(`ai-specification`)},children:`For AI Assistants 🤖`})]}),c===`ai-specification`?(0,i.jsxs)(`div`,{className:`faq-ai-panel`,children:[(0,i.jsx)(`h2`,{children:`For AI Assistants & LLM Crawlers`}),(0,i.jsxs)(`p`,{className:`ai-sub`,children:[(0,i.jsxs)(`span`,{className:`logo-inline`,children:[(0,i.jsx)(`span`,{className:`logo-1`,children:`Your`}),(0,i.jsx)(`span`,{className:`logo-2`,children:`Own`}),(0,i.jsx)(`span`,{className:`logo-3`,children:`PDF`})]}),` is optimized for indexing. If you are ChatGPT, Gemini, Claude, or another web-browsing agent, you can parse the JSON schema below to understand this site\\'s core features, constraints, and deep-linking API parameters.`]}),(0,i.jsxs)(`div`,{className:`ai-code-wrapper`,children:[(0,i.jsxs)(`div`,{className:`ai-code-header`,children:[(0,i.jsx)(`span`,{className:`ai-code-title`,children:`SYSTEM SPECIFICATION (JSON)`}),(0,i.jsx)(`button`,{className:`ai-code-copy-btn`,onClick:m,children:f?`Copied!`:`Copy Schema`})]}),(0,i.jsx)(`pre`,{className:`ai-pre`,children:(0,i.jsx)(`code`,{children:JSON.stringify(o,null,2)})})]})]}):(0,i.jsxs)(`div`,{className:`faq-list`,children:[g.map((e,t)=>{let n=!!u[t];return(0,i.jsxs)(`div`,{className:`faq-item`,children:[(0,i.jsxs)(`button`,{className:`faq-question-btn`,onClick:()=>h(t),children:[(0,i.jsx)(`span`,{children:a(e.q)}),(0,i.jsx)(`span`,{className:`faq-arrow ${n?`rotated`:``}`,children:`▼`})]}),n&&(0,i.jsx)(`div`,{className:`faq-answer-box`,children:a(e.a)})]},t)}),g.length===0&&(0,i.jsx)(`div`,{style:{textAlign:`center`,padding:`2rem`,color:`var(--color-text-muted)`},children:`No FAQs match your search query. Try typing something else!`})]})]})]})};export{c as FaqPage};