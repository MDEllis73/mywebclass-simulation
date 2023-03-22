import { test, expect, devices } from '@playwright/test'
test.use({
  ...devices['iPhone X']
})

test('Mobile Privacy Page', async ({ page }) => {
  await page.goto('http://localhost:3000/')
  await page.getByRole('button', { name: 'Agree', exact: true }).click()
  await page.click('a:has-text("Privacy Policy")')
})
