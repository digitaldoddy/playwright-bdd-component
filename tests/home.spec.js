import { test as testBase, expect } from '@playwright/test';
import { http } from 'msw';
import { createNetworkFixture } from '@msw/playwright'

const test = testBase.extend({
  network: createNetworkFixture({
    initialHandlers: [
      http.get('/resource', () => {
        return new Response('hello world')
      }),
    ],
  }),
})

test('homepage has greeting', async ({ page }) => {
  await page.goto('/');
  const data = await page.evaluate(() => {
    return fetch('/resource').then((response) => {
      return response.text()
    })
  })

  expect(data).toBe('hello world')
  await expect(page.getByText('Hello from React!')).toBeVisible();
});