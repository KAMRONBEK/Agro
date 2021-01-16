import { createLoggedAsyncAction, isTokenExist } from "utils";
import { IAppState, IUser } from "types";
import { initState } from "./state";
import { createModel } from "@rematch/core";
import { RootModel } from "../models";

export const app = createModel<RootModel>()({
	state: initState,
	reducers: {
		reloadState(): IAppState {
			return initState;
		},

		pushTokenExist: (state: IAppState = initState): IAppState => {
			return state;
		},

		doneTokenExist: (state: IAppState = initState, status: boolean): IAppState => {
			return { ...state, isLogged: status };
		},

		failTokenExist: (state: IAppState, status: boolean): IAppState => {
			return { ...state, isLogged: status };
		}
	},
	effects: dispatch => ({
		pushTokenExist: createLoggedAsyncAction(
			async () => {
				const res = await isTokenExist();
				dispatch.app.doneTokenExist(res);
			},
			async () => {
				dispatch.app.failTokenExist(false);
			}
		),

		pushResetApp: () => {
			dispatch.login.resetState();
			dispatch.cardOperations.resetState();
			dispatch.cards.resetState();
			dispatch.categories.resetState();
			dispatch.payment.resetState();
			dispatch.supplier.resetState();
			dispatch.suppliers.resetState();
			dispatch.transactions.resetState();
		}
	})
});
