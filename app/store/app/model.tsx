import { apiQwerty, createLoggedAsyncAction, isTokenExist } from "utils";
import { IAppState } from "types";
import { initState } from "./state";
import { createModel } from "@rematch/core";
import { RootModel } from "../models";
import { AUTHORIZATION } from "api";
import { Locale } from "const";
import AsyncStorage from "@react-native-community/async-storage";

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
		},

		setToken(state, token: string): IAppState {
			return { ...state, token };
		},

		setLanguage(state, language: Locale): IAppState {
			AsyncStorage.setItem("locale", language);
			return { ...state, language };
		}
	},
	effects: dispatch => ({
		pushTokenExist: createLoggedAsyncAction(
			async () => {
				const res = await isTokenExist();
				const language = await AsyncStorage.getItem("locale");
				dispatch.app.setToken(res);
				dispatch.app.setLanguage(language || Locale.RU);
				apiQwerty.defaults.headers.common[AUTHORIZATION] = res;
				dispatch.app.doneTokenExist(!!res);
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
