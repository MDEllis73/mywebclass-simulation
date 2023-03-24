const { readdirSync } = require('fs');
const { join } = require('path');
const { test, expect } = require('@playwright/test');

const testsDir = join(process.cwd(), 'tests');
const files = readdirSync(testsDir);

const testFiles = files.filter(file => file.endsWith('.spec.js'));
const totalTestsDurationLimitInMilliseconds = 5 * 60 * 1000; // 5 minutes in milliseconds

test.describe('All tests should run in under 5 minutes', () => {
  let totalTestsDuration = 0;

  testFiles.forEach(file => {
    const tests = require(join(testsDir, file));

    tests.forEach(test => {
      test(`${test.name}`, async ({ page }) => {
        const start = Date.now();
        await test.fn({ page });
        const end = Date.now();
        const testDuration = end - start;
        totalTestsDuration += testDuration;
      });
    });
  });

  test.afterAll(() => {
    expect(totalTestsDuration).toBeLessThan(totalTestsDurationLimitInMilliseconds);
  });
});
