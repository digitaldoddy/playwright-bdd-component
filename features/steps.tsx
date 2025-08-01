import { Given, Then, When, expect } from "./fixtures";


Given('Mounted input component', async ({ mount }) => {
  await mount(<textarea data-testid="textField" />);
});

When('I type {string}', async ({ page }, arg: string) => {
  await page.getByTestId('textField').fill(arg);
});

Then('input field has {string}', async ({ page }, arg: string) => {
  await expect(page.getByTestId('textField')).toHaveValue(arg);
});