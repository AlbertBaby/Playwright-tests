import { test, expect } from '@playwright/test';
import { BASE_URL, USERNAME, PASSWORD } from '../utils/constants';
import { loginToApi } from '../utils/api-utils';
import { waitForVisible, clickElement } from '../utils/basePage';
import { NAV_MENU_ITEM, LOGIN_BUTTON, USERNAME_FIELD } from '../selectors/loginpage';

test('should login to the application', async ({ page }) => {
  // Navigate to the login page
  await page.goto(`${BASE_URL}/login`);

  // Wait for the login form to be visible
  await waitForVisible(page, USERNAME_FIELD);

  // Fill out the login form
  await page.fill(USERNAME_FIELD, USERNAME);
  await page.fill(PASSWORD_FIELD, PASSWORD);

  // Click the login button
  await clickElement(page, LOGIN_BUTTON);

  // Verify that the navigation menu item is visible
  await waitForVisible(page, NAV_MENU_ITEM);

  // Verify that the API token is present in local storage
  const token = await page.evaluate(() => window.localStorage.getItem('token'));
  expect(token).toBeTruthy();
});

test('should create a new product', async ({ page }) => {
  // Login to the API and get a token
  const token = await loginToApi(`${BASE_URL}/api/login`, USERNAME, PASSWORD);

  // Navigate to the product creation page
  await page.goto(`${BASE_URL}/products/new`);

  // Fill out the product form
  await page.fill(PRODUCT_NAME_FIELD, 'Test Product');
  await page.fill(PRODUCT_PRICE_FIELD, '9.99');

  // Click the create button
  await clickElement(page, CREATE_BUTTON);

  // Verify that the product was created successfully
  await waitForVisible(page, PRODUCT_CREATED_MESSAGE);
});
