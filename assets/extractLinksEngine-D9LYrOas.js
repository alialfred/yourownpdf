const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/pdf-BBLrLs5d.js","assets/ToolPageContainer-t_uuTCgZ.js","assets/index-DzpuwvLm.js","assets/index-C-BmuCNG.css","assets/es-XTlqXU5_.js","assets/UPNG-BK6LZrS3.js","assets/pdf.worker.min-F4QrjxyE.js","assets/ToolCard-C3Z8a8E1.js","assets/xlsx-CJMPZkJP.js"])))=>i.map(i=>d[i]);
import{t as e}from"./index-DzpuwvLm.js";async function t(t,n){let r=t[0],i=n?.linksControl||{},a=i.exportFormat||`csv`,o=i.includeWeb??!0,s=i.includeEmail??!0,c=i.includeInternal??!0,l=i.includeActions??!0,u=i.includePlainRegex??!0,d=i.deduplicate??!1,f=(i.pageRange||``).trim(),p=e=>{if(!e)return``;let t=e.trim();for(;t.length>0;){let e=t[t.length-1];if([`.`,`,`,`;`,`:`,`!`,`?`,`<`,`>`,`'`,`"`,`]`,`}`].includes(e))t=t.slice(0,-1);else if(e===`)`){let e=(t.match(/\(/g)||[]).length;if((t.match(/\)/g)||[]).length>e)t=t.slice(0,-1);else break}else break}return t},m=await e(()=>import(`./pdf-BBLrLs5d.js`),__vite__mapDeps([0,1,2,3,4,5,6,7])),h=(await e(async()=>{let{default:e}=await import(`./pdf.worker.min-F4QrjxyE.js`).then(e=>e.n);return{default:e}},__vite__mapDeps([6,2,3]))).default;m.GlobalWorkerOptions.workerSrc=h;let g=r.data;g instanceof ArrayBuffer?g=new Uint8Array(g):g&&typeof g==`object`&&g.buffer instanceof ArrayBuffer&&(g=new Uint8Array(g.buffer,g.byteOffset,g.byteLength));let _=await m.getDocument({data:g.slice(0)}).promise,v=_.numPages,y=[],b=new Set;for(let e=1;e<=v;e++){let t=await _.getPage(e);try{let n=await t.getAnnotations();for(let t of n){let n=t.url||``,r=`web`,i=t.alternativeText||t.contents||``;if(t.subtype===`Link`){if(n)n=p(n),r=n.startsWith(`mailto:`)?`email`:n.startsWith(`tel:`)?`phone`:n.startsWith(`http://`)||n.startsWith(`https://`)||n.startsWith(`ftp://`)?`web`:`action`;else if(t.dest){r=`internal`;let e=`?`;try{let n=t.dest;typeof n==`string`&&(n=await _.getDestination(n)),Array.isArray(n)&&n[0]&&(e=await _.getPageIndex(n[0])+1)}catch{e=typeof t.dest==`string`?t.dest:`Target`}n=typeof e==`number`?`Internal Jump → Page ${e}`:`Internal Jump: ${e}`}else t.action===`GoTo`?(r=`internal`,n=`Internal Jump`):(t.action===`Launch`||t.action===`Named`)&&(r=`action`,n=t.action===`Launch`?`File Launch: ${t.file||`External File`}`:`Action: ${t.action}`);n&&(b.add(`${e}::${n.toLowerCase()}`),y.push({page:e,type:r,url:n,text:i||n,source:`annotation`}))}else if(t.action===`Launch`){let n=t.file?`Launch File: ${t.file}`:`Launch Action`;y.push({page:e,type:`action`,url:n,text:i||n,source:`annotation`})}}}catch{}if(u)try{let n=await t.getTextContent(),r=``;for(let e of n.items)r+=e.str+(e.hasEOL?`
`:` `);let i=r.replace(/((?:https?:\/\/|www\.)[^\s]+)-\r?\n([a-zA-Z0-9_\-./]+)/gi,`$1-$2`).replace(/((?:https?:\/\/|www\.)[^\s]+)\r?\n([a-zA-Z0-9_\-./]+)/gi,`$1$2`).replace(/\s+/g,` `),a=/(?:https?:\/\/|www\.)[^\s<>"{}|\\^`[\]]+/gi,o;for(;(o=a.exec(i))!==null;){let t=p(o[0]),n=t.startsWith(`www.`)?`https://${t}`:t,r=`${e}::${n.toLowerCase()}`;if(t.length>4&&!b.has(r)){b.add(r);let t=Math.max(0,o.index-20),a=Math.min(i.length,o.index+o[0].length+20);y.push({page:e,type:`web`,url:n,text:`...`+i.substring(t,a).trim()+`...`,source:`text_regex`})}}let s=/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/gi;for(;(o=s.exec(i))!==null;){let t=p(o[0]),n=`mailto:${t}`,r=`${e}::${n.toLowerCase()}`;t.length>5&&!b.has(r)&&(b.add(r),y.push({page:e,type:`email`,url:n,text:t,source:`text_regex`}))}}catch{}}let x=[...y];if(f){let e=new Set,t=f.split(`,`);for(let n of t){let t=n.trim();if(t.includes(`-`)){let[n,r]=t.split(`-`).map(e=>parseInt(e.trim()));if(!isNaN(n)&&!isNaN(r))for(let t=Math.min(n,r);t<=Math.max(n,r);t++)e.add(t)}else{let n=parseInt(t);isNaN(n)||e.add(n)}}e.size>0&&(x=x.filter(t=>e.has(t.page)))}x=x.filter(e=>!(e.type===`web`&&!o||e.type===`email`&&!s||e.type===`internal`&&!c||e.type===`action`&&!l));let S;if(d){let e=new Map;x.forEach(t=>{let n=t.url.trim().toLowerCase();if(!e.has(n))e.set(n,{...t,pages:[t.page],count:1});else{let r=e.get(n);r.pages.includes(t.page)||r.pages.push(t.page),r.count+=1}}),S=Array.from(e.values()).map(e=>({...e,pageDisplay:e.pages.sort((e,t)=>e-t).join(`, `)}))}else S=x.map(e=>({...e,pages:[e.page],count:1,pageDisplay:String(e.page)}));if(a===`csv`){let e=e=>`"${String(e||``).replace(/"/g,`""`)}"`,t=d?`Pages,Occurrences,Type,Anchor / Context,Target URL
`:`Page,Type,Anchor / Context,Target URL
`;S.forEach(n=>{d?t+=`${e(n.pageDisplay)},${n.count},${e(n.type.toUpperCase())},${e(n.text)},${e(n.url)}\n`:t+=`${n.page},${e(n.type.toUpperCase())},${e(n.text)},${e(n.url)}\n`});let n=new Blob([t],{type:`text/csv;charset=utf-8;`});return n.suggestedFilename=`yourownpdf-links.csv`,n}if(a===`xlsx`){let t=await e(()=>import(`./xlsx-CJMPZkJP.js`),__vite__mapDeps([8,1,2,3,4,5,6,7])),n=S.map(e=>({[d?`Pages`:`Page`]:e.pageDisplay,...d?{Occurrences:e.count}:{},"Link Type":e.type.toUpperCase(),"Anchor / Context Text":e.text,"Destination URL":e.url})),r=t.utils.json_to_sheet(n),i=t.utils.book_new();t.utils.book_append_sheet(i,r,`PDF Hyperlinks`);let a=t.write(i,{bookType:`xlsx`,type:`array`}),o=new Blob([a],{type:`application/vnd.openxmlformats-officedocument.spreadsheetml.sheet`});return o.suggestedFilename=`yourownpdf-links.xlsx`,o}if(a===`json`){let e=JSON.stringify(S.map(e=>({page:d?e.pages:e.page,...d?{count:e.count}:{},type:e.type,text:e.text,url:e.url})),null,2),t=new Blob([e],{type:`application/json`});return t.suggestedFilename=`yourownpdf-links.json`,t}if(a===`html`){function e(e){return String(e||``).replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`)}let t=S.map((t,n)=>`
      <tr>
        <td>${n+1}</td>
        <td><strong>Pg ${t.pageDisplay}${d&&t.count>1?` (${t.count}×)`:``}</strong></td>
        <td><span class="badge ${t.type}">${t.type.toUpperCase()}</span></td>
        <td>${e(t.text)}</td>
        <td><a href="${t.url}" target="_blank" rel="noopener noreferrer">${e(t.url)}</a></td>
      </tr>
    `).join(``),n=`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Extracted PDF Links Report</title>
  <style>
    body { font-family: system-ui, -apple-system, sans-serif; padding: 2rem; background: #f8fafc; color: #1e293b; }
    .container { max-width: 1000px; margin: 0 auto; background: #fff; padding: 2rem; border-radius: 8px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1); }
    h1 { margin-top: 0; color: #0f172a; }
    .meta { color: #64748b; margin-bottom: 1.5rem; }
    table { width: 100%; border-collapse: collapse; margin-top: 1rem; }
    th, td { padding: 0.75rem; text-align: left; border-bottom: 1px solid #e2e8f0; font-size: 0.9rem; }
    th { background: #f1f5f9; font-weight: 600; }
    a { color: #2563eb; text-decoration: none; word-break: break-all; }
    a:hover { text-decoration: underline; }
    .badge { padding: 0.2rem 0.5rem; border-radius: 4px; font-size: 0.75rem; font-weight: 700; }
    .badge.web { background: #dbeafe; color: #1d4ed8; }
    .badge.email { background: #dcfce7; color: #15803d; }
    .badge.internal { background: #f3e8ff; color: #7e22ce; }
    .badge.action { background: #fef3c7; color: #b45309; }
  </style>
</head>
<body>
  <div class="container">
    <h1>Extracted PDF Hyperlinks</h1>
    <div class="meta">Found <strong>${S.length}</strong> ${d?`unique `:``}links in document. Exported via YourOwnPDF.com.</div>
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>${d?`Pages`:`Page`}</th>
          <th>Type</th>
          <th>Anchor / Context</th>
          <th>URL / Destination</th>
        </tr>
      </thead>
      <tbody>
        ${t}
      </tbody>
    </table>
  </div>
</body>
</html>`,r=new Blob([n],{type:`text/html;charset=utf-8;`});return r.suggestedFilename=`yourownpdf-links.html`,r}let C=S.length>0?S.map(e=>`[Pg ${e.pageDisplay}${d&&e.count>1?` (${e.count}×)`:``}] [${e.type.toUpperCase()}] ${e.url} ${e.text&&e.text!==e.url?`("${e.text}")`:``}`).join(`
`):`No hyperlinks found in the uploaded PDF document.`,w=new Blob([C],{type:`text/plain;charset=utf-8;`});return w.suggestedFilename=`yourownpdf-links.txt`,w}export{t as extractLinksPdf};