const { test, expect } = require('@playwright/test')

test('Check Privacy Policy Page', async ({ page }) => {
  // Navigate to the privacy policy page
  await page.goto('http://localhost:3000/privacy.html')

  // Check that the page title is correct
  const pageTitle = await page.title()
  expect(pageTitle).toBe('MyWebClass.org | Privacy Policy')

  // Check if there is a policy pop-up and click on the Agree button
  const agreeButton = await page.$('#policy-popup .agree-button')
  if (agreeButton) {
    await agreeButton.click()
  }
})
