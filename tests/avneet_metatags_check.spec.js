const { test, expect } = require('@playwright/test')

test('Test meta tags', async ({ page }) => {
  await page.goto('https://mdellis73.github.io/mywebclass-simulation/')
  const title = await page.title()
  const description = await page.$eval('meta[name="description"]', el => el.getAttribute('content'))
  const keywords = await page.$eval('meta[name="keywords"]', el => el.getAttribute('content'))

  expect(title).toContain('MyWebClass.org')
  expect(description).toContain('A project to help educators integrate new technologies into their teaching')
  expect(keywords).toContain('My Webclass Homepage')
})
