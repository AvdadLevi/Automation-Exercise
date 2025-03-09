// import { test, expect } from "@playwright/test";

// test.describe("contact Us Form", () => {
//   test('Click on "contact us form", fill-in details, issue a meesege, verify succsses', async ({ page }) => {
//     //2. Navigate to url 'http://automationexercise.com'
//     await page.goto("https://automationexercise.com");
//     //3. Verify that home page is visible successfully
//     await expect(page).toHaveURL("https://automationexercise.com");
//     //4. Click on 'Contact Us' button
//     await page.locator('[href="/contact_us"]').click();
//     //5. Verify 'GET IN TOUCH' is visible
//     await expect(page.locator('text="Get In Touch"')).toBeVisible();
//     //6. Enter name, email, subject and message
//     await page.locator('[data-qa="name"]').fill("Oded");
//     await page.locator('[data-qa="email"]').fill("avdadlevi@gmail.com");
//     await page.locator('[data-qa="subject"]').fill("Food Preferences");
//     await page.locator("#message").fill("I love almonds Croissant");
//     //7. Upload file
//     await page.setInputFiles('input[type="file"]', "C:/Users/נגה/Downloads/130571_croissant_choco_blanco95_Galeria.png");
//     //8. Click 'Submit' button
//     await page.locator('[data-qa="submit-button"]').click();
//     //9. Click OK button
//     page.on("dialog", (dialog) => dialog.accept());
//     await page.locator('input[type="submit"][data-qa="submit-button"]').click();
//     //10. Verify success message 'Success! Your details have been submitted successfully.' is visible
//     await expect(page.locator(".status.alert.alert-success")).toBeVisible();
//     //11. Click 'Home' button and verify that landed to home page successfully
//     await page.locator(".btn.btn-success").click();
//     await expect(page).toHaveURL("https://automationexercise.com");
//   });
// });
