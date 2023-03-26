import { test } from '@playwright/test'

test('Click on Content', async ({ page }) => {
  // Goes to our website
  await page.goto('https://mdellis73.github.io/mywebclass-simulation/')
  // Clicks on Privacy Agreement
  await page.getByRole('button', { name: 'Agree', exact: true }).click()
  // Clicks on our Content Page
  await page.getByRole('link', { name: 'Content Template' }).click()
})
