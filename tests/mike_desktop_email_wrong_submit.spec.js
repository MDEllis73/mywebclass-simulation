import { test, expect } from '@playwright/test'

test('test', async ({ page }) => {
  await page.goto('https://mdellis73.github.io/mywebclass-simulation/')
  await page.getByRole('button', { name: 'Agree', exact: true }).click()
  await page.getByPlaceholder('Email address').click()
  await page.getByPlaceholder('Email address').fill('email@wrong')
  await page.getByRole('button', { name: 'Subscribe' }).click()
})
