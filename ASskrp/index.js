const puppeteer = require('puppeteer');


(async () => {
    const browser = await puppeteer.launch({
        headless: false
        // devtools: true
    });
    // Enter google and type in the Airline Search
    const page = await browser.newPage();
    await page.goto('https://google.com');
    await page.type('input[class="gLFyf gsfi"]', 'Alaska Airlines', {delay: 25}); // Types slower, like a user
    await page.keyboard.press('Enter');
    console.log('Searching for AS...');
    await page.waitForNavigation();
    await page.waitFor(1000);
    
    await page.click('a[href="https://www.alaskaair.com/"]');
    console.log('Clicked AS...');
    await page.waitFor(1000);
    console.log('AS loaded...');

    await page.click('div[id="homelet"] a[id="tab-manage"]');
    console.log('Clicked Manage Trips...')

    //Encounter Recaptcha

    await page.waitForNavigation();

    //currently not working
    await page.click('div[id="manage"] input[name="TravelerLastName"]');
    console.log('Clicked input box...')
    await page.type('div[id="manage"] input[name="TravelerLastName"]', 'Atentekoumpo', {delay: 25});
    await page.type('div[id="manage"] input[name="CodeOrNumber"]', 'Atentekoumpo', {delay: 25});
    console.log('Typed in PAX info...')

    await page.waitFor(5000);

    debugger
    await browser.close();
})();