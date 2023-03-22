import { test, expect } from '@playwright/test';

test('Click on Story Page', async ({ page }) => {
  await page.goto('http://localhost:3000/')
  await page.getByRole('button', { name: 'Agree', exact: true }).click()
  await page.getByRole('link', { name: 'Our Story' }).click()
})
