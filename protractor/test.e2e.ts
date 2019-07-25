import { browser, $ } from "protractor";

jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000 * 60;

describe('github', ()=>{
    it('test', async ()=>{
        await browser.waitForAngularEnabled(false);
        await browser.get('https://github.com/login');

        const LOGIN_SELECTOR = '#js-pjax-container > #login #login_field';
        await $(LOGIN_SELECTOR).sendKeys('username');

        const PASSWORD_SELECTOR = '#js-pjax-container > #login #password';
        await $(PASSWORD_SELECTOR).sendKeys('passw0rd');
        const AUTH_BTN_SELECTOR = '#js-pjax-container > #login > form > .auth-form-body > .btn';
        await $(AUTH_BTN_SELECTOR).click();
    })
});
