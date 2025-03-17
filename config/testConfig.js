class TestConfig {
    static getBaseUrl() {
        return process.env.BASE_URL || 'https://playwright.dev/';
    }

    static getEnvironment() {
        return process.env.TEST_ENV || 'staging';
    }
}

module.exports = TestConfig;
