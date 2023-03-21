const { test, expect } = require('@playwright/test')

test('Click Our Story page', async ({ page }) => {
  // Navigate to the homepage
  await page.goto('https://mdellis73.github.io/mywebclass-simulation/story.html')

  // Click on the "Our Story" link
  await page.click('text=Our Story')

  // Check that the page title is correct
  const pageTitle = await page.title()
  expect(pageTitle).toBe('MyWebClass.org | Our Story')
})
