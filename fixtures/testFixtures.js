const base = require('@playwright/test');
const HomePage = require('../pageObjects/HomePage');

exports.test = base.test.extend({
    homePage: async ({ page }, use) => {
        const homePage = new HomePage(page);
        await use(homePage);
    }
});

exports.expect = base.expect;
