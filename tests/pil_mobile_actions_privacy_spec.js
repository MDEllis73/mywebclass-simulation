import { test, expect, devices } from '@playwright/test'

test.use({
  ...devices['Galaxy S9+']
})

test('test', async ({ page }) => {
  await page.goto('http://localhost:3000/')
  await page.getByRole('button', { name: 'Agree', exact: true }).click()
  await page.getByRole('button', { name: 'Toggle navigation' }).click()
  await page.getByRole('button', { name: 'Toggle navigation' }).click()
  await page.getByRole('link', { name: 'Privacy Policy' }).click()
  await page.locator('#section2').getByRole('heading', { name: 'Privacy Policy' }).click()
  await page.getByRole('heading', { name: 'Info Collected' }).click()
  await page.getByRole('heading', { name: 'How We Use Your Info' }).click()
  await page.getByRole('heading', { name: 'Google Analytics' }).click()
  await page.getByRole('heading', { name: 'Data Retention and Security' }).click()
  await page.getByRole('heading', { name: 'Changes to this Privacy Policy' }).click()
  await page.getByRole('heading', { name: 'Contact us' }).click()
  await page.getByRole('link', { name: 'MyWebClass.org' }).click()
})
