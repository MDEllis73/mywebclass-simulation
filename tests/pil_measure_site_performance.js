const { test, expect } = require('@playwright/test')

test('Measure page load time', async ({ page }) => {
  const navigationPromise = page.goto('http://localhost:3000')
  const performanceTiming = JSON.parse(await page.evaluate(() =>
    JSON.stringify(window.performance.timing)
  ))

  await navigationPromise

  const loadTime = performanceTiming.responseEnd - performanceTiming.navigationStart
  expect(loadTime).toBeLessThan(2000) // Set an appropriate threshold
})

test('Measure API response time', async ({ page }) => {
  const apiEndpoint = 'https://jsonplaceholder.typicode.com/posts/1'
  const response = await page.waitForResponse(apiEndpoint)

  const responseTime = response.timing.responseEnd - response.timing.requestStart
  expect(responseTime).toBeLessThan(1000) // Set an appropriate threshold
})

test('Measure element rendering time', async ({ page }) => {
  const selector = '#my-element'
  const startTime = Date.now()
  await page.waitForSelector(selector)
  const endTime = Date.now()

  const renderingTime = endTime - startTime
  expect(renderingTime).toBeLessThan(1000) // Set an appropriate threshold
})
