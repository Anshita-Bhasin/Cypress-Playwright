import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';

test('Registration Flow', async ({ page }) => {
  const password = faker.internet.password();

  // Navigate to the registration page
  await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');

  // Enter form details
  await page.fill('#input-firstname', faker.person.firstName());
  await page.fill('#input-lastname', faker.person.lastName());
  await page.fill('#input-email', faker.internet.email());
  await page.fill('#input-telephone', faker.phone.number());
  await page.fill('#input-password', password);
  await page.fill('#input-confirm', password);
  await page.locator('input[type="checkbox"]').check();;
  await page.click('.btn.btn-primary');

  // Verify account creation message
await expect(page.locator('div>h1')).toContainText('Your Account Has Been Created!');
});

