import { init } from '@rematch/core';
import selectPlugin from '@rematch/select';
import { models } from './models';

export const store = init({
  models,
  plugins: [selectPlugin()]
});

export const { select } = store;

export type IDispatch = typeof store.dispatch;
