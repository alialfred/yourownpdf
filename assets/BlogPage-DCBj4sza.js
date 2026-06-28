import{T as e,g as t,h as n,m as r,n as i,v as a,y as o}from"./index-DEItTq9E.js";var s=e(o(),1),c=a(),l={en:{backToTool:`Back to {name}`,backToPrev:`Back to Previous Page`,backToHome:`Back to Home`,notFoundTitle:`Blog Post Not Found`,notFoundDesc:`The requested article does not exist or has been moved.`,home:`Home`,blog:`Blog`,guides:`Guides & Reference`,editorial:`YourOwnPDF Editorial`,conclusion:`Conclusion`,date:`June 14, 2026`},ar:{backToTool:`العودة إلى {name}`,backToPrev:`العودة إلى الصفحة السابقة`,backToHome:`العودة إلى الرئيسية`,notFoundTitle:`مقال المدونة غير موجود`,notFoundDesc:`المقال المطلوب غير موجود أو تم نقله.`,home:`الرئيسية`,blog:`المدونة`,guides:`الأدلة والمراجع`,editorial:`فريق تحرير YourOwnPDF`,conclusion:`الخاتمة`,date:`١٤ يونيو ٢٠٢٦`},ur:{backToTool:`{name} پر واپس جائیں`,backToPrev:`پچھلے صفحہ پر واپس جائیں`,backToHome:`ہوم پر واپس جائیں`,notFoundTitle:`بلاگ پوسٹ نہیں ملی`,notFoundDesc:`درخواست کردہ مضمون دستیاب نہیں ہے یا اسے منتقل کر دیا گیا ہے۔`,home:`ہوم`,blog:`بلاگ`,guides:`گائیڈز اور حوالہ جات`,editorial:`YourOwnPDF ایڈیٹوریل`,conclusion:`خلاصہ`,date:`14 جون 2026`},hi:{backToTool:`{name} पर वापस जाएं`,backToPrev:`पिछले पृष्ठ पर वापस जाएं`,backToHome:`होम पर वापस जाएं`,notFoundTitle:`ब्लॉग पोस्ट नहीं मिली`,notFoundDesc:`अनुरोध किया गया लेख उपलब्ध नहीं है या इसे स्थानांतरित कर दिया गया है।`,home:`होम`,blog:`ब्लॉग`,guides:`गाइड और संदर्भ`,editorial:`YourOwnPDF संपादकीय`,conclusion:`निष्कर्ष`,date:`14 जून 2026`}},u=({slug:e,onNavigate:a})=>{let{language:o,t:u}=t(),d=i.find(t=>t.slug===e),f=l[o]||l.en,p=o,m=o===`ar`||o===`ur`,h=d?p===`ar`?d.titleAr||d.title:p===`hi`?d.titleHi||d.title:p===`ur`&&d.titleUr||d.title:``,g=d?p===`ar`?d.introAr||d.intro:p===`hi`?d.introHi||d.intro:p===`ur`&&d.introUr||d.intro:``,_=d?p===`ar`?d.conclusionAr||d.conclusion:p===`hi`?d.conclusionHi||d.conclusion:p===`ur`&&d.conclusionUr||d.conclusion:``,v=()=>{let e=new URLSearchParams(window.location.search).get(`from`);if(e){let t=e.split(`/`),i=t[t.length-1],a=[...n,...r].find(e=>e.id===i);if(a){let t=u(`toolNames.`+a.id)||a.name;return{label:f.backToTool.replace(`{name}`,t),path:e,scrollTarget:`tool-blogs-section`}}return{label:f.backToPrev,path:e,scrollTarget:`top`}}return{label:f.backToHome,path:`/`,scrollTarget:`top`}};return(0,s.useEffect)(()=>{d&&(document.title=`${h} | YourOwnPDF.com`)},[d,h]),d?(0,c.jsxs)(`div`,{className:`blog-page-view`,style:{padding:`3rem 1.5rem`,background:`var(--color-bg)`,minHeight:`85vh`},children:[(0,c.jsx)(`style`,{children:`
        .blog-container {
          max-width: 800px;
          margin: 0 auto;
          font-family: var(--font-sans, system-ui, -apple-system, sans-serif);
          color: var(--color-text);
          line-height: 1.75;
        }

        .blog-header {
          margin-bottom: 2.5rem;
        }

        .blog-header h1 {
          font-size: 2.5rem;
          font-weight: 800;
          margin-top: 1rem;
          margin-bottom: 1rem;
          letter-spacing: -0.8px;
          line-height: 1.25;
          color: var(--color-text);
        }

        .blog-meta {
          display: flex;
          align-items: center;
          gap: 1rem;
          font-size: 0.9rem;
          color: var(--color-text-muted);
          font-weight: 500;
          margin-bottom: 1.5rem;
          border-bottom: 1px solid var(--color-border);
          padding-bottom: 1rem;
        }

        .blog-meta-item {
          display: flex;
          align-items: center;
          gap: 0.35rem;
        }

        .blog-meta-badge {
          background: rgba(16, 185, 129, 0.1);
          color: var(--color-b);
          padding: 0.2rem 0.6rem;
          border-radius: 4px;
          font-weight: 700;
          font-size: 0.75rem;
        }

        .blog-hero-image-wrapper {
          width: 100%;
          border-radius: 1.25rem;
          overflow: hidden;
          margin-bottom: 2.5rem;
          box-shadow: var(--shadow-md);
          border: 1px solid var(--color-border);
          aspect-ratio: 16 / 9;
        }

        .blog-hero-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .blog-content {
          font-family: var(--font-serif, Georgia, serif);
          font-size: 1.15rem;
          color: var(--color-text);
        }

        .blog-intro {
          font-size: 1.25rem;
          line-height: 1.8;
          color: var(--color-text);
          margin-bottom: 2rem;
          font-weight: 400;
        }

        .blog-section {
          margin-bottom: 2.5rem;
        }

        .blog-section-title {
          font-family: var(--font-sans);
          font-size: 1.6rem;
          font-weight: 800;
          margin-top: 2rem;
          margin-bottom: 1rem;
          color: var(--color-text);
          letter-spacing: -0.4px;
        }

        .blog-section-content {
          margin-bottom: 1rem;
        }

        .blog-paragraph {
          margin-bottom: 1.25rem;
        }

        .blog-list {
          margin-inline-start: 1.5rem;
          margin-inline-end: 0;
          margin-bottom: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .blog-list-item {
          margin-bottom: 0.25rem;
        }

        .blog-conclusion-box {
          font-family: var(--font-sans);
          background: var(--color-card-bg);
          border: 1.5px solid var(--color-border);
          border-inline-start: 4px solid var(--color-b);
          border-radius: 0.75rem;
          padding: 1.75rem;
          margin-top: 3.5rem;
          box-shadow: var(--shadow-sm);
        }

        .blog-conclusion-title {
          font-size: 1.2rem;
          font-weight: 700;
          color: var(--color-b);
          margin-bottom: 0.5rem;
        }

        .blog-conclusion-text {
          font-size: 1.05rem;
          color: var(--color-text);
          line-height: 1.65;
          margin: 0;
        }

        .blog-action-footer {
          display: flex;
          justify-content: center;
          margin-top: 4rem;
          padding-top: 2rem;
          border-top: 1px solid var(--color-border);
        }

        @media (max-width: 768px) {
          .blog-header h1 {
            font-size: 2rem;
          }
          .blog-content {
            font-size: 1.05rem;
          }
          .blog-intro {
            font-size: 1.15rem;
          }
          .blog-section-title {
            font-size: 1.35rem;
          }
        }
      `}),(0,c.jsxs)(`div`,{className:`blog-container`,children:[(0,c.jsxs)(`nav`,{"aria-label":`breadcrumb`,style:{marginBottom:`1.5rem`,fontSize:`0.85rem`,color:`var(--color-text-muted)`,display:`flex`,alignItems:`center`,gap:`0.5rem`,flexWrap:`wrap`,userSelect:`none`},children:[(0,c.jsx)(`a`,{href:`/`,onClick:e=>{e.preventDefault(),a(`/`,`top`)},style:{color:`var(--color-text-muted)`,textDecoration:`none`,transition:`color 0.2s`,fontWeight:`500`},onMouseEnter:e=>e.currentTarget.style.color=`var(--color-b)`,onMouseLeave:e=>e.currentTarget.style.color=`var(--color-text-muted)`,children:f.home}),(0,c.jsx)(`span`,{style:{opacity:.4,fontSize:`0.75rem`,display:`inline-block`,transform:m?`scaleX(-1)`:`none`},children:(0,c.jsx)(`i`,{className:`fas fa-chevron-right`})}),(0,c.jsx)(`span`,{style:{color:`var(--color-text-muted)`},children:f.blog}),(0,c.jsx)(`span`,{style:{opacity:.4,fontSize:`0.75rem`,display:`inline-block`,transform:m?`scaleX(-1)`:`none`},children:(0,c.jsx)(`i`,{className:`fas fa-chevron-right`})}),(0,c.jsx)(`span`,{style:{fontWeight:`600`,color:`var(--color-text)`},children:h})]}),(0,c.jsxs)(`div`,{className:`blog-header`,children:[(0,c.jsx)(`h1`,{children:h}),(0,c.jsxs)(`div`,{className:`blog-meta`,children:[(0,c.jsx)(`span`,{className:`blog-meta-badge`,children:f.guides}),(0,c.jsxs)(`div`,{className:`blog-meta-item`,children:[(0,c.jsx)(`i`,{className:`far fa-calendar-alt`}),(0,c.jsx)(`span`,{children:f.date})]}),(0,c.jsxs)(`div`,{className:`blog-meta-item`,children:[(0,c.jsx)(`i`,{className:`far fa-user`}),(0,c.jsx)(`span`,{children:f.editorial})]})]})]}),(0,c.jsxs)(`div`,{className:`blog-lang-switcher`,style:{display:`flex`,gap:`1rem`,alignItems:`center`,flexWrap:`wrap`,padding:`0.75rem 1.25rem`,background:`var(--color-card-bg)`,border:`1px solid var(--color-border)`,borderRadius:`0.75rem`,marginBottom:`2rem`,fontSize:`0.9rem`,fontWeight:`600`},children:[(0,c.jsx)(`span`,{style:{color:`var(--color-text-muted)`},children:o===`ar`?`اقرأ هذا المقال بلغات أخرى:`:o===`hi`?`इस लेख को अन्य भाषाओं में पढ़ें:`:o===`ur`?`اس مضمون کو دوسری زبانوں میں پڑھیں:`:`Read this article in other languages:`}),(0,c.jsxs)(`div`,{style:{display:`flex`,gap:`0.75rem`,flexWrap:`wrap`},children:[o!==`en`&&(0,c.jsxs)(`a`,{href:`/blog/${d.slug}`,onClick:e=>{e.preventDefault(),a(`/en/blog/${d.slug}`,`top`)},style:{color:`var(--color-b)`,textDecoration:`none`,display:`inline-flex`,alignItems:`center`,gap:`0.35rem`},children:[(0,c.jsx)(`img`,{src:`/flags/gb.png`,alt:``,style:{width:`16px`,height:`11px`,borderRadius:`1.5px`,objectFit:`cover`}}),(0,c.jsx)(`span`,{children:`English`})]}),o!==`ar`&&(0,c.jsxs)(`a`,{href:`/ar/blog/${d.slug}`,onClick:e=>{e.preventDefault(),a(`/ar/blog/${d.slug}`,`top`)},style:{color:`var(--color-b)`,textDecoration:`none`,display:`inline-flex`,alignItems:`center`,gap:`0.35rem`},children:[(0,c.jsx)(`img`,{src:`/flags/sa.png`,alt:``,style:{width:`16px`,height:`11px`,borderRadius:`1.5px`,objectFit:`cover`}}),(0,c.jsx)(`span`,{children:`العربية`})]}),o!==`hi`&&(0,c.jsxs)(`a`,{href:`/hi/blog/${d.slug}`,onClick:e=>{e.preventDefault(),a(`/hi/blog/${d.slug}`,`top`)},style:{color:`var(--color-b)`,textDecoration:`none`,display:`inline-flex`,alignItems:`center`,gap:`0.35rem`},children:[(0,c.jsx)(`img`,{src:`/flags/in.png`,alt:``,style:{width:`16px`,height:`11px`,borderRadius:`1.5px`,objectFit:`cover`}}),(0,c.jsx)(`span`,{children:`हिन्दी`})]}),o!==`ur`&&(0,c.jsxs)(`a`,{href:`/ur/blog/${d.slug}`,onClick:e=>{e.preventDefault(),a(`/ur/blog/${d.slug}`,`top`)},style:{color:`var(--color-b)`,textDecoration:`none`,display:`inline-flex`,alignItems:`center`,gap:`0.35rem`},children:[(0,c.jsx)(`img`,{src:`/flags/pk.png`,alt:``,style:{width:`16px`,height:`11px`,borderRadius:`1.5px`,objectFit:`cover`}}),(0,c.jsx)(`span`,{children:`اردو`})]})]})]}),(0,c.jsx)(`div`,{className:`blog-hero-image-wrapper`,children:(0,c.jsx)(({src:e,alt:t})=>{let[n,r]=s.useState(e),i=s.useRef(null);return s.useEffect(()=>{r(e)},[e]),s.useEffect(()=>{i.current&&(i.current.defaultMuted=!0,i.current.muted=!0,i.current.play().catch(e=>{console.warn(`Autoplay blocked:`,e)}))},[n]),n&&n.toLowerCase().includes(`.mp4`)?(0,c.jsx)(`video`,{ref:i,src:n,autoPlay:!0,controls:!1,loop:!0,muted:!0,playsInline:!0,className:`blog-hero-image`,style:{width:`100%`,height:`auto`,maxHeight:`480px`,objectFit:`cover`,display:`block`,borderRadius:`0.75rem`,pointerEvents:`none`}}):(0,c.jsx)(`img`,{src:n,alt:t,className:`blog-hero-image`,onError:()=>{n!==`/Blogs/MergeBelog1.jpg`&&r(`/Blogs/MergeBelog1.jpg`)}})},{src:p===`ar`?d.imageAr||d.image:p===`hi`?d.imageHi||d.image:p===`ur`&&d.imageUr||d.image,alt:h})}),(0,c.jsxs)(`div`,{className:`blog-content selectable`,style:{textAlign:m?`right`:`left`,direction:m?`rtl`:`ltr`},children:[(0,c.jsx)(`p`,{className:`blog-intro`,children:g}),p===`ar`&&d.renderBodyAr?d.renderBodyAr(a):p===`hi`&&d.renderBodyHi?d.renderBodyHi(a):p===`ur`&&d.renderBodyUr?d.renderBodyUr(a):d.renderBody?d.renderBody(a):(0,c.jsxs)(c.Fragment,{children:[d.sections&&d.sections.map((e,t)=>(0,c.jsxs)(`div`,{className:`blog-section`,children:[(0,c.jsx)(`h2`,{className:`blog-section-title`,children:e.title}),(0,c.jsx)(`div`,{className:`blog-section-content`,children:e.content.length===1&&!e.content[0].includes(` - `)?(0,c.jsx)(`p`,{className:`blog-paragraph`,children:e.content[0]}):(0,c.jsx)(`ul`,{className:`blog-list`,style:{paddingInlineStart:m?`0`:`20px`,paddingInlineEnd:m?`20px`:`0`},children:e.content.map((e,t)=>{let n=e.split(`: `);return n.length>1?(0,c.jsxs)(`li`,{className:`blog-list-item`,children:[(0,c.jsxs)(`strong`,{children:[n[0],`:`]}),` `,n.slice(1).join(`: `)]},t):(0,c.jsx)(`li`,{className:`blog-list-item`,children:e},t)})})})]},t)),(0,c.jsxs)(`div`,{className:`blog-conclusion-box`,children:[(0,c.jsx)(`h3`,{className:`blog-conclusion-title`,children:f.conclusion}),(0,c.jsx)(`p`,{className:`blog-conclusion-text`,children:_})]})]})]}),(0,c.jsx)(`div`,{className:`blog-action-footer`,children:(0,c.jsxs)(`button`,{onClick:()=>{let e=v();a(e.path,e.scrollTarget)},style:{padding:`0.75rem 2rem`,background:`transparent`,color:`var(--color-text)`,border:`1.5px solid var(--color-border)`,borderRadius:`0.75rem`,cursor:`pointer`,fontWeight:`600`,fontFamily:`var(--font-sans)`,transition:`all 0.2s`,boxShadow:`var(--shadow-sm)`,display:`inline-flex`,alignItems:`center`,gap:`0.5rem`,flexDirection:m?`row-reverse`:`row`},onMouseEnter:e=>{e.currentTarget.style.borderColor=`var(--color-b)`,e.currentTarget.style.color=`var(--color-b)`,e.currentTarget.style.background=`var(--color-card-hover)`},onMouseLeave:e=>{e.currentTarget.style.borderColor=`var(--color-border)`,e.currentTarget.style.color=`var(--color-text)`,e.currentTarget.style.background=`transparent`},children:[(0,c.jsx)(`i`,{className:`fas fa-arrow-left`,style:{transform:m?`scaleX(-1)`:`none`}}),(0,c.jsx)(`span`,{children:v().label})]})})]})]}):(0,c.jsxs)(`div`,{style:{padding:`4rem 1.5rem`,textAlign:`center`,background:`var(--color-bg)`,minHeight:`80vh`},children:[(0,c.jsx)(`h2`,{style:{fontSize:`2rem`,marginBottom:`1rem`,color:`var(--color-text)`},children:f.notFoundTitle}),(0,c.jsx)(`p`,{style:{color:`var(--color-text-muted)`,marginBottom:`2rem`},children:f.notFoundDesc}),(0,c.jsx)(`button`,{onClick:()=>{let e=v();a(e.path,e.scrollTarget)},style:{padding:`0.75rem 1.5rem`,background:`var(--color-b)`,color:`white`,border:`none`,borderRadius:`0.5rem`,cursor:`pointer`,fontWeight:`600`,fontFamily:`var(--font-sans)`,boxShadow:`var(--shadow-md)`,transition:`all 0.2s`},onMouseEnter:e=>{e.currentTarget.style.backgroundColor=`var(--color-b-hover)`,e.currentTarget.style.transform=`translateY(-1px)`},onMouseLeave:e=>{e.currentTarget.style.backgroundColor=`var(--color-b)`,e.currentTarget.style.transform=`translateY(0)`},children:v().label})]})};export{u as BlogPage};