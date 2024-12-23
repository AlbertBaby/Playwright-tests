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
//   if asking for signin attempt
  if((await page.title()).includes('Sign In')){
    await page.getByRole('button', { name: 'Sign in' }).click();
    await page.locator('.text-input').first().click();
    await page.getByLabel('Email or phone').fill('albertbaby266192@gmail.com');
    await page.getByLabel('Password', { exact: true }).click();
    await page.getByLabel('Password', { exact: true }).fill('');
  }

  await page.getByPlaceholder('Search job titles or companies').fill('qa visa');   
  await page.getByPlaceholder('Location').click();
//   await page.getByRole('button', { name: 'Clear text' }).click();
  await page.getByPlaceholder('Location').clear();
  await page.getByPlaceholder('Location').fill('Germany');
  await page.getByRole('option', { name: 'Germany', exact: true }).click();
// Change n value
//     await page.getByRole('link', { name: 'Restaurant General Manager', exact: true }).nth(1).click();
//  show more
//     await page.getByLabel('i18n_show_more').click();

});