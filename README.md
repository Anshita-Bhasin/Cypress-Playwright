# Cypress-Playwright

This repository contains test cases for both Cypress and Playwright, allowing you to run tests using the same project.

## Running Tests

### Cypress Tests

- To run Cypress tests in headless mode, execute: 
npm run cypress-test-headless

- To run Cypress tests in UI mode, execute:
npm run cypress-test-ui

### Playwright Tests

- To run Playwright tests in headless mode, execute:
npm run playwright-test-headless

- To run Playwright tests in UI mode, execute:
npm run playwright-test-ui

### Running Both Playwright and Cypress Tests

To execute both Playwright and Cypress tests simultaneously, make modifications in **playwright.config.ts** by changing the `testDir` to './cypress/e2e'.

## Test Cases Location

All test cases are located in the folder `cypress/e2e`.

- Cypress test cases are written in `.js`.
- Playwright test cases are written in `.ts`.

## Local Setup

To run tests on your local machine:

1. Clone the repository.
2. Run the following command after cloning:
npm install

## Version:
1. Cypress Version : 13.6.1
2. Playwright Version: 1.40.1

## Screenshots:


<img width="1553" alt="image" src="https://github.com/Anshita-Bhasin/Cypress-Playwright/assets/10338077/fe513a81-c9f5-4da6-99c9-eb87c063d2be">


<img width="1543" alt="image" src="https://github.com/Anshita-Bhasin/Cypress-Playwright/assets/10338077/40bdcb67-7371-4eb1-b721-1708932d9262">


<img width="1697" alt="image" src="https://github.com/Anshita-Bhasin/Cypress-Playwright/assets/10338077/7e06879f-21fe-49b3-983e-848f6be76f1b">

<img width="1705" alt="image" src="https://github.com/Anshita-Bhasin/Cypress-Playwright/assets/10338077/97a808dd-f049-4486-9ee0-8558cd102a5e">



