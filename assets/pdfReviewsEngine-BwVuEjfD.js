import{o as e}from"./rolldown-runtime-CMxvf4Kt.js";import{i as t}from"./vendor-canvas-B4FIImU2.js";var n=async(e,n={})=>{let{PDFDocument:o,PDFName:c}=await t(async()=>{let{PDFDocument:e,PDFName:t}=await import(`./vendor-pdf-DhXkmSm_.js`).then(e=>e.o);return{PDFDocument:e,PDFName:t}},[]),l=await o.load(e.data),u=l.getPageCount(),d=n.exportFormat||`pdf`,f=n.filterType||`all`,p=n.groupBy||`page`,m=n.reportTitle?.trim()||`PDF Reviews & Annotations Report`,h=n.includeMetadata!==!1,g=[];for(let e=0;e<u;e++){let t=l.getPage(e).node.Annots();if(t){let n=t.asArray();for(let t=0;t<n.length;t++){let r=n[t],o=l.context.lookup(r);if(o&&o.get){let t=o.get(c.of(`Subtype`)),n=o.get(c.of(`Contents`)),r=o.get(c.of(`T`)),s=o.get(c.of(`M`))||o.get(c.of(`CreationDate`));if(t&&n){let o=t.name||`Comment`,c=n.value||n.toString(),l=r?r.value||r.toString():`Anonymous`,u=s?s.value||s.toString():``;c=i(c),l=i(l),u=a(u),c.trim()&&g.push({type:o,author:l,content:c,date:u,page:e+1})}}}}}let _=g;f===`comments`?_=g.filter(e=>{let t=e.type.toLowerCase();return t.includes(`text`)||t.includes(`freetext`)||t.includes(`popup`)||t.includes(`comment`)}):f===`highlights`&&(_=g.filter(e=>{let t=e.type.toLowerCase();return t.includes(`highlight`)||t.includes(`underline`)||t.includes(`strike`)||t.includes(`squiggly`)})),p===`author`?_.sort((e,t)=>e.author.localeCompare(t.author)||e.page-t.page):p===`type`?_.sort((e,t)=>e.type.localeCompare(t.type)||e.page-t.page):_.sort((e,t)=>e.page-t.page);let v=(e.name||`document`).replace(/\.[^/.]+$/,``);if(d===`json`){let t=JSON.stringify({title:m,sourceFile:e.name,extractedAt:new Date().toISOString(),totalCount:_.length,reviews:_},null,2),n=new Blob([t],{type:`application/json;charset=utf-8;`});return n.suggestedFilename=`${v}-reviews.json`,n}if(d===`csv`){let e=[`Page`,`Reviewer`,`Annotation Type`,`Date`,`Comment Content`],t=_.map(e=>[String(e.page),s(e.author),s(e.type),s(e.date||`N/A`),s(e.content)]),n=`﻿`+[e.join(`,`),...t.map(e=>e.join(`,`))].join(`\r
`),r=new Blob([n],{type:`text/csv;charset=utf-8;`});return r.suggestedFilename=`${v}-reviews.csv`,r}if(d===`txt`){let t=[`================================================================`,m.toUpperCase(),`================================================================`];if(h?(t.push(`Source Document: ${e.name}`),t.push(`Generated On:   ${new Date().toLocaleString()}`),t.push(`Total Reviews:  ${_.length}`),t.push(`----------------------------------------------------------------
`)):t.push(``),_.length===0)t.push(`No annotations or comments found matching the selected filter criteria.`);else{let e=null;for(let n of _)p===`author`&&e!==n.author?(e=n.author,t.push(`\n### REVIEWER: ${e.toUpperCase()} ###\n`)):p===`type`&&e!==n.type&&(e=n.type,t.push(`\n### TYPE: ${e.toUpperCase()} ###\n`)),t.push(`[Page ${n.page}] [${n.type}] ${n.author}:`),t.push(`  "${n.content.replace(/\n/g,`
  `)}"`),n.date&&t.push(`  Date: ${n.date}`),t.push(``)}let n=new Blob([t.join(`
`)],{type:`text/plain;charset=utf-8;`});return n.suggestedFilename=`${v}-reviews.txt`,n}return await r(e,_,m,p,v,h)};async function r(n,r,i,a,s,c=!0){let{default:l}=await t(async()=>{let{default:t}=await import(`./vendor-canvas-B4FIImU2.js`).then(t=>e(t.r(),1));return{default:t}},[]),{jsPDF:u}=await t(async()=>{let{jsPDF:e}=await import(`./vendor-canvas-B4FIImU2.js`).then(e=>e.t);return{jsPDF:e}},[]),d=await new Promise(e=>{let t=new Image;t.crossOrigin=`Anonymous`,t.onload=()=>{let n=document.createElement(`canvas`);n.width=t.width||64,n.height=t.height||64,n.getContext(`2d`).drawImage(t,0,0,n.width,n.height),e(n.toDataURL(`image/png`))},t.onerror=()=>e(null),t.src=`/logo2.png`})||`/logo2.png`,f={};for(let e of r)f[e.author]=(f[e.author]||0)+1;let p=Object.entries(f),m=document.createElement(`div`);m.style.position=`fixed`,m.style.top=`0`,m.style.left=`0`,m.style.width=`800px`,m.style.zIndex=`-9999`,m.style.opacity=`0.001`,m.style.pointerEvents=`none`,m.style.backgroundColor=`#f8fafc`,document.body.appendChild(m);let h=()=>{if(!c)return`
        <div style="background: #ffffff; padding: 18px 24px; border-radius: 12px; border: 1px solid #e2e8f0; margin-bottom: 20px; border-top: 4px solid #10b981; display: flex; align-items: center; justify-content: space-between;">
          <div style="display: flex; align-items: center; gap: 10px;">
            <img src="${d}" alt="logo" style="width: 24px; height: 24px;" />
            <h1 style="margin: 0; font-size: 18px; color: #0f172a;">${o(i)}</h1>
          </div>
          <div style="font-size: 11px; color: #64748b; font-weight: 600;">
            ${o(n.name)}
          </div>
        </div>
      `;let e=p.map(([e,t])=>`
      <span style="background: #f1f5f9; color: #334155; padding: 2px 8px; border-radius: 12px; font-size: 11px; font-weight: 600; border: 1px solid #e2e8f0;">
        ${o(e)}: <strong>${t}</strong>
      </span>
    `).join(` `);return`
      <div style="background: #ffffff; padding: 22px 24px; border-radius: 12px; border: 1px solid #e2e8f0; margin-bottom: 20px; border-top: 5px solid #10b981;">
        <div style="display: flex; align-items: center; justify-content: space-between; border-bottom: 1.5px solid #f1f5f9; padding-bottom: 12px; margin-bottom: 12px;">
          <div style="display: flex; align-items: center; gap: 10px;">
            <img src="${d}" alt="logo" style="width: 28px; height: 28px;" />
            <div style="font-size: 22px; font-weight: 800; letter-spacing: -0.5px;">
              <span style="color: #0f172a;">Your</span><span style="color: #10b981;">Own</span><span style="color: #0f172a;">PDF</span><span style="color: #64748b; font-weight: 600;">.com</span>
            </div>
          </div>
          <div style="font-size: 11px; color: #10b981; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; background: rgba(16, 185, 129, 0.1); padding: 5px 10px; border-radius: 6px; border: 1px solid rgba(16, 185, 129, 0.25);">
            Official Review Report
          </div>
        </div>
        <h1 style="margin: 0 0 8px 0; font-size: 20px; color: #0f172a;">${o(i)}</h1>
        <div style="display: flex; gap: 18px; color: #64748b; font-size: 13px; font-weight: 500; flex-wrap: wrap; margin-bottom: ${p.length>0?`10px`:`0`};">
          <div><strong>Source File:</strong> ${o(n.name)}</div>
          <div><strong>Date:</strong> ${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}</div>
          <div><strong>Total Reviews:</strong> ${r.length}</div>
        </div>
        ${p.length>0?`
          <div style="display: flex; align-items: center; gap: 6px; flex-wrap: wrap; padding-top: 8px; border-top: 1px dashed #f1f5f9;">
            <span style="font-size: 11px; color: #94a3b8; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Reviewers:</span>
            ${e}
          </div>
        `:``}
      </div>
    `},g=[],_=()=>{let e=document.createElement(`div`);return e.style.width=`800px`,e.style.padding=`36px`,e.style.boxSizing=`border-box`,e.style.fontFamily=`-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`,e.style.background=`#f8fafc`,e.style.position=`relative`,e.innerHTML=h(),e},v=_();if(m.appendChild(v),g.push(v),r.length===0){let e=document.createElement(`div`);e.innerHTML=`
      <div style="background: #ffffff; padding: 40px; border-radius: 12px; border: 1px solid #e2e8f0; text-align: center; color: #64748b;">
        <div style="font-size: 32px; margin-bottom: 10px;">🔍</div>
        <h3 style="color: #1e293b; margin-bottom: 6px;">No Annotations Found</h3>
        <p style="margin: 0; font-size: 14px;">No comments, sticky notes, or highlights were found in this document matching your filter criteria.</p>
      </div>
    `,v.appendChild(e)}else{let e=null;for(let t of r){if(a===`author`&&e!==t.author){e=t.author;let n=document.createElement(`div`);n.innerHTML=`<div style="font-size: 14px; font-weight: 700; color: #475569; text-transform: uppercase; letter-spacing: 0.5px; margin: 15px 0 8px 0; padding-bottom: 4px; border-bottom: 2px solid #cbd5e1;">Reviewer: ${o(e)}</div>`,v.appendChild(n)}else if(a===`type`&&e!==t.type){e=t.type;let n=document.createElement(`div`);n.innerHTML=`<div style="font-size: 14px; font-weight: 700; color: #475569; text-transform: uppercase; letter-spacing: 0.5px; margin: 15px 0 8px 0; padding-bottom: 4px; border-bottom: 2px solid #cbd5e1;">Type: ${o(e)}</div>`,v.appendChild(n)}let n=t.type.toLowerCase().includes(`highlight`),r=n?`background: #fef08a; color: #854d0e; border-color: #fde047;`:`background: #e0f2fe; color: #0369a1; border-color: #bae6fd;`,i=o(t.content),s=`
        <div style="background: #ffffff; padding: 18px 20px; border-radius: 12px; border: 1px solid #e2e8f0; margin-bottom: 16px; box-shadow: 0 1px 3px rgba(0,0,0,0.03);">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px; padding-bottom: 10px; border-bottom: 1px solid #f1f5f9;">
            <div style="display: flex; align-items: center; gap: 10px;">
              <span style="font-weight: 700; color: #0f172a; font-size: 15px;">${o(t.author)}</span>
              <span style="padding: 2.5px 8px; border-radius: 6px; font-size: 11px; font-weight: 600; border: 1px solid; ${r}">${o(t.type)}</span>
            </div>
            <span style="background: #f1f5f9; color: #64748b; padding: 3px 10px; border-radius: 20px; font-weight: 600; font-size: 12px; border: 1px solid #e2e8f0;">Page ${t.page}</span>
          </div>
          <div style="font-size: 14px; color: #0f172a; white-space: pre-wrap; background: #f8fafc; padding: 12px 14px; border-radius: 8px; border-left: 4px solid ${n?`#eab308`:`#10b981`}; line-height: 1.55;">${i}</div>
          ${t.date?`<div style="font-size: 11px; color: #94a3b8; margin-top: 8px; text-align: right;">${o(t.date)}</div>`:``}
        </div>
      `,c=document.createElement(`div`);c.innerHTML=s,v.appendChild(c),v.scrollHeight>1131&&(v.removeChild(c),v.style.height=`1131px`,v=_(),v.appendChild(c),m.appendChild(v),g.push(v))}}v&&(v.style.height=`1131px`),await new Promise(e=>setTimeout(e,100));let y=new u({orientation:`portrait`,unit:`pt`,format:`a4`}),b=y.internal.pageSize.getWidth(),x=y.internal.pageSize.getHeight();for(let e=0;e<g.length;e++){e>0&&y.addPage();let t=(await l(g[e],{scale:1.5,useCORS:!0,logging:!1,backgroundColor:`#f8fafc`})).toDataURL(`image/jpeg`,.95);y.addImage(t,`JPEG`,0,0,b,x),y.setFontSize(9.5),y.setTextColor(100,116,139);let n=`Page ${e+1} of ${g.length}`,r=y.getTextWidth(n);y.text(n,(b-r)/2,x-20)}try{document.body.removeChild(m)}catch{}let S=y.output(`arraybuffer`),C=new Blob([new Uint8Array(S)],{type:`application/pdf`});return C.suggestedFilename=`${s}-reviews-report.pdf`,C}function i(e){return e?String(e).replace(/^\uFEFF/,``).replace(/^\xFE\xFF/,``).split(``).filter(e=>{let t=e.charCodeAt(0);return t>=32||t===10||t===13||t===9}).join(``).trim():``}function a(e){if(!e)return``;let t=String(e).match(/D:(\d{4})(\d{2})(\d{2})(\d{2})?(\d{2})?/);return t?`${t[1]}-${t[2]}-${t[3]} ${t[4]||`00`}:${t[5]||`00`}`:String(e).replace(/^D:/,``).trim()}function o(e){return String(e||``).replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`)}function s(e){let t=String(e||``);return t.includes(`,`)||t.includes(`"`)||t.includes(`
`)||t.includes(`\r`)?`"${t.replace(/"/g,`""`)}"`:t}export{n as extractPdfReviews};