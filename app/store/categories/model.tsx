import { initState } from "./state";
import { ICategoriesState, ICategory, ICategoriesData, IMessageError } from "types";
import { createLoggedAsyncAction, isUnauthenticated } from "utils";
import { callCategories } from "./request";
import { createModel } from "@rematch/core";
import { RootModel } from "../models";

export const categories = createModel<RootModel>()({
	state: initState,
	reducers: {
		resetState: () => {
			return initState;
		},

		pushCategories: (state: ICategoriesState): ICategoriesState => {
			return { ...state, categoriesIsFetching: true };
		},

		pushCategoriesDone: (state: ICategoriesState, payload: ICategory[]): ICategoriesState => {
			return { ...state, categories: payload, categoriesIsFetching: false, categoriesIsError: false };
		},

		pushCategoriesFail: (state: ICategoriesState): ICategoriesState => {
			return { ...state, categoriesIsFetching: false, categoriesIsError: true };
		}
	},
	effects: dispatch => ({
		pushCategories: createLoggedAsyncAction<void, void>(
			async () => {
				const response = await callCategories();
				const isAuthenticatedError = isUnauthenticated(response as IMessageError);

				if (isAuthenticatedError) {
					dispatch.app.doneTokenExist(false);
					dispatch.categories.pushCategoriesFail();

					return;
				}

				const checkedRes = response as ICategoriesData;

				dispatch.categories.pushCategoriesDone(checkedRes.result);
			},
			async () => {
				dispatch.categories.pushCategoriesFail();
			}
		)
	})
});
