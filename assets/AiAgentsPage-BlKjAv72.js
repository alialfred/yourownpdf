import{C as e,_ as t,g as n,m as r}from"./index-C3q37G8j.js";var i=e(t(),1),a=n(),o=`{
  "mcpServers": {
    "yourownpdf-agent-tools": {
      "command": "npx",
      "args": ["-y", "@yourownpdf/mcp-server"],
      "env": {
        "YOP_API_ENVIRONMENT": "local-sandbox"
      }
    }
  }
}`,s=`{
  "name": "yourownpdf_tool_calling",
  "description": "Execute local document and image transformations safely inside browser memory.",
  "tools": [
    {
      "type": "function",
      "function": {
        "name": "merge_pdfs",
        "description": "Merge multiple PDF documents into a single output PDF client-side.",
        "parameters": {
          "type": "object",
          "properties": {
            "files": {
              "type": "array",
              "items": {
                "type": "string",
                "description": "Array of base64-encoded PDF files to combine."
              }
            }
          },
          "required": ["files"]
        }
      }
    },
    {
      "type": "function",
      "function": {
        "name": "compress_image",
        "description": "Compress JPEG/PNG image assets locally using HTML5 canvas algorithms.",
        "parameters": {
          "type": "object",
          "properties": {
            "image": {
              "type": "string",
              "description": "Base64-encoded source image file."
            },
            "quality": {
              "type": "number",
              "description": "Target quality factor between 0.1 and 1.0.",
              "minimum": 0.1,
              "maximum": 1.0
            }
          },
          "required": ["image", "quality"]
        }
      }
    }
  ]
}`,c={en:{title:`AI Agents Portal`,subtitle:`Integrate YourOwnPDF's secure, zero-upload document and image tools into your autonomous agent execution flows, custom LLM toolkits, and client setups.`,privacyTitle:`Local Sandbox Processing Guaranteed`,privacyDesc:`AI Agents can process sensitive business records and legal contracts with zero leak risk. All executions occur strictly within local browser memory using WebAssembly. No files are uploaded to servers.`,q1Title:`Do you have a tool that I can call?`,q1Desc:`Yes! YourOwnPDF.com provides multiple integration frameworks allowing AI agents (e.g., GPTs, Gemini, Claude, and custom Python/JS agents) to discover and call our local utility stack:`,q1Bullet1Title:`Browser Automation (Playwright/Puppeteer)`,q1Bullet1Desc:`Since the site is a client-side Single Page Application (SPA), browser-capable agents can load the tools directly in a headless browser, drop file payloads, and fetch output downloads securely.`,q1Bullet2Title:`Model Context Protocol (MCP)`,q1Bullet2Desc:`Run our lightweight local MCP server package to expose document operations as local tools for tools-compatible desktop LLM assistants.`,q1Bullet3Title:`OpenAPI Schema Integration`,q1Bullet3Desc:`Link the agent to our official OpenAPI Specification to enable intelligent routing recommendations.`,mcpTitle:`Model Context Protocol (MCP) Setup`,mcpDesc:`Developers using Claude Desktop, Cursor, or other MCP-hosting clients can register YourOwnPDF tools by adding the following definition to their configuration file:`,mcpNote:`* Note: Running via npx requires Node.js to be installed on the host machine where the agent runs.`,copyConfig:`Copy Config`,copied:`Copied!`,openaiTitle:`OpenAI Custom Tool Schema`,openaiDesc:`Use this JSON definition to build custom GPTs or Assistants API setups with access to secure file transformations:`,copySchema:`Copy Schema`,registryTitle:`AI Agent Tool Directory`,registryDesc:`Reference directory mapping available tools to their routing endpoints for agent redirection:`,thId:`Tool Identifier`,thUri:`Direct Target URI`,thFunc:`Primary Function`,thPriv:`Privacy`,rowMerge:`Combine multiple PDFs into a single file`,rowCompress:`Reduce PDF file sizes safely offline`,rowWord:`Extract formatted text structures locally`,rowCompImg:`Optimize JPG/PNG image dimension bytes`,rowRemBg:`Extract clear PNG subject layers locally`,localBadge:`100% Local`,registryFooter:`To see all 40+ endpoints, refer to the full {apiLink} page.`,apiDocs:`API Docs`,examplesTitle:`LLM Tool Calling & Execution Examples`,examplesDesc:`Here are concrete examples demonstrating how autonomous LLM agents invoke these tools under the hood:`,ex1Title:`Example 1: Playwright Browser Agent (Python)`,ex1Desc:`An autonomous browser agent (such as a WebVoyager loop or a selenium/playwright agent) can run a local PDF merge by interacting directly with the DOM. Because processing is 100% client-side, the agent doesn't require API keys or backend tokens:`,ex2Title:`Example 2: Claude Desktop (MCP Settings invocation)`,ex2Desc:`When a user requests file modifications: "Merge invoice_Jan.pdf and invoice_Feb.pdf together", the host LLM client routes the request to our local MCP tool calling server:`},ar:{title:`بوابة وكلاء الذكاء الاصطناعي`,subtitle:`قم بدمج أدوات المستندات والصور الآمنة من YourOwnPDF، والتي لا تتطلب أي رفع للملفات، في تدفقات تنفيذ الوكلاء المستقلين، ومجموعات أدوات LLM المخصصة، وإعدادات العملاء.`,privacyTitle:`معالجة محلية آمنة ومضمونة بالكامل`,privacyDesc:`يمكن لوكلاء الذكاء الاصطناعي معالجة السجلات التجارية الحساسة والعقود القانونية دون أي خطر لتسرب البيانات. تحدث جميع عمليات التنفيذ بالكامل داخل ذاكرة المتصفح المحلية باستخدام WebAssembly. لا يتم رفع أي ملفات إلى الخوادم.`,q1Title:`هل لديكم أداة يمكنني استدعاؤها؟`,q1Desc:`نعم! يوفر YourOwnPDF.com أطر عمل دمج متعددة تسمح لوكلاء الذكاء الاصطناعي (مثل GPTs و Gemini و Claude والوكلاء المخصصين بلغة Python/JS) باكتشاف واستدعاء مجموعة الأدوات المحلية الخاصة بنا:`,q1Bullet1Title:`أتمتة المتصفح (Playwright/Puppeteer)`,q1Bullet1Desc:`بما أن الموقع عبارة عن تطبيق صفحة واحدة (SPA) يعمل بالكامل لدى العميل، يمكن للوكلاء القادرين على تشغيل المتصفح تحميل الأدوات مباشرة في متصفح بدون واجهة مستخدم (headless browser)، وإسقاط حمولات الملفات، وجلب ملفات التنزيل الناتجة بأمان.`,q1Bullet2Title:`بروتوكول سياق النموذج (MCP)`,q1Bullet2Desc:`قم بتشغيل حزمة خادم MCP المحلية خفيفة الوزن الخاصة بنا لعرض عمليات المستندات كأدوات محلية لمساعدي LLM المكتبية المتوافقة.`,q1Bullet3Title:`تكامل مخطط OpenAPI`,q1Bullet3Desc:`اربط الوكيل بمواصفات OpenAPI الرسمية الخاصة بنا لتمكين توصيات التوجيه الذكية.`,mcpTitle:`إعداد بروتوكول سياق النموذج (MCP)`,mcpDesc:`يمكن للمطورين الذين يستخدمون Claude Desktop أو Cursor أو عملاء استضافة MCP الآخرين تسجيل أدوات YourOwnPDF عن طريق إضافة التعريف التالي إلى ملف التكوين الخاص بهم:`,mcpNote:`* ملاحظة: يتطلب التشغيل عبر npx تثبيت Node.js على الجهاز المضيف الذي يعمل عليه الوكيل.`,copyConfig:`نسخ التكوين`,copied:`تم النسخ!`,openaiTitle:`مخطط أدوات OpenAI المخصصة`,openaiDesc:`استخدم تعريف JSON هذا لبناء نماذج GPT مخصصة أو إعدادات Assistants API مع إمكانية الوصول إلى تحويلات الملفات الآمنة:`,copySchema:`نسخ المخطط`,registryTitle:`دليل أدوات وكيل الذكاء الاصطناعي`,registryDesc:`دليل مرجعي يربط الأدوات المتاحة بنقاط توجيهها لإعادة توجيه الوكيل:`,thId:`معرف الأداة`,thUri:`مسار الهدف المباشر`,thFunc:`الوظيفة الأساسية`,thPriv:`الخصوصية`,rowMerge:`دمج ملفات PDF متعددة في ملف واحد`,rowCompress:`تقليل حجم ملفات PDF بأمان دون اتصال بالإنترنت`,rowWord:`استخراج النصوص المنسقة محلياً`,rowCompImg:`تحسين حجم أبعاد صور JPG/PNG محلياً`,rowRemBg:`استخراج طبقات صور PNG واضحة محلياً`,localBadge:`محلي 100%`,registryFooter:`لمشاهدة جميع نقاط النهاية الـ 40+، يرجى الرجوع إلى صفحة {apiLink} الكاملة.`,apiDocs:`وثائق API`,examplesTitle:`أمثلة على استدعاء الأدوات وتشغيلها بواسطة LLM`,examplesDesc:`فيما يلي أمثلة ملموسة توضح كيفية استدعاء وكلاء LLM المستقلين لهذه الأدوات تحت الغطاء:`,ex1Title:`المثال 1: وكيل متصفح Playwright (Python)`,ex1Desc:`يمكن لوكيل متصفح مستقل (مثل حلقة WebVoyager أو وكيل selenium/playwright) تشغيل دمج PDF محلي من خلال التفاعل مباشرة مع DOM. نظرًا لأن المعالجة تتم بنسبة 100٪ لدى العميل، فإن الوكيل لا يتطلب مفاتيح API أو رموز مميزة للخلفية:`,ex2Title:`المثال 2: Claude Desktop (استدعاء إعدادات MCP)`,ex2Desc:`عندما يطلب المستخدم تعديل ملف: "دمج invoice_Jan.pdf و invoice_Feb.pdf معًا"، يقوم عميل LLM المضيف بتوجيه الطلب إلى خادم استدعاء أدوات MCP المحلي الخاص بنا:`},ur:{title:`AI Agents Portal`,subtitle:`Integrate YourOwnPDF's secure, zero-upload document and image tools into your autonomous agent execution flows, custom LLM toolkits, and client setups.`,privacyTitle:`Local Sandbox Processing Guaranteed`,privacyDesc:`AI Agents sensitive business records aur legal contracts ko zero leak risk ke sath process kar sakte hain. Tamam executions WebAssembly ke zariye local browser memory mein hi hoti hain. Koi file server par upload nahi hoti.`,q1Title:`Kya aapke paas aisi tool hai jise main call kar sakoon?`,q1Desc:`Haan! YourOwnPDF.com multiple integration frameworks faraham karta hai jis se AI agents (jaise GPTs, Gemini, Claude, aur custom Python/JS agents) humare local utility stack ko dhoondh aur call kar sakte hain:`,q1Bullet1Title:`Browser Automation (Playwright/Puppeteer)`,q1Bullet1Desc:`Kyunki yeh site ek client-side Single Page Application (SPA) hai, browser-capable agents is tool ko headless browser mein directly load karke files payload drop aur output download secure tareeqay se fetch kar sakte hain.`,q1Bullet2Title:`Model Context Protocol (MCP)`,q1Bullet2Desc:`Humara lightweight local MCP server package run karein taake document operations ko local tools ke taur par tools-compatible desktop LLM assistants ke samne pesh kiya ja sake.`,q1Bullet3Title:`OpenAPI Schema Integration`,q1Bullet3Desc:`Agent ko humare official OpenAPI Specification se link karein taake intelligent routing recommendations enable ho sakein.`,mcpTitle:`Model Context Protocol (MCP) Setup`,mcpDesc:`Claude Desktop, Cursor, ya MCP hosting clients use karne wale developers neeche diya gaya definition apne config file mein add karke YourOwnPDF tools register kar sakte hain:`,mcpNote:`* Note: npx ke zariye run karne ke liye host machine par Node.js ka hona zaroori hai.`,copyConfig:`Copy Config`,copied:`Copied!`,openaiTitle:`OpenAI Custom Tool Schema`,openaiDesc:`Is JSON definition ko custom GPTs ya Assistants API setups banane ke liye use karein jo secure file transformations access kar sakein:`,copySchema:`Copy Schema`,registryTitle:`AI Agent Tool Directory`,registryDesc:`Available tools aur unke routing endpoints ka directory map jo agent redirection ke liye hai:`,thId:`Tool Identifier`,thUri:`Direct Target URI`,thFunc:`Primary Function`,thPriv:`Privacy`,rowMerge:`Multiple PDFs ko ek single file mein combine karein`,rowCompress:`PDF file sizes safely offline reduce karein`,rowWord:`Formatted text structures locally extract karein`,rowCompImg:`JPG/PNG image dimension bytes optimize karein`,rowRemBg:`Clear PNG subject layers locally extract karein`,localBadge:`100% Local`,registryFooter:`Tamam 40+ endpoints dekhne ke liye, mukamal {apiLink} page parhein.`,apiDocs:`API Docs`,examplesTitle:`LLM Tool Calling & Execution Examples`,examplesDesc:`Yahan concrete examples hain jo dikhate hain ke autonomous LLM agents kis tarah in tools ko call karte hain:`,ex1Title:`Example 1: Playwright Browser Agent (Python)`,ex1Desc:`Ek autonomous browser agent (jaise Playwright script) directly DOM ke sath interact karke local PDF merge run kar sakta hai. Kyunki saari processing client-side hoti hai, agent ko kisi API key ki zaroorat nahi parti:`,ex2Title:`Example 2: Claude Desktop (MCP Settings invocation)`,ex2Desc:`Jab user file modifications request karta hai: "invoice_Jan.pdf aur invoice_Feb.pdf ko merge karein", toh LLM client is request ko local MCP server par route karta hai:`}},l=({onNavigate:e})=>{let{language:t}=r(),[n,l]=(0,i.useState)(!1),[u,d]=(0,i.useState)(!1),f=c[t===`hi`?`ur`:t]||c.en,p=(e,t)=>{navigator.clipboard.writeText(e),t===`mcp`?(l(!0),setTimeout(()=>l(!1),2e3)):(d(!0),setTimeout(()=>d(!1),2e3))},m=(t,n)=>{e&&(t.preventDefault(),e(n))};return(0,a.jsxs)(`div`,{style:{padding:`3rem 1.5rem`,background:`var(--color-bg)`,minHeight:`80vh`},children:[(0,a.jsx)(`style`,{children:`
        .agent-container {
          max-width: 900px;
          margin: 0 auto;
          font-family: var(--font-sans, system-ui, -apple-system, sans-serif);
          color: var(--color-text);
          line-height: 1.7;
        }

        .agent-header {
          margin-bottom: 3.5rem;
          text-align: center;
        }

        .agent-header h1 {
          font-size: 2.75rem;
          font-weight: 800;
          margin-bottom: 0.75rem;
          background: linear-gradient(135deg, var(--color-b, #10b981), #06b6d4);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .agent-header p {
          font-size: 1.2rem;
          color: var(--color-text-muted);
          max-width: 720px;
          margin: 0 auto;
        }

        .agent-privacy-callout {
          background: rgba(16, 185, 129, 0.04);
          border: 1px dashed rgba(16, 185, 129, 0.3);
          border-radius: 1rem;
          padding: 1.5rem;
          margin-bottom: 3rem;
          display: flex;
          align-items: center;
          gap: 1.25rem;
        }

        .agent-privacy-callout span.icon {
          font-size: 2.5rem;
          line-height: 1;
        }

        .agent-privacy-callout h4 {
          margin: 0 0 0.25rem 0;
          font-size: 1.1rem;
          font-weight: 700;
          color: var(--color-text);
        }

        .agent-privacy-callout p {
          margin: 0;
          font-size: 0.9rem;
          color: var(--color-text-muted);
        }

        .agent-card {
          background: var(--color-card-bg);
          border: 1px solid var(--color-border);
          border-radius: 1.25rem;
          padding: 2.5rem;
          margin-bottom: 2.5rem;
          box-shadow: 0 4px 20px rgba(0,0,0,0.01);
        }

        .agent-card h2 {
          font-size: 1.6rem;
          font-weight: 750;
          margin-top: 0;
          margin-bottom: 1.25rem;
          color: var(--color-text);
          display: flex;
          align-items: center;
          gap: 0.6rem;
        }

        .agent-card h3 {
          font-size: 1.2rem;
          font-weight: 700;
          margin-top: 1.5rem;
          margin-bottom: 0.5rem;
        }

        .agent-list {
          margin: 0.75rem 0 1.5rem 1.5rem;
        }

        .agent-list li {
          margin-bottom: 0.6rem;
        }

        .code-box-wrapper {
          background: var(--color-code-bg, #0f172a);
          border: 1px solid var(--color-border);
          border-radius: 0.75rem;
          margin: 1.25rem 0;
          overflow: hidden;
        }

        .code-box-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: var(--color-code-header-bg, #1e293b);
          padding: 0.5rem 1rem;
          border-bottom: 1px solid var(--color-border);
        }

        .code-box-lang {
          font-size: 0.8rem;
          font-family: monospace;
          color: var(--color-text-muted);
          font-weight: 600;
        }

        .code-box-copy-btn {
          background: transparent;
          border: 1px solid var(--color-border);
          color: var(--color-text-muted);
          padding: 0.25rem 0.75rem;
          font-size: 0.8rem;
          border-radius: 0.35rem;
          cursor: pointer;
          font-weight: 600;
          transition: all 0.2s ease;
        }

        .code-box-copy-btn:hover {
          background: var(--color-border);
          color: var(--color-text);
        }

        .agent-card pre {
          margin: 0;
          padding: 1.25rem;
          overflow-x: auto;
        }

        .agent-card code {
          font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
          font-size: 0.875rem;
          color: #e2e8f0;
        }

        .tools-table-container {
          width: 100%;
          overflow-x: auto;
          margin: 1.5rem 0;
          border: 1px solid var(--color-border);
          border-radius: 0.75rem;
        }

        .tools-table {
          width: 100%;
          border-collapse: collapse;
          text-align: left;
          font-size: 0.9rem;
        }

        .tools-table th {
          background: var(--color-code-header-bg, #1e293b);
          color: var(--color-text);
          font-weight: 700;
          padding: 0.75rem 1rem;
          border-bottom: 1px solid var(--color-border);
        }

        .tools-table td {
          padding: 0.75rem 1rem;
          border-bottom: 1px solid var(--color-border);
        }

        .tools-table tr:last-child td {
          border-bottom: none;
        }

        .badge-path {
          display: inline-block;
          font-family: monospace;
          font-size: 0.8rem;
          padding: 0.15rem 0.4rem;
          border-radius: 0.25rem;
          background: var(--color-border);
          color: var(--color-text);
        }

        .badge-secure {
          display: inline-block;
          font-size: 0.75rem;
          font-weight: 600;
          padding: 0.1rem 0.35rem;
          border-radius: 0.25rem;
          background: rgba(16, 185, 129, 0.15);
          color: var(--color-b);
        }
      `}),(0,a.jsxs)(`div`,{className:`agent-container`,children:[(0,a.jsxs)(`div`,{className:`agent-header`,children:[(0,a.jsx)(`h1`,{children:f.title}),(0,a.jsx)(`p`,{children:f.subtitle})]}),(0,a.jsxs)(`div`,{className:`agent-privacy-callout`,children:[(0,a.jsx)(`span`,{className:`icon`,children:`🛡️`}),(0,a.jsxs)(`div`,{children:[(0,a.jsx)(`h4`,{children:f.privacyTitle}),(0,a.jsx)(`p`,{children:f.privacyDesc})]})]}),(0,a.jsxs)(`div`,{className:`agent-card`,children:[(0,a.jsxs)(`h2`,{children:[(0,a.jsx)(`i`,{className:`fas fa-question-circle`,style:{color:`var(--color-b)`}}),f.q1Title]}),(0,a.jsx)(`p`,{children:f.q1Desc}),(0,a.jsxs)(`ul`,{className:`agent-list`,style:{paddingInlineStart:t===`ar`?`0`:`20px`,paddingInlineEnd:t===`ar`?`20px`:`0`},children:[(0,a.jsxs)(`li`,{children:[(0,a.jsx)(`strong`,{children:f.q1Bullet1Title}),`: `,f.q1Bullet1Desc]}),(0,a.jsxs)(`li`,{children:[(0,a.jsx)(`strong`,{children:f.q1Bullet2Title}),`: `,f.q1Bullet2Desc]}),(0,a.jsxs)(`li`,{children:[(0,a.jsx)(`strong`,{children:f.q1Bullet3Title}),`: `,f.q1Bullet3Desc]})]})]}),(0,a.jsxs)(`div`,{className:`agent-card`,children:[(0,a.jsxs)(`h2`,{children:[(0,a.jsx)(`i`,{className:`fas fa-server`,style:{color:`var(--color-b)`}}),f.mcpTitle]}),(0,a.jsx)(`p`,{children:f.mcpDesc}),(0,a.jsxs)(`div`,{className:`code-box-wrapper`,style:{direction:`ltr`},children:[(0,a.jsxs)(`div`,{className:`code-box-header`,children:[(0,a.jsx)(`span`,{className:`code-box-lang`,children:`JSON (mcp-settings.json)`}),(0,a.jsx)(`button`,{className:`code-box-copy-btn`,onClick:()=>p(o,`mcp`),children:n?f.copied:f.copyConfig})]}),(0,a.jsx)(`pre`,{children:(0,a.jsx)(`code`,{children:o})})]}),(0,a.jsx)(`p`,{style:{fontSize:`0.85rem`,color:`var(--color-text-muted)`,marginTop:`0.5rem`},children:f.mcpNote})]}),(0,a.jsxs)(`div`,{className:`agent-card`,children:[(0,a.jsxs)(`h2`,{children:[(0,a.jsx)(`i`,{className:`fas fa-robot`,style:{color:`var(--color-b)`}}),f.openaiTitle]}),(0,a.jsx)(`p`,{children:f.openaiDesc}),(0,a.jsxs)(`div`,{className:`code-box-wrapper`,style:{direction:`ltr`},children:[(0,a.jsxs)(`div`,{className:`code-box-header`,children:[(0,a.jsx)(`span`,{className:`code-box-lang`,children:`JSON (OpenAI Schema)`}),(0,a.jsx)(`button`,{className:`code-box-copy-btn`,onClick:()=>p(s,`openai`),children:u?f.copied:f.copySchema})]}),(0,a.jsx)(`pre`,{children:(0,a.jsx)(`code`,{children:s})})]})]}),(0,a.jsxs)(`div`,{className:`agent-card`,children:[(0,a.jsxs)(`h2`,{children:[(0,a.jsx)(`i`,{className:`fas fa-th-list`,style:{color:`var(--color-b)`}}),f.registryTitle]}),(0,a.jsx)(`p`,{children:f.registryDesc}),(0,a.jsx)(`div`,{className:`tools-table-container`,children:(0,a.jsxs)(`table`,{className:`tools-table`,style:{textAlign:t===`ar`?`right`:`left`},children:[(0,a.jsx)(`thead`,{children:(0,a.jsxs)(`tr`,{children:[(0,a.jsx)(`th`,{style:{textAlign:t===`ar`?`right`:`left`},children:f.thId}),(0,a.jsx)(`th`,{style:{textAlign:t===`ar`?`right`:`left`},children:f.thUri}),(0,a.jsx)(`th`,{style:{textAlign:t===`ar`?`right`:`left`},children:f.thFunc}),(0,a.jsx)(`th`,{style:{textAlign:t===`ar`?`right`:`left`},children:f.thPriv})]})}),(0,a.jsxs)(`tbody`,{children:[(0,a.jsxs)(`tr`,{children:[(0,a.jsx)(`td`,{children:(0,a.jsx)(`code`,{children:`merge-pdf`})}),(0,a.jsx)(`td`,{children:(0,a.jsx)(`span`,{className:`badge-path`,children:`/tools/pdf/merge-pdf`})}),(0,a.jsx)(`td`,{children:f.rowMerge}),(0,a.jsx)(`td`,{children:(0,a.jsx)(`span`,{className:`badge-secure`,children:f.localBadge})})]}),(0,a.jsxs)(`tr`,{children:[(0,a.jsx)(`td`,{children:(0,a.jsx)(`code`,{children:`compress-pdf`})}),(0,a.jsx)(`td`,{children:(0,a.jsx)(`span`,{className:`badge-path`,children:`/tools/pdf/compress-pdf`})}),(0,a.jsx)(`td`,{children:f.rowCompress}),(0,a.jsx)(`td`,{children:(0,a.jsx)(`span`,{className:`badge-secure`,children:f.localBadge})})]}),(0,a.jsxs)(`tr`,{children:[(0,a.jsx)(`td`,{children:(0,a.jsx)(`code`,{children:`pdf-to-word`})}),(0,a.jsx)(`td`,{children:(0,a.jsx)(`span`,{className:`badge-path`,children:`/tools/pdf/pdf-to-word`})}),(0,a.jsx)(`td`,{children:f.rowWord}),(0,a.jsx)(`td`,{children:(0,a.jsx)(`span`,{className:`badge-secure`,children:f.localBadge})})]}),(0,a.jsxs)(`tr`,{children:[(0,a.jsx)(`td`,{children:(0,a.jsx)(`code`,{children:`compress-image`})}),(0,a.jsx)(`td`,{children:(0,a.jsx)(`span`,{className:`badge-path`,children:`/tools/image/compress-image`})}),(0,a.jsx)(`td`,{children:f.rowCompImg}),(0,a.jsx)(`td`,{children:(0,a.jsx)(`span`,{className:`badge-secure`,children:f.localBadge})})]}),(0,a.jsxs)(`tr`,{children:[(0,a.jsx)(`td`,{children:(0,a.jsx)(`code`,{children:`remove-background`})}),(0,a.jsx)(`td`,{children:(0,a.jsx)(`span`,{className:`badge-path`,children:`/tools/image/remove-background`})}),(0,a.jsx)(`td`,{children:f.rowRemBg}),(0,a.jsx)(`td`,{children:(0,a.jsx)(`span`,{className:`badge-secure`,children:f.localBadge})})]})]})]})}),(0,a.jsx)(`p`,{children:(()=>{let e=f.registryFooter.split(`{apiLink}`);return e.length===2?(0,a.jsxs)(`span`,{children:[e[0],(0,a.jsx)(`a`,{href:`/api`,onClick:e=>m(e,`/api`),style:{color:`var(--color-b)`},children:f.apiDocs}),e[1]]}):f.registryFooter})()})]}),(0,a.jsxs)(`div`,{className:`agent-card`,children:[(0,a.jsxs)(`h2`,{children:[(0,a.jsx)(`i`,{className:`fas fa-terminal`,style:{color:`var(--color-b)`}}),f.examplesTitle]}),(0,a.jsx)(`p`,{children:f.examplesDesc}),(0,a.jsx)(`h3`,{children:f.ex1Title}),(0,a.jsx)(`p`,{children:f.ex1Desc}),(0,a.jsxs)(`div`,{className:`code-box-wrapper`,style:{direction:`ltr`},children:[(0,a.jsx)(`div`,{className:`code-box-header`,children:(0,a.jsx)(`span`,{className:`code-box-lang`,children:`Python (Playwright script)`})}),(0,a.jsx)(`pre`,{children:(0,a.jsx)(`code`,{children:`from playwright.sync_api import sync_playwright

def agent_merge_pdfs(file_paths):
    with sync_playwright() as p:
        # Launch headless browser and navigate to the tools path
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        page.goto("https://yourownpdf.com/tools/pdf/merge-pdf")
        
        # Select the files and inject them into the local upload input element
        page.set_input_files("input[type='file']", file_paths)
        
        # Click the action button to merge pages locally in browser memory
        page.click("button:has-text('Merge PDF')")
        
        # Intercept and save the direct compiled file download
        with page.expect_download() as download_info:
            page.click("button:has-text('Download')")
        download = download_info.value
        download.save_as("output_merged_pdf.pdf")
        browser.close()`})})]}),(0,a.jsx)(`h3`,{children:f.ex2Title}),(0,a.jsx)(`p`,{children:f.ex2Desc}),(0,a.jsxs)(`div`,{className:`code-box-wrapper`,style:{direction:`ltr`},children:[(0,a.jsx)(`div`,{className:`code-box-header`,children:(0,a.jsx)(`span`,{className:`code-box-lang`,children:`JSON (Tool Call & Result payload)`})}),(0,a.jsx)(`pre`,{children:(0,a.jsx)(`code`,{children:`// 1. LLM requests local server execution
{
  "name": "merge_pdfs",
  "arguments": {
    "files": [
      "JVBERi0xLjQKJWRvY3VtZW50XzE...",
      "JVBERi0xLjQKJWRvY3VtZW50XzI..."
    ]
  }
}

// 2. Local MCP server response returned to the LLM (0 server roundtrips)
{
  "content": [
    {
      "type": "text",
      "text": "Merge operation successful. Integrated output contains 2 source files. File saved as output_merged_pdf.pdf."
    }
  ]
}`})})]})]})]})]})};export{l as AiAgentsPage};