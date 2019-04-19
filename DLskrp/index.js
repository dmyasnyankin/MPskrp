const puppeteer = require('puppeteer');


(async () => {
    const browser = await puppeteer.launch({
        headless: false
        // devtools: true
    });
    // Enter google and type in the Airline Search
    const page = await browser.newPage();
    await page.goto('https://google.com');
    await page.type('input[class="gLFyf gsfi"]', 'Delta Airlines', {delay: 25}); // Types slower, like a user
    await page.keyboard.press('Enter');
    await page.waitForNavigation();
    
    // Click first DL link spotted
    await page.click('a[href="https://www.delta.com/"]');
    await page.waitForNavigation();

    // LIKELY TO CHANGE
    // Copied selector path in order to find My Trips 
    await page.click('body > app-root > app-home > ngc-global-nav > header > div > div.widget-container-lg.nav-content-outlet.bg-dark.main-container.collapse-widget > app-links-content-mobile-container > div > ul > li:nth-child(3) > a');
    
    // FAILED ATTEMPTS at finding selector above:
        // await page.click('div[class="navbar-nav nav-primary"] li[class="nav-item ng-star-inserted"][2]');
        // await page.click('#hamburger-icon');
        // await page.click('ul li[class="nav-item ng-star-inserted active-menu"] a')
        // await page.click('#navPrimary > li:nth-child(4) > a');

    // Type in Conf # and PAX name
    await page.type('input[id="confirmationNo"]', 'LFTHVY', {delay: 100});
    await page.type('input[id="firstName"]', 'Arnold', {delay: 100});
    await page.type('input[id="lastName"]', 'Schwarzenegger', {delay: 100});
    // Click to enter PAX info
    // await page.keyboard.press('Enter');


    // await page.waitForNavigation();

    debugger;
    // await browser.close();
})();