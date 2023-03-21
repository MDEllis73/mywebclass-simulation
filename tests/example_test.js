const { test, expect } = require('@playwright/test')

test('Measure page load time', async ({ page }) => {
  const navigationPromise = page.goto('https://example.com')
  const performanceTiming = JSON.parse(await page.evaluate(() =>
    JSON.stringify(window.performance.timing)
  ))

  await navigationPromise

  const loadTime = performanceTiming.responseEnd - performanceTiming.navigationStart
  expect(loadTime).toBeLessThan(2000) // Set an appropriate threshold
})
