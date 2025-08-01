import TextArea from "../src/components/TextArea";
import { Given, Then, When, expect } from "./fixtures";

Given('Mounted input component', async ({ mount }) => {
  await mount(<TextArea />);
});

When('I type {string}', async ({ page }, arg) => {
  await page.getByTestId('textField').fill(arg);
});

Then('input field has {string}', async ({ page }, arg) => {
  await expect(page.getByTestId('textField')).toHaveValue(arg);
});