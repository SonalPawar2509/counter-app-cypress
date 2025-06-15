# Counter App

## Overview

This project is a simple web-based Counter App that allows users to increment and decrement a displayed number. The counter is designed to never display negative values and always resets to zero when the page is reloaded. The project includes robust end-to-end (E2E) testing using Cypress and is set up for continuous integration (CI) with GitHub Actions.

## Features

- **Increment/Decrement:**  
  Users can increase or decrease the counter value using dedicated buttons.
- **No Negative Values:**  
  The counter will not go below zero, ensuring only non-negative numbers are displayed.
- **UI Reset on Reload:**  
  Reloading the page resets the counter to zero.
- **Accessibility:**  
  Buttons are accessible via keyboard.
- **Edge Case Handling:**  
  Includes tests for rapid clicking, large numbers, and UI robustness.

## Project Structure

- `index.html` — Main application UI and logic.
- `cypress/` — Cypress E2E test suite.
  - `e2e/counter.cy.ts` — Automated tests for all main and edge cases.
  - `support/` — Cypress support files.
- `test-plan/counter-test-plan.md` — Detailed test plan covering all scenarios and edge cases.
- `.github/workflows/e2etest.yml` — GitHub Actions workflow for automated CI testing.
- `.gitignore` — Standard ignores for Node.js, Cypress, and development artifacts.

## Getting Started

### Prerequisites

- Node.js and npm installed

### Installation & Running Locally

1. **Install dependencies:**
   ```bash
   npm install
   ```
2. **Start the server:**
   ```bash
   npx http-server -p 3000
   ```
3. **Run Cypress tests (headless):**
   ```bash
   npm run test:e2e
   ```
4. **Run Cypress tests in interactive mode:**
   ```bash
   npm run cypress:open
   ```

## Continuous Integration

- Every pull request triggers the E2E test suite via GitHub Actions to ensure code quality and prevent regressions.

## Test Plan

- See [`test-plan/counter-test-plan.md`](test-plan/counter-test-plan.md) for a comprehensive list of test cases and edge scenarios.
