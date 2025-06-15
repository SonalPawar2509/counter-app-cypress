# Counter App Test Plan

## 1. Test Plan Identifier
Test Plan: Counter App - v1.0

## 2. Introduction
This document defines the testing strategy and test cases for the Counter App. The app displays a numerical value that increments and decrements based on user interaction. The counter should never display a negative value and resets to 0 on page reload.

## 3. Test Items
- Counter component UI
- Increment button
- Decrement button
- Display area for counter value

## 4. Features to be Tested
- Increment functionality
- Decrement functionality (preventing negative values)
- UI behavior on reload
- Edge cases (e.g. rapid clicking, keyboard usage, large numbers)

## 5. Features Not to be Tested
- Performance testing
- Security testing
- Browser compatibility (assumed tested separately)

## 6. Test Strategy / Approach
Manual and automated end-to-end (E2E) tests using Cypress. Each test will simulate user interactions in a browser and verify UI and logic behavior.

## 7. Pass/Fail Criteria
- A test **passes** if the actual result matches the expected result.
- A test **fails** if there's a deviation from the expected behavior or visual glitches.

## 8. Test Deliverables
- Test plan document
- Cypress E2E test scripts
- GitHub Action pipeline for CI
- Test execution logs and reports

## 9. Testing Tasks
- Setup Cypress and project dependencies
- Write and run test cases
- Monitor and fix failures
- Maintain test scripts in CI pipeline

## 10. Environmental Needs
- Node.js and npm
- Cypress installed
- Browser for test execution (Chrome/Edge)
- Local server (`http-server`) to run the app

## 11. Responsibilities
| Role | Responsibility |
|------|----------------|
| QA Engineer | Create and execute test cases |
| Developer | Fix issues and bugs found during testing |
| DevOps | Ensure CI pipeline runs tests on PRs |

## 12. Schedule
| Task | Duration |
|------|----------|
| Test Plan Creation | 1 day |
| Initial Test Case Writing | 1 day |
| Test Execution and Debugging | 2 days |
| Integration with CI | 1 day |

## 13. Risks and Mitigation
| Risk | Mitigation |
|------|------------|
| App allows negative values | Add logic to prevent decrement below 0 |
| Tests fail in CI due to async timing | Add wait/assertions as needed |
| Missing element in DOM breaks app | Add null-checks or fallback UI |

## 14. Approvals
| Name | Role | Approval Status |
|------|------|-----------------|
| Alice Smith | QA Lead | ✅ |
| Bob Johnson | Developer | ✅ |

---

## 15. Test Cases

### Main Test Cases

| TC ID | Description | Steps | Expected Result |
|-------|-------------|-------|-----------------|
| TC1 | Clicking "Increment" increases the counter by 1 | 1. Ensure counter starts at 0<br>2. Click the "Increment" button | Counter should display 1 |
| TC2 | Clicking "Decrement" at 0 does not change the counter | 1. Ensure counter starts at 0<br>2. Click the "Decrement" button | Counter should stay at 0 |
| TC3 | Prevent negative values when decrementing at 0 | 1. Make sure counter is 0<br>2. Click "Decrement" | Counter remains at 0 |
| TC4 | Clicking "Increment" multiple times increases value accordingly | 1. Ensure counter is 0<br>2. Click "Increment" five times | Counter should display 5 |
| TC5 | Incrementing once and then decrementing brings counter back to 0 | 1. Start from 0<br>2. Click "Increment"<br>3. Click "Decrement" | Counter should display 0 |
| TC6 | Page reload resets counter to default value | 1. Change counter to any value<br>2. Reload the page | Counter should reset to 0 |

### Edge Cases

| TC ID | Description | Steps | Expected Result |
|-------|-------------|-------|-----------------|
| EC1 | Rapid clicking should update counter accurately | 1. Click "Increment" or "Decrement" rapidly multiple times | Counter updates correctly, doesn't go below 0, no glitches |
| EC2 | Support keyboard interaction for buttons | 1. Focus on "Increment" or "Decrement" button<br>2. Press Enter or Space key | Counter should change just like a click |
| EC3 | Decrement button should be disabled when counter is 0 | 1. Ensure counter is at 0 | Decrement button is disabled or inactive |
| EC4 | Counter handles large values without UI breakage | 1. Click "Increment" repeatedly to reach a large number (e.g., 9999)<br>2. Try to go beyond it | UI remains stable; counter caps or continues safely |
| EC5 | Separate tabs maintain independent counter states | 1. Open the app in two browser tabs<br>2. Increment in one<br>3. Check the other | Each tab shows its own counter value |
| EC6 | App handles missing counter element gracefully | 1. Remove the counter element from the DOM<br>2. Attempt to increment or decrement | App does not crash; shows an error or ignores input |


## Notes

- The counter must never show negative numbers.
- Reloading the page resets the counter (no persistence implemented).
- All scenarios assume the counter starts at 0.
- EC5 assumes persistence is not implemented.