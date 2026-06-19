import{f as e,p as t,y as n}from"./index-D9Fo1s_e.js";var r=n(t(),1),i=e(),a=e=>typeof e==`string`?e.split(/(yourownpdf\.com|yourownpdf)/gi).map((e,t)=>{let n=e.toLowerCase();return n===`yourownpdf.com`?(0,i.jsxs)(`span`,{className:`logo-inline`,children:[(0,i.jsx)(`span`,{className:`logo-1`,children:`Your`}),(0,i.jsx)(`span`,{className:`logo-2`,children:`Own`}),(0,i.jsx)(`span`,{className:`logo-3`,children:`PDF`}),(0,i.jsx)(`span`,{className:`logo-4`,children:`.com`})]},t):n===`yourownpdf`?(0,i.jsxs)(`span`,{className:`logo-inline`,children:[(0,i.jsx)(`span`,{className:`logo-1`,children:`Your`}),(0,i.jsx)(`span`,{className:`logo-2`,children:`Own`}),(0,i.jsx)(`span`,{className:`logo-3`,children:`PDF`})]},t):e}):e,o=({onNavigate:e})=>{let[t,n]=(0,r.useState)(`monthly`),[o,s]=(0,r.useState)(null),c=(t,n)=>{t.preventDefault(),e(n)},l=e=>{s(o===e?null:e)};return(0,i.jsxs)(`div`,{style:{padding:`3rem 1.5rem`,background:`var(--color-bg)`,minHeight:`80vh`},children:[(0,i.jsx)(`style`,{children:`
        .pr-container {
          max-width: 950px;
          margin: 0 auto;
          font-family: var(--font-sans, system-ui, -apple-system, sans-serif);
          color: var(--color-text);
          line-height: 1.65;
        }

        .pr-header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .pr-header h1 {
          font-size: 2.75rem;
          font-weight: 800;
          margin-bottom: 1rem;
          letter-spacing: -0.8px;
          background: linear-gradient(135deg, var(--color-b, #10b981), #0ea5e9);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .pr-header p {
          font-size: 1.2rem;
          color: var(--color-text-muted);
          max-width: 600px;
          margin: 0 auto 2rem;
        }

        /* Billing Switch */
        .billing-toggle-container {
          display: inline-flex;
          align-items: center;
          background: var(--color-card-hover);
          border: 1px solid var(--color-border);
          padding: 0.3rem;
          border-radius: 2rem;
          margin-bottom: 1rem;
        }

        .billing-toggle-btn {
          background: transparent;
          border: none;
          color: var(--color-text-muted);
          padding: 0.5rem 1.5rem;
          border-radius: 1.5rem;
          font-size: 0.9rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
        }

        .billing-toggle-btn.active {
          background: var(--color-card-bg);
          color: var(--color-text);
          box-shadow: 0 2px 8px rgba(0,0,0,0.05);
        }

        /* Cards Grid */
        .pr-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2.5rem;
          margin-bottom: 4rem;
          align-items: stretch;
        }

        .pr-card {
          background: var(--color-card-bg);
          border: 1px solid var(--color-border);
          border-radius: 1.5rem;
          padding: 3rem 2.5rem;
          display: flex;
          flex-direction: column;
          position: relative;
          box-shadow: 0 4px 20px rgba(0,0,0,0.01);
          box-sizing: border-box;
        }

        .pr-card.popular {
          border-color: var(--color-b);
          box-shadow: 0 10px 30px rgba(16, 185, 129, 0.05);
        }

        .popular-badge {
          position: absolute;
          top: -14px;
          left: 50%;
          transform: translateX(-50%);
          background: var(--color-b);
          color: white;
          padding: 0.3rem 1.2rem;
          border-radius: 2rem;
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1px;
          box-shadow: 0 4px 10px rgba(16, 185, 129, 0.2);
        }

        .pr-card-header {
          margin-bottom: 2rem;
          text-align: center;
        }

        .pr-card-name {
          font-size: 1.5rem;
          font-weight: 800;
          margin-bottom: 0.5rem;
        }

        .pr-card-price {
          font-size: 3rem;
          font-weight: 900;
          margin-bottom: 0.5rem;
          color: var(--color-text);
          display: flex;
          align-items: baseline;
          justify-content: center;
        }

        .pr-card-price span.period {
          font-size: 1rem;
          color: var(--color-text-muted);
          font-weight: 500;
          margin-left: 0.25rem;
        }

        .pr-card-desc {
          font-size: 0.95rem;
          color: var(--color-text-muted);
          min-height: 48px;
        }

        .pr-card-cta {
          display: block;
          width: 100%;
          padding: 0.9rem 1.5rem;
          border-radius: 0.75rem;
          font-size: 1rem;
          font-weight: 700;
          text-align: center;
          text-decoration: none;
          box-sizing: border-box;
          margin-bottom: 2rem;
          transition: all 0.2s;
          cursor: pointer;
        }

        .cta-free {
          background: var(--color-card-hover);
          color: var(--color-text);
          border: 1px solid var(--color-border);
        }

        .cta-free:hover {
          background: var(--color-border);
        }

        .cta-pro {
          background: var(--color-b);
          color: white;
          border: none;
          box-shadow: 0 4px 12px rgba(16, 185, 129, 0.25);
        }

        .cta-pro:hover {
          background: #16a34a;
          transform: translateY(-1px);
          box-shadow: 0 6px 16px rgba(16, 185, 129, 0.3);
        }

        .pr-features-list {
          list-style: none;
          padding: 0;
          margin: 0;
          text-align: left;
        }

        .pr-features-list li {
          font-size: 0.95rem;
          margin-bottom: 0.85rem;
          display: flex;
          align-items: center;
          gap: 0.75rem;
          color: var(--color-text);
        }

        .pr-features-list li i.check {
          color: var(--color-b);
          font-size: 1.05rem;
        }

        .pr-features-list li i.cross {
          color: #ef4444;
          font-size: 1.05rem;
          opacity: 0.5;
        }

        /* Comparative Table */
        .pr-table-section {
          background: var(--color-card-bg);
          border: 1px solid var(--color-border);
          border-radius: 1.5rem;
          padding: 3rem 2.5rem;
          margin-bottom: 4rem;
          box-shadow: 0 4px 20px rgba(0,0,0,0.01);
        }

        .pr-table-section h2 {
          font-size: 1.75rem;
          font-weight: 800;
          text-align: center;
          margin-top: 0;
          margin-bottom: 2.5rem;
        }

        .pr-table-wrapper {
          overflow-x: auto;
        }

        table.pr-table {
          width: 100%;
          border-collapse: collapse;
          text-align: left;
          font-size: 0.95rem;
        }

        table.pr-table th, table.pr-table td {
          padding: 1rem 1.25rem;
          border-bottom: 1px solid var(--color-border);
        }

        table.pr-table th {
          font-weight: 750;
          color: var(--color-text);
          font-size: 1.05rem;
        }

        table.pr-table td.plan-col {
          font-weight: 600;
        }

        /* FAQs */
        .pr-faq-section {
          margin-bottom: 4rem;
        }

        .pr-faq-section h2 {
          font-size: 1.75rem;
          font-weight: 800;
          text-align: center;
          margin-bottom: 2.5rem;
        }

        .pr-faq-grid {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .pr-faq-item {
          background: var(--color-card-bg);
          border: 1px solid var(--color-border);
          border-radius: 1rem;
          overflow: hidden;
          transition: all 0.2s ease;
        }

        .pr-faq-question {
          padding: 1.25rem 1.5rem;
          font-weight: 700;
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          align-items: center;
          user-select: none;
        }

        .pr-faq-answer {
          padding: 0 1.5rem 1.25rem 1.5rem;
          color: var(--color-text-muted);
          font-size: 0.95rem;
          line-height: 1.6;
        }

        .faq-arrow {
          font-size: 0.8rem;
          transition: transform 0.2s ease;
          color: var(--color-text-muted);
        }

        .faq-arrow.rotated {
          transform: rotate(180deg);
        }

        @media (max-width: 800px) {
          .pr-grid {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
          .pr-card {
            padding: 2.5rem 1.5rem;
          }
          .pr-table-section {
            padding: 2rem 1rem;
          }
        }
      `}),(0,i.jsxs)(`div`,{className:`pr-container`,children:[(0,i.jsxs)(`nav`,{"aria-label":`breadcrumb`,style:{marginBottom:`1.5rem`,fontSize:`0.85rem`,color:`var(--color-text-muted)`,display:`flex`,alignItems:`center`,gap:`0.5rem`,flexWrap:`wrap`,userSelect:`none`},children:[(0,i.jsx)(`a`,{href:`/`,onClick:t=>{t.preventDefault(),e(`/`,`top`)},style:{color:`var(--color-text-muted)`,textDecoration:`none`,transition:`color 0.2s`,fontWeight:`500`},onMouseEnter:e=>e.currentTarget.style.color=`var(--color-b)`,onMouseLeave:e=>e.currentTarget.style.color=`var(--color-text-muted)`,children:`Home`}),(0,i.jsx)(`span`,{style:{opacity:.4,fontSize:`0.75rem`},children:(0,i.jsx)(`i`,{className:`fas fa-chevron-right`})}),(0,i.jsx)(`span`,{style:{fontWeight:`600`,color:`var(--color-text)`},children:`Pricing`})]}),(0,i.jsxs)(`div`,{className:`pr-header`,children:[(0,i.jsx)(`h1`,{children:`Simple, Transparent Plans`}),(0,i.jsx)(`p`,{children:`No hidden fees, no auto-renew traps. Process your documents safely and choose the tier that fits your needs.`}),(0,i.jsxs)(`div`,{className:`billing-toggle-container`,children:[(0,i.jsx)(`button`,{className:`billing-toggle-btn ${t===`monthly`?`active`:``}`,onClick:()=>n(`monthly`),children:`Monthly Billed`}),(0,i.jsx)(`button`,{className:`billing-toggle-btn ${t===`yearly`?`active`:``}`,onClick:()=>n(`yearly`),children:`Yearly (Save 18%) 🎁`})]})]}),(0,i.jsxs)(`div`,{className:`pr-grid`,children:[(0,i.jsxs)(`div`,{className:`pr-card`,children:[(0,i.jsxs)(`div`,{className:`pr-card-header`,children:[(0,i.jsx)(`div`,{className:`pr-card-name`,children:`Free Plan`}),(0,i.jsxs)(`div`,{className:`pr-card-price`,children:[`$0`,(0,i.jsx)(`span`,{className:`period`,children:`/ lifetime`})]}),(0,i.jsx)(`div`,{className:`pr-card-desc`,children:`Ideal for everyday use. Process documents safely in-browser with zero uploads.`})]}),(0,i.jsx)(`a`,{href:`/`,onClick:e=>c(e,`/`),className:`pr-card-cta cta-free`,children:`Start using free tools`}),(0,i.jsxs)(`ul`,{className:`pr-features-list`,children:[(0,i.jsxs)(`li`,{children:[(0,i.jsx)(`i`,{className:`fas fa-check check`}),` 100% offline client-side security`]}),(0,i.jsxs)(`li`,{children:[(0,i.jsx)(`i`,{className:`fas fa-check check`}),` Access to all 40+ PDF & image tools`]}),(0,i.jsxs)(`li`,{children:[(0,i.jsx)(`i`,{className:`fas fa-check check`}),` Up to 100MB file size limit per task`]}),(0,i.jsxs)(`li`,{children:[(0,i.jsx)(`i`,{className:`fas fa-check check`}),` No account signup or registration`]}),(0,i.jsxs)(`li`,{children:[(0,i.jsx)(`i`,{className:`fas fa-check check`}),` Zero tracking cookies or ads`]}),(0,i.jsxs)(`li`,{children:[(0,i.jsx)(`i`,{className:`fas fa-times cross`}),` Unlimited batch compression`]}),(0,i.jsxs)(`li`,{children:[(0,i.jsx)(`i`,{className:`fas fa-times cross`}),` 24/7 priority customer support`]})]})]}),(0,i.jsxs)(`div`,{className:`pr-card popular`,children:[(0,i.jsx)(`div`,{className:`popular-badge`,children:`Recommended`}),(0,i.jsxs)(`div`,{className:`pr-card-header`,children:[(0,i.jsx)(`div`,{className:`pr-card-name`,children:`Pro Plan`}),(0,i.jsxs)(`div`,{className:`pr-card-price`,children:[t===`monthly`?`$4.99`:`$3.99`,(0,i.jsx)(`span`,{className:`period`,children:`/ month`})]}),(0,i.jsx)(`div`,{className:`pr-card-desc`,children:`For power users, designers, and teams handling large document batches.`})]}),(0,i.jsx)(`a`,{href:`/login`,onClick:e=>c(e,`/login`),className:`pr-card-cta cta-pro`,children:`Upgrade to Pro`}),(0,i.jsxs)(`ul`,{className:`pr-features-list`,children:[(0,i.jsxs)(`li`,{children:[(0,i.jsx)(`i`,{className:`fas fa-check check`}),` 100% offline client-side security`]}),(0,i.jsxs)(`li`,{children:[(0,i.jsx)(`i`,{className:`fas fa-check check`}),` Access to all 40+ PDF & image tools`]}),(0,i.jsxs)(`li`,{children:[(0,i.jsx)(`i`,{className:`fas fa-check check`}),` Up to 500MB file size limit per task`]}),(0,i.jsxs)(`li`,{children:[(0,i.jsx)(`i`,{className:`fas fa-check check`}),` Unlimited batch processing & downloads`]}),(0,i.jsxs)(`li`,{children:[(0,i.jsx)(`i`,{className:`fas fa-check check`}),` Custom watermark presets saving`]}),(0,i.jsxs)(`li`,{children:[(0,i.jsx)(`i`,{className:`fas fa-check check`}),` High-resolution image canvas scales`]}),(0,i.jsxs)(`li`,{children:[(0,i.jsx)(`i`,{className:`fas fa-check check`}),` 24/7 Priority support channel`]})]})]})]}),(0,i.jsxs)(`div`,{className:`pr-table-section`,children:[(0,i.jsx)(`h2`,{children:`Compare Features Upfront`}),(0,i.jsx)(`div`,{className:`pr-table-wrapper`,children:(0,i.jsxs)(`table`,{className:`pr-table`,children:[(0,i.jsx)(`thead`,{children:(0,i.jsxs)(`tr`,{children:[(0,i.jsx)(`th`,{children:`Features & Operations`}),(0,i.jsx)(`th`,{children:`Free Plan`}),(0,i.jsx)(`th`,{children:`Pro Plan`})]})}),(0,i.jsxs)(`tbody`,{children:[(0,i.jsxs)(`tr`,{children:[(0,i.jsx)(`td`,{children:(0,i.jsx)(`strong`,{children:`Pricing Billed`})}),(0,i.jsx)(`td`,{children:`$0 (Always Free)`}),(0,i.jsx)(`td`,{children:`$4.99/mo or $39.99/yr`})]}),(0,i.jsxs)(`tr`,{children:[(0,i.jsx)(`td`,{children:(0,i.jsx)(`strong`,{children:`File Location`})}),(0,i.jsx)(`td`,{children:`Local RAM (Never leaves device)`}),(0,i.jsx)(`td`,{children:`Local RAM (Never leaves device)`})]}),(0,i.jsxs)(`tr`,{children:[(0,i.jsx)(`td`,{children:(0,i.jsx)(`strong`,{children:`Maximum File Size Limit`})}),(0,i.jsx)(`td`,{children:`100MB total per operation`}),(0,i.jsx)(`td`,{children:`500MB total per operation`})]}),(0,i.jsxs)(`tr`,{children:[(0,i.jsx)(`td`,{children:(0,i.jsx)(`strong`,{children:`Total Utilities Included`})}),(0,i.jsx)(`td`,{children:`All 40+ active tools`}),(0,i.jsx)(`td`,{children:`All 40+ active tools + presets`})]}),(0,i.jsxs)(`tr`,{children:[(0,i.jsx)(`td`,{children:(0,i.jsx)(`strong`,{children:`Batch Processing Limit`})}),(0,i.jsx)(`td`,{children:`Up to 10 files simultaneously`}),(0,i.jsx)(`td`,{children:`Unlimited batching`})]}),(0,i.jsxs)(`tr`,{children:[(0,i.jsx)(`td`,{children:(0,i.jsx)(`strong`,{children:`Account Registration`})}),(0,i.jsx)(`td`,{children:`Not required (Anonymous usage)`}),(0,i.jsx)(`td`,{children:`Required (To manage license keys)`})]}),(0,i.jsxs)(`tr`,{children:[(0,i.jsx)(`td`,{children:(0,i.jsx)(`strong`,{children:`Customer Support`})}),(0,i.jsx)(`td`,{children:`Online guides & community`}),(0,i.jsx)(`td`,{children:`Priority 24/7 ticket channels`})]}),(0,i.jsxs)(`tr`,{children:[(0,i.jsx)(`td`,{children:(0,i.jsx)(`strong`,{children:`Contract Hidden Fees`})}),(0,i.jsx)(`td`,{children:`None`}),(0,i.jsx)(`td`,{children:`None (Cancel in one click)`})]})]})]})})]}),(0,i.jsxs)(`div`,{className:`pr-faq-section`,children:[(0,i.jsx)(`h2`,{children:`Pricing Questions & Answers`}),(0,i.jsx)(`div`,{className:`pr-faq-grid`,children:[{q:`Why is there a 100MB size limit on the Free tier?`,a:`To maintain absolute document privacy, YourOwnPDF processes all files directly in your browser RAM using client-side WebAssembly. Browsers limit memory allocations for safety. The 100MB limit protects your browser tab from running out of memory and crashing. The Pro plan utilizes optimized memory-splitting engines to handle files up to 500MB locally.`},{q:`Does the Pro plan compromise my file privacy by uploading them?`,a:`Absolutely not. Our privacy architecture is identical across both plans. All tools—whether on Free or Pro—run 100% locally inside your browser sandbox. Your files are never uploaded, transmitted, or saved to any remote server or database.`},{q:`Are there any hidden fees or auto-renew traps?`,a:`None at all. YourOwnPDF is built on complete transparency. The Free tier requires no credit card, no sign-up, and has no expiry date. The Pro tier is billed strictly as shown ($4.99/month or $49/year) and can be cancelled with a single click in your account page. There are no termination fees or hidden charges.`},{q:`How does the billing work, and is it secure?`,a:`We partner with Stripe and PayPal to process payments under 256-bit SSL encryption. We do not store or process your credit card numbers on our servers. Subscriptions can be managed, paused, or cancelled instantly at any time.`}].map((e,t)=>(0,i.jsxs)(`div`,{className:`pr-faq-item`,children:[(0,i.jsxs)(`div`,{className:`pr-faq-question`,onClick:()=>l(t),children:[(0,i.jsx)(`span`,{children:a(e.q)}),(0,i.jsx)(`span`,{className:`faq-arrow ${o===t?`rotated`:``}`,children:`▼`})]}),o===t&&(0,i.jsx)(`div`,{className:`pr-faq-answer`,children:a(e.a)})]},t))})]})]})]})};export{o as PricingPage};