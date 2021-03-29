import { init, RematchDispatch, RematchRootState } from "@rematch/core";
import loadingPlugin, { ExtraModelsFromLoading } from "@rematch/loading";
import { models, RootModel } from "./models";
import reactotron from "./ReactatronConfig";

type FullModel = ExtraModelsFromLoading<RootModel>;

export const store = init<RootModel, FullModel>({
	models,
	plugins: [loadingPlugin()],
	redux: {
		enhancers: [reactotron.createEnhancer!()],
	},
});

export type Store = typeof store;
export type Dispatch = RematchDispatch<RootModel>;
export type RootState = RematchRootState<RootModel, FullModel>;
