const puppeteer = require('puppeteer');


(async () => {
    const browser = await puppeteer.launch({
        headless: false
        // devtools: true
    });
    // Enter google and type in the Airline Search
    const page = await browser.newPage();
    await page.goto('https://google.com');
    await page.type('input[class="gLFyf gsfi"]', 'Cathay Pacific Airlines', {delay: 25}); // Types slower, like a user
    await page.keyboard.press('Enter');
    console.log('Searching for CX...');
    await page.waitForNavigation();
    
    // Click first DL link spotted
    // await page.click('cite[class="www.cathaypacific.com/"]');
    await page.click('div[class="ads-visurl"]');
    await page.waitFor(3000);
    console.log('CX loaded...');

    // LIKELY TO CHANGE
    // Copied selector path in order to find My Trips 
    // await page.click('body > app-root > app-home > ngc-global-nav > header > div > div.widget-container-lg.nav-content-outlet.bg-dark.main-container.collapse-widget > app-links-content-mobile-container > div > ul > li:nth-child(3) > a');
    // await page.click('div[class="parbase home-tabs tabs-wrapper holder-fluid"] > ul[class="tabs"] > li]')[2];
    // await page.click('ul[class="tabs"] li a[id="#manage-booking-tab"]');
    
    // await page.waitFor('a[href="https://www.cathaypacific.com/mb/#/en_US/login"]');
    // await page.click('div[class="header-top-row"] i[class="icon icon-menu"]');
    await page.click('i[class="icon icon-menu"]');

    console.log('Click on Hamburger Icon');

    // await page.click('a[href="https://www.cathaypacific.com/mb/#/en_US/login"]');


    // FAILED ATTEMPTS at finding selector above:

    // Type in Conf # and PAX name
    // await page.type('input[id="confirmationNo"]', 'B6969B', {delay: 100});
    // await page.type('input[id="firstName"]', 'Joe', {delay: 100});
    // await page.type('input[id="lastName"]', 'Blow', {delay: 100});
    // Click to enter PAX info
    // await page.keyboard.press('Enter');


    // await page.waitForNavigation();

    debugger;
    // await browser.close();
})();