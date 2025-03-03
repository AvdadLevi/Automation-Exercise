// import { test, expect } from "@playwright/test";

// test.describe("Login Failure", () => {
//   //3. Verify that home page is visible successfully
//   test("Login User with incorrect email and password", async ({ page }) => {
//     await page.goto("https://automationexercise.com");
//     await expect(page).toHaveURL("https://automationexercise.com");
//     //4.Click on 'Signup / Login' button
//     await page.locator('[href="/login"]').click();
//     //5. Verify 'Login to your account' is visible
//     await expect(page.locator('text="Login to your account"')).toBeVisible();
//     //6. Enter incorrect email address and password
//     await page.locator('[data-qa="login-email"]').fill("ardadlevi@getMaxListeners.com");
//     await page.locator('[data-qa="login-password"]').fill("dubile10");
//     //7. Click 'login' button
//     await page.locator('[data-qa="login-button"]').click();
//     //8. Verify error 'Your email or password is incorrect!' is visible=
//     await expect(page.locator('text="Your email or password is incorrect!"')).toBeVisible();
//   });
// });
