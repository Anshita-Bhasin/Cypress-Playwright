import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
    testDir: './cypress/e2e',
   
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [['html'],[ "allure-playwright"]],

  use: {
    trace: 'on-first-retry',
    screenshot:"only-on-failure",
    video:"on"
  },

  
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },

  ],

});
