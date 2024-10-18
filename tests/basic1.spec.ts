import { test, expect } from '@playwright/test';

test("Regis user flow",async ({page})=>{
  //navigate to Regist Page
  await page.goto("https://material.playwrightvn.com/01-xpath-register-page.html");

  //fill username, email
  await page.locator('//input[@id="username"]').fill("Giangplaywright");
  await page.locator('//input[@id="email"]').fill("playwrightvn@gmail.com");

//check gender,hobbies
  await page.locator('//input[@id="male"]').check();
  await page.locator('//input[@id="traveling"]').check();
  await page.locator('//input[@id="traveling"]').uncheck();


//select
  await page.selectOption('//select[@id="country"]',"canada");

//date fill
  await page.locator('//input[@id="dob"]').fill("2024-10-17");

// upload file
  await page.locator('//input[@id="profile"]').setInputFiles('test-data/anhtest.png');

//fill bio
  await page.locator('//textarea[@id="bio"]').fill("toi dang học test");

//click
  await page.getByRole('button', { name: 'Register' }).click();

} );

test("Click", async ({page}) =>{
  await page.goto("https://material.playwrightvn.com/018-mouse.html");
  await page.locator('//div[@id="clickArea"]').click();
})