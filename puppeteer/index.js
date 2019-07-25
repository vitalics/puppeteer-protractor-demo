const puppeteer = require('puppeteer');
const {performance} = require('perf_hooks');

(async () => {
    const start = performance.now();
    const browser = await puppeteer.launch({headless: false})
    const page = await browser.newPage();
    debugger;
    
    await page.goto('https://github.com/login')

    const LOGIN_SELECTOR = '#js-pjax-container > #login #login_field'
    await page.waitForSelector(LOGIN_SELECTOR)
    await page.type(LOGIN_SELECTOR, 'username');
    
    const PASSWORD_SELECTOR = '#js-pjax-container > #login #password';
    await page.waitForSelector(PASSWORD_SELECTOR);
    await page.type(PASSWORD_SELECTOR, 'passw0rd');

    const AUTH_BTN_SELECTOR = '#js-pjax-container > #login > form > .auth-form-body > .btn';
    await page.waitForSelector(AUTH_BTN_SELECTOR)
    await page.click(AUTH_BTN_SELECTOR)
    
    console.log(`diff: ${performance.now() - start}`);
    // tear down
    await browser.close();

  })()

