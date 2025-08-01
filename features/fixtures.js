import { mergeTests } from '@playwright/test';
import { test as ctBase } from '@playwright/experimental-ct-react';
import { test as base, createBdd } from 'playwright-bdd';

export const test = mergeTests(base, ctBase);

export const { Given, When, Then } = createBdd(test);

export { expect } from '@playwright/experimental-ct-react';