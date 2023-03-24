const { test, expect } = require('@playwright/test');

test('Assets should load in under 5 seconds', async ({ page }) => {
  await page.goto('http://mdellis73.github.io/mywebclass-simulation');
  const response = await page.waitForResponse(response => {
    const url = response.url();
    return (
      url.endsWith('.css') ||
      url.endsWith('.js') ||
      url.endsWith('.png') ||
      url.endsWith('.jpg') ||
      url.endsWith('.gif')
    );
  });
  const startTime = Date.now();
  await response.finished();
  const endTime = Date.now();
  const loadTime = endTime - startTime;
  expect(loadTime).toBeLessThanOrEqual(5000);
});
