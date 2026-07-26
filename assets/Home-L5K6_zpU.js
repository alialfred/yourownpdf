import{T as e,g as t,h as n,m as r,v as i,y as a}from"./index-Byk9zOTJ.js";import{t as o}from"./ToolCard-VQmm1N5g.js";import{t as s}from"./workingTools-B1rO9zIJ.js";var c=e(a(),1),l=i(),u=({onNavigate:e,filterQuery:i=``})=>{let{t:a}=t(),[u,d]=(0,c.useState)(!1),f=i.toLowerCase().trim(),p=[{label:`💡 Share an Idea`},{label:`🗣️ Have a Suggestion?`},{label:`❤️ Help Us Improve`},{label:`🚀 Improve YourOwnPDF`},{label:`💭 Tell Us What You Think`},{label:`✨ Send a Suggestion`},{label:`🤝 Let's Improve Together`},{label:`🐞 Report an Issue`},{label:`⚠️ Found a Problem?`},{label:`🛠️ Report a Bug`},{label:`💬 Contact Us`},{label:`💬 Talk to Our Team`},{label:`📩 Get in Touch`}],m=e=>{let t=[`merge-pdf`,`compress-pdf`,`split-pdf`,`pdf-to-jpg`,`rotate-pdf`,`protect-pdf`,`unlock-pdf`,`organize-pdf`,`image-to-pdf`,`jpg-to-pdf`,`remove-pages-pdf`,`pdf-to-png`,`extract-pages-pdf`],n=[],r=[],i=[];return e.forEach(e=>{s.includes(e.id)?t.includes(e.id)?n.push(e):r.push(e):i.push(e)}),[...n,...r,...i]},h=m(n),g=m(r),_=h.filter(e=>e.name.toLowerCase().includes(f)||e.desc&&e.desc.toLowerCase().includes(f)||e.id.toLowerCase().includes(f)),v=g.filter(e=>e.name.toLowerCase().includes(f)||e.desc&&e.desc.toLowerCase().includes(f)||e.id.toLowerCase().includes(f)),y=h.filter(e=>s.includes(e.id)).length,b=g.filter(e=>s.includes(e.id)).length,x=y+b,[S,C]=c.useState(200);(0,c.useEffect)(()=>()=>{},[]);let w=(t,n,r,i,a)=>{if(i.length===0)return null;let c=f?i:i.slice(0,S);return(0,l.jsx)(`section`,{className:`tools-section`,id:r,children:(0,l.jsxs)(`div`,{className:`container`,children:[(0,l.jsx)(`div`,{className:`section-header`,children:(0,l.jsxs)(`h2`,{className:`section-title`,children:[(0,l.jsx)(`span`,{className:`section-title-icon`,children:n}),t,(0,l.jsx)(`span`,{className:`section-badge`,children:a})]})}),(0,l.jsx)(`div`,{className:`tools-grid`,children:c.map(t=>{let n=s.includes(t.id);return(0,l.jsx)(o,{tool:{...t,category:r===`pdf-tools`?`pdf`:`image`,description:t.desc},isWorking:n,onNavigate:e},t.id)})})]})})},T=_.length>0||v.length>0;return(0,l.jsxs)(`div`,{className:`home-page`,children:[(0,l.jsx)(`section`,{className:`hero`,style:{overflow:`visible`,position:`relative`,zIndex:50,padding:`0.85rem 1.5rem 0.65rem`},children:(0,l.jsxs)(`div`,{className:`container hero-container`,style:{overflow:`visible`,display:`flex`,flexDirection:`column`,gap:`0.65rem`,maxWidth:`1320px`,margin:`0 auto`},children:[(0,l.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`space-between`,flexWrap:`wrap`,gap:`0.75rem`,minHeight:`36px`},children:[(0,l.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`0.75rem`,flexWrap:`wrap`},children:[(0,l.jsx)(`div`,{className:`hero-badge`,style:{margin:0},children:a(`hero.badge`)}),(0,l.jsxs)(`div`,{className:`security-subtitle-badge`,style:{margin:0,padding:`0.3rem 0.85rem`,background:`rgba(16, 185, 129, 0.06)`,border:`1px solid rgba(16, 185, 129, 0.25)`,borderRadius:`2rem`,display:`inline-flex`,alignItems:`center`,gap:`0.4rem`,whiteSpace:`nowrap`,fontSize:`0.88rem`,color:`var(--color-text-muted)`,fontWeight:`500`},children:[(0,l.jsx)(`span`,{className:`security-icon`,children:`🛡️`}),a(`hero.security`)]}),(0,l.jsxs)(`span`,{className:`hero-version-tag`,style:{background:`rgba(16, 185, 129, 0.1)`,border:`1px solid rgba(16, 185, 129, 0.35)`,borderRadius:`1rem`,padding:`0.25rem 0.75rem`,fontSize:`0.82rem`,fontWeight:`700`,color:`#10b981`,display:`inline-flex`,alignItems:`center`,gap:`0.35rem`,userSelect:`none`,boxShadow:`0 0 8px rgba(16, 185, 129, 0.15)`},children:[(0,l.jsx)(`i`,{className:`fas fa-code-branch`,style:{fontSize:`0.75rem`}}),`v0.1.2.7`]})]}),(0,l.jsxs)(`div`,{className:`hero-cta`,style:{display:`flex`,gap:`0.75rem`,alignItems:`center`,flexWrap:`wrap`,overflow:`visible`},children:[(0,l.jsxs)(`button`,{onClick:()=>e(`/`,`pdf-tools`),className:`btn btn-primary cta-btn`,"data-analytics":`hero-start-now`,style:{padding:`0.55rem 1.6rem`,fontSize:`0.95rem`,fontWeight:`700`,borderRadius:`2rem`,cursor:`pointer`,boxShadow:`0 4px 12px rgba(34, 197, 94, 0.25)`,transition:`transform 0.2s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.2s cubic-bezier(0.4, 0, 0.2, 1), background-color 0.2s ease`,display:`inline-flex`,alignItems:`center`,gap:`0.5rem`,border:`none`,outline:`none`},onMouseEnter:e=>{e.currentTarget.style.transform=`scale(1.03) translateY(-1px)`,e.currentTarget.style.boxShadow=`0 6px 16px rgba(34, 197, 94, 0.35)`},onMouseLeave:e=>{e.currentTarget.style.transform=`scale(1) translateY(0)`,e.currentTarget.style.boxShadow=`0 4px 12px rgba(34, 197, 94, 0.25)`},children:[(0,l.jsx)(`span`,{children:a(`hero.startNow`)}),(0,l.jsx)(`i`,{className:`fas fa-arrow-right`})]}),(0,l.jsxs)(`div`,{className:`talk-to-us-wrapper`,style:{position:`relative`,display:`inline-block`},children:[(0,l.jsx)(`button`,{onClick:()=>e(`/contact`),className:`btn cta-btn talk-to-us-btn`,style:{padding:`0.55rem 1.6rem`,fontSize:`0.95rem`,fontWeight:`700`,borderRadius:`2rem`,cursor:`pointer`,background:`transparent`,color:`#22c55e`,border:`2px solid #ef4444`,boxShadow:`0 2px 8px rgba(239, 68, 68, 0.25)`,transition:`all 0.2s cubic-bezier(0.4, 0, 0.2, 1)`,display:`inline-flex`,alignItems:`center`,gap:`0.5rem`},children:(0,l.jsx)(`span`,{children:`💬 Talk to Us`})}),(0,l.jsx)(`div`,{className:`red-accent-line`,style:{position:`absolute`,bottom:`-6px`,left:`12%`,right:`12%`,height:`3.5px`,background:`#ef4444`,borderRadius:`2px`,boxShadow:`0 0 10px rgba(239, 68, 68, 0.95)`,transition:`transform 0.2s ease, opacity 0.2s ease`}}),(0,l.jsx)(`div`,{className:`talk-to-us-tooltip`,children:p.map((t,n)=>(0,l.jsx)(`div`,{onClick:()=>e(`/contact`),className:`talk-option-item`,children:(0,l.jsx)(`span`,{children:t.label})},n))}),(0,l.jsx)(`style`,{children:`
                  .talk-to-us-wrapper .talk-to-us-tooltip {
                    position: absolute;
                    top: calc(100% + 8px);
                    left: 50%;
                    transform: translateX(-50%) translateY(4px);
                    width: 240px;
                    max-height: 290px;
                    overflow-y: auto;
                    background: #0f172a;
                    border: 1px solid #334155;
                    border-top: 3px solid #ef4444;
                    border-radius: 0.75rem;
                    box-shadow: 0 14px 32px rgba(0, 0, 0, 0.85), 0 0 16px rgba(239, 68, 68, 0.3);
                    z-index: 99999;
                    padding: 0.5rem;
                    display: flex;
                    flex-direction: column;
                    gap: 0.25rem;
                    pointer-events: auto;
                    text-align: left;
                    opacity: 0;
                    visibility: hidden;
                    transition: opacity 0.2s ease, transform 0.2s ease, visibility 0.2s ease;
                  }
                  .talk-to-us-wrapper .talk-to-us-tooltip::before {
                    content: '';
                    position: absolute;
                    top: -12px;
                    left: 0;
                    right: 0;
                    height: 12px;
                  }
                  .talk-to-us-wrapper:hover .talk-to-us-tooltip,
                  .talk-to-us-tooltip:hover {
                    opacity: 1 !important;
                    visibility: visible !important;
                    transform: translateX(-50%) translateY(0) !important;
                  }
                  .talk-to-us-wrapper:hover .talk-to-us-btn {
                    transform: scale(1.03) translateY(-1px);
                    background: rgba(239, 68, 68, 0.08) !important;
                  }
                  .talk-to-us-wrapper:hover .red-accent-line {
                    transform: scaleX(1.15);
                  }
                  .talk-option-item {
                    font-size: 0.88rem;
                    font-weight: 600;
                    color: #f8fafc;
                    padding: 0.55rem 0.75rem;
                    border-radius: 0.5rem;
                    cursor: pointer;
                    transition: all 0.15s ease;
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                  }
                  .talk-option-item:hover {
                    background: rgba(34, 197, 94, 0.15);
                    color: #22c55e;
                    transform: translateX(3px);
                  }
                  .talk-to-us-tooltip::-webkit-scrollbar {
                    width: 5px;
                  }
                  .talk-to-us-tooltip::-webkit-scrollbar-track {
                    background: rgba(15, 23, 42, 0.5);
                    border-radius: 4px;
                  }
                  .talk-to-us-tooltip::-webkit-scrollbar-thumb {
                    background: #334155;
                    border-radius: 4px;
                  }
                  .talk-to-us-tooltip::-webkit-scrollbar-thumb:hover {
                    background: #ef4444;
                  }
                `})]})]})]}),(0,l.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`space-between`,flexWrap:`wrap`,gap:`1rem`},children:[(0,l.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`0.2rem`,maxWidth:`720px`},children:[(0,l.jsxs)(`h1`,{style:{fontSize:`2.1rem`,fontWeight:`800`,lineHeight:`1.15`,margin:0,textAlign:`left`},children:[a(`hero.titlePre`),(0,l.jsx)(`span`,{className:`highlight`,children:a(`hero.titleHighlight`)}),a(`hero.titlePost`)]}),(0,l.jsx)(`p`,{className:`hero-subtitle`,style:{fontSize:`0.95rem`,color:`var(--color-text-muted)`,margin:0,lineHeight:`1.4`,textAlign:`left`},children:a(`hero.subtitle`)})]}),(0,l.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`1.5rem`,flexWrap:`wrap`},children:[(0,l.jsxs)(`div`,{className:`hero-stats-horizontal`,style:{margin:0,padding:`0.35rem 1.25rem`,fontSize:`0.85rem`,gap:`1.25rem`},children:[(0,l.jsxs)(`div`,{children:[(0,l.jsx)(`strong`,{children:x}),` `,a(`hero.statTools`)]}),(0,l.jsx)(`div`,{style:{width:`1px`,height:`12px`,background:`var(--color-border)`}}),(0,l.jsxs)(`div`,{children:[(0,l.jsx)(`strong`,{children:`100%`}),` `,a(`hero.statSecure`)]}),(0,l.jsx)(`div`,{style:{width:`1px`,height:`12px`,background:`var(--color-border)`}}),(0,l.jsxs)(`div`,{children:[(0,l.jsx)(`strong`,{children:`Free`}),` `,a(`hero.statNoSignup`)]})]}),(0,l.jsx)(`div`,{style:{background:`rgba(16, 185, 129, 0.08)`,border:`1.5px solid #10b981`,borderRadius:`2rem`,padding:`0.35rem 1.25rem`,fontSize:`0.9rem`,fontWeight:`700`,fontStyle:`italic`,color:`#10b981`,boxShadow:`0 0 12px rgba(16, 185, 129, 0.25)`,display:`inline-flex`,alignItems:`center`,gap:`0.4rem`,letterSpacing:`0.5px`},children:`🚀 Coming Soon`})]})]})]})}),(0,l.jsxs)(`div`,{className:`grids-container`,children:[w(a(`nav.pdfTools`),`📄`,`pdf-tools`,_,y),w(a(`nav.imageTools`),`🖼️`,`image-tools`,v,b),!T&&(0,l.jsxs)(`div`,{className:`empty-state`,children:[(0,l.jsx)(`div`,{className:`empty-state-icon`,children:`🔍`}),(0,l.jsx)(`h3`,{children:a(`home.noMatches`)}),(0,l.jsx)(`p`,{children:a(`home.trySearch`)})]})]})]})};export{u as Home};