import{f as e,p as t,y as n}from"./index-BbmGjSRc.js";var r=n(t(),1),i=e(),a=`{
  "mcpServers": {
    "yourownpdf-agent-tools": {
      "command": "npx",
      "args": ["-y", "@yourownpdf/mcp-server"],
      "env": {
        "YOP_API_ENVIRONMENT": "local-sandbox"
      }
    }
  }
}`,o=`{
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
}`,s=({onNavigate:e})=>{let[t,n]=(0,r.useState)(!1),[s,c]=(0,r.useState)(!1),l=(e,t)=>{navigator.clipboard.writeText(e),t===`mcp`?(n(!0),setTimeout(()=>n(!1),2e3)):(c(!0),setTimeout(()=>c(!1),2e3))},u=(t,n)=>{e&&(t.preventDefault(),e(n))};return(0,i.jsxs)(`div`,{style:{padding:`3rem 1.5rem`,background:`var(--color-bg)`,minHeight:`80vh`},children:[(0,i.jsx)(`style`,{children:`
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
      `}),(0,i.jsxs)(`div`,{className:`agent-container`,children:[(0,i.jsxs)(`div`,{className:`agent-header`,children:[(0,i.jsx)(`h1`,{children:`AI Agents Portal`}),(0,i.jsx)(`p`,{children:`Integrate YourOwnPDF's secure, zero-upload document and image tools into your autonomous agent execution flows, custom LLM toolkits, and client setups.`})]}),(0,i.jsxs)(`div`,{className:`agent-privacy-callout`,children:[(0,i.jsx)(`span`,{className:`icon`,children:`🛡️`}),(0,i.jsxs)(`div`,{children:[(0,i.jsx)(`h4`,{children:`Local Sandbox Processing Guaranteed`}),(0,i.jsx)(`p`,{children:`AI Agents can process sensitive business records and legal contracts with zero leak risk. All executions occur strictly within local browser memory using WebAssembly. No files are uploaded to servers.`})]})]}),(0,i.jsxs)(`div`,{className:`agent-card`,children:[(0,i.jsxs)(`h2`,{children:[(0,i.jsx)(`i`,{className:`fas fa-question-circle`,style:{color:`var(--color-b)`}}),`Do you have a tool that I can call?`]}),(0,i.jsxs)(`p`,{children:[(0,i.jsx)(`strong`,{children:`Yes!`}),` YourOwnPDF.com provides multiple integration frameworks allowing AI agents (e.g., GPTs, Gemini, Claude, and custom Python/JS agents) to discover and call our local utility stack:`]}),(0,i.jsxs)(`ul`,{className:`agent-list`,children:[(0,i.jsxs)(`li`,{children:[(0,i.jsx)(`strong`,{children:`Browser Automation (Playwright/Puppeteer)`}),`: Since the site is a client-side Single Page Application (SPA), browser-capable agents can load the tools directly in a headless browser, drop file payloads, and fetch output downloads securely.`]}),(0,i.jsxs)(`li`,{children:[(0,i.jsx)(`strong`,{children:`Model Context Protocol (MCP)`}),`: Run our lightweight local MCP server package to expose document operations as local tools for tools-compatible desktop LLM assistants.`]}),(0,i.jsxs)(`li`,{children:[(0,i.jsx)(`strong`,{children:`OpenAPI Schema Integration`}),`: Link the agent to our official `,(0,i.jsx)(`a`,{href:`/api`,onClick:e=>u(e,`/api`),style:{color:`var(--color-b)`},children:`OpenAPI Specification`}),` to enable intelligent routing recommendations.`]})]})]}),(0,i.jsxs)(`div`,{className:`agent-card`,children:[(0,i.jsxs)(`h2`,{children:[(0,i.jsx)(`i`,{className:`fas fa-server`,style:{color:`var(--color-b)`}}),`Model Context Protocol (MCP) Setup`]}),(0,i.jsx)(`p`,{children:`Developers using Claude Desktop, Cursor, or other MCP-hosting clients can register YourOwnPDF tools by adding the following definition to their configuration file:`}),(0,i.jsxs)(`div`,{className:`code-box-wrapper`,children:[(0,i.jsxs)(`div`,{className:`code-box-header`,children:[(0,i.jsx)(`span`,{className:`code-box-lang`,children:`JSON (mcp-settings.json)`}),(0,i.jsx)(`button`,{className:`code-box-copy-btn`,onClick:()=>l(a,`mcp`),children:t?`Copied!`:`Copy Config`})]}),(0,i.jsx)(`pre`,{children:(0,i.jsx)(`code`,{children:a})})]}),(0,i.jsx)(`p`,{style:{fontSize:`0.85rem`,color:`var(--color-text-muted)`,marginTop:`0.5rem`},children:`* Note: Running via npx requires Node.js to be installed on the host machine where the agent runs.`})]}),(0,i.jsxs)(`div`,{className:`agent-card`,children:[(0,i.jsxs)(`h2`,{children:[(0,i.jsx)(`i`,{className:`fas fa-robot`,style:{color:`var(--color-b)`}}),`OpenAI Custom Tool Schema`]}),(0,i.jsx)(`p`,{children:`Use this JSON definition to build custom GPTs or Assistants API setups with access to secure file transformations:`}),(0,i.jsxs)(`div`,{className:`code-box-wrapper`,children:[(0,i.jsxs)(`div`,{className:`code-box-header`,children:[(0,i.jsx)(`span`,{className:`code-box-lang`,children:`JSON (OpenAI Schema)`}),(0,i.jsx)(`button`,{className:`code-box-copy-btn`,onClick:()=>l(o,`openai`),children:s?`Copied!`:`Copy Schema`})]}),(0,i.jsx)(`pre`,{children:(0,i.jsx)(`code`,{children:o})})]})]}),(0,i.jsxs)(`div`,{className:`agent-card`,children:[(0,i.jsxs)(`h2`,{children:[(0,i.jsx)(`i`,{className:`fas fa-th-list`,style:{color:`var(--color-b)`}}),`AI Agent Tool Directory`]}),(0,i.jsx)(`p`,{children:`Reference directory mapping available tools to their routing endpoints for agent redirection:`}),(0,i.jsx)(`div`,{className:`tools-table-container`,children:(0,i.jsxs)(`table`,{className:`tools-table`,children:[(0,i.jsx)(`thead`,{children:(0,i.jsxs)(`tr`,{children:[(0,i.jsx)(`th`,{children:`Tool Identifier`}),(0,i.jsx)(`th`,{children:`Direct Target URI`}),(0,i.jsx)(`th`,{children:`Primary Function`}),(0,i.jsx)(`th`,{children:`Privacy`})]})}),(0,i.jsxs)(`tbody`,{children:[(0,i.jsxs)(`tr`,{children:[(0,i.jsx)(`td`,{children:(0,i.jsx)(`code`,{children:`merge-pdf`})}),(0,i.jsx)(`td`,{children:(0,i.jsx)(`span`,{className:`badge-path`,children:`/tools/pdf/merge-pdf`})}),(0,i.jsx)(`td`,{children:`Combine multiple PDFs into a single file`}),(0,i.jsx)(`td`,{children:(0,i.jsx)(`span`,{className:`badge-secure`,children:`100% Local`})})]}),(0,i.jsxs)(`tr`,{children:[(0,i.jsx)(`td`,{children:(0,i.jsx)(`code`,{children:`compress-pdf`})}),(0,i.jsx)(`td`,{children:(0,i.jsx)(`span`,{className:`badge-path`,children:`/tools/pdf/compress-pdf`})}),(0,i.jsx)(`td`,{children:`Reduce PDF file sizes safely offline`}),(0,i.jsx)(`td`,{children:(0,i.jsx)(`span`,{className:`badge-secure`,children:`100% Local`})})]}),(0,i.jsxs)(`tr`,{children:[(0,i.jsx)(`td`,{children:(0,i.jsx)(`code`,{children:`pdf-to-word`})}),(0,i.jsx)(`td`,{children:(0,i.jsx)(`span`,{className:`badge-path`,children:`/tools/pdf/pdf-to-word`})}),(0,i.jsx)(`td`,{children:`Extract formatted text structures locally`}),(0,i.jsx)(`td`,{children:(0,i.jsx)(`span`,{className:`badge-secure`,children:`100% Local`})})]}),(0,i.jsxs)(`tr`,{children:[(0,i.jsx)(`td`,{children:(0,i.jsx)(`code`,{children:`compress-image`})}),(0,i.jsx)(`td`,{children:(0,i.jsx)(`span`,{className:`badge-path`,children:`/tools/image/compress-image`})}),(0,i.jsx)(`td`,{children:`Optimize JPG/PNG image dimension bytes`}),(0,i.jsx)(`td`,{children:(0,i.jsx)(`span`,{className:`badge-secure`,children:`100% Local`})})]}),(0,i.jsxs)(`tr`,{children:[(0,i.jsx)(`td`,{children:(0,i.jsx)(`code`,{children:`remove-background`})}),(0,i.jsx)(`td`,{children:(0,i.jsx)(`span`,{className:`badge-path`,children:`/tools/image/remove-background`})}),(0,i.jsx)(`td`,{children:`Extract clear PNG subject layers locally`}),(0,i.jsx)(`td`,{children:(0,i.jsx)(`span`,{className:`badge-secure`,children:`100% Local`})})]})]})]})}),(0,i.jsxs)(`p`,{children:[`To see all 40+ endpoints, refer to the full `,(0,i.jsx)(`a`,{href:`/api`,onClick:e=>u(e,`/api`),style:{color:`var(--color-b)`},children:`API Docs`}),` page.`]})]}),(0,i.jsxs)(`div`,{className:`agent-card`,children:[(0,i.jsxs)(`h2`,{children:[(0,i.jsx)(`i`,{className:`fas fa-terminal`,style:{color:`var(--color-b)`}}),`LLM Tool Calling & Execution Examples`]}),(0,i.jsx)(`p`,{children:`Here are concrete examples demonstrating how autonomous LLM agents invoke these tools under the hood:`}),(0,i.jsx)(`h3`,{children:`Example 1: Playwright Browser Agent (Python)`}),(0,i.jsx)(`p`,{children:`An autonomous browser agent (such as a WebVoyager loop or a selenium/playwright agent) can run a local PDF merge by interacting directly with the DOM. Because processing is 100% client-side, the agent doesn't require API keys or backend tokens:`}),(0,i.jsxs)(`div`,{className:`code-box-wrapper`,children:[(0,i.jsx)(`div`,{className:`code-box-header`,children:(0,i.jsx)(`span`,{className:`code-box-lang`,children:`Python (Playwright script)`})}),(0,i.jsx)(`pre`,{children:(0,i.jsx)(`code`,{children:`from playwright.sync_api import sync_playwright

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
        browser.close()`})})]}),(0,i.jsx)(`h3`,{children:`Example 2: Claude Desktop (MCP Settings invocation)`}),(0,i.jsxs)(`p`,{children:[`When a user requests file modifications: `,(0,i.jsx)(`em`,{children:`"Merge invoice_Jan.pdf and invoice_Feb.pdf together"`}),`, the host LLM client routes the request to our local MCP tool calling server:`]}),(0,i.jsxs)(`div`,{className:`code-box-wrapper`,children:[(0,i.jsx)(`div`,{className:`code-box-header`,children:(0,i.jsx)(`span`,{className:`code-box-lang`,children:`JSON (Tool Call & Result payload)`})}),(0,i.jsx)(`pre`,{children:(0,i.jsx)(`code`,{children:`// 1. LLM requests local server execution
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
}`})})]})]})]})]})};export{s as AiAgentsPage};