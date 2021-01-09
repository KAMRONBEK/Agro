import { init } from '@rematch/core';
import selectPlugin from '@rematch/select';
import { models } from './models';
import reactotron from './reactotron-config';

export const store = init({
	models,
	plugins: [selectPlugin()],
	redux: {
		enhancers: [reactotron.createEnhancer()],
		devtoolOptions: {
			disabled: !__DEV__
		}
	}
});

export const { select } = store;

export type IDispatch = typeof store.dispatch;
