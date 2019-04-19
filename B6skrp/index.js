const puppeteer = require('puppeteer');
// give mobile view
const devices = require('puppeteer/DeviceDescriptors');
const iPhone = devices['iPhone 6'];

(async () => {
    const browser = await puppeteer.launch({
        headless: false
        // devtools: true
    });
    // Enter google and type in the Airline Search
    const page = await browser.newPage();
    await page.goto('https://google.com');
    await page.type('input[class="gLFyf gsfi"]', 'Jetblue Airlines', {delay: 25}); // Types slower, like a user
    await page.keyboard.press('Enter');
    console.log('Searching for B6...');
    await page.waitForNavigation();
    
    // Click first B6 ad link spotted
    await page.click('div[class="ads-visurl"]');
    await page.waitForNavigation();
    // give it phone screen view to more easily select manage booking
    await page.emulate(iPhone);
    await page.waitFor(2000);
    console.log('B6 loaded...');
    
    // LIKELY TO CHANGE
    // WA
    // await page.click('body > jb-app > jb-header > jb-header-mobile > div:nth-child(3) > jb-dotcom-sidenav > button');
    // SA
    await page.click('button[class="nav-icon absolute top-0 z-2"]');
    console.log('Click on Hamburger Icon');
    
    // await page.click('ul[class="navigation-list"]')[2];
    
    
    await page.waitFor(2000);
    
    await page.click('#jb-expansion-panel-id-14 button');
    console.log('Click on My Trips');
    await page.waitFor(2000);
    
    // await page.mouse.click(100, 400);
    await page.mouse.click(600, 130);

    // Fake click
    // await page.mouse.move(200, 500);
    // await page.mouse.down();
    // await page.mouse.move(200, 550);
    // await page.mouse.up();
    // await page.waitFor(2000);
    // await page.emulate(iPhone);
    
    // FAIL
    // let mngTrip = document.querySelector("#subnav-wrapper_sq00hjbkj-3 > div > ul > div > li:nth-child(1) > jb-bubble-link > a > span > span");
    // await page.click(mngTrip);

    
    // WA
    // await page.click('#online-checkin-tab > span');
    // SA
    // await page.click('#online-checkin-tab');
    // FAILED ATTEMPTS at finding selector above:
    
    // Type in Conf # and PAX name
    // await page.reload();
    await page.waitFor(2000);
    console.log('Click on Manage My Trips');
    await page.click('form[id="findFlightForm"]');
    await page.click('#confirmationNumber');
    await page.type('input[id="confirmationNumber"]', 'ILXILX', {delay: 100});
    // await page.type('input[id="familyName"]', 'Conrad', {delay: 100});
    // await page.type('#rloc-and-eticket', 'ILXILX', {delay: 100});
    
    // Click to enter PAX info
    // await page.keyboard.press('Enter');


    // await page.waitForNavigation();

    debugger;
    await browser.close();
})();


