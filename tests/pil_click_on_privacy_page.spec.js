import { test } from '@playwright/test'

test('Click on Privacy', async ({ page }) => {
  // Goes to our website
  await page.goto('https://mdellis73.github.io/mywebclass-simulation/')
  // Clicks on Privacy Agreement
  await page.getByRole('button', { name: 'Agree', exact: true }).click()
  // Clicks on our Privacy Policy
  await page.click('a:has-text("Privacy Policy")')
})
