import { expect, test } from '@playwright/test';

test('core recruiter flow works', async ({ page }) => {
  await page.goto('/');

  await expect(
    page.getByRole('heading', {
      name: /Software Engineer/i,
    })
  ).toBeVisible();

  await page
    .locator('#projects')
    .getByRole('link', {
      name: 'View More',
      exact: true,
    })
    .click();

  await expect(
    page.getByRole('link', {
      name: /View PipelineForge case study/i,
    })
  ).toBeVisible();

  await page
    .getByRole('link', {
      name: /View PipelineForge case study/i,
    })
    .click();

  await expect(page).toHaveURL(
    /\/projects\/pipelineforge$/
  );
});

test('404 page offers recovery paths', async ({ page }) => {
  await page.goto('/missing-route');

  await expect(
    page.getByText(/Route not found/i)
  ).toBeVisible();

  await expect(
    page.getByRole('link', {
      name: /Back home/i,
    })
  ).toBeVisible();
});