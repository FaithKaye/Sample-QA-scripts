import { test } from '@playwright/test';

test('Successfully buy an item', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/inventory.html');
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    await page.locator('[data-test="shopping-cart-link"]').click();
    await page.locator('[data-test="checkout"]').click();
    await page.locator('[data-test="firstName"]').fill('Sample');
    await page.locator('[data-test="lastName"]').fill('Data');
    await page.locator('[data-test="postalCode"]').fill('211211');
    await page.locator('[data-test="continue"]').click();
    await page.locator('[data-test="finish"]').click();
});