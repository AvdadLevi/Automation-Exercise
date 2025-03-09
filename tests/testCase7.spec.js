import { test, expect } from "@playwright/test";

test.describe("Verify Test Cases Page", () => {
  //2. Navigate to url 'http://automationexercise.com'
  test("Verify Test Cases Page", async ({ page }) => {
    await page.goto("https://automationexercise.com");
    //3. Verify that home page is visible successfully
    await expect(page).toHaveURL("https://automationexercise.com");
    //4. Click on 'Test Cases' button
    await page.locator('.nav.navbar-nav [href="/test_cases"]').click();
    //5. Verify user is navigated to test cases page successfully
    await expect(page).toHaveURL("https://automationexercise.com/test_cases");
  });
});
