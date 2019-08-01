const puppeteer = require('puppeteer');


(async () => {
    const browser = await puppeteer.launch({
        headless: false
        // devtools: true
    });
    // Enter google and type in the Airline Search
    const page = await browser.newPage();
    await page.goto('https://google.com');
    await page.type('input[class="gLFyf gsfi"]', 'American Airlines', {delay: 25}); // Types slower, like a user
    await page.keyboard.press('Enter');
    console.log('Searching for AA...');
    await page.waitForNavigation();
    await page.waitFor(5000);
    
    await page.click('a[href="https://www.aa.com/homePage.do"]');
    await page.waitFor(10000);
    console.log('AA loaded...');

    await page.click('a[href="#aa-viewReservations"]');
    console.log('Clicked on View Reservations...');
    await page.waitFor(5000);

    // Type in Conf # and PAX name
    await page.type('form[id="findReservationForm"] input[name="firstName"]', 'Vladimir', {delay: 25});
    await page.type('form[id="findReservationForm"] input[name="lastName"]', 'Putin', {delay: 25});
    await page.type('form[id="findReservationForm"] input[name="recordLocator"]', 'PYCC1R', {delay: 25});
    console.log('Typed in PAX deets...')

    debugger
    await browser.close();
})();