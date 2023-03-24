const { test, expect } = require('@playwright/test');

test('Server response time should be under 500ms', async ({ page }) => {
  const startTime = Date.now();
  await page.goto('http://mdellis73.github.io/mywebclass-simulation');
  const endTime = Date.now();
  const responseTime = endTime - startTime;
  expect(responseTime).toBeLessThanOrEqual(500);
});
