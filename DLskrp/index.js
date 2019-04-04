const puppeteer = require('puppeteer');


(async () => {
    const browser = await puppeteer.launch({
        headless: false
        // devtools: true
    });
    const page = await browser.newPage();
    await page.goto('https://google.com');
    await page.type('input[class="gLFyf gsfi"]', 'Delta Airlines', {delay: 25}); // Types slower, like a user
    await page.keyboard.press('Enter');
    await page.waitForNavigation();

    await page.click('a[href="https://www.delta.com/"]');
    debugger;
    // await browser.close();
})();