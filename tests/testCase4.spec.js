// import { test, expect } from "@playwright/test";

// test.describe("Logout User", () => {
//   test("Login with correct email and password, and logut successfully", async ({ page }) => {
//     //3. Verify that home page is visible successfully
//     await page.goto("https://automationexercise.com");
//     await expect(page).toHaveURL("https://automationexercise.com");
//     //4. Click on 'Signup / Login' button
//     await page.locator('[href="/login"]').click();
//     //5. Verify 'Login to your account' is visible
//     await expect(page.locator('text="Login to your account"')).toBeVisible();
//     //6. Enter correct email address and password
//     await page.locator('[data-qa="login-email"]').fill("avdadlevi@gmail.com");
//     await page.locator('[data-qa="login-password"]').fill("dubile10");
//     //7.Click Login button
//     await page.locator('[data-qa="login-button"]').click();
//     //8. Verify that 'Logged in as username' is visible
//     const username = "Oded";
//     await expect(page.locator('text=" Logged in as"')).toContainText(username);
//     //9. Click 'Logout' button
//     await page.locator('[href="/logout"]').click();
//     //10. Verify that user is navigated to login page
//     await expect(page).toHaveURL("https://automationexercise.com/login");
//   });
// });
