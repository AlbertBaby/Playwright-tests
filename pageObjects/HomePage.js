class HomePage {
    constructor(page) {
        this.page = page;
        this.getStartedLink = page.getByRole('link', { name: 'Get started' });
    }

    async navigate() {
        await this.page.goto('https://playwright.dev/');
    }

    async clickGetStarted() {
        await this.getStartedLink.click();
    }
}

module.exports = HomePage;
