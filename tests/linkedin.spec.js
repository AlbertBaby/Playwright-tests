// @ts-check
const { test, expect } = require('@playwright/test');

test('has title', async ({ page }) => {
    await page.goto('https://www.linkedin.com/');
  
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/LinkedIn/);    
  });

test('test', async ({ page }) => {
  await page.goto('https://www.linkedin.com/');
  await page.getByLabel('Primary').getByRole('link', { name: 'Jobs' }).click();
  if(await page.getByRole('button', { name: 'Dismiss' }).isHidden){
    await page.getByRole('button', { name: 'Dismiss' }).click();
  }
  await page.getByPlaceholder('Search job titles or companies').click();
  await page.getByPlaceholder('Search job titles or companies').fill('qa visa');
  await page.getByPlaceholder('Location').click();
  await page.getByLabel('Jobs', { exact: true }).locator('section').filter({ hasText: 'United States Los Angeles' }).getByRole('button').click();
  await page.getByPlaceholder('Location').click();
  await page.getByPlaceholder('Location').fill('Germany');
  await page.getByRole('option', { name: 'Germany', exact: true }).click();
}
 
  