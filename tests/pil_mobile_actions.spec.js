import { test, devices } from '@playwright/test'

test.use({
  ...devices['Galaxy S9+']
})

test('test', async ({ page }) => {
  await page.goto('http://localhost:3000/')
  await page.getByRole('button', { name: 'Agree', exact: true }).click()
  await page.getByText('Monthly digest of what\'s new and exciting from us.').click()
  await page.getByRole('link', { name: 'Our Story' }).click()
  await page.getByRole('heading', { name: 'Mission' }).click()
  await page.getByRole('heading', { name: 'Values' }).click()
  await page.getByRole('heading', { name: 'Origin' }).click()
  await page.getByRole('link', { name: 'MyWebClass.org' }).click()
})
