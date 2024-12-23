const { test, expect } = require('@playwright/test');

import { GOOGLE } from '../utils/constants';
import {url_formatter} from '../utils/string_utils.js';


test('should display "Google" text on homepage', async ({ page }) => {
  await page.goto(url_formatter(GOOGLE));
  const hintText = page.locator('div.hplogo');
  await expect(hintText).toContainText('Google');
});

