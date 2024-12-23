
export async function waitForVisible(page, selector) {
    await page.waitForSelector(selector, { visible: true });
  }
  
export async function clickElement(page, selector) {
    await page.click(selector);
  }