const { test, expect } = require('@playwright/test');

test('Initial HTML should load in under 1 second', async ({ page }) => {
  const startTime = Date.now();
  await page.goto('http://mdellis73.github.io/mywebclass-simulation');
  const endTime = Date.now();
  const loadTime = endTime - startTime;
  expect(loadTime).toBeLessThanOrEqual(1000);
});
