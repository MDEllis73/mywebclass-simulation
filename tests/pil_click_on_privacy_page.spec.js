import { test } from '@playwright/test'

test('Click on Privacy', async ({ page }) => {
  await page.goto('https://mdellis73.github.io/mywebclass-simulation/')
  await page.getByRole('button', { name: 'Agree', exact: true }).click()
  await page.click('a:has-text("Privacy Policy")')
})
