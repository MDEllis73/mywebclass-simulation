const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch()
  const context = await browser.newContext()
  const page = await context.newPage()

  await page.goto(process.env.URL)

  const loadTime = await page.evaluate(() => {
    return performance.timing.loadEventEnd - performance.timing.navigationStart
  })

  console.log(`Page load time: ${loadTime}ms`)

  await browser.close()
})()
