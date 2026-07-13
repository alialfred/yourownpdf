import{T as e,g as t,v as n,y as r}from"./index-DsA-W7Dy.js";var i=e(r(),1),a=n(),o=`openapi: 3.0.3
info:
  title: YourOwnPDF.com Web Navigation API
  description: >
    YourOwnPDF is a 100% client-side web application suite for PDF and image editing.
    It does not contain backend server endpoints for processing files. All file operations
    occur in memory inside the user's browser tab using WebAssembly and client-side JavaScript.
    
    This specification documents the semantic routes and deep-linking parameters of the SPA
    so that AI agents, crawlers, and assistant tools can direct users to the appropriate tools.
  version: 1.1.0
servers:
  - url: https://yourownpdf.com
    description: Production environment
paths:
  /:
    get:
      summary: Get Homepage / Tools Grid
      description: Returns the main homepage listing all 40+ offline PDF and Image processing utility cards.
      parameters:
        - name: search
          in: query
          description: Pre-filter the tools grid by search queries (e.g., "compress", "merge").
          required: false
          schema:
            type: string
      responses:
        '200':
          description: Main HTML page loaded, displaying filtered or complete list of client-side tools.

  /how-to-use:
    get:
      summary: Beginner guide page
      description: Returns the guide showing client-side mockups of how to upload, adjust settings, and download outputs safely.
      responses:
        '200':
          description: Guide page rendered successfully.

  /api:
    get:
      summary: API & Developer specs page
      description: Returns this API documentation and YAML spec page for bot integrations.
      responses:
        '200':
          description: API page rendered successfully.

  /pricing:
    get:
      summary: Pricing Page
      description: Displays comparative metrics of Free and Pro tiers, explaining local memory allocation guidelines.
      responses:
        '200':
          description: Pricing page rendered successfully.

  /faq:
    get:
      summary: Frequently Asked Questions
      description: Displays indexed accordions mapping technical, security, and integration answers.
      responses:
        '200':
          description: FAQ page rendered successfully.

  /changelog:
    get:
      summary: Release changelogs
      description: Displays details and summary lists of all application build features, fixes, and improvements.
      responses:
        '200':
          description: Changelog page rendered successfully.

  /use-cases:
    get:
      summary: Audience Profiles Hub
      description: Displays target profiles listing how different professionals utilize local PDF utilities.
      responses:
        '200':
          description: Use cases hub page rendered successfully.

  /use-cases/{profileId}:
    get:
      summary: Audience Profile Details
      description: Returns the detailed industry profile containing case studies, why-local justifications, and recommended tools.
      parameters:
        - name: profileId
          in: path
          description: The audience category profile.
          required: true
          schema:
            type: string
            enum: [students, legal, healthcare, designers, business]
      responses:
        '200':
          description: Profile detail page rendered successfully.

  /tools/pdf/{toolId}:
    get:
      summary: Load PDF processing tool
      description: Launches the specific client-side PDF utility. The user interface allows drag-and-drop file inputs which are processed entirely locally.
      parameters:
        - name: toolId
          in: path
          description: The identifier for the PDF tool to load.
          required: true
          schema:
            type: string
            enum:
              - merge-pdf
              - compress-pdf
              - split-pdf
              - rotate-pdf
              - organize-pdf
              - jpg-to-pdf
              - image-to-pdf
              - pdf-to-word
              - pdf-to-jpg
              - pdf-to-png
              - compress-image
              - resize-image
              - crop-image
              - remove-background
              - webp-to-jpg
              - protect-pdf
              - jpg-to-png
              - png-to-jpg
              - flip-image
              - grayscale-image
              - brightness-image
              - contrast-image
              - blur-image
              - sharpen-image
              - filter-image
              - saturation
              - text-overlay
              - invert-image
              - gif-to-png
              - unlock-pdf
              - extract-pages-pdf
              - remove-pages-pdf
              - pdf-to-excel
              - watermark-pdf
              - page-numbers-pdf
              - repair-pdf
              - compare-pdf
              - ppt-to-pdf
              - pdf-to-ppt
              - pdf-to-text
              - pdf-to-html
              - flatten-pdf
              - extract-images-pdf
      responses:
        '200':
          description: Tool interface rendered successfully. File uploads processed locally in RAM.

  /tools/image/{toolId}:
    get:
      summary: Load Image processing tool
      description: Launches the specific client-side image utility. All bitmap calculations and canvas outputs run locally.
      parameters:
        - name: toolId
          in: path
          description: The identifier for the Image tool to load.
          required: true
          schema:
            type: string
            enum:
              - compress-image
              - resize-image
              - crop-image
              - remove-background
              - webp-to-jpg
              - jpg-to-png
              - png-to-jpg
              - flip-image
              - grayscale-image
              - brightness-image
              - contrast-image
              - blur-image
              - sharpen-image
              - filter-image
              - saturation
              - text-overlay
              - invert-image
              - gif-to-png
      responses:
        '200':
          description: Image tool interface rendered successfully.`,s={en:{home:`Home`,apiDocs:`API Docs`,title:`API Integration Specification`,subtitle:`Understand deep-linking parameters, local execution boundaries, and client-side code integration.`,warningTitle:`Zero Remote Server APIs (100% Client-Side)`,warningDesc:`To maintain absolute file privacy, {logo} does not support HTTP request endpoints (e.g. POST https://yourownpdf.com/api/merge). Any tool configuration, processing logic, and download packaging occur entirely in memory within the local browser sandbox.`,sect1Title:`Web Deep-Linking & Routing API`,sect1Desc:`Integrators, developer portals, or AI assistants can route users directly to specific tools or preset search indexes.`,sect1Sub1:`1. Filtering the Tools Grid`,sect1Sub1Desc:`You can pre-filter the tools grid on the homepage by appending a query string:`,sect1Sub1Example:`Example:`,sect1Sub1ExampleLinkText:`filters and displays only compression tools.`,sect1Sub2:`2. Launching PDF & Image Utilities`,sect1Sub2Desc:`Direct deep-links to launch individual tool pages:`,sect1Sub2ExamplePdf:`Example PDF:`,sect1Sub2ExamplePdfLinkText:`launches the client-side PDF merger.`,sect1Sub2ExampleImg:`Example Image:`,sect1Sub2ExampleImgLinkText:`launches the client-side image compressor.`,sect2Title:`OpenAPI Specification`,sect2Desc:`Download or copy the raw OpenAPI schema to help configure crawlers, plugins, or AI assistant agents.`,copySchema:`Copy Schema`,copied:`Copied!`,sect3Title:`Client-Side Processing Examples`,sect3Desc:`If you are building your own browser application and want to process files locally, you can reference the implementation snippets below using open-source packages:`,sect3Sub1:`1. Merge PDFs Locally using pdf-lib`,sect3Sub2:`2. Recompress JPEG Images via HTML5 Canvas`},ar:{home:`الرئيسية`,apiDocs:`وثائق API`,title:`مواصفات تكامل واجهة برمجة التطبيقات (API)`,subtitle:`افهم معلمات الارتباط العميق، وحدود التنفيذ المحلية، وتكامل التعليمات البرمجية من جانب العميل.`,warningTitle:`لا توجد خوادم واجهة برمجة تطبيقات عن بُعد (100٪ لدى العميل)`,warningDesc:`للحفاظ على الخصوصية المطلقة للملفات، لا تدعم {logo} نقاط نهاية طلبات HTTP (على سبيل المثال POST https://yourownpdf.com/api/merge). يحدث أي تكوين للأداة ومنطق المعالجة وتعبئة التنزيل بالكامل داخل ذاكرة المتصفح المحلية.`,sect1Title:`الارتباط العميق وتوجيه الويب (API)`,sect1Desc:`يمكن للمدمجين أو بوابات المطورين أو مساعدي الذكاء الاصطناعي توجيه المستخدمين مباشرةً إلى أدوات محددة أو فهارس بحث محددة مسبقًا.`,sect1Sub1:`1. تصفية شبكة الأدوات`,sect1Sub1Desc:`يمكنك تصفية شبكة الأدوات مسبقًا على الصفحة الرئيسية عن طريق إلحاق سلسلة استعلام:`,sect1Sub1Example:`مثال:`,sect1Sub1ExampleLinkText:`يقوم بتصفية وعرض أدوات الضغط فقط.`,sect1Sub2:`2. تشغيل أدوات PDF والصور`,sect1Sub2Desc:`روابط عميقة مباشرة لتشغيل صفحات أدوات فردية:`,sect1Sub2ExamplePdf:`مثال PDF:`,sect1Sub2ExamplePdfLinkText:`يقوم بتشغيل أداة دمج PDF المحلية.`,sect1Sub2ExampleImg:`مثال صورة:`,sect1Sub2ExampleImgLinkText:`يقوم بتشغيل ضاغط الصور المحلي.`,sect2Title:`مواصفات OpenAPI`,sect2Desc:`قم بتنزيل أو نسخ مخطط OpenAPI بتنسيقه الخام للمساعدة في تكوين برامج الزحف أو المكونات الإضافية أو وكلاء مساعدي الذكاء الاصطناعي.`,copySchema:`نسخ المخطط`,copied:`تم النسخ!`,sect3Title:`أمثلة على المعالجة من جانب العميل`,sect3Desc:`إذا كنت تقوم ببناء تطبيق متصفح خاص بك وتريد معالجة الملفات محليًا، فيمكنك الرجوع إلى مقتطفات التنفيذ أدناه باستخدام الحزم مفتوحة المصدر:`,sect3Sub1:`1. دمج ملفات PDF محلياً باستخدام pdf-lib`,sect3Sub2:`2. إعادة ضغط صور JPEG عبر HTML5 Canvas`},ur:{home:`ہوم`,apiDocs:`API دستاویزات`,title:`API انٹیگریشن کی تفصیلات`,subtitle:`ڈیپ لنکنگ پیرامیٹرز، لوکل ایگزیکیوشن کی حدود، اور کلائنٹ سائیڈ کوڈ انٹیگریشن کو سمجھیں۔`,warningTitle:`زیرو ریموٹ سرور APIs (100% کلائنٹ سائیڈ)`,warningDesc:`فائلوں کی مکمل پرائیویسی برقرار رکھنے کے لیے، {logo} ایچ ٹی ٹی پی ریکوئسٹ اینڈ پوائنٹس (مثلاً POST https://yourownpdf.com/api/merge) کو سپورٹ نہیں کرتا۔ تمام ٹول کنفیگریشن، پروسیسنگ لاجک، اور ڈاؤن لوڈ پیکیجنگ مکمل طور پر براؤزر میموری کے محفوظ ماحول کے اندر ہوتی ہے۔`,sect1Title:`ویب ڈیپ لنکنگ اور روٹنگ API`,sect1Desc:`انٹیگریٹرز، ڈویلپر پورٹلز، یا AI معاونین صارفین کو براہ راست مخصوص ٹولز یا پہلے سے سیٹ کردہ سرچ انڈیکس پر بھیج سکتے ہیں۔`,sect1Sub1:`1. ٹولز گرڈ کو فلٹر کرنا`,sect1Sub1Desc:`آپ ہوم پیج پر سرچ کوئری سٹرنگ شامل کر کے ٹولز گرڈ کو پہلے سے فلٹر کر سکتے ہیں:`,sect1Sub1Example:`مثال:`,sect1Sub1ExampleLinkText:`صرف کمپریشن ٹولز کو فلٹر اور ڈسپلے کرے گا۔`,sect1Sub2:`2. پی ڈی ایف اور امیج ٹولز لانچ کرنا`,sect1Sub2Desc:`انفرادی ٹول پیجز لانچ کرنے کے لیے براہ راست ڈیپ لنکس:`,sect1Sub2ExamplePdf:`مثال پی ڈی ایف:`,sect1Sub2ExamplePdfLinkText:`کلائنٹ سائیڈ پی ڈی ایف مرجر کو لانچ کرتا ہے۔`,sect1Sub2ExampleImg:`مثال تصویر:`,sect1Sub2ExampleImgLinkText:`کلائنٹ سائیڈ امیج کمپریسر کو لانچ کرتا ہے۔`,sect2Title:`OpenAPI تفصیلات`,sect2Desc:`کرالرز، پلگ انز، یا AI معاون ایجنٹس کو کنفیگر کرنے کے لیے خام OpenAPI اسکیما کاپی یا ڈاؤن لوڈ کریں۔`,copySchema:`اسکیما کاپی کریں`,copied:`کاپی ہو گیا!`,sect3Title:`کلائنٹ سائیڈ پروسیسنگ کی مثالیں`,sect3Desc:`اگر آپ اپنا براؤزر ایپلی کیشن بنا رہے ہیں اور فائلوں کو مقامی طور پر پروسیس کرنا چاہتے ہیں، تو آپ اوپن سورس پیکجز کا استعمال کرتے ہوئے نیچے دیے گئے کوڈ اسنیپٹس کا حوالہ لے سکتے ہیں:`,sect3Sub1:`1. pdf-lib کا استعمال کرتے ہوئے پی ڈی ایف کو لوکل مرج کرنا`,sect3Sub2:`2. HTML5 Canvas کے ذریعے JPEG امیجز کو دوبارہ کمپریس کرنا`},hi:{home:`होम`,apiDocs:`एपीआई दस्तावेज़`,title:`एपीआई एकीकरण विनिर्देश`,subtitle:`डीप-लिंकिंग पैरामीटर, स्थानीय निष्पादन सीमाओं, और क्लाइंट-साइड कोड एकीकरण को समझें।`,warningTitle:`शून्य रिमोट सर्वर एपीआई (100% क्लाइंट-साइड)`,warningDesc:`फ़ाइलों की पूर्ण गोपनीयता बनाए रखने के लिए, {logo} HTTP अनुरोध एंडपॉइंट (जैसे POST https://yourownpdf.com/api/merge) का समर्थन नहीं करता है। सभी टूल कॉन्फ़िगरेशन, प्रोसेसिंग लॉजिक, और डाउनलोड पैकेजिंग पूरी तरह से ब्राउज़र मेमोरी के सुरक्षित वातावरण में होती है।`,sect1Title:`वेब डीप-लिंकिंग और राउटिंग एपीआई`,sect1Desc:`एकीकरणकर्ता, डेवलपर पोर्टल, या एआई सहायक उपयोगकर्ताओं को सीधे विशिष्ट टूल या प्रीसेट खोज इंडेक्स पर निर्देशित कर सकते हैं।`,sect1Sub1:`1. टूल्स ग्रड को फ़िल्टर करना`,sect1Sub1Desc:`आप होमपेज पर खोज क्वेरी स्ट्रिंग जोड़कर टूल ग्रिड को पहले से फ़िल्टर कर सकते हैं:`,sect1Sub1Example:`उदाहरण:`,sect1Sub1ExampleLinkText:`केवल कम्प्रेशन टूल्स को फ़िल्टर और प्रदर्शित करेगा।`,sect1Sub2:`2. पीडीएफ और इमेज टूल लॉन्च करना`,sect1Sub2Desc:`व्यक्तिगत टूल पेजों को लॉन्च करने के लिए सीधे डीप-लिंक:`,sect1Sub2ExamplePdf:`उदाहरण पीडीएफ:`,sect1Sub2ExamplePdfLinkText:`क्लाइंट-साइड पीडीएफ मर्जर लॉन्च करता है।`,sect1Sub2ExampleImg:`उदाहरण छवि:`,sect1Sub2ExampleImgLinkText:`क्लाइंट-साइड इमेज कंप्रेसर लॉन्च करता है।`,sect2Title:`OpenAPI विनिर्देश`,sect2Desc:`क्रॉलर्स, प्लगइन्स, या एआई सहायक एजेंटों को कॉन्फ़िगर करने में सहायता के लिए कच्चे OpenAPI स्कीما को कॉपी या डाउनलोड करें।`,copySchema:`स्कीमा कॉपी करें`,copied:`कॉपी किया गया!`,sect3Title:`क्लाइंट-साइड प्रोसेसिंग के उदाहरण`,sect3Desc:`यदि आप अपना खुद का ब्राउज़र एप्लिकेशन बना रहे हैं और फ़ाइलों को स्थानीय रूप से प्रोसेस करना चाहते हैं, तो आप ओपन-सोर्स पैकेज का उपयोग करके नीचे दिए गए कोड स्निपेट का संदर्भ ले सकते हैं:`,sect3Sub1:`1. pdf-lib का उपयोग करके पीडीएफ को स्थानीय रूप से मर्ज करना`,sect3Sub2:`2. HTML5 Canvas के माध्यम से JPEG छवियों को पुनः कंप्रेस करना`}},c=({onNavigate:e})=>{let{language:n}=t(),[r,c]=(0,i.useState)(!1),l=s[n]||s.en,u=()=>{navigator.clipboard.writeText(o),c(!0),setTimeout(()=>c(!1),2e3)},d=(t,n)=>{e&&(t.preventDefault(),e(n))};return(0,a.jsxs)(`div`,{style:{padding:`3rem 1.5rem`,background:`var(--color-bg)`,minHeight:`80vh`},children:[(0,a.jsx)(`style`,{children:`
        .api-container {
          max-width: 900px;
          margin: 0 auto;
          font-family: var(--font-sans, system-ui, -apple-system, sans-serif);
          color: var(--color-text);
          line-height: 1.7;
        }

        .api-header {
          margin-bottom: 3rem;
          text-align: center;
        }

        .api-header h1 {
          font-size: 2.75rem;
          font-weight: 800;
          margin-bottom: 0.75rem;
          background: linear-gradient(135deg, var(--color-b, #10b981), #0ea5e9);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .api-header p {
          font-size: 1.2rem;
          color: var(--color-text-muted);
          max-width: 700px;
          margin: 0 auto;
        }

        .api-warning-card {
          background: rgba(239, 68, 68, 0.05);
          border: 1px dashed rgba(239, 68, 68, 0.25);
          border-radius: 1rem;
          padding: 1.5rem;
          margin-bottom: 3rem;
          display: flex;
          align-items: center;
          gap: 1.25rem;
        }

        .api-warning-card span.lock-icon {
          font-size: 2.5rem;
          line-height: 1;
        }

        .api-warning-card h4 {
          margin: 0 0 0.25rem 0;
          font-size: 1.1rem;
          font-weight: 700;
        }

        .api-warning-card p {
          margin: 0;
          font-size: 0.9rem;
          color: var(--color-text-muted);
        }

        .api-section {
          background: var(--color-card-bg);
          border: 1px solid var(--color-border);
          border-radius: 1.25rem;
          padding: 2.5rem;
          margin-bottom: 2.5rem;
          box-shadow: 0 4px 20px rgba(0,0,0,0.01);
        }

        .api-section h2 {
          font-size: 1.6rem;
          font-weight: 750;
          margin-top: 0;
          margin-bottom: 1.25rem;
          color: var(--color-text);
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .api-section h3 {
          font-size: 1.15rem;
          font-weight: 700;
          margin-top: 1.5rem;
          margin-bottom: 0.5rem;
        }

        .api-section ul {
          margin: 0.5rem 0 1.25rem 1.5rem;
        }

        .api-section li {
          margin-bottom: 0.5rem;
        }

        .code-box-wrapper {
          position: relative;
          margin: 1.25rem 0;
          border-radius: 0.75rem;
          overflow: hidden;
          border: 1px solid var(--color-border);
        }

        .code-box-header {
          background: var(--color-card-hover);
          padding: 0.5rem 1rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid var(--color-border);
        }

        .code-box-lang {
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--color-text-muted);
          text-transform: uppercase;
        }

        .code-box-copy-btn {
          background: var(--color-b);
          color: white;
          border: none;
          border-radius: 0.35rem;
          padding: 0.25rem 0.75rem;
          font-size: 0.75rem;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.15s;
        }

        .code-box-copy-btn:hover {
          background: #16a34a;
        }

        pre {
          margin: 0;
          padding: 1.25rem;
          background: var(--color-bg);
          font-family: 'Courier New', Courier, monospace;
          font-size: 0.85rem;
          overflow-x: auto;
          color: var(--color-text);
        }

        .api-method-badge {
          display: inline-block;
          padding: 0.15rem 0.5rem;
          border-radius: 0.25rem;
          font-weight: 800;
          font-size: 0.75rem;
          color: white;
          text-transform: uppercase;
          margin-right: 0.5rem;
        }

        .method-get { background: #0284c7; }
        .method-post { background: #16a34a; }

        .api-route-line {
          font-family: monospace;
          background: var(--color-card-hover);
          padding: 0.4rem 0.75rem;
          border-radius: 0.5rem;
          display: flex;
          align-items: center;
          font-size: 0.9rem;
          margin: 0.5rem 0;
          border: 1px solid var(--color-border);
        }

        @media (max-width: 600px) {
          .api-section {
            padding: 1.5rem;
          }
          .api-header h1 {
            font-size: 2.25rem;
          }
        }
      `}),(0,a.jsxs)(`div`,{className:`api-container`,children:[(0,a.jsxs)(`nav`,{"aria-label":`breadcrumb`,style:{marginBottom:`1.5rem`,fontSize:`0.85rem`,color:`var(--color-text-muted)`,display:`flex`,alignItems:`center`,gap:`0.5rem`,flexWrap:`wrap`,userSelect:`none`},children:[(0,a.jsx)(`a`,{href:`/`,onClick:t=>{t.preventDefault(),e(`/`,`top`)},style:{color:`var(--color-text-muted)`,textDecoration:`none`,transition:`color 0.2s`,fontWeight:`500`},onMouseEnter:e=>e.currentTarget.style.color=`var(--color-b)`,onMouseLeave:e=>e.currentTarget.style.color=`var(--color-text-muted)`,children:l.home}),(0,a.jsx)(`span`,{style:{opacity:.4,fontSize:`0.75rem`,transform:n===`ar`?`scaleX(-1)`:`none`},children:(0,a.jsx)(`i`,{className:`fas fa-chevron-right`})}),(0,a.jsx)(`span`,{style:{fontWeight:`600`,color:`var(--color-text)`},children:l.apiDocs})]}),(0,a.jsxs)(`div`,{className:`api-header`,children:[(0,a.jsx)(`h1`,{children:l.title}),(0,a.jsx)(`p`,{children:l.subtitle})]}),(0,a.jsxs)(`div`,{className:`api-warning-card`,children:[(0,a.jsx)(`span`,{className:`lock-icon`,children:`🔒`}),(0,a.jsxs)(`div`,{children:[(0,a.jsx)(`h4`,{children:l.warningTitle}),(0,a.jsx)(`p`,{children:(()=>{let e=l.warningDesc.split(`{logo}`);return e.length===2?(0,a.jsxs)(`span`,{children:[e[0],(0,a.jsxs)(`span`,{className:`logo-inline`,children:[(0,a.jsx)(`span`,{className:`logo-1`,children:`Your`}),(0,a.jsx)(`span`,{className:`logo-2`,children:`Own`}),(0,a.jsx)(`span`,{className:`logo-3`,children:`PDF`}),(0,a.jsx)(`span`,{className:`logo-4`,children:`.com`})]}),e[1]]}):l.warningDesc})()})]})]}),(0,a.jsxs)(`div`,{className:`api-section`,children:[(0,a.jsxs)(`h2`,{children:[(0,a.jsx)(`i`,{className:`fas fa-link`,style:{color:`var(--color-b)`}}),` `,l.sect1Title]}),(0,a.jsx)(`p`,{children:l.sect1Desc}),(0,a.jsx)(`h3`,{children:l.sect1Sub1}),(0,a.jsx)(`p`,{children:l.sect1Sub1Desc}),(0,a.jsxs)(`div`,{className:`api-route-line`,style:{direction:`ltr`,justifyContent:n===`ar`?`flex-end`:`flex-start`},children:[(0,a.jsx)(`span`,{className:`api-method-badge method-get`,children:`GET`}),(0,a.jsx)(`span`,{children:`https://yourownpdf.com/?search={query}`})]}),(0,a.jsx)(`ul`,{style:{paddingInlineStart:n===`ar`?`0`:`20px`,paddingInlineEnd:n===`ar`?`20px`:`0`},children:(0,a.jsxs)(`li`,{children:[(0,a.jsx)(`strong`,{children:l.sect1Sub1Example}),` `,(0,a.jsx)(`a`,{href:`/?search=compress`,onClick:e=>d(e,`/?search=compress`),style:{color:`var(--color-b)`},children:`https://yourownpdf.com/?search=compress`}),` `,l.sect1Sub1ExampleLinkText]})}),(0,a.jsx)(`h3`,{children:l.sect1Sub2}),(0,a.jsx)(`p`,{children:l.sect1Sub2Desc}),(0,a.jsxs)(`div`,{className:`api-route-line`,style:{direction:`ltr`,justifyContent:n===`ar`?`flex-end`:`flex-start`},children:[(0,a.jsx)(`span`,{className:`api-method-badge method-get`,children:`GET`}),(0,a.jsx)(`span`,{children:`https://yourownpdf.com/tools/pdf/{toolId}`})]}),(0,a.jsxs)(`div`,{className:`api-route-line`,style:{direction:`ltr`,justifyContent:n===`ar`?`flex-end`:`flex-start`},children:[(0,a.jsx)(`span`,{className:`api-method-badge method-get`,children:`GET`}),(0,a.jsx)(`span`,{children:`https://yourownpdf.com/tools/image/{toolId}`})]}),(0,a.jsxs)(`ul`,{style:{paddingInlineStart:n===`ar`?`0`:`20px`,paddingInlineEnd:n===`ar`?`20px`:`0`},children:[(0,a.jsxs)(`li`,{children:[(0,a.jsx)(`strong`,{children:l.sect1Sub2ExamplePdf}),` `,(0,a.jsx)(`a`,{href:`/tools/pdf/merge-pdf`,onClick:e=>d(e,`/tools/pdf/merge-pdf`),style:{color:`var(--color-b)`},children:`https://yourownpdf.com/tools/pdf/merge-pdf`}),` `,l.sect1Sub2ExamplePdfLinkText]}),(0,a.jsxs)(`li`,{children:[(0,a.jsx)(`strong`,{children:l.sect1Sub2ExampleImg}),` `,(0,a.jsx)(`a`,{href:`/tools/image/compress-image`,onClick:e=>d(e,`/tools/image/compress-image`),style:{color:`var(--color-b)`},children:`https://yourownpdf.com/tools/image/compress-image`}),` `,l.sect1Sub2ExampleImgLinkText]})]})]}),(0,a.jsxs)(`div`,{className:`api-section`,children:[(0,a.jsxs)(`h2`,{children:[(0,a.jsx)(`i`,{className:`fas fa-file-code`,style:{color:`var(--color-b)`}}),` `,l.sect2Title]}),(0,a.jsx)(`p`,{children:l.sect2Desc}),(0,a.jsxs)(`div`,{className:`code-box-wrapper`,style:{direction:`ltr`},children:[(0,a.jsxs)(`div`,{className:`code-box-header`,children:[(0,a.jsx)(`span`,{className:`code-box-lang`,children:`YAML (openapi.yaml)`}),(0,a.jsx)(`button`,{className:`code-box-copy-btn`,onClick:u,children:r?l.copied:l.copySchema})]}),(0,a.jsx)(`pre`,{children:(0,a.jsx)(`code`,{children:o})})]})]}),(0,a.jsxs)(`div`,{className:`api-section`,children:[(0,a.jsxs)(`h2`,{children:[(0,a.jsx)(`i`,{className:`fas fa-code-branch`,style:{color:`var(--color-b)`}}),` `,l.sect3Title]}),(0,a.jsx)(`p`,{children:l.sect3Desc}),(0,a.jsx)(`h3`,{children:l.sect3Sub1}),(0,a.jsxs)(`div`,{className:`code-box-wrapper`,style:{direction:`ltr`},children:[(0,a.jsx)(`div`,{className:`code-box-header`,children:(0,a.jsx)(`span`,{className:`code-box-lang`,children:`JavaScript (ESM)`})}),(0,a.jsx)(`pre`,{children:(0,a.jsx)(`code`,{children:`import { PDFDocument } from 'pdf-lib';

async function mergePdfFiles(fileBufferArray) {
  // Create a brand new PDF document in memory
  const mergedPdf = await PDFDocument.create();
  
  for (const buffer of fileBufferArray) {
    // Load each individual file buffer into a document container
    const pdfDoc = await PDFDocument.load(buffer);
    // Copy all pages into the merged document
    const copiedPages = await mergedPdf.copyPages(pdfDoc, pdfDoc.getPageIndices());
    copiedPages.forEach((page) => mergedPdf.addPage(page));
  }
  
  // Return the compiled bytes as a Uint8Array
  return await mergedPdf.save();
}`})})]}),(0,a.jsx)(`h3`,{children:l.sect3Sub2}),(0,a.jsxs)(`div`,{className:`code-box-wrapper`,style:{direction:`ltr`},children:[(0,a.jsx)(`div`,{className:`code-box-header`,children:(0,a.jsx)(`span`,{className:`code-box-lang`,children:`JavaScript (DOM)`})}),(0,a.jsx)(`pre`,{children:(0,a.jsx)(`code`,{children:`function compressImageLocally(file, quality) {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        canvas.width = img.width;
        canvas.height = img.height;
        
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0);
        
        // Convert to blob compressing the layout quality
        canvas.toBlob((blob) => {
          resolve(blob);
        }, 'image/jpeg', quality); // quality parameter between 0.0 and 1.0
      };
      img.src = event.target.result;
    };
    reader.readAsDataURL(file);
  });
}`})})]})]})]})]})};export{c as ApiDocsPage};