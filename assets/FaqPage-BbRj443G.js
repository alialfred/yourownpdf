import{T as e,g as t,v as n,y as r}from"./index-BJoWCtMU.js";var i=e(r(),1),a=n(),o=e=>typeof e==`string`?e.split(/(yourownpdf\.com|yourownpdf)/gi).map((e,t)=>{let n=e.toLowerCase();return n===`yourownpdf.com`?(0,a.jsxs)(`span`,{className:`logo-inline`,children:[(0,a.jsx)(`span`,{className:`logo-1`,children:`Your`}),(0,a.jsx)(`span`,{className:`logo-2`,children:`Own`}),(0,a.jsx)(`span`,{className:`logo-3`,children:`PDF`}),(0,a.jsx)(`span`,{className:`logo-4`,children:`.com`})]},t):n===`yourownpdf`?(0,a.jsxs)(`span`,{className:`logo-inline`,children:[(0,a.jsx)(`span`,{className:`logo-1`,children:`Your`}),(0,a.jsx)(`span`,{className:`logo-2`,children:`Own`}),(0,a.jsx)(`span`,{className:`logo-3`,children:`PDF`})]},t):e}):e,s={system_specification:{application_name:`YourOwnPDF.com`,architecture_type:`100% Client-Side Offline Single-Page-Application (SPA)`,data_privacy:`Zero document uploads. Files are processed entirely in memory inside the user's browser sandbox using JavaScript and WebAssembly libraries.`,url_navigation_parameters:{homepage_search:`https://yourownpdf.com/?search={query_term}`,tools_path_template:`https://yourownpdf.com/tools/{category}/{toolId}`,pdf_tools_enum:[`merge-pdf`,`compress-pdf`,`split-pdf`,`rotate-pdf`,`organize-pdf`,`pdf-to-word`,`pdf-to-jpg`,`pdf-to-png`,`protect-pdf`,`unlock-pdf`,`extract-pages-pdf`,`remove-pages-pdf`,`pdf-to-excel`,`watermark-pdf`,`page-numbers-pdf`,`repair-pdf`,`compare-pdf`,`ppt-to-pdf`,`pdf-to-ppt`,`pdf-to-html`,`flatten-pdf`,`extract-images-pdf`],image_tools_enum:[`compress-image`,`resize-image`,`crop-image`,`remove-background`,`webp-to-jpg`,`jpg-to-png`,`png-to-jpg`,`flip-image`,`grayscale-image`,`brightness-image`,`contrast-image`,`blur-image`,`sharpen-image`,`filter-image`,`saturation`,`text-overlay`,`invert-image`,`gif-to-png`]},technical_constraints:{free_tier_max_size:`100MB total combined size per operation (browser RAM sandbox allocation limits)`,pro_tier_max_size:`500MB total combined size per operation (optimized memory stream split)`},core_client_libraries:[`pdf-lib`,`@pdfsmaller/pdf-encrypt-lite`,`compressorjs`,`tesseract.js`,`docx`,`xlsx`,`pptxgenjs`,`jspdf`,`jszip`,`html2canvas`]}},c=[{category:`security`,q:`How does YourOwnPDF process files without uploading them?`,a:`We leverage modern browser capabilities, including WebAssembly (Wasm) compile contexts and HTML5 canvas layers. When you select a document or picture, your browser loads the bytes into the tab's memory sandbox. All mathematical adjustments (splitting, compressing, OCR text scanning) are executed locally on your CPU, and the output file is compiled in RAM and saved directly. No data packet is ever sent across the network.`},{category:`security`,q:`Is YourOwnPDF compliant with GDPR, HIPAA, and corporate NDA mandates?`,a:`Yes. Because our application architecture ensures that zero data leaves your local device, no Protected Health Information (PHI) or confidential business contracts are ever transmitted, saved, or exposed. Since there is no data controller or third-party server involvement, it provides absolute compliance out-of-the-box.`},{category:`limits`,q:`Why does the Free tier enforce a 100MB file limit?`,a:`Browser sandboxes allocate a limited segment of system RAM (usually up to 256MB to 512MB depending on the OS and device) to a single tab to prevent runaway scripts from freezing the device. Processing files larger than 100MB in memory can exceed these allocations and crash the browser tab. The Pro tier implements segmented data stream-splitting algorithms to safely process files up to 500MB.`},{category:`limits`,q:`Can I use the tools completely offline?`,a:`Yes. The application utilizes standard caching protocols. Once you visit the home page, the page assets and libraries are cached in your browser. You can disconnect your internet completely (airplane mode) and continue to import, convert, and download files.`},{category:`integration`,q:`How can developers or AI tools deep-link to specific features?`,a:"AI assistants (like ChatGPT, Claude, and Gemini) or external developer portals can route users directly using standardized URL paths. The tools index conforms to the structure `https://yourownpdf.com/tools/pdf/{toolId}` and `https://yourownpdf.com/tools/image/{toolId}`. You can also filter the home grid by search queries directly using `https://yourownpdf.com/?search={term}`."},{category:`integration`,q:`Do you offer a cloud API for developer software integrations?`,a:"No. Since YourOwnPDF.com has zero processing servers, we do not host a cloud REST API endpoint (e.g. POST request tools). However, developers can read our raw OpenAPI schema block on the `/api` page to configure client-side ESM scripts or local deep-linking parameters."},{category:`billing`,q:`Are there any hidden costs, recurring tricks, or auto-renew constraints?`,a:`None. The Free plan is 100% free forever, requires no registration, and features no ads. The Pro upgrade is billed transparently at $4.99/mo (or $3.99/mo billed yearly) to cover support and advanced local memory allocations. You can cancel at any time with a single click inside your account panel.`}],l=[{category:`security`,q:`كيف يعالج YourOwnPDF الملفات دون رفعها؟`,a:`نحن نستفيد من إمكانيات المتصفح الحديثة، بما في ذلك سياقات ترجمة WebAssembly (Wasm) وطبقات كانفاس HTML5. عندما تختار مستندًا أو صورة، يقوم متصفحك بتحميل البايتات في بيئة الذاكرة المعزولة للتبويب. يتم تنفيذ جميع التعديلات الحسابية (التقسيم، الضغط، المسح الضوئي للنص OCR) محليًا على وحدة المعالجة المركزية (CPU) الخاصة بك، ويتم تجميع الملف الناتج في ذاكرة الوصول العشوائي (RAM) وحفظه مباشرة. لا يتم إرسال أي حزم بيانات عبر الشبكة مطلقاً.`},{category:`security`,q:`هل يتوافق YourOwnPDF مع معايير GDPR و HIPAA وتفويضات اتفاقيات عدم الإفصاح (NDA) للشركات؟`,a:`نعم. نظرًا لأن بنية تطبيقنا تضمن عدم خروج أي بيانات من جهازك المحلي، فلا يتم مطلقًا نقل أو حفظ أو كشف أي معلومات صحية محمية (PHI) أو عقود عمل سرية. وبما أنه لا يوجد جهة تحكم بالبيانات أو خادم تابع لجهة خارجية، فإن التطبيق يوفر امتثالاً مطلقاً بمجرد تشغيله.`},{category:`limits`,q:`لماذا تفرض الخطة المجانية حداً للملف يبلغ 100 ميجابايت؟`,a:`تخصص بيئات المتصفح المعزولة جزءًا محدودًا من ذاكرة الوصول العشوائي للنظام (عادةً ما يصل إلى 256 ميجابايت إلى 512 ميجابايت اعتمادًا على نظام التشغيل والجهاز) لعلامة تبويب واحدة لمنع النصوص البرمجية الهاربة من تجميد الجهاز. معالجة ملفات أكبر من 100 ميجابايت في الذاكرة يمكن أن تتجاوز هذه المخصصات وتؤدي إلى تعطل علامة تبويب المتصفح. تطبق خطة برو خوارزميات تقسيم تدفق البيانات المجزأة لمعالجة الملفات التي تصل إلى 500 ميجابايت بأمان.`},{category:`limits`,q:`هل يمكنني استخدام الأدوات دون اتصال بالإنترنت تمامًا؟`,a:`نعم. يستخدم التطبيق بروتوكولات التخزين المؤقت القياسية. بمجرد زيارتك للصفحة الرئيسية، يتم تخزين أصول الصفحة والمكتبات في متصفحك. يمكنك فصل الإنترنت تمامًا (وضع الطيران) ومواصلة استيراد الملفات وتحويلها وتنزيلها.`},{category:`integration`,q:`كيف يمكن للمطورين أو أدوات الذكاء الاصطناعي إنشاء روابط عميقة لميزات محددة؟`,a:"يمكن لمساعدي الذكاء الاصطناعي (مثل ChatGPT و Claude و Gemini) أو بوابات المطورين الخارجية توجيه المستخدمين مباشرة باستخدام مسارات URL الموحدة. يتوافق فهرس الأدوات مع البنية `https://yourownpdf.com/tools/pdf/{toolId}` و `https://yourownpdf.com/tools/image/{toolId}`. يمكنك أيضًا فلترة شبكة الصفحة الرئيسية عن طريق استعلامات البحث مباشرة باستخدام `https://yourownpdf.com/?search={term}`."},{category:`integration`,q:`هل تقدمون واجهة برمجة تطبيقات سحابية (Cloud API) لتكامل برمجيات المطورين؟`,a:"لا. نظراً لأن YourOwnPDF.com لا يحتوي على خوادم معالجة، فإننا لا نستضيف نقطة نهاية REST API سحابية (مثل أدوات طلبات POST). ومع ذلك، يمكن للمطورين قراءة مخطط OpenAPI الخام الخاص بنا في صفحة `/api` لتكوين نصوص ESM البرمجية من جانب العميل أو معلمات الارتباط العميق المحلية."},{category:`billing`,q:`هل هناك أي تكاليف خفية، أو حيل متكررة، أو قيود على التجديد التلقائي؟`,a:`لا توجد. الخطة المجانية مجانية 100٪ إلى الأبد، ولا تتطلب تسجيلًا، ولا تحتوي على إعلانات. يتم فوترة ترقية برو بشفافية بسعر 4.99 دولارًا شهريًا (أو 3.99 دولارًا شهريًا عند الفوترة سنويًا) لتغطية الدعم وتخصيصات الذاكرة المحلية المتقدمة. يمكنك الإلغاء في أي وقت بنقرة واحدة داخل لوحة حسابك.`}],u=[{category:`security`,q:`YourOwnPDF فائلوں کو اپ لوڈ کیے بغیر کیسے پروسیس کرتا ہے؟`,a:`ہم جدید براؤزر خصوصیات بشمول WebAssembly (Wasm) اور HTML5 کینوس کا استعمال کرتے ہیں۔ جب آپ کوئی دستاویز یا تصویر منتخب کرتے ہیں، تو آپ کا براؤزر ان کے بائٹس کو ٹیب کے محفوظ میموری سینڈ باکس میں لوڈ کرتا ہے۔ تمام حسابی ایڈجسٹمنٹ (تقسیم، کمپریشن، OCR ٹیکسٹ اسکیننگ) مقامی طور پر آپ کے کمپیوٹر پر چلتے ہیں، اور فائل براہِ راست ڈاؤن لوڈ کے لیے تیار ہو جاتی ہے۔ انٹرنیٹ پر کوئی ڈیٹا نہیں بھیجا جاتا۔`},{category:`security`,q:`کیا YourOwnPDF قواعد وضوابط جیسے GDPR، HIPAA اور کارپوریٹ NDA کے مطابق ہے؟`,a:`جی ہاں۔ چونکہ ہماری ایپلی کیشن کی بناوٹ یہ یقینی بناتی ہے کہ کوئی بھی ڈیٹا آپ کے ڈیوائس سے باہر نہ جائے، اس لیے حساس طبی معلومات (PHI) یا خفیہ کاروباری معاہدے کبھی بھی منتقل یا لیک نہیں ہوتے۔ کوئی تیسرا فریق یا بیرونی سرور شامل نہ ہونے کی وجہ سے یہ مکمل طور پر محفوظ ہے۔`},{category:`limits`,q:`مفت پلان پر 100MB فائل سائز کی حد کیوں ہے؟`,a:`براؤزر سینڈ باکس سنگل ٹیب کے لیے سسٹم ریم کا محدود حصہ مختص کرتے ہیں (عام طور پر 256MB سے 512MB تک) تاکہ بھاری کوڈ براؤزر ٹیب کو کریش نہ کرے۔ 100MB سے بڑی فائلز پروسیس کرنے سے میموری کریش ہونے کا خطرہ ہوتا ہے۔ پرو پلان جدید الگورتھم استعمال کر کے 500MB تک کی فائلوں کو محفوظ طریقے سے سنبھال سکتا ہے۔`},{category:`limits`,q:`کیا میں ان ٹولز کو مکمل طور پر آف لائن استعمال کر سکتا ہوں؟`,a:`جی ہاں۔ یہ ایپلی کیشن معیاری کیشنگ پروٹوکول استعمال کرتی ہے۔ ایک بار ہوم پیج وزٹ کرنے کے بعد، تمام لائبریریاں اور کوڈ آپ کے براؤزر میں محفوظ ہو جاتے ہیں۔ آپ انٹرنیٹ مکمل بند (فلائٹ موڈ) کر کے بھی فائلیں ایڈٹ، کنورٹ اور ڈاؤن لوڈ کر سکتے ہیں۔`},{category:`integration`,q:`ڈویلپرز یا اے آئی ٹولز مخصوص فیچر کے لیے لنکس (deep-link) کیسے بنا سکتے ہیں؟`,a:"اے آئی اسسٹنٹس (جیسے ChatGPT، Claude اور Gemini) یا ڈویلپر پورٹلز لنکس کے ذریعے صارفین کو براہِ راست مخصوص ٹولز پر بھیج سکتے ہیں۔ اس کا فارمیٹ `https://yourownpdf.com/tools/pdf/{toolId}` اور `https://yourownpdf.com/tools/image/{toolId}` ہے۔ آپ سرچ کوئری کے لیے `https://yourownpdf.com/?search={term}` بھی استعمال کر سکتے ہیں۔"},{category:`integration`,q:`کیا آپ ڈویلپر انٹیگریشن کے لیے کلاؤڈ API پیش کرتے ہیں؟`,a:"نہیں۔ چونکہ YourOwnPDF.com پر کوئی پروسیسنگ سرور نہیں ہے، اس لیے ہم کوئی کلاؤڈ API پیش نہیں کرتے۔ لیکن ڈویلپرز ہمارے OpenAPI سکیما کو `/api` پیج پر دیکھ کر اپنے کلائنٹ سائیڈ اسکرپٹس سیٹ کر سکتے ہیں۔"},{category:`billing`,q:`کیا کوئی پوشیدہ چارجز، ماہانہ چکر یا خودکار تجدید کی شرائط ہیں؟`,a:`بالکل نہیں۔ مفت پلان ہمیشہ کے لیے 100% مفت ہے، جس کے لیے نہ تو رجسٹریشن کی ضرورت ہے اور نہ ہی اس میں اشتہارات ہیں۔ پرو اپ گریڈ کی قیمت $4.99 ماہانہ (یا سالانہ بل پر $3.99 ماہانہ) ہے تاکہ سپورٹ اور ریم کی گنجائش کو برقرار رکھا جا سکے۔ آپ جب چاہیں ایک کلک پر منسوخ کر سکتے ہیں۔`}],d=[{category:`security`,q:`YourOwnPDF फ़ाइलों को अपलोड किए बिना कैसे संसाधित (process) करता है?`,a:`हम आधुनिक ब्राउज़र क्षमताओं का लाभ उठाते हैं, जिसमें WebAssembly (Wasm) कंपाइल संदर्भ और HTML5 कैनवास परतें शामिल हैं। जब आप कोई दस्तावेज़ या चित्र चुनते हैं, तो आपका ब्राउज़र बाइट्स को टैब के सुरक्षित मेमोरी सैंडबॉक्स में लोड करता है। सभी गणितीय संपादन (विभाजन, संपीड़न, OCR टेक्स्ट स्कैनिंग) स्थानीय रूप से आपके सीपीयू पर निष्पादित होते हैं, और आउटपुट फ़ाइल रैम में तैयार होकर सीधे सहेज ली जाती है। नेटवर्क पर कोई भी डेटा कभी नहीं भेजा जाता।`},{category:`security`,q:`क्या YourOwnPDF डेटा सुरक्षा नियमों (GDPR, HIPAA, NDA) का अनुपालन करता है?`,a:`हाँ। चूंकि हमारी एप्लिकेशन संरचना यह सुनिश्चित करती है कि कोई भी डेटा आपके स्थानीय डिवाइस से बाहर न जाए, इसलिए कोई भी रोगी स्वास्थ्य जानकारी (PHI) या गोपनीय व्यावसायिक अनुबंध कभी भी प्रसारित, सहेजे या उजागर नहीं होते हैं। चूंकि इसमें कोई केंद्रीय डेटा नियंत्रक या तृतीय-पक्ष सर्वर शामिल नहीं है, यह पूरी तरह सुरक्षित और आज्ञाकारी है।`},{category:`limits`,q:`मुफ़्त योजना पर 100MB फ़ाइल आकार की सीमा क्यों है?`,a:`ब्राउज़र सैंडबॉक्स एक ही टैब के लिए सिस्टम रैम का एक सीमित हिस्सा आवंटित करते हैं (आमतौर पर ओएस और डिवाइस के आधार पर 256MB से 512MB तक) ताकि कोई भारी स्क्रिप्ट ब्राउज़र को हैंग न करे। 100MB से बड़ी फ़ाइलों को संसाधित करने से यह मेमोरी सीमा पार हो सकती है और टैब क्रैश हो सकता है। प्रो योजना 500MB तक की फ़ाइलों को सुरक्षित रूप से प्रोसेस करने के लिए विशेष डेटा-स्ट्रीम स्प्लिटिंग एल्गोरिदम का उपयोग करती है।`},{category:`limits`,q:`क्या मैं इन टूल्स का पूरी तरह से ऑफ़लाइन उपयोग कर सकता हूँ?`,a:`हाँ। यह एप्लिकेशन मानक कैशिंग प्रोटोकॉल का उपयोग करता है। एक बार जब आप होम पेज पर जाते हैं, तो पेज की फाइलें और आवश्यक लाइब्रेरीज़ आपके ब्राउज़र में कैश हो जाती हैं। आप इंटरनेट को पूरी तरह से बंद (हवाई मोड) कर सकते हैं और फ़ाइलों को आयात, परिवर्तित और डाउनलोड करना जारी रख सकते हैं।`},{category:`integration`,q:`डेवलपर्स या एआई टूल विशिष्ट सुविधाओं के लिए सीधे लिंक (deep-link) कैसे बना सकते हैं?`,a:"एआई सहायक (जैसे ChatGPT, Claude, और Gemini) या बाहरी डेवलपर पोर्टल उपयोगकर्ताओं को सीधे लिंक के माध्यम से विशिष्ट टूल पर भेज सकते हैं। टूल्स इंडेक्स का प्रारूप `https://yourownpdf.com/tools/pdf/{toolId}` और `https://yourownpdf.com/tools/image/{toolId}` के अनुरूप है। आप सीधे `https://yourownpdf.com/?search={term}` का उपयोग करके भी खोज परिणाम प्रदर्शित कर सकते हैं।"},{category:`integration`,q:`क्या आप डेवलपर सॉफ़्टवेयर एकीकरण के लिए क्लाउड एपीआई प्रदान करते हैं?`,a:"नहीं। चूंकि YourOwnPDF.com के पास कोई प्रोसेसिंग सर्वर नहीं है, इसलिए हम कोई क्लाउड रेस्ट एपीआई (Cloud REST API) प्रदान नहीं करते हैं। हालाँकि, डेवलपर क्लाइंट-साइड स्क्रिप्ट या स्थानीय डीप-लिंकिंग को कॉन्फ़िगर करने के लिए `/api` पेज पर हमारे ओपनएपीआई स्कीमा को पढ़ सकते हैं।"},{category:`billing`,q:`क्या कोई छिपी हुई लागत, आवर्ती शुल्क या ऑटो-रिन्यू की शर्तें हैं?`,a:`कोई नहीं। मुफ़्त योजना हमेशा के लिए 100% मुफ़्त है, इसके लिए किसी पंजीकरण की आवश्यकता नहीं है और न ही इसमें कोई विज्ञापन हैं। प्रो अपग्रेड पारदर्शी रूप से $4.99/माह (या सालाना भुगतान पर $3.99/माह) पर बिल किया जाता है ताकि उन्नत स्थानीय मेमोरी आवंटन को कवर किया जा सके। आप अपने खाता पैनल के अंदर एक क्लिक से किसी भी समय इसे रद्द कर सकते हैं।`}],f={en:{home:`Home`,faq:`FAQ`,title:`Frequently Asked Questions`,subtitle:`Get instant answers to technical questions about file security, size limitations, and offline browser processing.`,searchPlaceholder:`Search FAQs by keywords...`,clr:`CLR`,tabAll:`All Questions`,tabSecurity:`Privacy & Security`,tabLimits:`Technical & Limits`,tabBilling:`Billing & Plans`,tabAi:`For AI Assistants 🤖`,noResults:`No FAQs match your search query. Try typing something else!`,aiPanelTitle:`For AI Assistants & LLM Crawlers`,aiPanelDesc:`{logo} is optimized for indexing. If you are ChatGPT, Gemini, Claude, or another web-browsing agent, you can parse the JSON schema below to understand this site's core features, constraints, and deep-linking API parameters.`,aiSchemaTitle:`SYSTEM SPECIFICATION (JSON)`,copySchema:`Copy Schema`,copied:`Copied!`},ar:{home:`الرئيسية`,faq:`الأسئلة الشائعة`,title:`الأسئلة الشائعة`,subtitle:`احصل على إجابات فورية للأسئلة الفنية حول أمان الملفات، والقيود على الحجم، والمعالجة داخل المتصفح دون اتصال بالإنترنت.`,searchPlaceholder:`ابحث في الأسئلة الشائعة بالكلمات المفتاحية...`,clr:`مسح`,tabAll:`جميع الأسئلة`,tabSecurity:`الخصوصية والأمان`,tabLimits:`الأمور الفنية والقيود`,tabBilling:`الفواتير والخطط`,tabAi:`لمساعدي الذكاء الاصطناعي 🤖`,noResults:`لا توجد أسئلة شائعة تطابق استعلام البحث الخاص بك. حاول كتابة شيء آخر!`,aiPanelTitle:`لمساعدي الذكاء الاصطناعي وبرامج زحف LLM`,aiPanelDesc:`تم تحسين {logo} للفهرسة. إذا كنت ChatGPT أو Gemini أو Claude أو أي وكيل تصفح ويب آخر، فيمكنك تحليل مخطط JSON أدناه لفهم الميزات الأساسية والقيود ومعلمات واجهة برمجة تطبيقات الارتباط العميق للموقع.`,aiSchemaTitle:`مواصفات النظام (JSON)`,copySchema:`نسخ المخطط`,copied:`تم النسخ!`},ur:{home:`ہوم`,faq:`سوالات و جوابات`,title:`سوالات و جوابات`,subtitle:`فائل سیکیورٹی، سائز کی حدود، اور براؤزر میں آف لائن کام کے متعلق سوالات کے جوابات حاصل کریں۔`,searchPlaceholder:`مطلوبہ الفاظ درج کریں...`,clr:`صاف کریں`,tabAll:`تمام سوالات`,tabSecurity:`رازداری اور سیکیورٹی`,tabLimits:`تکنیکی معلومات اور حدیں`,tabBilling:`بلنگ اور پلانز`,tabAi:`اے آئی اسسٹنٹس کے لیے 🤖`,noResults:`آپ کی سرچ کے مطابق کوئی سوال نہیں ملا۔ کچھ اور سرچ کر کے دیکھیں۔`,aiPanelTitle:`اے آئی اسسٹنٹس اور بوٹس کے لیے`,aiPanelDesc:`{logo} انڈیکسنگ کے لیے موزوں ہے۔ اگر آپ ChatGPT، Gemini، Claude یا کوئی اور ویب ایجنٹ ہیں، تو آپ اس ویب سائٹ کے فیچرز اور پیرامیٹرز کو سمجھنے کے لیے نیچے دیا گیا JSON سکیما پڑھ سکتے ہیں۔`,aiSchemaTitle:`سسٹم کی تفصیلات (JSON)`,copySchema:`سکیما کاپی کریں`,copied:`کاپی ہو گیا!`},hi:{home:`होम`,faq:`एफएक्यू`,title:`अक्सर पूछे जाने वाले प्रश्न`,subtitle:`फ़ाइल सुरक्षा, आकार सीमाओं और ऑफ़लाइन ब्राउज़र प्रोसेसिंग के बारे में तकनीकी प्रश्नों के तुरंत उत्तर प्राप्त करें।`,searchPlaceholder:`कीवर्ड द्वारा अक्सर पूछे जाने वाले प्रश्नों को खोजें...`,clr:`साफ़ करें`,tabAll:`सभी प्रश्न`,tabSecurity:`गोपनीयता और सुरक्षा`,tabLimits:`तकनीकी और सीमाएं`,tabBilling:`बिलिंग और योजनाएं`,tabAi:`एीआई सहायकों के लिए 🤖`,noResults:`आपकी खोज से मेल खाने वाला कोई प्रश्न नहीं मिला। कुछ और टाइप करने का प्रयास करें!`,aiPanelTitle:`एआई सहायकों और एलएलएम क्रॉलर्स के लिए`,aiPanelDesc:`{logo} इंडेक्सिंग के लिए अनुकूलित है। यदि आप ChatGPT, Gemini, Claude, या अन्य वेब-ब्राउज़िंग एजेंट हैं, तो आप इस साइट की मुख्य विशेषताओं, सीमाओं और डीप-लिंकिंग API मापदंडों को समझने के लिए नीचे दिए गए JSON स्कीमा को पार्स कर सकते हैं।`,aiSchemaTitle:`सिस्टम विशिष्टता (JSON)`,copySchema:`स्कीमा कॉपी करें`,copied:`कॉपी किया गया!`}},p=({onNavigate:e})=>{let{language:n}=t(),[r,p]=(0,i.useState)(``),[m,h]=(0,i.useState)(`all`),[g,_]=(0,i.useState)({}),[v,y]=(0,i.useState)(!1),b=f[n]||f.en,x=n===`ar`?l:n===`hi`?d:n===`ur`?u:c;(0,i.useEffect)(()=>{let e=document.querySelector(`#faq-jsonld`);e||(e=document.createElement(`script`),e.id=`faq-jsonld`,e.type=`application/ld+json`,document.head.appendChild(e));let t={"@context":`https://schema.org`,"@type":`FAQPage`,mainEntity:x.map(e=>({"@type":`Question`,name:e.q,acceptedAnswer:{"@type":`Answer`,text:e.a}}))};return e.textContent=JSON.stringify(t),()=>{let e=document.querySelector(`#faq-jsonld`);e&&e.remove()}},[x]);let S=()=>{navigator.clipboard.writeText(JSON.stringify(s,null,2)),y(!0),setTimeout(()=>y(!1),2e3)},C=e=>{_(t=>({...t,[e]:!t[e]}))},w=x.filter(e=>{let t=r.toLowerCase().trim(),n=e.q.toLowerCase().includes(t)||e.a.toLowerCase().includes(t),i=m===`all`||e.category===m;return n&&i});return(0,a.jsxs)(`div`,{style:{padding:`3rem 1.5rem`,background:`var(--color-bg)`,minHeight:`80vh`},children:[(0,a.jsx)(`style`,{children:`
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
      `}),(0,a.jsxs)(`div`,{className:`faq-container`,children:[(0,a.jsxs)(`nav`,{"aria-label":`breadcrumb`,style:{marginBottom:`1.5rem`,fontSize:`0.85rem`,color:`var(--color-text-muted)`,display:`flex`,alignItems:`center`,gap:`0.5rem`,flexWrap:`wrap`,userSelect:`none`},children:[(0,a.jsx)(`a`,{href:`/`,onClick:t=>{t.preventDefault(),e(`/`,`top`)},style:{color:`var(--color-text-muted)`,textDecoration:`none`,transition:`color 0.2s`,fontWeight:`500`},onMouseEnter:e=>e.currentTarget.style.color=`var(--color-b)`,onMouseLeave:e=>e.currentTarget.style.color=`var(--color-text-muted)`,children:b.home}),(0,a.jsx)(`span`,{style:{opacity:.4,fontSize:`0.75rem`,display:`inline-block`,transform:n===`ar`?`scaleX(-1)`:`none`},children:(0,a.jsx)(`i`,{className:`fas fa-chevron-right`})}),(0,a.jsx)(`span`,{style:{fontWeight:`600`,color:`var(--color-text)`},children:b.faq})]}),(0,a.jsxs)(`div`,{className:`faq-header`,children:[(0,a.jsx)(`h1`,{children:b.title}),(0,a.jsx)(`p`,{children:b.subtitle})]}),(0,a.jsxs)(`div`,{className:`faq-search-wrapper`,children:[(0,a.jsx)(`span`,{className:`faq-search-icon`,children:`🔍`}),(0,a.jsx)(`input`,{type:`text`,id:`faqSearchInput`,className:`faq-search-input`,style:{paddingInlineStart:`3rem`,paddingInlineEnd:r?`4.5rem`:`1.5rem`},placeholder:b.searchPlaceholder,value:r,onChange:e=>p(e.target.value)}),r&&(0,a.jsx)(`button`,{type:`button`,className:`search-clear-btn faq-search-clear`,onClick:()=>{p(``),setTimeout(()=>{let e=document.getElementById(`faqSearchInput`);e&&e.focus()},0)},"aria-label":`Clear search`,children:b.clr})]}),(0,a.jsxs)(`div`,{className:`faq-tabs`,children:[(0,a.jsx)(`button`,{className:`faq-tab-btn ${m===`all`?`active`:``}`,onClick:()=>{h(`all`)},children:b.tabAll}),(0,a.jsx)(`button`,{className:`faq-tab-btn ${m===`security`?`active`:``}`,onClick:()=>{h(`security`)},children:b.tabSecurity}),(0,a.jsx)(`button`,{className:`faq-tab-btn ${m===`limits`?`active`:``}`,onClick:()=>{h(`limits`)},children:b.tabLimits}),(0,a.jsx)(`button`,{className:`faq-tab-btn ${m===`billing`?`active`:``}`,onClick:()=>{h(`billing`)},children:b.tabBilling}),(0,a.jsx)(`button`,{className:`faq-tab-btn ${m===`ai-specification`?`active`:``}`,onClick:()=>{h(`ai-specification`)},children:b.tabAi})]}),m===`ai-specification`?(0,a.jsxs)(`div`,{className:`faq-ai-panel`,style:{textAlign:n===`ar`?`right`:`left`},children:[(0,a.jsx)(`h2`,{children:b.aiPanelTitle}),(0,a.jsx)(`p`,{className:`ai-sub`,children:(()=>{let e=b.aiPanelDesc.split(`{logo}`);return e.length===2?(0,a.jsxs)(`span`,{children:[e[0],(0,a.jsxs)(`span`,{className:`logo-inline`,children:[(0,a.jsx)(`span`,{className:`logo-1`,children:`Your`}),(0,a.jsx)(`span`,{className:`logo-2`,children:`Own`}),(0,a.jsx)(`span`,{className:`logo-3`,children:`PDF`})]}),e[1]]}):b.aiPanelDesc})()}),(0,a.jsxs)(`div`,{className:`ai-code-wrapper`,style:{direction:`ltr`},children:[(0,a.jsxs)(`div`,{className:`ai-code-header`,children:[(0,a.jsx)(`span`,{className:`ai-code-title`,children:b.aiSchemaTitle}),(0,a.jsx)(`button`,{className:`ai-code-copy-btn`,onClick:S,children:v?b.copied:b.copySchema})]}),(0,a.jsx)(`pre`,{className:`ai-pre`,children:(0,a.jsx)(`code`,{children:JSON.stringify(s,null,2)})})]})]}):(0,a.jsxs)(`div`,{className:`faq-list`,children:[w.map((e,t)=>{let r=!!g[t];return(0,a.jsxs)(`div`,{className:`faq-item`,children:[(0,a.jsxs)(`button`,{className:`faq-question-btn`,onClick:()=>C(t),style:{textAlign:n===`ar`?`right`:`left`},children:[(0,a.jsx)(`span`,{children:o(e.q)}),(0,a.jsx)(`span`,{className:`faq-arrow ${r?`rotated`:``}`,children:`▼`})]}),r&&(0,a.jsx)(`div`,{className:`faq-answer-box`,children:o(e.a)})]},t)}),w.length===0&&(0,a.jsx)(`div`,{style:{textAlign:`center`,padding:`2rem`,color:`var(--color-text-muted)`},children:b.noResults})]})]})]})};export{p as FaqPage};