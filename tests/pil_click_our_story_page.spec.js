import { test } from '@playwright/test'

test('Click on Story Page', async ({ page }) => {
  // Goes to our website
  await page.goto('https://mdellis73.github.io/mywebclass-simulation/')
  // Clicks on Privacy Agreement
  await page.getByRole('button', { name: 'Agree', exact: true }).click()
  // Clicks on Our Story
  await page.getByRole('link', { name: 'Our Story' }).click()
})
