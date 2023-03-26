import { test } from '@playwright/test'

test('test', async ({ page }) => {
  // Navigate to 3rd party GDPR tester
  await page.goto('https://2gdpr.com/')
  // Enter our webpage link
  await page.getByPlaceholder('Your website address').fill('https://mdellis73.github.io/mywebclass-simulation')
  // Wait for 1 second
  await page.waitForTimeout(1000)
  // Press enter
  await page.getByPlaceholder('Your website address').press('Enter')
  // Wait for 1 second
  await page.waitForTimeout(1000)

  // Find confirmation text on webpage
  const c0 = await page.locator('#vstatus0')
  const c1 = await page.locator('#vstatus1')
  const c2 = await page.locator('#vstatus2')
  const c3 = await page.locator('#vstatus3')
  const c4 = await page.locator('#vstatus4')

  let allTestsPassed = true

  // For each of these 5 constants, check if they are equal to success message.
  for (const [index, c] of [c0, c1, c2, c3, c4].entries()) {
    const text = await c.textContent()
    // If false, then throw error
    if (text !== 'The scanner did not find known issues') {
      allTestsPassed = false
      throw new Error(`Check number ${index + 1} failed.`)
    }
  }
  // If true, pass the test!
  if (allTestsPassed) {
    console.log('All tests passed')
  }
})
