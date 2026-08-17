import { expect } from '@playwright/test';

/**
 * Performs login using credentials from environment variables.
 * @param {import('@playwright/test').Page} page
 */
export async function login(page) {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').fill(process.env.STANDARD_USER);
  await page.locator('[data-test="password"]').fill(process.env.PASSWORD);
  await page.locator('[data-test="login-button"]').click();
  await expect(page.locator('[data-test="title"]').filter({ hasText: 'Products' })).toBeVisible();
}
