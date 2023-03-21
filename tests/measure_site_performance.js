import {expect} from "@playwright/test";

test('Measure API response time', async ({ page }) => {
  const apiEndpoint = 'https://jsonplaceholder.typicode.com/posts/1'
  const response = await page.waitForResponse(apiEndpoint)

  const responseTime = response.timing.responseEnd - response.timing.requestStart
  expect(responseTime).toBeLessThan(1000) // Set an appropriate threshold
})
