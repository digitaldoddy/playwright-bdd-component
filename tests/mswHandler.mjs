import { http } from "msw";

export const handlers = [
  http.get('/resource', () => {
    return new Response('hello world')
  }),
];  