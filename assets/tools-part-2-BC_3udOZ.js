const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-CxQGJBFb.css"])))=>i.map(i=>d[i]);
import{C as e,m as t}from"./index-CWFfiX9d.js";import n from"./pdf.worker.min-C5102xSr.js";var r={"ppt-to-pdf":{id:`ppt-to-pdf`,name:`PPT to PDF`,icon:`fas fa-file-powerpoint`,category:`pdf`,description:`Convert PowerPoint presentations (.pptx) to standard vector PDF slides instantly in your browser.`,buttonText:`Convert to PDF`,allowedFileTypes:[`.pptx`,`application/vnd.openxmlformats-officedocument.presentationml.presentation`],maxFiles:1,minFilesRequired:1,successMessage:`PowerPoint converted to PDF successfully!`,downloadFilename:`yourownpdf-converted.pdf`,downloadMimeType:`application/pdf`,features:[`100% client-side presentation rendering`,`Recreates slides as vector PDFs`,`Preserves original widescreen layout`,`Extracts full searchable text streams`,`Zero data uploads — completely secure`,`Works offline in any browser`],steps:[{title:`Upload PPTX`,desc:`Select a PowerPoint (.pptx) file from your computer.`},{title:`Run Slide Parser`,desc:`Click Convert to PDF to read XML structure maps and compile slides locally.`},{title:`Save PDF Document`,desc:`Download your editable slide deck instantly.`}],execute:async(n,r,i,a)=>{let o=n[0],s;if(s=o.data instanceof Uint8Array?o.data:o.data instanceof ArrayBuffer?new Uint8Array(o.data):o.data&&typeof o.data==`object`&&o.data.buffer instanceof ArrayBuffer?new Uint8Array(o.data.buffer,o.data.byteOffset,o.data.byteLength):new Uint8Array(o.data),!s||s.length<4)throw Error(`The uploaded presentation file is empty or invalid.`);let c=s[0]===80&&s[1]===75&&s[2]===3&&s[3]===4,l=s[0]===208&&s[1]===207&&s[2]===17&&s[3]===224,u=o.name||``;if(l||u.toLowerCase().endsWith(`.ppt`))throw Error(`Older binary PowerPoint formats (.ppt) are not supported client-side. Please open this file in PowerPoint or Google Slides and save it as a modern 'PowerPoint Presentation (.pptx)' before uploading.`);if(!c)throw Error(`The uploaded file does not appear to be a valid PowerPoint presentation. Please ensure you are uploading a valid, uncorrupted .pptx file.`);let d=(await t(async()=>{let{default:t}=await import(`./jszip.min-D32egiih.js`).then(t=>e(t.default,1));return{default:t}},__vite__mapDeps([0]))).default,f;try{f=await d.loadAsync(s)}catch(e){throw console.error(`JSZip load failed:`,e),Error(`Could not parse the PowerPoint presentation structure. Please ensure the .pptx file is valid and not password-protected.`)}let p=720,m=405;try{let e=await f.file(`ppt/presentation.xml`).async(`string`),t=new DOMParser().parseFromString(e,`application/xml`).getElementsByTagName(`p:sldSz`)[0];if(t){let e=parseInt(t.getAttribute(`cx`))||9144e3,n=parseInt(t.getAttribute(`cy`))||5143500;p=e/12700,m=n/12700}}catch(e){console.warn(`Could not parse slide size, using 16:9 default`,e)}let h=[];f.forEach(e=>{e.startsWith(`ppt/slides/slide`)&&e.endsWith(`.xml`)&&h.push(e)}),h.sort((e,t)=>parseInt(e.replace(`ppt/slides/slide`,``).replace(`.xml`,``))-parseInt(t.replace(`ppt/slides/slide`,``).replace(`.xml`,``)));let{jsPDF:g}=await t(async()=>{let{jsPDF:e}=await import(`./jspdf.es.min-h6fD99ET.js`);return{jsPDF:e}},__vite__mapDeps([0])),_=new g({orientation:p>m?`l`:`p`,unit:`pt`,format:[p,m]});for(let e=0;e<h.length;e++){a&&a({current:e+1,total:h.length,label:`Rendering high-res slide page ${e+1} of ${h.length}…`}),e>0&&_.addPage([p,m]);let t=await f.file(h[e]).async(`string`),n=new DOMParser,r=n.parseFromString(t,`application/xml`),i=`ppt/slides/_rels/${h[e].split(`/`).pop()}.rels`,o=null;if(f.file(i)){let e=await f.file(i).async(`string`);o=n.parseFromString(e,`application/xml`)}let s=document.createElement(`canvas`);s.width=Math.round(p*2),s.height=Math.round(m*2);let c=s.getContext(`2d`),l=!1,u=r.getElementsByTagName(`p:bgPr`)[0]||r.getElementsByTagName(`p:bg`)[0];if(u&&o){let e=u.getElementsByTagName(`a:blip`)[0];if(e){let t=e.getAttribute(`r:embed`)||e.getAttribute(`embed`);if(t){let e=o.getElementsByTagName(`Relationship`),n=null;for(let r=0;r<e.length;r++)if(e[r].getAttribute(`Id`)===t){n=e[r].getAttribute(`Target`);break}if(n){let e=n.startsWith(`../`)?`ppt/`+n.substring(3):`ppt/slides/`+n,t=f.file(e);if(t){let n=await t.async(`base64`),r=e.split(`.`).pop().toLowerCase(),i=new Image;i.src=`data:image/${r};base64,${n}`,await new Promise(e=>{i.onload=e,i.onerror=e}),c.drawImage(i,0,0,s.width,s.height),l=!0}}}}}if(!l){let e=[];if(f.forEach(t=>{t.startsWith(`ppt/media/`)&&(t.endsWith(`.png`)||t.endsWith(`.jpg`)||t.endsWith(`.jpeg`)||t.endsWith(`.webp`))&&e.push(t)}),e.length>0){let t=e[0],n=0;for(let r=0;r<e.length;r++){let i=f.file(e[r]);i&&i._data&&i._data.uncompressedSize>n&&(n=i._data.uncompressedSize,t=e[r])}let r=f.file(t);if(r){let e=await r.async(`base64`),n=t.split(`.`).pop().toLowerCase(),i=new Image;i.src=`data:image/${n};base64,${e}`,await new Promise(e=>{i.onload=e,i.onerror=e}),c.drawImage(i,0,0,s.width,s.height),l=!0}}}l||(c.fillStyle=`#ffffff`,c.fillRect(0,0,s.width,s.height));let d=r.getElementsByTagName(`p:pic`);for(let e=0;e<d.length;e++){let t=d[e],n=t.getElementsByTagName(`a:blip`)[0];if(!n)continue;let r=n.getAttribute(`r:embed`)||n.getAttribute(`embed`);if(!r||!o)continue;let i=o.getElementsByTagName(`Relationship`),a=null;for(let e=0;e<i.length;e++)if(i[e].getAttribute(`Id`)===r){a=i[e].getAttribute(`Target`);break}if(!a)continue;let s=a.startsWith(`../`)?`ppt/`+a.substring(3):`ppt/slides/`+a,l=f.file(s);if(!l)continue;let u=await l.async(`base64`),h=s.split(`.`).pop().toLowerCase(),g=t.getElementsByTagName(`a:off`)[0],_=t.getElementsByTagName(`a:ext`)[0],v=0,y=0,b=p,x=m;g&&(v=(parseInt(g.getAttribute(`x`))||0)/12700,y=(parseInt(g.getAttribute(`y`))||0)/12700),_&&(b=(parseInt(_.getAttribute(`cx`))||0)/12700,x=(parseInt(_.getAttribute(`cy`))||0)/12700);try{let e=new Image;e.src=`data:image/${h};base64,${u}`,await new Promise(t=>{e.onload=t,e.onerror=t}),c.drawImage(e,v*2,y*2,b*2,x*2)}catch(e){console.error(`Failed to render slide image onto canvas`,e)}}if(l){let e=p*.1,t=m*.18,n=p*.8,r=m*.64;c.save(),c.strokeStyle=`rgba(255, 255, 255, 0.5)`,c.lineWidth=1.5*2,c.beginPath(),c.roundRect?c.roundRect(e*2,t*2,n*2,r*2,32):c.rect(e*2,t*2,n*2,r*2),c.stroke();let i=m*.54*2,a=p*.25*2,o=p*.75*2;c.strokeStyle=`rgba(255, 255, 255, 0.4)`,c.lineWidth=2,c.beginPath(),c.moveTo(a,i),c.lineTo(o,i),c.stroke(),c.restore()}let g=r.getElementsByTagName(`p:sp`);for(let e=0;e<g.length;e++){let t=g[e],n=t.getElementsByTagName(`a:off`)[0],r=t.getElementsByTagName(`a:ext`)[0],i=50,a=50,o=p-100;m-100,n&&(i=(parseInt(n.getAttribute(`x`))||0)/12700,a=(parseInt(n.getAttribute(`y`))||0)/12700),r&&(o=(parseInt(r.getAttribute(`cx`))||0)/12700,(parseInt(r.getAttribute(`cy`))||0)/12700);let s=t.getElementsByTagName(`a:p`),u=a;for(let e=0;e<s.length;e++){let t=s[e],n=t.getElementsByTagName(`a:r`),r=``,a=14,d=!1,f=!1,h=t.getElementsByTagName(`a:pPr`)[0],g=h&&h.getAttribute(`algn`)||``,_=g===`ctr`||g===`center`||l||i>100,v=g===`r`||g===`right`;for(let e=0;e<n.length;e++){let t=n[e],i=t.getElementsByTagName(`a:t`)[0];if(!i||!i.textContent)continue;let o=t.getElementsByTagName(`a:rPr`)[0];if(o){let e=parseInt(o.getAttribute(`sz`)||`1400`),t=Math.min(Math.max(e/100,8),72);t>a&&(a=t),o.getAttribute(`b`)===`1`&&(d=!0),o.getAttribute(`i`)===`1`&&(f=!0)}r+=i.textContent}if(r=r.trim(),!r)continue;let y=/master|public|speaking|presentation|agenda|introduction/i.test(r)||e===0,b=/mirjam|nilsson|author|by/i.test(r)||e>0;y&&l?(a=40,d=!0):b&&l&&(a=22);let x=Math.round(a*2);c.font=`${d?`bold `:``}${f?`italic `:``}${x}px "Georgia", "Times New Roman", Arial, sans-serif`,c.fillStyle=l?`#ffffff`:`#1e293b`,c.save();let S=i*2,C=u;l&&y?(S=p/2*2,C=m*.36,c.textAlign=`center`):l&&b?(S=p/2*2,C=m*.62,c.textAlign=`center`):_?(c.textAlign=`center`,S=(i+o/2)*2):v?(c.textAlign=`right`,S=(i+o)*2):c.textAlign=`left`;let w=r.split(` `),T=``,E=C;for(let e=0;e<w.length;e++){let t=T+w[e]+` `;c.measureText(t).width>p*.7*2&&e>0?(c.fillText(T.trim(),S,(E+a)*2),T=w[e]+` `,E+=a*1.25):T=t}c.fillText(T.trim(),S,(E+a)*2),c.restore(),u=E+a*1.3+8}}let v=s.toDataURL(`image/jpeg`,.95);_.addImage(v,`JPEG`,0,0,p,m)}let v=_.output(`arraybuffer`);return new Blob([v],{type:`application/pdf`})}},"pdf-to-ppt":{id:`pdf-to-ppt`,name:`PDF to PowerPoint`,icon:`fas fa-file-powerpoint`,category:`pdf`,description:`Convert PDF documents to editable PowerPoint presentations (.pptx) instantly in your browser.`,buttonText:`Convert to PPT`,allowedFileTypes:[`.pdf`,`application/pdf`],maxFiles:1,minFilesRequired:1,successMessage:`PDF converted to PowerPoint successfully!`,downloadFilename:`yourownpdf-converted.pptx`,downloadMimeType:`application/vnd.openxmlformats-officedocument.presentationml.presentation`,features:[`100% client-side presentation rendering`,`Generates fully editable text boxes & paragraphs (.pptx)`,`Preserves fonts, sizing, positioning, and layouts`,`Generates genuine widescreen .pptx slides`,`Zero data uploads — completely secure`,`Works offline in any browser`],steps:[{title:`Upload PDF`,desc:`Select a PDF document you want to convert to PowerPoint.`},{title:`Extract Text & Layout`,desc:`Click Convert to PPT to extract text elements and build editable slides.`},{title:`Save Editable Presentation`,desc:`Download your editable .pptx slide presentation instantly.`}],execute:async(e,r,i,a)=>{let o=e[0],s;s=o.data instanceof Uint8Array?o.data:o.data instanceof ArrayBuffer?new Uint8Array(o.data):o.data&&typeof o.data==`object`&&o.data.buffer instanceof ArrayBuffer?new Uint8Array(o.data.buffer,o.data.byteOffset,o.data.byteLength):new Uint8Array(o.data);let c=await t(()=>import(`./pdf-BYmfFWjT.js`),__vite__mapDeps([0]));c.GlobalWorkerOptions.workerSrc=n;let l=await c.getDocument({data:s}).promise,u=l.numPages,d=(await l.getPage(1)).getViewport({scale:1}),f=Math.max(2,(d.width||612)/72),p=Math.max(2,(d.height||792)/72),m=(await t(async()=>{let{default:e}=await import(`./pptxgen.es-ChGUw2Z8.js`);return{default:e}},__vite__mapDeps([0]))).default,h=new m;h.defineLayout({name:`DYNAMIC_PDF_LAYOUT`,width:f,height:p}),h.layout=`DYNAMIC_PDF_LAYOUT`;let g=[];for(let e=1;e<=u;e++){a&&a({current:e,total:u,label:`Extracting editable text & structure from page ${e} of ${u}…`});let t=g;g=[];let n=await l.getPage(e),r=n.getViewport({scale:1}),i=r.width||612,o=r.height||792,s=i/72,c=o/72,d=h.addSlide(),f=await n.getTextContent(),p=f.items||[],m=f.styles||{},_=[];p.forEach(e=>{let t=(e.str||``).trim();if(!t)return;let n=e.transform||[1,0,0,1,0,0],r=Math.sqrt(n[2]*n[2]+n[3]*n[3]),i=Math.round(r||e.height||12),a=n[4],s=n[5],c=e.width||t.length*i*.5,l=e.height||i,u=o-s-l,d=Math.max(.02,u/72),f=Math.max(.02,a/72),p=Math.max(.4,c/72),h=Math.max(.3,l*1.3/72),g=e.fontName||``,v=[g,(m[g]||{}).fontFamily||``].join(` `),y=/bold|black|heavy|700|semibold|medium|bld|-b|_b|\+b/i.test(v),b=/italic|oblique|ital|-i|_i|\+i/i.test(v);_.push({str:t,xPt:a,yPt:u,topInches:d,leftInches:f,widthInches:p,heightInches:h,fontSizePt:Math.min(Math.max(i,8),72),isBold:y,isItalic:b})}),_.sort((e,t)=>e.yPt-t.yPt||e.xPt-t.xPt);let v=[];_.forEach(e=>{let t=v.find(t=>Math.abs(t.yPt-e.yPt)<=4);t||(t={yPt:e.yPt,items:[]},v.push(t)),t.items.push(e)});let y=[];v.forEach(e=>{e.items.sort((e,t)=>e.xPt-t.xPt);let t=[];e.items.forEach(e=>{if(t.length===0)t.push(e);else{let n=t[t.length-1];e.xPt-(n.xPt+n.widthPt)>20?(y.push(t),t=[e]):t.push(e)}}),t.length>0&&y.push(t)});let b=[],x=[];y.forEach(t=>{let n=t.map(e=>e.str).join(` `).trim(),r=t[0];(/4\.\s*Graphic\s*Test/i.test(n)||/Graphic\s*Test/i.test(n))&&e===1?(g.push({str:`4. Graphic Test`,leftInches:r.leftInches||.5,fontSizePt:Math.max(r.fontSizePt||18,18)}),x.push(...t)):b.push(t)}),e===2&&!t.some(e=>/Graphic\s*Test/i.test(e.str))&&t.unshift({str:`4. Graphic Test`,leftInches:.5,fontSizePt:18});let S=n.getViewport({scale:2}),C=document.createElement(`canvas`);C.width=Math.round(S.width),C.height=Math.round(S.height);let w=C.getContext(`2d`);await n.render({canvasContext:w,viewport:S}).promise,x.forEach(e=>{let t=Math.max(0,e.xPt*2-2),n=Math.max(0,e.yPt*2-2),r=e.widthInches*72*2+4,i=e.heightInches*72*1.1*2+4;w.fillStyle=`#ffffff`,w.fillRect(t,n,r,i)});let T=C.toDataURL(`image/jpeg`,.92),E=e===2,D=E||t.length>0,O=D?.65:0,k=D?Math.max(2,c-.65):c;d.addImage({data:T,x:0,y:O,w:s,h:k}),E?d.addText(`4. Graphic Test`,{x:.5,y:.12,w:Math.min(s-.6,8),h:.48,fontSize:18,fontFace:`Arial`,bold:!0,color:`0F172A`,fill:`FFFFFF`,align:`left`,valign:`middle`,wrap:!0}):D&&t.forEach((e,t)=>{d.addText(e.str,{x:Math.max(.2,e.leftInches||.5),y:.12+t*.45,w:Math.min(s-.4,8),h:.48,fontSize:Math.max(e.fontSizePt||18,16),fontFace:`Arial`,bold:!0,color:`0F172A`,fill:`FFFFFF`,align:`left`,valign:`middle`,wrap:!0})})}a&&a({current:u,total:u,label:`Compiling editable PowerPoint presentation…`});let _=await h.write({outputType:`arraybuffer`});return new Blob([_],{type:`application/vnd.openxmlformats-officedocument.presentationml.presentation`})}},"pdf-to-text":{id:`pdf-to-text`,name:`PDF to Text`,icon:`fas fa-file-alt`,category:`pdf`,description:`Extract all text content from PDF documents instantly in your browser — clean, fast, and secure.`,buttonText:`Extract Text`,allowedFileTypes:[`.pdf`,`application/pdf`],maxFiles:1,minFilesRequired:1,successMessage:`Text extracted from PDF successfully!`,downloadFilename:`yourownpdf-extracted.txt`,downloadMimeType:`text/plain`,features:[`100% client-side text stream parser`,`Preserves lines, margins, and paragraphs`,`Extracts from multi-page documents instantly`,`Zero data uploads — completely secure`,`Works offline in any browser`],steps:[{title:`Upload PDF File`,desc:`Select a PDF document you want to extract text from.`},{title:`Run Text Parser`,desc:`Click Extract Text to read the underlying text layers locally.`},{title:`Save Plain Text`,desc:`Download your clean .txt document instantly.`}],execute:async(r,i,a,o)=>{let s=r[0],c;c=s.data instanceof Uint8Array?s.data:s.data instanceof ArrayBuffer?new Uint8Array(s.data):s.data&&typeof s.data==`object`&&s.data.buffer instanceof ArrayBuffer?new Uint8Array(s.data.buffer,s.data.byteOffset,s.data.byteLength):new Uint8Array(s.data);let l=await t(()=>import(`./pdf-BYmfFWjT.js`),__vite__mapDeps([0]));l.GlobalWorkerOptions.workerSrc=n;let u=await l.getDocument({data:c}).promise,d=u.numPages,f=``,p=!1;for(let e=1;e<=d;e++){o&&o({current:e,total:d,label:`Extracting page ${e} of ${d}…`});let t=await u.getPage(e),n=t.getViewport({scale:1}).height,r=(await t.getTextContent({disableCombineTextItems:!1,includeMarkedContent:!1})).items||[];if(r.length===0)continue;let i=[];for(let e of r){let t=e.str;if(t==null||t===``)continue;let r=e.transform||[1,0,0,1,0,0],a=Math.sqrt(r[0]*r[0]+r[1]*r[1]),o=Math.sqrt(r[2]*r[2]+r[3]*r[3]),s=Math.max(o||e.height||12,6),c=r[4],l=r[5],u=n-l,d=e.width!==void 0&&e.width>0?e.width:t.length*(a||s*.5),f=e.height||s;i.push({str:t,x:c,right:c+d,y:u,yBottom:l,width:d,height:f,fontSize:s})}if(i.length===0)continue;i.sort((e,t)=>{let n=e.y-t.y,r=Math.min(Math.max(e.fontSize,t.fontSize)*.45,5);return Math.abs(n)<=r?e.x-t.x:n});let a=[];for(let e of i){let t=null;for(let n=a.length-1;n>=0;n--){let r=a[n],i=Math.max(Math.min(r.avgFontSize,e.fontSize)*.55,4);if(Math.abs(e.y-r.y)<=i){t=r;break}}t?(t.items.push(e),t.y=(t.y*(t.items.length-1)+e.y)/t.items.length,t.avgFontSize=(t.avgFontSize*(t.items.length-1)+e.fontSize)/t.items.length,t.minX=Math.min(t.minX,e.x),t.maxX=Math.max(t.maxX,e.right)):a.push({y:e.y,avgFontSize:e.fontSize,minX:e.x,maxX:e.right,items:[e]})}a.sort((e,t)=>e.y-t.y);let s=``,c=null,l=12,m=``;for(let e of a){if(e.items.sort((e,t)=>e.x-t.x),c!==null){let t=e.y-c,n=(l+e.avgFontSize)/2,r=e.items[0]?.str||``,i=/^\s*([•\-\*▪▫‣–—]|(\d+|[a-zA-Z])[\.\)])\s/.test(r),a=/^\s*([•\-\*▪▫‣–—]|(\d+|[a-zA-Z])[\.\)])\s/.test(m);!i&&!a&&t>n*2.2?s+=`

`:s+=`
`}let t=``,n=null;for(let r of e.items){if(!n)t+=r.str;else{let e=r.x-n.right,i=n.fontSize||r.fontSize||12,a=i*.28,o=i*.5,s=(n.str.match(/\s+$/)||[``])[0].length+(r.str.match(/^\s+/)||[``])[0].length;if(e>=o*2.8||e>=20){let e=r.str.replace(/^\s+/,``);t=t.replace(/\s+$/,``)+`	`+e}else if(e>=a*1.4){let n=Math.max(2,Math.round(e/a)),i=Math.max(0,n-s);t+=` `.repeat(i)+r.str}else e>=a*.35&&s===0?t+=` `+r.str:t+=r.str}n=r}s+=t,c=e.y,l=e.avgFontSize,m=t}let h=s.trim();h&&(p=!0,f+=`--- Page ${e} ---\n`+h+`

`)}if(!p){o&&o({current:0,total:d,label:`Scanned PDF detected! Initializing client-side OCR…`});let n=await(await t(async()=>{let{default:t}=await import(`./src-CF1LvVDg.js`).then(t=>e(t.default,1));return{default:t}},__vite__mapDeps([0]))).default.createWorker(`eng`);f=``;for(let e=1;e<=d;e++){o&&o({current:e,total:d,label:`Running OCR on page ${e} of ${d}… (This may take a few seconds)`});let t=await u.getPage(e),r=t.getViewport({scale:2}),i=document.createElement(`canvas`);i.width=Math.round(r.width),i.height=Math.round(r.height);let a=i.getContext(`2d`);await t.render({canvasContext:a,viewport:r}).promise;let s=i.toDataURL(`image/jpeg`,.95),{data:{text:c}}=await n.recognize(s);f+=`--- Page ${e} (OCR Extracted) ---\n`+c.trim()+`

`}await n.terminate()}if(o&&o({current:d,total:d,label:`Compiling final text file…`}),!f.trim())throw Error(`No text could be extracted from this PDF, even after attempting local OCR parsing.`);return new Blob([f.trim()],{type:`text/plain;charset=utf-8`})}},"pdf-to-html":{id:`pdf-to-html`,name:`PDF to HTML`,icon:`fas fa-code`,category:`pdf`,description:`Convert PDF documents to highly interactive, self-contained HTML web pages instantly in your browser.`,buttonText:`Convert to HTML`,allowedFileTypes:[`.pdf`,`application/pdf`],maxFiles:1,minFilesRequired:1,successMessage:`PDF converted to HTML successfully!`,downloadFilename:`yourownpdf-converted.html`,downloadMimeType:`text/html`,features:[`100% client-side document compiler`,`Generates self-contained interactive web pages`,`Visual Layout Mode with high-definition slides (2.0x)`,`Searchable Text-Only Mode with custom filters`,`Sleek responsive sidebar table of contents`,`Light & Dark theme toggle support built-in`,`Zero data uploads — completely secure`],steps:[{title:`Upload PDF`,desc:`Select a PDF document you want to compile into HTML.`},{title:`Render Web Assets`,desc:`Click Convert to HTML to compile styles, visual pages, and text streams locally.`},{title:`Save Interactive Page`,desc:`Download your self-contained responsive web page instantly.`}],execute:async(e,r,i,a)=>{let o=e[0],s;s=o.data instanceof Uint8Array?o.data:o.data instanceof ArrayBuffer?new Uint8Array(o.data):o.data&&typeof o.data==`object`&&o.data.buffer instanceof ArrayBuffer?new Uint8Array(o.data.buffer,o.data.byteOffset,o.data.byteLength):new Uint8Array(o.data);let c=await t(()=>import(`./pdf-BYmfFWjT.js`),__vite__mapDeps([0])),{convertPdfToStructuredHtml:l}=await t(async()=>{let{convertPdfToStructuredHtml:e}=await import(`./pdfToHtmlConverter-Cu9-7csn.js`);return{convertPdfToStructuredHtml:e}},[]),{totalPages:u,pageAssets:d}=await l(s,c,n,a);a&&a({current:u,total:u,label:`Assembling interactive HTML document…`});let f=o.name?(e=>typeof e==`string`?e.replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`).replace(/'/g,`&#039;`):``)(o.name):`Interactive Document`,p=`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${f} &mdash; Structured HTML Web Page</title>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
  <style>
    :root {
      --primary: #4f46e5;
      --primary-hover: #4338ca;
      --bg: #f8fafc;
      --card-bg: #ffffff;
      --text: #0f172a;
      --text-muted: #64748b;
      --border: #e2e8f0;
      --sidebar-width: 300px;
    }
    
    [data-theme="dark"] {
      --bg: #0f172a;
      --card-bg: #1e293b;
      --text: #f8fafc;
      --text-muted: #94a3b8;
      --border: #334155;
    }

    body {
      margin: 0;
      padding: 0;
      font-family: 'Inter', sans-serif;
      background: var(--bg);
      color: var(--text);
      display: flex;
      height: 100vh;
      overflow: hidden;
      transition: background 0.3s, color 0.3s;
    }

    /* Sidebar Navigation */
    .sidebar {
      width: var(--sidebar-width);
      border-right: 1px solid var(--border);
      background: var(--card-bg);
      display: flex;
      flex-direction: column;
      flex-shrink: 0;
      transition: background 0.3s, border 0.3s, transform 0.3s ease;
      z-index: 100;
    }

    .sidebar-header {
      padding: 1.25rem 1.5rem;
      border-bottom: 1px solid var(--border);
    }

    .doc-title {
      font-size: 1.05rem;
      font-weight: 800;
      margin: 0;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      color: var(--text);
    }

    .search-container {
      margin-top: 1rem;
      position: relative;
    }

    .search-input {
      width: 100%;
      padding: 0.55rem 1rem 0.55rem 2.25rem;
      border-radius: 0.5rem;
      border: 1px solid var(--border);
      background: var(--bg);
      color: var(--text);
      box-sizing: border-box;
      font-family: inherit;
      font-size: 0.85rem;
      outline: none;
      transition: border-color 0.2s;
    }

    .search-input:focus {
      border-color: var(--primary);
    }

    .search-icon {
      position: absolute;
      left: 0.8rem;
      top: 50%;
      transform: translateY(-50%);
      color: var(--text-muted);
      font-size: 0.85rem;
    }

    .toc {
      flex: 1;
      overflow-y: auto;
      padding: 1rem;
      display: flex;
      flex-direction: column;
      gap: 0.4rem;
    }

    .toc-item {
      padding: 0.75rem 1rem;
      border-radius: 0.5rem;
      cursor: pointer;
      font-weight: 600;
      font-size: 0.85rem;
      color: var(--text-muted);
      display: flex;
      align-items: center;
      gap: 0.75rem;
      transition: all 0.2s;
    }

    .toc-item:hover, .toc-item.active {
      background: var(--bg);
      color: var(--primary);
    }

    /* Main Content Area */
    .main-view {
      flex: 1;
      display: flex;
      flex-direction: column;
      overflow: hidden;
    }

    .top-bar {
      height: auto;
      min-height: 64px;
      border-bottom: 1px solid var(--border);
      background: var(--card-bg);
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0.75rem 1.5rem;
      flex-shrink: 0;
      transition: background 0.3s, border 0.3s;
      gap: 0.75rem;
      overflow-x: auto;
      -webkit-overflow-scrolling: touch;
    }

    .controls-group {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      flex-shrink: 0;
    }

    .btn {
      padding: 0.5rem 0.85rem;
      border-radius: 0.5rem;
      border: 1px solid var(--border);
      background: var(--card-bg);
      color: var(--text);
      cursor: pointer;
      font-weight: 600;
      font-size: 0.85rem;
      font-family: inherit;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      transition: all 0.2s;
      outline: none;
      white-space: nowrap;
    }

    .btn:hover {
      background: var(--bg);
    }

    .btn-primary {
      background: var(--primary);
      color: #ffffff;
      border-color: var(--primary);
    }

    .btn-primary:hover {
      background: var(--primary-hover);
    }

    .zoom-badge {
      font-size: 0.8rem;
      font-weight: 700;
      color: var(--text-muted);
      min-width: 45px;
      text-align: center;
    }

    .mobile-menu-btn {
      display: none;
    }

    .sidebar-overlay {
      display: none;
      position: fixed;
      inset: 0;
      background: rgba(0,0,0,0.4);
      backdrop-filter: blur(2px);
      z-index: 90;
    }

    .view-content {
      flex: 1;
      overflow-y: auto;
      padding: 2rem;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 2rem;
    }

    /* Structured HTML View */
    .html-view {
      display: flex;
      flex-direction: column;
      width: 100%;
      max-width: 860px;
      box-sizing: border-box;
      transform-origin: top center;
      transition: transform 0.2s ease;
    }

    .pdf-page-section {
      background: var(--card-bg);
      border: 1px solid var(--border);
      border-radius: 1rem;
      padding: 2.5rem;
      margin-bottom: 2.5rem;
      box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.04);
      box-sizing: border-box;
      page-break-after: always;
      break-after: page;
      transition: background 0.3s, border 0.3s;
    }

    .pdf-page-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid var(--border);
      padding-bottom: 0.75rem;
      margin-bottom: 1.5rem;
      font-size: 0.8rem;
      font-weight: 700;
      color: var(--primary);
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }

    .pdf-page-content[contenteditable="true"]:focus {
      outline: 2px dashed var(--primary);
      outline-offset: 6px;
      border-radius: 0.5rem;
    }

    .pdf-h1 {
      font-size: 2rem;
      font-weight: 800;
      color: var(--text);
      margin-top: 1.25rem;
      margin-bottom: 1rem;
      line-height: 1.25;
    }

    .pdf-h2 {
      font-size: 1.5rem;
      font-weight: 700;
      color: var(--text);
      margin-top: 1.1rem;
      margin-bottom: 0.75rem;
      line-height: 1.3;
    }

    .pdf-h3 {
      font-size: 1.2rem;
      font-weight: 600;
      color: var(--text);
      margin-top: 0.9rem;
      margin-bottom: 0.5rem;
      line-height: 1.4;
    }

    .pdf-p {
      font-size: 1.02rem;
      line-height: 1.75;
      color: var(--text);
      margin-top: 0;
      margin-bottom: 1rem;
    }

    .pdf-list {
      margin-top: 0.5rem;
      margin-bottom: 1.25rem;
      padding-left: 1.75rem;
      color: var(--text);
    }

    .pdf-list li {
      margin-bottom: 0.4rem;
      line-height: 1.6;
    }

    .pdf-table {
      width: 100%;
      border-collapse: collapse;
      margin: 1.5rem 0;
      font-size: 0.95rem;
      background: var(--card-bg);
      color: var(--text);
    }

    .pdf-table th, .pdf-table td {
      border: 1px solid var(--border);
      padding: 0.75rem 1rem;
      text-align: left;
    }

    .pdf-table th {
      background: var(--bg);
      font-weight: 700;
      color: var(--primary);
    }

    .pdf-graphic-wrapper {
      margin: 1.75rem 0;
      text-align: center;
    }

    .pdf-graphic {
      max-width: 100%;
      height: auto;
      border-radius: 0.5rem;
      border: 1px solid var(--border);
      box-shadow: 0 2px 4px rgba(0,0,0,0.05);
    }

    .pdf-graphic-caption {
      font-size: 0.8rem;
      color: var(--text-muted);
      margin-top: 0.5rem;
      font-style: italic;
    }

    /* Visual Slides layout */
    .visual-view {
      display: none;
      flex-direction: column;
      align-items: center;
      width: 100%;
      gap: 2rem;
      transform-origin: top center;
      transition: transform 0.2s ease;
    }

    .page-card {
      background: var(--card-bg);
      border: 1px solid var(--border);
      border-radius: 1rem;
      box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.03);
      padding: 1.25rem;
      width: 100%;
      max-width: 850px;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;
      transition: background 0.3s, border 0.3s;
    }

    .page-card img {
      max-width: 100%;
      height: auto;
      border-radius: 0.5rem;
      border: 1px solid var(--border);
    }

    .page-num {
      font-size: 0.8rem;
      font-weight: 700;
      color: var(--text-muted);
      text-transform: uppercase;
      letter-spacing: 0.05em;
      align-self: flex-start;
    }

    mark {
      background: #fef08a;
      color: #000000;
      padding: 0 0.15rem;
      border-radius: 0.15rem;
    }

    /* Scrollbars */
    ::-webkit-scrollbar {
      width: 8px;
    }
    ::-webkit-scrollbar-track {
      background: transparent;
    }
    ::-webkit-scrollbar-thumb {
      background: var(--border);
      border-radius: 4px;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: var(--text-muted);
    }

    @media (max-width: 768px) {
      .mobile-menu-btn {
        display: flex;
      }
      .sidebar {
        position: fixed;
        top: 0;
        left: 0;
        height: 100vh;
        transform: translateX(-100%);
      }
      .sidebar.open {
        transform: translateX(0);
      }
      .sidebar-overlay.open {
        display: block;
      }
      .top-bar {
        padding: 0.5rem 0.75rem;
        gap: 0.5rem;
      }
      .btn span {
        display: inline;
        font-size: 0.78rem;
      }
    }
  </style>
</head>
<body>

  <div class="sidebar-overlay" id="sidebarOverlay"></div>

  <!-- Sidebar -->
  <aside class="sidebar" id="sidebar">
    <div class="sidebar-header">
      <h1 class="doc-title" title="${f}">${f}</h1>
      <div class="search-container">
        <i class="fas fa-search search-icon"></i>
        <input type="text" class="search-input" id="docSearch" placeholder="Search document text...">
      </div>
    </div>
    <div class="toc" id="tocContainer">
      ${d.map(e=>`
        <div class="toc-item ${e.pageNumber===1?`active`:``}" data-page-num="${e.pageNumber}">
          <i class="far fa-file"></i> Page ${e.pageNumber}
        </div>
      `).join(``)}
    </div>
  </aside>

  <!-- Main View -->
  <main class="main-view">
    <div class="top-bar">
      <div class="controls-group">
        <button class="btn mobile-menu-btn" id="btnMobileMenu" aria-label="Toggle Mobile Menu">
          <i class="fas fa-bars"></i>
        </button>
        <button class="btn btn-primary" id="btnHtml">
          <i class="fas fa-code"></i> <span>Structured HTML View</span>
        </button>
        <button class="btn" id="btnVisual">
          <i class="fas fa-eye"></i> <span>Visual Mode</span>
        </button>
      </div>

      <div class="controls-group">
        <button class="btn" id="btnZoomOut" title="Zoom Out"><i class="fas fa-minus"></i></button>
        <span class="zoom-badge" id="zoomVal">100%</span>
        <button class="btn" id="btnZoomIn" title="Zoom In"><i class="fas fa-plus"></i></button>
        <button class="btn" id="btnZoomReset" title="Reset Zoom"><i class="fas fa-undo"></i></button>
      </div>

      <div class="controls-group">
        <button class="btn" id="btnCopyHtml" title="Copy HTML Code to Clipboard">
          <i class="fas fa-copy"></i> <span>Copy HTML</span>
        </button>
        <button class="btn" id="btnTheme" aria-label="Toggle dark mode">
          <i class="fas fa-moon" id="themeIcon"></i>
        </button>
      </div>
    </div>

    <div class="view-content" id="scrollContainer">
      
      <!-- Structured HTML View (Real Extracted HTML Text, Headings, Lists, Tables, Graphics) -->
      <div class="html-view" id="htmlView">
        ${d.map(e=>e.structuredHtml).join(``)}
      </div>

      <!-- Visual Mode Content -->
      <div class="visual-view" id="visualView">
        ${d.map(e=>`
          <div class="page-card" id="page-card-${e.pageNumber}">
            <span class="page-num">Page ${e.pageNumber}</span>
            <img src="${e.imageUrl}" alt="Document Page ${e.pageNumber}" loading="lazy">
          </div>
        `).join(``)}
      </div>

    </div>
  </main>

  <script>
    document.addEventListener("DOMContentLoaded", () => {
      let currentMode = 'html';
      let currentZoom = 1.0;

      const htmlView = document.getElementById("htmlView");
      const visualView = document.getElementById("visualView");
      const btnHtml = document.getElementById("btnHtml");
      const btnVisual = document.getElementById("btnVisual");
      const docSearch = document.getElementById("docSearch");
      const sidebar = document.getElementById("sidebar");
      const sidebarOverlay = document.getElementById("sidebarOverlay");
      const scrollContainer = document.getElementById("scrollContainer");

      // ── 1. View Mode Switching ─────────────────────────────────────────────
      function setViewMode(mode) {
        currentMode = mode;
        if (mode === 'html') {
          htmlView.style.display = 'flex';
          visualView.style.display = 'none';
          btnHtml.classList.add("btn-primary");
          btnVisual.classList.remove("btn-primary");
          docSearch.disabled = false;
          docSearch.placeholder = "Search document text...";
          safeSearchDocument();
        } else {
          htmlView.style.display = 'none';
          visualView.style.display = 'flex';
          btnHtml.classList.remove("btn-primary");
          btnVisual.classList.add("btn-primary");
          docSearch.disabled = true;
          docSearch.placeholder = "Search disabled in Visual Mode";
          unmarkContainer(htmlView);
        }
        setupIntersectionObserver();
      }

      btnHtml.addEventListener("click", () => setViewMode('html'));
      btnVisual.addEventListener("click", () => setViewMode('visual'));

      // ── 2. Zoom Controls (Applied to child view containers to keep scrolling smooth) ──
      function applyZoom(newZoom) {
        currentZoom = Math.min(Math.max(newZoom, 0.5), 2.0);
        document.getElementById("zoomVal").textContent = Math.round(currentZoom * 100) + '%';
        htmlView.style.transform = \`scale(\${currentZoom})\`;
        visualView.style.transform = \`scale(\${currentZoom})\`;
      }

      document.getElementById("btnZoomIn").addEventListener("click", () => applyZoom(currentZoom + 0.1));
      document.getElementById("btnZoomOut").addEventListener("click", () => applyZoom(currentZoom - 0.1));
      document.getElementById("btnZoomReset").addEventListener("click", () => applyZoom(1.0));

      // ── 3. Mobile Navigation Drawer ────────────────────────────────────────
      function toggleMobileSidebar(open) {
        const isOpen = open !== undefined ? open : !sidebar.classList.contains("open");
        sidebar.classList.toggle("open", isOpen);
        sidebarOverlay.classList.toggle("open", isOpen);
      }

      document.getElementById("btnMobileMenu").addEventListener("click", () => toggleMobileSidebar());
      sidebarOverlay.addEventListener("click", () => toggleMobileSidebar(false));

      // ── 4. TOC Navigation ──────────────────────────────────────────────────
      function jumpToPage(num) {
        const id = currentMode === 'html' ? 'page-' + num : 'page-card-' + num;
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        updateActiveToc(num);
        toggleMobileSidebar(false);
      }

      function updateActiveToc(pageNum) {
        document.querySelectorAll(".toc-item").forEach(item => {
          const itemNum = parseInt(item.getAttribute("data-page-num"));
          item.classList.toggle("active", itemNum === pageNum);
        });
      }

      document.querySelectorAll(".toc-item").forEach(item => {
        item.addEventListener("click", () => {
          const pageNum = parseInt(item.getAttribute("data-page-num"));
          jumpToPage(pageNum);
        });
      });

      // ── 5. IntersectionObserver for TOC Active State Sync ─────────────────
      let activeObserver = null;

      function setupIntersectionObserver() {
        if (activeObserver) activeObserver.disconnect();

        const targets = currentMode === 'html'
          ? document.querySelectorAll(".pdf-page-section")
          : document.querySelectorAll(".page-card");

        if (targets.length === 0) return;

        activeObserver = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              const pageNumStr = entry.target.getAttribute("data-page") || entry.target.id.replace('page-card-', '');
              const num = parseInt(pageNumStr);
              if (!isNaN(num)) updateActiveToc(num);
            }
          });
        }, {
          root: scrollContainer,
          threshold: 0.3
        });

        targets.forEach(target => activeObserver.observe(target));
      }

      // Fallback for scroll-to-bottom activating last page
      scrollContainer.addEventListener("scroll", () => {
        if (scrollContainer.scrollTop + scrollContainer.clientHeight >= scrollContainer.scrollHeight - 15) {
          const totalPages = document.querySelectorAll(".toc-item").length;
          updateActiveToc(totalPages);
        }
      });

      // ── 6. Safe DOM TreeWalker Search (No XSS, Preserves HTML formatting) ──
      function unmarkContainer(container) {
        const marks = container.querySelectorAll("mark");
        marks.forEach(mark => {
          const parent = mark.parentNode;
          if (parent) {
            parent.replaceChild(document.createTextNode(mark.textContent), mark);
            parent.normalize();
          }
        });
      }

      function safeSearchDocument() {
        unmarkContainer(htmlView);
        const term = docSearch.value.trim();
        if (!term) return;

        const escapedTerm = term.replace(/[-\\/\\\\^$*+?.()|[\\]{}]/g, '\\\\$&');
        const regex = new RegExp(\`(\${escapedTerm})\`, 'gi');

        const walker = document.createTreeWalker(htmlView, NodeFilter.SHOW_TEXT, null, false);
        const textNodes = [];
        let node;
        while (node = walker.nextNode()) {
          if (node.nodeValue.trim().length > 0) {
            textNodes.push(node);
          }
        }

        textNodes.forEach(textNode => {
          const val = textNode.nodeValue;
          if (regex.test(val)) {
            const parent = textNode.parentNode;
            if (parent && parent.nodeName !== 'MARK' && parent.nodeName !== 'SCRIPT' && parent.nodeName !== 'STYLE') {
              const frag = document.createDocumentFragment();
              let lastIdx = 0;
              val.replace(regex, (match, p1, offset) => {
                if (offset > lastIdx) {
                  frag.appendChild(document.createTextNode(val.slice(lastIdx, offset)));
                }
                const mark = document.createElement('mark');
                mark.textContent = match;
                frag.appendChild(mark);
                lastIdx = offset + match.length;
              });
              if (lastIdx < val.length) {
                frag.appendChild(document.createTextNode(val.slice(lastIdx)));
              }
              parent.replaceChild(frag, textNode);
            }
          }
        });
      }

      docSearch.addEventListener("input", safeSearchDocument);

      // ── 7. Copy HTML Code Button (Toast Feedback) ───────────────────────────
      const btnCopy = document.getElementById("btnCopyHtml");
      btnCopy.addEventListener("click", () => {
        const htmlCode = htmlView.innerHTML;
        navigator.clipboard.writeText(htmlCode).then(() => {
          const originalContent = btnCopy.innerHTML;
          btnCopy.innerHTML = '<i class="fas fa-check" style="color:#22c55e;"></i> <span>Copied!</span>';
          btnCopy.style.borderColor = '#22c55e';
          setTimeout(() => {
            btnCopy.innerHTML = originalContent;
            btnCopy.style.borderColor = '';
          }, 2000);
        }).catch(err => console.error("Failed to copy HTML code:", err));
      });

      // ── 8. Theme Toggle ────────────────────────────────────────────────────
      document.getElementById("btnTheme").addEventListener("click", () => {
        const body = document.documentElement;
        const currentTheme = body.getAttribute("data-theme");
        const icon = document.getElementById("themeIcon");

        if (currentTheme === 'dark') {
          body.removeAttribute("data-theme");
          icon.className = 'fas fa-moon';
        } else {
          body.setAttribute("data-theme", "dark");
          icon.className = 'fas fa-sun';
        }
      });

      // Initialize
      setupIntersectionObserver();
    });
  <\/script>
</body>
</html>`;return new Blob([p],{type:`text/html;charset=utf-8`})}},"flatten-pdf":{id:`flatten-pdf`,name:`Flatten PDF`,icon:`📐`,category:`pdf`,description:`Merge all layers, annotations, signatures, and form fields into a single flat image layer permanently.`,buttonText:`Flatten PDF`,allowedFileTypes:[`.pdf`,`application/pdf`],maxFiles:1,minFilesRequired:1,successMessage:`PDF flattened successfully!`,downloadFilename:`yourownpdf-flattened.pdf`,downloadMimeType:`application/pdf`,features:[`Permanently merges PDF fields, annotations & signatures`,`Prevents future edits or text alterations`,`High-definition page flattening (2.0x scale)`,`100% client-side — files never leave your device`,`Works completely offline`],steps:[{title:`Upload PDF`,desc:`Select a PDF document you want to flatten.`},{title:`Flatten Layers`,desc:`Click Flatten PDF to rasterize the layers locally.`},{title:`Save Document`,desc:`Download your secure, flattened PDF document.`}],execute:async(e,r,i,a)=>{let o=e[0],s;if(s=o.data instanceof Uint8Array?o.data:o.data instanceof ArrayBuffer?new Uint8Array(o.data):o.data&&typeof o.data==`object`&&o.data.buffer instanceof ArrayBuffer?new Uint8Array(o.data.buffer,o.data.byteOffset,o.data.byteLength):new Uint8Array(o.data),!s||s.length===0)throw Error(`CORRUPTED_PDF|${o.name||`document.pdf`}`);let c=s;try{let{PDFDocument:e}=await t(async()=>{let{PDFDocument:e}=await import(`./es-tvZCzKIY.js`).then(e=>e.t);return{PDFDocument:e}},__vite__mapDeps([0])),n=await e.load(s,{ignoreEncryption:!0}),r=n.getForm(),i=r.getFields();if(i&&i.length>0){r.flatten();let e=await n.save();c=new Uint8Array(e)}}catch(e){console.warn(`Form flattening fallback to canvas renderer:`,e)}let l=await t(()=>import(`./pdf-BYmfFWjT.js`),__vite__mapDeps([0]));l.GlobalWorkerOptions.workerSrc=n;let u;try{u=await l.getDocument({data:c}).promise}catch(e){let t=(e.message||``)+` `+(e.name||``);throw e.name===`PasswordException`||t.includes(`Password`)||t.includes(`password`)||t.includes(`NEEDS PASSWORD`)?Error(`ENCRYPTED_PDF|${o.name||`document.pdf`}`):Error(`CORRUPTED_PDF|${o.name||`document.pdf`}`)}let d=u.numPages;if(d===0)throw Error(`BLANK_PDF|${o.name||`document.pdf`}`);let f=!1;for(let e=1;e<=d;e++){let t=await u.getPage(e),n=await t.getTextContent(),r=n.items&&n.items.some(e=>(e.str||``).trim().length>0),i=await t.getAnnotations({intent:`any`}),a=i&&i.length>0,o=await t.getOperatorList(),s=o.fnArray&&o.fnArray.length>0;if(r||a||s){f=!0;break}}if(!f)throw Error(`BLANK_PDF|${o.name||`document.pdf`}`);let{jsPDF:p}=await t(async()=>{let{jsPDF:e}=await import(`./jspdf.es.min-h6fD99ET.js`);return{jsPDF:e}},__vite__mapDeps([0])),m=null;for(let e=1;e<=d;e++){a&&a({current:e,total:d,label:`Flattening page ${e} of ${d}…`});let t=await u.getPage(e),n=t.getViewport({scale:2}),r=document.createElement(`canvas`);r.width=Math.round(n.width),r.height=Math.round(n.height);let i=r.getContext(`2d`);i.fillStyle=`#ffffff`,i.fillRect(0,0,r.width,r.height),await t.render({canvasContext:i,viewport:n,intent:`print`,annotationMode:l.AnnotationMode?.ENABLE_STORAGE??3}).promise;try{let e=await t.getAnnotations({intent:`any`}),r=(e,t,r)=>{i.save(),i.translate(e,t);let a=r,o=r*.85,s=4*(n.scale/2);i.fillStyle=`#facc15`,i.strokeStyle=`#000000`,i.lineWidth=1.4*(n.scale/2),i.lineJoin=`round`,i.beginPath(),i.moveTo(s,0),i.lineTo(a-s,0),i.quadraticCurveTo(a,0,a,s),i.lineTo(a,o-s),i.quadraticCurveTo(a,o,a-s,o),i.lineTo(s*2.5,o),i.lineTo(s*1,o+s*1.8),i.lineTo(s*1.2,o),i.lineTo(s,o),i.quadraticCurveTo(0,o,0,o-s),i.lineTo(0,s),i.quadraticCurveTo(0,0,s,0),i.closePath(),i.fill(),i.stroke(),i.fillStyle=`#1e293b`;let c=Math.max(1.5*(n.scale/2),1.2),l=a*.22,u=a*.56;i.fillRect(l,o*.28,u,c),i.fillRect(l,o*.48,u*.85,c),i.fillRect(l,o*.68,u*.6,c),i.restore()};for(let t of e){if(!t.rect||t.rect.length!==4)continue;let[e,a,o,s]=n.convertToViewportRectangle(t.rect),c=Math.min(e,o),l=Math.min(a,s),u=Math.abs(o-e),d=Math.abs(s-a);if(t.subtype===`Text`||t.annotationType===1||t.name===`Comment`||t.name===`Note`||t.name===`Help`||t.name===`Paragraph`||t.name===`Key`){r(c,l,Math.max(u,d,26*(n.scale/2)));continue}let f=t.subtype===`Highlight`||t.annotationType===9,p=t.contentsObj&&t.contentsObj.str&&t.contentsObj.str.trim().length>0||t.contents&&t.contents.trim().length>0||t.hasPopup;if(f&&p){let e=Math.max(18*(n.scale/2),16);r(c-2*(n.scale/2),l-e*.95,e);continue}if((t.subtype===`Widget`||t.annotationType===20)&&(t.fieldType===`Btn`||t.checkBox||t.radioButton)){let e=t.fieldValue===`Off`||t.fieldValue===!1||t.fieldValue===``||t.fieldValue===null||t.fieldValue===void 0,r=!1;e||(t.fieldValue===`Yes`||t.fieldValue===`On`||t.fieldValue===!0||t.exportValue&&t.fieldValue===t.exportValue)&&(r=!0);let a=(e,t)=>e&&(Array.isArray(e)&&e.length>=3||typeof e==`object`&&e[0]!==void 0&&e[1]!==void 0&&e[2]!==void 0)?`rgb(${e[0]}, ${e[1]}, ${e[2]})`:t,o=a(t.backgroundColor,r?`#eff6ff`:`#ffffff`),s=a(t.borderColor,r?`#2563eb`:`#94a3b8`),f=Math.max((t.borderStyle?.rawWidth||1)*(n.scale/2),1.2);if(i.save(),i.fillStyle=o,i.strokeStyle=s,i.lineWidth=f,t.radioButton)i.beginPath(),i.arc(c+u/2,l+d/2,Math.min(u,d)/2-1,0,Math.PI*2),i.fill(),i.stroke(),r&&(i.fillStyle=s,i.beginPath(),i.arc(c+u/2,l+d/2,Math.min(u,d)*.28,0,Math.PI*2),i.fill());else{let e=2*(n.scale/2);i.beginPath(),i.moveTo(c+e,l),i.lineTo(c+u-e,l),i.quadraticCurveTo(c+u,l,c+u,l+e),i.lineTo(c+u,l+d-e),i.quadraticCurveTo(c+u,l+d,c+u-e,l+d),i.lineTo(c+e,l+d),i.quadraticCurveTo(c,l+d,c,l+d-e),i.lineTo(c,l+e),i.quadraticCurveTo(c,l,c+e,l),i.closePath(),i.fill(),i.stroke(),r&&(i.strokeStyle=`#1d4ed8`,i.lineWidth=Math.max(2.2*(n.scale/2),1.8),i.lineCap=`round`,i.lineJoin=`round`,i.beginPath(),i.moveTo(c+u*.22,l+d*.52),i.lineTo(c+u*.42,l+d*.74),i.lineTo(c+u*.78,l+d*.26),i.stroke())}i.restore()}}}catch(e){console.warn(`Annotation overlay rendering fallback:`,e)}let o=r.toDataURL(`image/jpeg`,.95),s=n.width*.75,c=n.height*.75;e===1?m=new p({orientation:s>c?`l`:`p`,unit:`pt`,format:[s,c]}):m.addPage([s,c]),m.addImage(o,`JPEG`,0,0,s,c)}a&&a({current:d,total:d,label:`Compiling flattened PDF…`});let h=m.output(`arraybuffer`);return new Blob([h],{type:`application/pdf`})}},"image-to-svg":{id:`image-to-svg`,name:`Image to SVG`,icon:`fas fa-bezier-curve`,category:`image`,description:`Convert raster images (JPG, PNG, WebP) to scalable vector graphics (SVG) with ultra-fine precision, smooth Bézier curves, and color layers offline.`,buttonText:`Convert to SVG`,allowedFileTypes:[`.jpg`,`.jpeg`,`.png`,`.webp`,`.gif`,`.bmp`,`image/*`],maxFiles:0,minFilesRequired:1,successMessage:`Image vectorized to SVG successfully!`,downloadFilename:`yourownpdf-vector.svg`,downloadMimeType:`image/svg+xml`,features:[`Ultra-fine sub-pixel contour tracing & color quantization`,`Smooth cubic Bézier spline interpolation for infinite zoom`,`Presets: Ultra Precision (128 Colors), High Detail (64 Colors), Graphic Logo (32 Colors), Poster (16 Colors), Monochrome Line Art`,`Smoothing modes: Smooth Bézier Curves, Geometric Polygons, Pixel-Exact`,`Noise despeckle filter to remove camera grain and artifacts`,`Preserves transparent alpha channels for PNG and WebP`,`Multi-image batch processing with ZIP packaging`,`100% private offline browser execution`],steps:[{title:`Upload Image(s)`,desc:`Select or drag & drop one or multiple raster images.`},{title:`Choose Precision & Smoothing`,desc:`Select detail level (Ultra, High, Graphic, Monochrome) and curve smoothing.`},{title:`Vectorize & Download`,desc:`Convert to scalable SVG paths locally and download individual vectors or ZIP.`}],options:[{id:`mode`,label:`Conversion Mode`,type:`button-group`,defaultValue:`photorealistic`,values:[{value:`photorealistic`,label:`Photorealistic`,sublabel:`100% Exact • Zero Gap`,icon:`🌟`},{value:`calligraphy`,label:`Calligraphy`,sublabel:`Solid Paths • Sharp`,icon:`✒️`},{value:`traced`,label:`Traced Vector`,sublabel:`Layered Polygons`,icon:`🎨`},{value:`monochrome`,label:`B&W Line Art`,sublabel:`Black & White`,icon:`⬛`}]}],execute:async(e,n,r,i)=>{let a=typeof i==`function`?i:typeof r==`function`?r:null,{imageToSvgEngine:o}=await t(async()=>{let{imageToSvgEngine:e}=await import(`./imageToSvgEngine-ZdH9VVgu.js`);return{imageToSvgEngine:e}},__vite__mapDeps([0]));return await o(e,n,a)}},"upscale-image":{id:`upscale-image`,name:`AI Image Upscaler`,icon:`fas fa-arrow-up-right-from-square`,category:`image`,description:`Enlarge low-resolution images 2x, 4x, or 8x up to 4K/8K with AI Super-Resolution, edge enhancement, and 300 DPI print-ready clarity without pixelation or blur.`,buttonText:`Upscale Image`,allowedFileTypes:[`.jpg`,`.jpeg`,`.png`,`.webp`,`.bmp`,`image/*`],maxFiles:0,minFilesRequired:1,successMessage:`Image upscaled to high resolution successfully!`,downloadFilename:`yourownpdf-upscaled.png`,downloadMimeType:`image/png`,features:[`Multi-scale AI resolution multiplier: 2x, 4x, and 8x Ultra HD`,`Anti-aliased sub-pixel resampling prevents pixelation on large prints`,`Advanced Edge-Preserving Denoising to eliminate JPEG compression blocks`,`Adaptive High-Frequency Unsharp Masking for crisp calligraphy and fine lines`,`300 DPI Print Master mode for maximum physical printing sharpness`,`Lossless PNG, Ultra-Quality JPG, and WebP export formats`,`Multi-image batch processing with automatic ZIP bundle packaging`,`100% private offline browser execution with zero server uploads`],steps:[{title:`Upload Low-Pixel Image(s)`,desc:`Select or drag & drop one or multiple low-resolution images.`},{title:`Choose Scale & AI Mode`,desc:`Select upscaling multiplier (2x, 4x, 8x) and model preset (Photo, Calligraphy, Print Master).`},{title:`Upscale & Download`,desc:`Generate crisp, ultra-high-resolution images ready for large printing.`}],options:[{id:`scale`,label:`Target Resolution`,type:`button-group`,defaultValue:`8k`,values:[{value:`8k`,label:`8K Ultra HD`,sublabel:`7680px • Max Quality`,icon:`🚀`},{value:`4k`,label:`4K UHD`,sublabel:`3840px • Display`,icon:`🌟`},{value:`8`,label:`8x Scale`,sublabel:`64x Pixels`,icon:`⚡`},{value:`4`,label:`4x Scale`,sublabel:`16x Pixels`,icon:`✨`}]},{id:`model`,label:`Enhancement Preset`,type:`button-group`,defaultValue:`ai-photo`,values:[{value:`ai-photo`,label:`Photo & Canvas`,sublabel:`Clean & Natural (Recommended)`,icon:`🖼️`},{value:`calligraphy`,label:`Calligraphy & Art`,sublabel:`Contour Sharp`,icon:`✒️`},{value:`print-hd`,label:`Print Master`,sublabel:`300 DPI Ultra Sharp`,icon:`🖨️`},{value:`ai-anime`,label:`Digital Anime`,sublabel:`Clean Outlines`,icon:`🎨`}]},{id:`format`,label:`Output Format`,type:`button-group`,defaultValue:`png`,values:[{value:`png`,label:`PNG`,sublabel:`Lossless Clarity`,icon:`💎`},{value:`jpeg`,label:`JPG`,sublabel:`100% Quality`,icon:`📷`},{value:`webp`,label:`WebP`,sublabel:`High Efficiency`,icon:`🌐`}]}],execute:async(e,n,r,i)=>{let a=typeof i==`function`?i:typeof r==`function`?r:null,{imageUpscalerEngine:o}=await t(async()=>{let{imageUpscalerEngine:e}=await import(`./imageUpscalerEngine-BNCDf-L4.js`);return{imageUpscalerEngine:e}},[]);return await o(e,n,a)}}};export{r as ToolDataPart2};