// import { test, expect } from "@playwright/test";

// test.describe("register user", () => {
//   //3. Verify that home page is visible successfully
//   test("register a new customer, fill in details and delete flow", async ({ page }) => {
//     await page.goto("https://automationexercise.com");
//     await expect(page).toHaveURL("https://automationexercise.com");
//     //4. Click on 'Signup / Login' button
//     await page.locator('[href="/login"]').click();
//     //5. Verify 'New User Signup!' is visible
//     await expect(page.locator('text="New User Signup!"')).toBeVisible();
//     //6. Enter name and Email
//     await page.locator('[data-qa="signup-name"]').fill("Oded");
//     await page.locator('[data-qa="signup-email"]').fill("avdadlevi@gmail.com");
//     //7. Click signup button
//     await page.locator('[data-qa="signup-button"]').click();
//     //8. "Enter Account Information" title is visible
//     await expect(page.locator('text="Enter Account Information"')).toBeVisible();
//     //9. Fill details
//     await page.locator("#id_gender1").check();
//     await page.locator("#name").fill("Oded");
//     await expect(page.locator("#email")).toHaveValue("avdadlevi@gmail.com");
//     await page.locator("#password").fill("dubile10");
//     await page.locator("#days").selectOption("5");
//     await page.locator("#months").selectOption("October");
//     await page.locator("#years").selectOption("1985");
//     //10. Select checkbox 'Sign up for our newsletter!'
//     await page.locator("#newsletter").check();
//     //11. Select checkbox 'Receive special offers from our partners!'
//     await page.locator("#optin").check();
//     //12. Fill details: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number
//     await page.locator("#first_name").fill("Oded");
//     await page.locator("#last_name").fill("Levi Shafran");
//     await page.locator("#company").fill("Self Employed");
//     await page.locator("#address1").fill("Ein Carmel");
//     await page.locator("#country").selectOption("Israel");
//     await page.locator("#state").fill("None");
//     await page.locator("#city").fill("Ein Carmel");
//     await page.locator("#zipcode").fill("3086000");
//     await page.locator("#mobile_number").fill("0546611283");
//     //13. Click 'Create Account button'
//     await page.locator('[data-qa="create-account"]').click();
//     //14. Verify that 'ACCOUNT CREATED!' is visible
//     await expect(page.locator('text="Account Created!"')).toBeVisible();
//     //15. Click 'Continue' button
//     await page.locator('[data-qa="continue-button"]').click();
//     //16. Verify that 'Logged in as username' is visible
//     const username = "Oded";
//     await expect(page.locator('text="Logged in as"')).toContainText(username);
//     //17. Click 'Delete Account' button
//     await page.locator('[href="/delete_account"]').click();
//     //18. Verify that 'ACCOUNT DELETED!' is visible and click 'Continue' button
//     await expect(page.locator('text="Account Deleted!"')).toBeVisible();
//     await page.locator('[data-qa="continue-button"]').click();
//   });
// });
