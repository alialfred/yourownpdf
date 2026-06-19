import{f as e,p as t}from"./index-D9Fo1s_e.js";t();var n=e(),r=[{version:`0.1.1.4 - Google ownership verified and sitemap updated`,date:`June 11, 2026`,title:`Audience Use Cases & Pricing Launch`,summary:`Implements targeted profile paths, transparent pricing details, and human/AI FAQs, while enhancing deep-link parameter parsing.`,items:[{type:`feature`,desc:`Added dedicated Use Case pages (/use-cases) mapping specific tools for Students, Legal, Healthcare, Designers, and Remote Businesses.`},{type:`feature`,desc:`Created the Pricing matrix page (/pricing) highlighting zero hidden fees and explaining browser WebAssembly memory limits.`},{type:`feature`,desc:`Created the FAQ page (/faq) featuring keyword search filters and automated FAQPage JSON-LD schema headers injection.`},{type:`improvement`,desc:`Structured a machine-readable JSON specification system block for LLM crawl bots (like ChatGPT) to discover SPA routes.`},{type:`improvement`,desc:`Synced search query variables (e.g. /?search=compress) across browser history popstates and header input elements.`}]},{version:`1.4.2`,date:`May 18, 2026`,title:`Visual Guides & Sitemap Automation`,summary:`Introduces step-by-step guides with browser mockups, SEO sitemaps, and version indicator layouts.`,items:[{type:`feature`,desc:`Created the "How to Use" guide (/how-to-use) displaying responsive CSS browser mockups simulating file upload and download flows.`},{type:`improvement`,desc:`Integrated automated XML sitemap generators (generate-sitemap.js & .cjs) to compile search index priorities on production builds.`},{type:`improvement`,desc:`Shifted the app version and compilation timestamp metrics into the top advertisement slots on the homepage.`},{type:`fix`,desc:`Replaced collapsed spaces in header elements with pre-wrap CSS blocks to resolve rendering bugs.`}]},{version:`1.4.0`,date:`April 09, 2026`,title:`OCR Text Recognition & Safe Memory Allocation`,summary:`Integrates local text extraction from images and memory bounds safety constraints.`,items:[{type:`feature`,desc:`Added client-side optical character recognition (OCR) using local Tesseract.js packages to extract text from images offline.`},{type:`improvement`,desc:`Implemented WebAssembly memory heap boundaries checks to protect mobile devices from tab crashes.`},{type:`improvement`,desc:`Configured automated Schema.org JSON-LD scripts generation on tool subpages to show deterministic use counts.`},{type:`fix`,desc:`Resolved file stream memory leakages on multiple consecutive document uploads.`}]},{version:`1.3.1`,date:`March 22, 2026`,title:`PDF Repair Diagnostics & Page Sequencer`,summary:`Launches local file structures diagnosis and advanced drag-and-drop sequencing components.`,items:[{type:`feature`,desc:`Added the "Repair PDF" utility to reconstruct broken cross-reference tables locally from raw file trailers.`},{type:`feature`,desc:`Created the visual PDF drag-and-drop page sequencer to easily reorder, delete, or duplicate pages in-browser.`},{type:`improvement`,desc:`Improved text contrast metrics across secondary layouts to ensure full compatibility with WCAG accessibility ratios.`}]},{version:`1.2.0`,date:`February 10, 2026`,title:`Image Canvas Adjustments & Offline PWA`,summary:`Launches visual adjustments panels on image tools and Progressive Web App configuration.`,items:[{type:`feature`,desc:`Added local image filters sliders (brightness, contrast, grayscale, saturation, blur, sharpen) utilizing canvas bitmap adjustments.`},{type:`feature`,desc:`Added background removal tools rendering transparent PNG masks in memory.`},{type:`improvement`,desc:`Integrated Service Worker caching schemas allowing the web application to load and run 100% offline.`}]},{version:`1.1.0`,date:`January 15, 2026`,title:`Multi-File Merging & Local Cryptography`,summary:`Launches our core browser PDF libraries suite for document joining and passwords management.`,items:[{type:`feature`,desc:`Added client-side multi-file PDF merge capabilities utilizing ESM pdf-lib compilation.`},{type:`feature`,desc:`Added "Protect PDF" and "Unlock PDF" utilities executing password encryption and decryption locally.`},{type:`feature`,desc:`Created the global dark mode toggle storing layout preferences in the user's local storage container.`}]}],i=({onNavigate:e})=>(0,n.jsxs)(`div`,{style:{padding:`3rem 1.5rem`,background:`var(--color-bg)`,minHeight:`80vh`},children:[(0,n.jsx)(`style`,{children:`
        .ch-container {
          max-width: 800px;
          margin: 0 auto;
          font-family: var(--font-sans, system-ui, -apple-system, sans-serif);
          color: var(--color-text);
          line-height: 1.65;
        }

        .ch-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .ch-header h1 {
          font-size: 2.75rem;
          font-weight: 800;
          margin-bottom: 1rem;
          letter-spacing: -0.8px;
          background: linear-gradient(135deg, var(--color-b, #10b981), #0ea5e9);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .ch-header p {
          font-size: 1.2rem;
          color: var(--color-text-muted);
          max-width: 600px;
          margin: 0 auto;
        }

        /* Timeline Layout */
        .ch-timeline {
          position: relative;
          padding-left: 2.5rem;
          margin-bottom: 4rem;
        }

        .ch-timeline::before {
          content: "";
          position: absolute;
          left: 7px;
          top: 10px;
          bottom: 10px;
          width: 2px;
          background: var(--color-border);
        }

        .ch-timeline-item {
          position: relative;
          margin-bottom: 3.5rem;
          transition: transform 0.2s ease;
        }

        .ch-timeline-item:last-child {
          margin-bottom: 0;
        }

        .ch-timeline-dot {
          position: absolute;
          left: -2.5rem;
          top: 6px;
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: var(--color-bg);
          border: 4px solid var(--color-b);
          box-shadow: 0 0 0 4px var(--color-bg);
          box-sizing: border-box;
          z-index: 2;
          transition: background-color 0.2s ease;
        }

        .ch-timeline-item:hover .ch-timeline-dot {
          background-color: var(--color-b);
        }

        .ch-card {
          background: var(--color-card-bg);
          border: 1px solid var(--color-border);
          border-radius: 1.25rem;
          padding: 2.25rem;
          box-shadow: 0 4px 20px rgba(0,0,0,0.01);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .ch-timeline-item:hover .ch-card {
          transform: translateY(-2px);
          box-shadow: 0 8px 30px rgba(0,0,0,0.03);
        }

        .ch-meta {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 0.75rem;
          flex-wrap: wrap;
        }

        .ch-ver {
          background: rgba(16, 185, 129, 0.1);
          color: var(--color-b);
          padding: 0.2rem 0.75rem;
          border-radius: 2rem;
          font-weight: 700;
          font-size: 0.85rem;
          border: 1px solid rgba(16, 185, 129, 0.15);
        }

        .ch-date {
          font-size: 0.9rem;
          color: var(--color-text-muted);
          font-weight: 600;
        }

        .ch-card h2 {
          font-size: 1.45rem;
          font-weight: 800;
          margin: 0 0 0.75rem 0;
          color: var(--color-text);
        }

        .ch-summary {
          font-size: 0.95rem;
          color: var(--color-text-muted);
          margin-bottom: 1.5rem;
          line-height: 1.6;
        }

        .ch-list {
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
        }

        .ch-list-item {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          font-size: 0.925rem;
          line-height: 1.5;
        }

        .ch-badge {
          display: inline-block;
          font-size: 0.65rem;
          font-weight: 800;
          text-transform: uppercase;
          padding: 0.15rem 0.5rem;
          border-radius: 0.25rem;
          letter-spacing: 0.5px;
          margin-top: 2px;
          min-width: 80px;
          text-align: center;
          flex-shrink: 0;
        }

        .badge-feature {
          background: rgba(16, 185, 129, 0.1);
          color: #10b981;
          border: 1px solid rgba(16, 185, 129, 0.15);
        }

        .badge-improvement {
          background: rgba(14, 165, 233, 0.1);
          color: #0ea5e9;
          border: 1px solid rgba(14, 165, 233, 0.15);
        }

        .badge-fix {
          background: rgba(245, 158, 11, 0.1);
          color: #f59e0b;
          border: 1px solid rgba(245, 158, 11, 0.15);
        }

        .ch-desc {
          color: var(--color-text);
        }

        @media (max-width: 600px) {
          .ch-timeline {
            padding-left: 1.75rem;
          }
          .ch-timeline::before {
            left: 5px;
          }
          .ch-timeline-dot {
            left: -1.75rem;
            top: 6px;
            width: 12px;
            height: 12px;
            border-width: 3px;
          }
          .ch-card {
            padding: 1.5rem;
          }
          .ch-list-item {
            flex-direction: column;
            gap: 0.25rem;
          }
          .ch-badge {
            min-width: unset;
            width: fit-content;
          }
          .ch-header h1 {
            font-size: 2.25rem;
          }
        }
      `}),(0,n.jsxs)(`div`,{className:`ch-container`,children:[(0,n.jsxs)(`nav`,{"aria-label":`breadcrumb`,style:{marginBottom:`1.5rem`,fontSize:`0.85rem`,color:`var(--color-text-muted)`,display:`flex`,alignItems:`center`,gap:`0.5rem`,flexWrap:`wrap`,userSelect:`none`},children:[(0,n.jsx)(`a`,{href:`/`,onClick:t=>{t.preventDefault(),e(`/`,`top`)},style:{color:`var(--color-text-muted)`,textDecoration:`none`,transition:`color 0.2s`,fontWeight:`500`},onMouseEnter:e=>e.currentTarget.style.color=`var(--color-b)`,onMouseLeave:e=>e.currentTarget.style.color=`var(--color-text-muted)`,children:`Home`}),(0,n.jsx)(`span`,{style:{opacity:.4,fontSize:`0.75rem`},children:(0,n.jsx)(`i`,{className:`fas fa-chevron-right`})}),(0,n.jsx)(`span`,{style:{fontWeight:`600`,color:`var(--color-text)`},children:`Changelog`})]}),(0,n.jsxs)(`div`,{className:`ch-header`,children:[(0,n.jsx)(`h1`,{children:`Changelog & Updates`}),(0,n.jsxs)(`p`,{children:[`We regularly update `,(0,n.jsxs)(`span`,{className:`logo-inline`,children:[(0,n.jsx)(`span`,{className:`logo-1`,children:`Your`}),(0,n.jsx)(`span`,{className:`logo-2`,children:`Own`}),(0,n.jsx)(`span`,{className:`logo-3`,children:`PDF`})]}),` with security patches, local memory enhancements, and new processing tools.`]})]}),(0,n.jsx)(`div`,{className:`ch-timeline`,children:r.map((e,t)=>(0,n.jsxs)(`div`,{className:`ch-timeline-item`,children:[(0,n.jsx)(`div`,{className:`ch-timeline-dot`}),(0,n.jsxs)(`div`,{className:`ch-card`,children:[(0,n.jsxs)(`div`,{className:`ch-meta`,children:[(0,n.jsxs)(`span`,{className:`ch-ver`,children:[`v`,e.version]}),(0,n.jsx)(`span`,{className:`ch-date`,children:e.date})]}),(0,n.jsx)(`h2`,{children:e.title}),(0,n.jsx)(`div`,{className:`ch-summary`,children:e.summary}),(0,n.jsx)(`div`,{className:`ch-list`,children:e.items.map((e,t)=>(0,n.jsxs)(`div`,{className:`ch-list-item`,children:[(0,n.jsx)(`span`,{className:`ch-badge ${e.type===`feature`?`badge-feature`:e.type===`improvement`?`badge-improvement`:`badge-fix`}`,children:e.type}),(0,n.jsx)(`span`,{className:`ch-desc`,children:e.desc})]},t))})]})]},t))})]})]});export{i as ChangelogPage};