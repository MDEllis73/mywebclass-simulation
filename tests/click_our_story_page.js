const { test, expect } = require('@playwright/test')

test('Click Our Story page', async ({ page }) => {
  // Navigate to the homepage
  await page.goto('https://mdellis73.github.io/mywebclass-simulation/')

  // Click the Agree button
  await page.click('#agreeButton')
  await page.goto('hhttps://mdellis73.github.io/mywebclass-simulation/story.html')
})
