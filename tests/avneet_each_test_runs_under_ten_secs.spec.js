const { readdirSync } = require('fs');
const { join } = require('path');
const { test, expect } = require('@playwright/test');

const testsDir = join(process.cwd(), 'tests');
const files = readdirSync(testsDir);

const testFiles = files.filter(file => file.endsWith('.spec.js'));

testFiles.forEach(file => {
  describe(file, () => {
    const tests = require(join(testsDir, file));

    tests.forEach(test => {
      test(`${test.name} should run in under 10 seconds`, async ({ page }) => {
        const start = Date.now();
        await test.fn({ page });
        const end = Date.now();
        const durationInSeconds = (end - start) / 1000;
        expect(durationInSeconds).toBeLessThan(10);
      });
    });
  });
});
