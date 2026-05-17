const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  // Capture console messages
  page.on('console', msg => console.log('PAGE LOG:', msg.text()));
  page.on('pageerror', err => console.log('PAGE ERROR:', err.toString()));
  
  await page.goto('http://localhost:8080/tools/pdf/merge-pdf.html', { waitUntil: 'networkidle2' });
  
  console.log("Navigated to page");
  
  // Set files using the file chooser or file input directly
  const input = await page.$('input[type="file"]');
  await input.uploadFile('test1.pdf', 'test2.pdf');
  
  console.log("Files uploaded");
  
  // Wait for Process Button to be enabled
  await page.waitForFunction(() => !document.getElementById('processBtn').disabled);
  
  console.log("Button enabled. Clicking Process...");
  
  // Click Process Button
  await page.click('#processBtn');
  
  console.log("Clicked process");
  
  // Wait for success modal OR error
  await page.waitForFunction(() => {
     const text = document.getElementById('modalContent').innerText;
     return text.includes('Success') || text.includes('Error');
  });
  
  const modalText = await page.$eval('#modalContent', el => el.innerText);
  console.log("Modal text:", modalText);
  
  await browser.close();
})();
