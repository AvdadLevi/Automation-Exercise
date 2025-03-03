// import { test, expect } from "@playwright/test";

// test.describe("Register User with existing email", () => {
//   test("Register User with existing email, and getting the right notification", async ({ page }) => {
//     //3. Verify that home page is visible successfully
//     await page.goto("https://automationexercise.com");
//     await expect(page).toHaveURL("https://automationexercise.com");
//     //4. Click on 'Signup / Login' button
//     await page.locator('[href="/login"]').click();
//     //5. Verify 'New User Signup!' is visible
//     await expect(page.locator('text="New User Signup!"')).toBeVisible();
//     //6. Enter name and already registered email address
//     await page.locator('[data-qa="signup-name"]').fill("Oded");
//     await page.locator('[data-qa="signup-email"]').fill("avdadlevi@gmail.com");
//     //7. Click 'Signup' button
//     await page.locator('[data-qa="signup-button"]').click();
//     //8. Verify error 'Email Address already exist!' is visible
//     await expect(page.locator('text="Email Address already exist!"')).toBeVisible();
//   });
// });
