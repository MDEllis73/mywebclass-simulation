import { test, devices } from '@playwright/test'

test.use({
  ...devices['Galaxy S9+']
})

test('5 Seconds Performance Test for our Website Mobile Version', async ({ page }) => {
  await page.goto('https://mdellis73.github.io/mywebclass-simulation/')
  await page.getByRole('button', { name: 'Agree', exact: true }).click()
  // Wait for 1 second
  await page.waitForTimeout(1000)
  await page.getByRole('button', { name: 'Toggle navigation' }).click()
  await page.getByRole('link', { name: 'Content Template' }).click()
  // Wait for 1 second
  await page.waitForTimeout(1000)
  await page.getByRole('link', { name: 'MyWebClass.org' }).click()
  // Wait for 1 second
  await page.waitForTimeout(1000)
  await page.goto('https://mdellis73.github.io/mywebclass-simulation/')
  await page.getByRole('link', { name: 'Privacy Policy' }).click()
})
