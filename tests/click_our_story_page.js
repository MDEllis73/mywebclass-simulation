const { test, expect } = require('@playwright/test')

test('Click Our Story page', async ({ page }) => {
  // Navigate to the homepage
  await page.goto('http://localhost:3000')

  // Click the Agree button
  await page.click('#agreeButton')
  await page.goto('http://localhost:3000/story.html')
})
