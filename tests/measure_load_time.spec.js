import { test, expect } from '@playwright/test'

test('Measure Load Time', async ({ page }) => {
  await page.getByRole('button', { name: 'Agree', exact: true }).click()
  const startTime = Date.now()
  await page.goto('http://localhost:3000/')
  const endTime = Date.now()
  const loadTime = endTime - startTime

  // Assert that the load time is less than 5 seconds
  expect(loadTime).toBeLessThan(5000)
})
