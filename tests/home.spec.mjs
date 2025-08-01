import { test as testBase, expect } from '@playwright/test';
import { http } from 'msw';
import { createNetworkFixture } from '@msw/playwright'
import { handlers } from './mswHandler.mjs';

const test = testBase.extend({
  network: createNetworkFixture({
    initialHandlers: handlers
  }),
})

// const test = testBase.extend({
//   network: [
//     async ({ page }, use) => {
//       const { createNetworkFixture } = await import('@msw/playwright');
//       const [networkFixture, options] = createNetworkFixture({
//         initialHandlers: [
//           http.get('/resource', () => {
//             return new Response('hello world');
//           }),
//         ],  
//     })
//     return networkFixture({page}, use)
//   },
//   { auto: true}
//   ]
// })

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