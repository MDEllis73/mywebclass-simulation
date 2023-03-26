import { test, devices } from '@playwright/test'

test.use({
  ...devices['Galaxy S9+']
})

test('test', async ({ page }) => {
  await page.goto('https://mdellis73.github.io/mywebclass-simulation/')
  await page.getByRole('button', { name: 'Agree', exact: true }).click()
  await page.getByRole('button', { name: 'Toggle navigation' }).click()
  await page.getByRole('link', { name: 'Content Template' }).click()
})
