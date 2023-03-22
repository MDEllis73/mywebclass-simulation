import { test, devices } from '@playwright/test'

test.use({
  ...devices['iPhone 11']
})

test('test', async ({ page }) => {
  await page.goto('http://localhost:3000/')
  await page.getByRole('button', { name: 'Agree', exact: true }).click()
  await page.getByRole('link', { name: 'Our Story' }).click()
  await page.getByText('Learning: We believe that learning is a lifelong process and that everyone has s').click()
})
