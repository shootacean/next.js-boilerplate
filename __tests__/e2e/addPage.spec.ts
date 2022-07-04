import { Page, test, expect } from '@playwright/test';

test.describe.configure({ mode: 'parallel' });

test.describe('正常ページアクセス', () => {
  [{ title: '足し算ページ', uri: '/addPage' }].forEach(
    (p: { title: string; uri: string }) => {
      test(p.title, async ({ page, baseURL }) => {
        const response = await page.goto(p.uri);
        expect(response?.ok()).toBeTruthy();
        expect(page.url()).toBe(`${baseURL}${p.uri}`);
      });
    },
  );
});
