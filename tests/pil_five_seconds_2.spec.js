import { test } from '@playwright/test'

test('5 Seconds Performance Test for our Website Desktop Version', async ({ page }) => {
  await page.goto('https://mdellis73.github.io/mywebclass-simulation/index.html')
  await page.getByRole('button', { name: 'Agree', exact: true }).click()
  // Wait for 1 second
  await page.waitForTimeout(1000)
  await page.goto('https://mdellis73.github.io/mywebclass-simulation/content.html')
  await page.getByRole('heading', { name: 'Section 4' }).click()
  await page.getByRole('link', { name: 'MyWebClass.org' }).click()
  // Wait for 1 second
  await page.waitForTimeout(1000)
  await page.goto('https://mdellis73.github.io/mywebclass-simulation/privacy.html')
  await page.locator('#section1').getByRole('heading', { name: 'Privacy Policy' }).click()
  await page.getByRole('heading', { name: 'How We Use Your Info' }).click()
  await page.getByRole('heading', { name: 'Data Retention and Security' }).click()
  await page.getByRole('heading', { name: 'Changes to this Privacy Policy' }).click()
  await page.getByRole('heading', { name: 'Contact us' }).click()
  // Wait for 1 second
  await page.waitForTimeout(1000)
  await page.getByRole('link', { name: 'MyWebClass.org' }).click()
})
