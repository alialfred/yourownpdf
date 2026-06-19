import{d as e,f as t,n,p as r,u as i,y as a}from"./index-DGq8yuwt.js";var o=a(r(),1),s=t(),c=({slug:t,onNavigate:r})=>{let a=n.find(e=>e.slug===t),c=()=>{let t=new URLSearchParams(window.location.search).get(`from`);if(t){let n=t.split(`/`),r=n[n.length-1],a=[...e,...i].find(e=>e.id===r);return a?{label:`Back to ${a.name}`,path:t,scrollTarget:`tool-blogs-section`}:{label:`Back to Previous Page`,path:t,scrollTarget:`top`}}return{label:`Back to Home`,path:`/`,scrollTarget:`top`}};return(0,o.useEffect)(()=>{a&&(document.title=`${a.title} | YourOwnPDF.com`)},[a]),a?(0,s.jsxs)(`div`,{className:`blog-page-view`,style:{padding:`3rem 1.5rem`,background:`var(--color-bg)`,minHeight:`85vh`},children:[(0,s.jsx)(`style`,{children:`
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
          margin-left: 1.5rem;
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
          border-left: 4px solid var(--color-b);
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
      `}),(0,s.jsxs)(`div`,{className:`blog-container`,children:[(0,s.jsxs)(`nav`,{"aria-label":`breadcrumb`,style:{marginBottom:`1.5rem`,fontSize:`0.85rem`,color:`var(--color-text-muted)`,display:`flex`,alignItems:`center`,gap:`0.5rem`,flexWrap:`wrap`,userSelect:`none`},children:[(0,s.jsx)(`a`,{href:`/`,onClick:e=>{e.preventDefault(),r(`/`,`top`)},style:{color:`var(--color-text-muted)`,textDecoration:`none`,transition:`color 0.2s`,fontWeight:`500`},onMouseEnter:e=>e.currentTarget.style.color=`var(--color-b)`,onMouseLeave:e=>e.currentTarget.style.color=`var(--color-text-muted)`,children:`Home`}),(0,s.jsx)(`span`,{style:{opacity:.4,fontSize:`0.75rem`},children:(0,s.jsx)(`i`,{className:`fas fa-chevron-right`})}),(0,s.jsx)(`span`,{style:{color:`var(--color-text-muted)`},children:`Blog`}),(0,s.jsx)(`span`,{style:{opacity:.4,fontSize:`0.75rem`},children:(0,s.jsx)(`i`,{className:`fas fa-chevron-right`})}),(0,s.jsx)(`span`,{style:{fontWeight:`600`,color:`var(--color-text)`},children:a.title})]}),(0,s.jsxs)(`div`,{className:`blog-header`,children:[(0,s.jsx)(`h1`,{children:a.title}),(0,s.jsxs)(`div`,{className:`blog-meta`,children:[(0,s.jsx)(`span`,{className:`blog-meta-badge`,children:`Guides & Reference`}),(0,s.jsxs)(`div`,{className:`blog-meta-item`,children:[(0,s.jsx)(`i`,{className:`far fa-calendar-alt`}),(0,s.jsx)(`span`,{children:`June 14, 2026`})]}),(0,s.jsxs)(`div`,{className:`blog-meta-item`,children:[(0,s.jsx)(`i`,{className:`far fa-user`}),(0,s.jsx)(`span`,{children:`YourOwnPDF Editorial`})]})]})]}),(0,s.jsx)(`div`,{className:`blog-hero-image-wrapper`,children:(0,s.jsx)(({src:e,alt:t})=>{let[n,r]=o.useState(e);return(0,s.jsx)(`img`,{src:n,alt:t,className:`blog-hero-image`,onError:()=>{n!==`/Blogs/MergeBelog1.jpg`&&r(`/Blogs/MergeBelog1.jpg`)}})},{src:a.image,alt:a.title})}),(0,s.jsxs)(`div`,{className:`blog-content selectable`,children:[(0,s.jsx)(`p`,{className:`blog-intro`,children:a.intro}),a.renderBody?a.renderBody(r):(0,s.jsxs)(s.Fragment,{children:[a.sections&&a.sections.map((e,t)=>(0,s.jsxs)(`div`,{className:`blog-section`,children:[(0,s.jsx)(`h2`,{className:`blog-section-title`,children:e.title}),(0,s.jsx)(`div`,{className:`blog-section-content`,children:e.content.length===1&&!e.content[0].includes(` - `)?(0,s.jsx)(`p`,{className:`blog-paragraph`,children:e.content[0]}):(0,s.jsx)(`ul`,{className:`blog-list`,children:e.content.map((e,t)=>{let n=e.split(`: `);return n.length>1?(0,s.jsxs)(`li`,{className:`blog-list-item`,children:[(0,s.jsxs)(`strong`,{children:[n[0],`:`]}),` `,n.slice(1).join(`: `)]},t):(0,s.jsx)(`li`,{className:`blog-list-item`,children:e},t)})})})]},t)),(0,s.jsxs)(`div`,{className:`blog-conclusion-box`,children:[(0,s.jsx)(`h3`,{className:`blog-conclusion-title`,children:`Conclusion`}),(0,s.jsx)(`p`,{className:`blog-conclusion-text`,children:a.conclusion})]})]})]}),(0,s.jsx)(`div`,{className:`blog-action-footer`,children:(0,s.jsxs)(`button`,{onClick:()=>{let e=c();r(e.path,e.scrollTarget)},style:{padding:`0.75rem 2rem`,background:`transparent`,color:`var(--color-text)`,border:`1.5px solid var(--color-border)`,borderRadius:`0.75rem`,cursor:`pointer`,fontWeight:`600`,fontFamily:`var(--font-sans)`,transition:`all 0.2s`,boxShadow:`var(--shadow-sm)`},onMouseEnter:e=>{e.currentTarget.style.borderColor=`var(--color-b)`,e.currentTarget.style.color=`var(--color-b)`,e.currentTarget.style.background=`var(--color-card-hover)`},onMouseLeave:e=>{e.currentTarget.style.borderColor=`var(--color-border)`,e.currentTarget.style.color=`var(--color-text)`,e.currentTarget.style.background=`transparent`},children:[(0,s.jsx)(`i`,{className:`fas fa-arrow-left`,style:{marginRight:`0.5rem`}}),c().label]})})]})]}):(0,s.jsxs)(`div`,{style:{padding:`4rem 1.5rem`,textAlign:`center`,background:`var(--color-bg)`,minHeight:`80vh`},children:[(0,s.jsx)(`h2`,{style:{fontSize:`2rem`,marginBottom:`1rem`,color:`var(--color-text)`},children:`Blog Post Not Found`}),(0,s.jsx)(`p`,{style:{color:`var(--color-text-muted)`,marginBottom:`2rem`},children:`The requested article does not exist or has been moved.`}),(0,s.jsx)(`button`,{onClick:()=>{let e=c();r(e.path,e.scrollTarget)},style:{padding:`0.75rem 1.5rem`,background:`var(--color-b)`,color:`white`,border:`none`,borderRadius:`0.5rem`,cursor:`pointer`,fontWeight:`600`,fontFamily:`var(--font-sans)`,boxShadow:`var(--shadow-md)`,transition:`all 0.2s`},onMouseEnter:e=>{e.currentTarget.style.backgroundColor=`var(--color-b-hover)`,e.currentTarget.style.transform=`translateY(-1px)`},onMouseLeave:e=>{e.currentTarget.style.backgroundColor=`var(--color-b)`,e.currentTarget.style.transform=`translateY(0)`},children:c().label})]})};export{c as BlogPage};