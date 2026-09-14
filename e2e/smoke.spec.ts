import { expect, test } from '@playwright/test';
test('core recruiter flow works', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { name: /Emmanouela Tsakalidou/i })).toBeVisible();
  await page.getByRole('link', { name: /See all projects/i }).click();
  await expect(page.getByRole('heading', { name: /Selected engineering work/i })).toBeVisible();
  await page.getByRole('link', { name: /View case study/i }).first().click();
  await expect(page.getByRole('heading', { name: 'PriceWise' })).toBeVisible();
});

test('404 page offers recovery paths', async ({ page }) => {
  await page.goto('/missing-route');
  await expect(page.getByText(/Route not found/i)).toBeVisible();
  await expect(page.getByRole('link', { name: /Back home/i })).toBeVisible();
});
