import { test } from '@playwright/test'

test('test', async ({ page }) => {
  await page.goto('https://github.com/MDEllis73/mywebclass-simulation')
  await page.getByRole('link', { name: 'src' }).click()
  await page.getByRole('link', { name: 'index.html' }).click()
  await page.getByText('<!-- Google Analytics tracking code -->').click()
  // Wait for 2 second
  await page.waitForTimeout(2000)
  await page.getByText('\'G-4V93QMC8Y0\'').click()
  // Wait for 2 second
  await page.waitForTimeout(2000)
})
