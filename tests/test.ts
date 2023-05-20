import { expect, test } from '@playwright/test';

test('index page loads', async ({ page }) => {
	await page.goto('/');
	await expect(page.getByRole('link', { name: "TimeEnjoyed's" })).toBeVisible();
});

test('navigation works', async ({ page }) => {
	await page.goto('/');
	await page.getByRole('link', { name: 'Goal' }).click();
	await expect(page.getByRole('heading', { name: 'Goal' })).toBeVisible();
});
