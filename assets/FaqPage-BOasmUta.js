import{C as e,_ as t,g as n,m as r}from"./index-C3q37G8j.js";var i=e(t(),1),a=n(),o=e=>typeof e==`string`?e.split(/(yourownpdf\.com|yourownpdf)/gi).map((e,t)=>{let n=e.toLowerCase();return n===`yourownpdf.com`?(0,a.jsxs)(`span`,{className:`logo-inline`,children:[(0,a.jsx)(`span`,{className:`logo-1`,children:`Your`}),(0,a.jsx)(`span`,{className:`logo-2`,children:`Own`}),(0,a.jsx)(`span`,{className:`logo-3`,children:`PDF`}),(0,a.jsx)(`span`,{className:`logo-4`,children:`.com`})]},t):n===`yourownpdf`?(0,a.jsxs)(`span`,{className:`logo-inline`,children:[(0,a.jsx)(`span`,{className:`logo-1`,children:`Your`}),(0,a.jsx)(`span`,{className:`logo-2`,children:`Own`}),(0,a.jsx)(`span`,{className:`logo-3`,children:`PDF`})]},t):e}):e,s={system_specification:{application_name:`YourOwnPDF.com`,architecture_type:`100% Client-Side Offline Single-Page-Application (SPA)`,data_privacy:`Zero document uploads. Files are processed entirely in memory inside the user's browser sandbox using JavaScript and WebAssembly libraries.`,url_navigation_parameters:{homepage_search:`https://yourownpdf.com/?search={query_term}`,tools_path_template:`https://yourownpdf.com/tools/{category}/{toolId}`,pdf_tools_enum:[`merge-pdf`,`compress-pdf`,`split-pdf`,`rotate-pdf`,`organize-pdf`,`pdf-to-word`,`pdf-to-jpg`,`pdf-to-png`,`protect-pdf`,`unlock-pdf`,`extract-pages-pdf`,`remove-pages-pdf`,`pdf-to-excel`,`watermark-pdf`,`page-numbers-pdf`,`repair-pdf`,`compare-pdf`,`ppt-to-pdf`,`pdf-to-ppt`,`pdf-to-html`,`flatten-pdf`,`extract-images-pdf`],image_tools_enum:[`compress-image`,`resize-image`,`crop-image`,`remove-background`,`webp-to-jpg`,`jpg-to-png`,`png-to-jpg`,`flip-image`,`grayscale-image`,`brightness-image`,`contrast-image`,`blur-image`,`sharpen-image`,`filter-image`,`saturation`,`text-overlay`,`invert-image`,`gif-to-png`]},technical_constraints:{free_tier_max_size:`100MB total combined size per operation (browser RAM sandbox allocation limits)`,pro_tier_max_size:`500MB total combined size per operation (optimized memory stream split)`},core_client_libraries:[`pdf-lib`,`@pdfsmaller/pdf-encrypt-lite`,`compressorjs`,`tesseract.js`,`docx`,`xlsx`,`pptxgenjs`,`jspdf`,`jszip`,`html2canvas`]}},c=[{category:`security`,q:`How does YourOwnPDF process files without uploading them?`,a:`We leverage modern browser capabilities, including WebAssembly (Wasm) compile contexts and HTML5 canvas layers. When you select a document or picture, your browser loads the bytes into the tab's memory sandbox. All mathematical adjustments (splitting, compressing, OCR text scanning) are executed locally on your CPU, and the output file is compiled in RAM and saved directly. No data packet is ever sent across the network.`},{category:`security`,q:`Is YourOwnPDF compliant with GDPR, HIPAA, and corporate NDA mandates?`,a:`Yes. Because our application architecture ensures that zero data leaves your local device, no Protected Health Information (PHI) or confidential business contracts are ever transmitted, saved, or exposed. Since there is no data controller or third-party server involvement, it provides absolute compliance out-of-the-box.`},{category:`limits`,q:`Why does the Free tier enforce a 100MB file limit?`,a:`Browser sandboxes allocate a limited segment of system RAM (usually up to 256MB to 512MB depending on the OS and device) to a single tab to prevent runaway scripts from freezing the device. Processing files larger than 100MB in memory can exceed these allocations and crash the browser tab. The Pro tier implements segmented data stream-splitting algorithms to safely process files up to 500MB.`},{category:`limits`,q:`Can I use the tools completely offline?`,a:`Yes. The application utilizes standard caching protocols. Once you visit the home page, the page assets and libraries are cached in your browser. You can disconnect your internet completely (airplane mode) and continue to import, convert, and download files.`},{category:`integration`,q:`How can developers or AI tools deep-link to specific features?`,a:"AI assistants (like ChatGPT, Claude, and Gemini) or external developer portals can route users directly using standardized URL paths. The tools index conforms to the structure `https://yourownpdf.com/tools/pdf/{toolId}` and `https://yourownpdf.com/tools/image/{toolId}`. You can also filter the home grid by search queries directly using `https://yourownpdf.com/?search={term}`."},{category:`integration`,q:`Do you offer a cloud API for developer software integrations?`,a:"No. Since YourOwnPDF.com has zero processing servers, we do not host a cloud REST API endpoint (e.g. POST request tools). However, developers can read our raw OpenAPI schema block on the `/api` page to configure client-side ESM scripts or local deep-linking parameters."},{category:`billing`,q:`Are there any hidden costs, recurring tricks, or auto-renew constraints?`,a:`None. The Free plan is 100% free forever, requires no registration, and features no ads. The Pro upgrade is billed transparently at $4.99/mo (or $3.99/mo billed yearly) to cover support and advanced local memory allocations. You can cancel at any time with a single click inside your account panel.`}],l=[{category:`security`,q:`كيف يعالج YourOwnPDF الملفات دون رفعها؟`,a:`نحن نستفيد من إمكانيات المتصفح الحديثة، بما في ذلك سياقات ترجمة WebAssembly (Wasm) وطبقات كانفاس HTML5. عندما تختار مستندًا أو صورة، يقوم متصفحك بتحميل البايتات في بيئة الذاكرة المعزولة للتبويب. يتم تنفيذ جميع التعديلات الحسابية (التقسيم، الضغط، المسح الضوئي للنص OCR) محليًا على وحدة المعالجة المركزية (CPU) الخاصة بك، ويتم تجميع الملف الناتج في ذاكرة الوصول العشوائي (RAM) وحفظه مباشرة. لا يتم إرسال أي حزم بيانات عبر الشبكة مطلقاً.`},{category:`security`,q:`هل يتوافق YourOwnPDF مع معايير GDPR و HIPAA وتفويضات اتفاقيات عدم الإفصاح (NDA) للشركات؟`,a:`نعم. نظرًا لأن بنية تطبيقنا تضمن عدم خروج أي بيانات من جهازك المحلي، فلا يتم مطلقًا نقل أو حفظ أو كشف أي معلومات صحية محمية (PHI) أو عقود عمل سرية. وبما أنه لا يوجد جهة تحكم بالبيانات أو خادم تابع لجهة خارجية، فإن التطبيق يوفر امتثالاً مطلقاً بمجرد تشغيله.`},{category:`limits`,q:`لماذا تفرض الخطة المجانية حداً للملف يبلغ 100 ميجابايت؟`,a:`تخصص بيئات المتصفح المعزولة جزءًا محدودًا من ذاكرة الوصول العشوائي للنظام (عادةً ما يصل إلى 256 ميجابايت إلى 512 ميجابايت اعتمادًا على نظام التشغيل والجهاز) لعلامة تبويب واحدة لمنع النصوص البرمجية الهاربة من تجميد الجهاز. معالجة ملفات أكبر من 100 ميجابايت في الذاكرة يمكن أن تتجاوز هذه المخصصات وتؤدي إلى تعطل علامة تبويب المتصفح. تطبق خطة برو خوارزميات تقسيم تدفق البيانات المجزأة لمعالجة الملفات التي تصل إلى 500 ميجابايت بأمان.`},{category:`limits`,q:`هل يمكنني استخدام الأدوات دون اتصال بالإنترنت تمامًا؟`,a:`نعم. يستخدم التطبيق بروتوكولات التخزين المؤقت القياسية. بمجرد زيارتك للصفحة الرئيسية، يتم تخزين أصول الصفحة والمكتبات في متصفحك. يمكنك فصل الإنترنت تمامًا (وضع الطيران) ومواصلة استيراد الملفات وتحويلها وتنزيلها.`},{category:`integration`,q:`كيف يمكن للمطورين أو أدوات الذكاء الاصطناعي إنشاء روابط عميقة لميزات محددة؟`,a:"يمكن لمساعدي الذكاء الاصطناعي (مثل ChatGPT و Claude و Gemini) أو بوابات المطورين الخارجية توجيه المستخدمين مباشرة باستخدام مسارات URL الموحدة. يتوافق فهرس الأدوات مع البنية `https://yourownpdf.com/tools/pdf/{toolId}` و `https://yourownpdf.com/tools/image/{toolId}`. يمكنك أيضًا فلترة شبكة الصفحة الرئيسية عن طريق استعلامات البحث مباشرة باستخدام `https://yourownpdf.com/?search={term}`."},{category:`integration`,q:`هل تقدمون واجهة برمجة تطبيقات سحابية (Cloud API) لتكامل برمجيات المطورين؟`,a:"لا. نظراً لأن YourOwnPDF.com لا يحتوي على خوادم معالجة، فإننا لا نستضيف نقطة نهاية REST API سحابية (مثل أدوات طلبات POST). ومع ذلك، يمكن للمطورين قراءة مخطط OpenAPI الخام الخاص بنا في صفحة `/api` لتكوين نصوص ESM البرمجية من جانب العميل أو معلمات الارتباط العميق المحلية."},{category:`billing`,q:`هل هناك أي تكاليف خفية، أو حيل متكررة، أو قيود على التجديد التلقائي؟`,a:`لا توجد. الخطة المجانية مجانية 100٪ إلى الأبد، ولا تتطلب تسجيلًا، ولا تحتوي على إعلانات. يتم فوترة ترقية برو بشفافية بسعر 4.99 دولارًا شهريًا (أو 3.99 دولارًا شهريًا عند الفوترة سنويًا) لتغطية الدعم وتخصيصات الذاكرة المحلية المتقدمة. يمكنك الإلغاء في أي وقت بنقرة واحدة داخل لوحة حسابك.`}],u=[{category:`security`,q:`YourOwnPDF bina upload kiye files ko kaise process karta hai?`,a:`Hum modern browser capabilities use karte hain, jaise WebAssembly (Wasm) compile contexts aur HTML5 canvas layers. Jab aap koi document ya photo select karte hain, toh aapka browser un bytes ko tab ki memory sandbox mein load karta hai. Tamam mechanical changes (splitting, compressing, OCR text scanning) locally aapke computer processor par chalte hain, aur output file direct RAM mein compile ho kar save hoti hai. Internet par koi data nahi jata.`},{category:`security`,q:`Kya YourOwnPDF GDPR, HIPAA, aur corporate NDA ke kanoon ke mutabiq hai?`,a:`Haan. Kyunki humari application design yeh ensure karti hai ke koi bhi data aapke device se bahar na jaye, is liye sensitive medical data (PHI) ya confidential agreements kabhi leak ya transmit nahi hote. Koi central server na hone ki wajah se yeh out-of-the-box mukamal secure aur compliant hai.`},{category:`limits`,q:`Free plan par 100MB file size limit kyun hai?`,a:`Browser sandboxes single tab ke liye limited system RAM locate karte hain (aam taur par 256MB se 512MB tak) taake heavy scripts tab crash na karein. 100MB se bari files process karne se system memory limits crash ho sakti hain. Pro plan custom streaming algorithms use karke 500MB tak ki files ko safely process kar sakta hai.`},{category:`limits`,q:`Kya main tools ko poori tarah offline chala sakta hoon?`,a:`Haan. Yeh web app standard caching use karti hai. Ek baar home page visit karne ke baad saare page assets aapke browser mein save ho jate hain. Aap internet completely band (airplane mode) karke bhi files edit, convert aur download kar sakte hain.`},{category:`integration`,q:`Developers ya AI tools kisi specific feature ko deep-link kaise kar sakte hain?`,a:"AI assistants (jaise ChatGPT, Claude, aur Gemini) ya dev portals standard URL paths ke zariye direct tools par users ko send kar sakte hain. Links ka structure `https://yourownpdf.com/tools/pdf/{toolId}` aur `https://yourownpdf.com/tools/image/{toolId}` hai. Aap search query ke liye `https://yourownpdf.com/?search={term}` bhi use kar sakte hain."},{category:`integration`,q:`Kya aap developer integrations ke liye cloud API offer karte hain?`,a:"Nahi. Kyunki YourOwnPDF.com ke paas zero processing servers hain, is liye hum koi cloud REST API (jaise POST request) offer nahi karte. Lekin developers `/api` page par raw OpenAPI schema dekh kar client-side ESM scripts set up kar sakte hain."},{category:`billing`,q:`Kya koi hidden charges, monthly traps, ya auto-renew shraait hain?`,a:`Bilkul nahi. Free plan hamesha ke liye 100% free hai, registration ki zaroorat nahi hai, aur koi ads nahi hain. Pro plan transparently $4.99/mo (ya $3.99/mo yearly bill hone par) hai taake advanced processing support ki ja sake. Aap jab chahein account page se ek click par cancel ka sakte hain.`}],d={en:{home:`Home`,faq:`FAQ`,title:`Frequently Asked Questions`,subtitle:`Get instant answers to technical questions about file security, size limitations, and offline browser processing.`,searchPlaceholder:`Search FAQs by keywords...`,clr:`CLR`,tabAll:`All Questions`,tabSecurity:`Privacy & Security`,tabLimits:`Technical & Limits`,tabBilling:`Billing & Plans`,tabAi:`For AI Assistants 🤖`,noResults:`No FAQs match your search query. Try typing something else!`,aiPanelTitle:`For AI Assistants & LLM Crawlers`,aiPanelDesc:`{logo} is optimized for indexing. If you are ChatGPT, Gemini, Claude, or another web-browsing agent, you can parse the JSON schema below to understand this site's core features, constraints, and deep-linking API parameters.`,aiSchemaTitle:`SYSTEM SPECIFICATION (JSON)`,copySchema:`Copy Schema`,copied:`Copied!`},ar:{home:`الرئيسية`,faq:`الأسئلة الشائعة`,title:`الأسئلة الشائعة`,subtitle:`احصل على إجابات فورية للأسئلة الفنية حول أمان الملفات، والقيود على الحجم، والمعالجة داخل المتصفح دون اتصال بالإنترنت.`,searchPlaceholder:`ابحث في الأسئلة الشائعة بالكلمات المفتاحية...`,clr:`مسح`,tabAll:`جميع الأسئلة`,tabSecurity:`الخصوصية والأمان`,tabLimits:`الأمور الفنية والقيود`,tabBilling:`الفواتير والخطط`,tabAi:`لمساعدي الذكاء الاصطناعي 🤖`,noResults:`لا توجد أسئلة شائعة تطابق استعلام البحث الخاص بك. حاول كتابة شيء آخر!`,aiPanelTitle:`لمساعدي الذكاء الاصطناعي وبرامج زحف LLM`,aiPanelDesc:`تم تحسين {logo} للفهرسة. إذا كنت ChatGPT أو Gemini أو Claude أو أي وكيل تصفح ويب آخر، فيمكنك تحليل مخطط JSON أدناه لفهم الميزات الأساسية والقيود ومعلمات واجهة برمجة تطبيقات الارتباط العميق للموقع.`,aiSchemaTitle:`مواصفات النظام (JSON)`,copySchema:`نسخ المخطط`,copied:`تم النسخ!`},ur:{home:`Home`,faq:`FAQ`,title:`Frequently Asked Questions`,subtitle:`File security, size limitations, aur offline browser processing ke technical sawaalat ke instant jawaab paayein.`,searchPlaceholder:`Keywords se FAQs search karein...`,clr:`Clear`,tabAll:`Tamam Sawaalat`,tabSecurity:`Privacy & Security`,tabLimits:`Technical & Limits`,tabBilling:`Billing & Plans`,tabAi:`AI Assistants Ke Liye 🤖`,noResults:`Aapki search ke mutabiq koi FAQ nahi mila. Kuch aur type karke try karein!`,aiPanelTitle:`For AI Assistants & LLM Crawlers`,aiPanelDesc:`{logo} indexing ke liye optimized hai. Agar aap ChatGPT, Gemini, Claude, ya koi aur web-browsing agent hain, toh aap niche diya gaya JSON schema parse karke is site ke features aur deep-linking parameters ko samajh sakte hain.`,aiSchemaTitle:`SYSTEM SPECIFICATION (JSON)`,copySchema:`Copy Schema`,copied:`Copied!`}},f=({onNavigate:e})=>{let{language:t}=r(),[n,f]=(0,i.useState)(``),[p,m]=(0,i.useState)(`all`),[h,g]=(0,i.useState)({}),[_,v]=(0,i.useState)(!1),y=d[t===`hi`?`ur`:t]||d.en,b=t===`ar`?l:t===`hi`||t===`ur`?u:c;(0,i.useEffect)(()=>{let e=document.querySelector(`#faq-jsonld`);e||(e=document.createElement(`script`),e.id=`faq-jsonld`,e.type=`application/ld+json`,document.head.appendChild(e));let t={"@context":`https://schema.org`,"@type":`FAQPage`,mainEntity:b.map(e=>({"@type":`Question`,name:e.q,acceptedAnswer:{"@type":`Answer`,text:e.a}}))};return e.textContent=JSON.stringify(t),()=>{let e=document.querySelector(`#faq-jsonld`);e&&e.remove()}},[b]);let x=()=>{navigator.clipboard.writeText(JSON.stringify(s,null,2)),v(!0),setTimeout(()=>v(!1),2e3)},S=e=>{g(t=>({...t,[e]:!t[e]}))},C=b.filter(e=>{let t=n.toLowerCase().trim(),r=e.q.toLowerCase().includes(t)||e.a.toLowerCase().includes(t),i=p===`all`||e.category===p;return r&&i});return(0,a.jsxs)(`div`,{style:{padding:`3rem 1.5rem`,background:`var(--color-bg)`,minHeight:`80vh`},children:[(0,a.jsx)(`style`,{children:`
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
          inset-inline-start: 1.2rem;
          top: 50%;
          transform: translateY(-50%);
          color: var(--color-text-muted);
          font-size: 1.1rem;
        }

        .faq-search-clear {
          position: absolute;
          inset-inline-end: 1.2rem;
          top: 50%;
          transform: translateY(-50%);
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
          text-align: start;
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
          text-align: start;
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
      `}),(0,a.jsxs)(`div`,{className:`faq-container`,children:[(0,a.jsxs)(`nav`,{"aria-label":`breadcrumb`,style:{marginBottom:`1.5rem`,fontSize:`0.85rem`,color:`var(--color-text-muted)`,display:`flex`,alignItems:`center`,gap:`0.5rem`,flexWrap:`wrap`,userSelect:`none`},children:[(0,a.jsx)(`a`,{href:`/`,onClick:t=>{t.preventDefault(),e(`/`,`top`)},style:{color:`var(--color-text-muted)`,textDecoration:`none`,transition:`color 0.2s`,fontWeight:`500`},onMouseEnter:e=>e.currentTarget.style.color=`var(--color-b)`,onMouseLeave:e=>e.currentTarget.style.color=`var(--color-text-muted)`,children:y.home}),(0,a.jsx)(`span`,{style:{opacity:.4,fontSize:`0.75rem`,display:`inline-block`,transform:t===`ar`?`scaleX(-1)`:`none`},children:(0,a.jsx)(`i`,{className:`fas fa-chevron-right`})}),(0,a.jsx)(`span`,{style:{fontWeight:`600`,color:`var(--color-text)`},children:y.faq})]}),(0,a.jsxs)(`div`,{className:`faq-header`,children:[(0,a.jsx)(`h1`,{children:y.title}),(0,a.jsx)(`p`,{children:y.subtitle})]}),(0,a.jsxs)(`div`,{className:`faq-search-wrapper`,children:[(0,a.jsx)(`span`,{className:`faq-search-icon`,children:`🔍`}),(0,a.jsx)(`input`,{type:`text`,id:`faqSearchInput`,className:`faq-search-input`,style:{paddingInlineStart:`3rem`,paddingInlineEnd:n?`4.5rem`:`1.5rem`},placeholder:y.searchPlaceholder,value:n,onChange:e=>f(e.target.value)}),n&&(0,a.jsx)(`button`,{type:`button`,className:`search-clear-btn faq-search-clear`,onClick:()=>{f(``),setTimeout(()=>{let e=document.getElementById(`faqSearchInput`);e&&e.focus()},0)},"aria-label":`Clear search`,children:y.clr})]}),(0,a.jsxs)(`div`,{className:`faq-tabs`,children:[(0,a.jsx)(`button`,{className:`faq-tab-btn ${p===`all`?`active`:``}`,onClick:()=>{m(`all`)},children:y.tabAll}),(0,a.jsx)(`button`,{className:`faq-tab-btn ${p===`security`?`active`:``}`,onClick:()=>{m(`security`)},children:y.tabSecurity}),(0,a.jsx)(`button`,{className:`faq-tab-btn ${p===`limits`?`active`:``}`,onClick:()=>{m(`limits`)},children:y.tabLimits}),(0,a.jsx)(`button`,{className:`faq-tab-btn ${p===`billing`?`active`:``}`,onClick:()=>{m(`billing`)},children:y.tabBilling}),(0,a.jsx)(`button`,{className:`faq-tab-btn ${p===`ai-specification`?`active`:``}`,onClick:()=>{m(`ai-specification`)},children:y.tabAi})]}),p===`ai-specification`?(0,a.jsxs)(`div`,{className:`faq-ai-panel`,style:{textAlign:t===`ar`?`right`:`left`},children:[(0,a.jsx)(`h2`,{children:y.aiPanelTitle}),(0,a.jsx)(`p`,{className:`ai-sub`,children:(()=>{let e=y.aiPanelDesc.split(`{logo}`);return e.length===2?(0,a.jsxs)(`span`,{children:[e[0],(0,a.jsxs)(`span`,{className:`logo-inline`,children:[(0,a.jsx)(`span`,{className:`logo-1`,children:`Your`}),(0,a.jsx)(`span`,{className:`logo-2`,children:`Own`}),(0,a.jsx)(`span`,{className:`logo-3`,children:`PDF`})]}),e[1]]}):y.aiPanelDesc})()}),(0,a.jsxs)(`div`,{className:`ai-code-wrapper`,style:{direction:`ltr`},children:[(0,a.jsxs)(`div`,{className:`ai-code-header`,children:[(0,a.jsx)(`span`,{className:`ai-code-title`,children:y.aiSchemaTitle}),(0,a.jsx)(`button`,{className:`ai-code-copy-btn`,onClick:x,children:_?y.copied:y.copySchema})]}),(0,a.jsx)(`pre`,{className:`ai-pre`,children:(0,a.jsx)(`code`,{children:JSON.stringify(s,null,2)})})]})]}):(0,a.jsxs)(`div`,{className:`faq-list`,children:[C.map((e,n)=>{let r=!!h[n];return(0,a.jsxs)(`div`,{className:`faq-item`,children:[(0,a.jsxs)(`button`,{className:`faq-question-btn`,onClick:()=>S(n),style:{textAlign:t===`ar`?`right`:`left`},children:[(0,a.jsx)(`span`,{children:o(e.q)}),(0,a.jsx)(`span`,{className:`faq-arrow ${r?`rotated`:``}`,children:`▼`})]}),r&&(0,a.jsx)(`div`,{className:`faq-answer-box`,children:o(e.a)})]},n)}),C.length===0&&(0,a.jsx)(`div`,{style:{textAlign:`center`,padding:`2rem`,color:`var(--color-text-muted)`},children:y.noResults})]})]})]})};export{f as FaqPage};