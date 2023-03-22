import { test, expect } from '@playwright/test';

test('Click on Privacy', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.getByRole('button', { name: 'Agree', exact: true }).click();
  await page.getByRole('link', { name: 'Privacy Policy' }).click();
});