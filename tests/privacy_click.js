const { test, expect } = require('@playwright/test')

test('Check Our Story Page', async ({ page }) => {
  await page.goto('http://localhost:3000/privacy.html')
  const pageTitle = await page.title()
  expect(pageTitle).toBe('MyWebClass.org | Our Story')
})
