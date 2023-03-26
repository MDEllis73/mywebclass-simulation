import { test } from '@playwright/test'

test('Check for Google Analytics', async ({ page }) => {
  await page.goto('https://mdellis73.github.io/mywebclass-simulation/')
  await page.waitForSelector('script[src^="https://www.google-analytics.com/analytics.js"]')
})
