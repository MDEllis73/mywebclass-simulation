import { test, expect, devices } from '@playwright/test'

test.use({
  ...devices['iPhone 11 Pro Max'],
})

test('Mobile Story Page Click', async ({ page }) => {
  await page.goto('http://localhost:3000/')
  await page.getByRole('button', { name: 'Agree', exact: true }).click()
  await page.getByRole('link', { name: 'Our Story' }).click()
})
