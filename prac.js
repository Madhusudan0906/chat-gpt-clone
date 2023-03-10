const puppeteer = require('puppeteer');

async function run() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto('https://google.com');

  // Type a message into the chat input field
//   await page.type('.gLFyf', 'Hello World');

  // Click the send button
//   await page.click('.gNO89b');

  // Wait for the response from ChatGPT
//   await page.waitForSelector('#output .message');

  // Extract the response from the page
//   const response = await page.evaluate(() => {
//     return document.querySelector('#output .message').innerText;
//   });

//   console.log(response);

//   await browser.close();
}

run();
