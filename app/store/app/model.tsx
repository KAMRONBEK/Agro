import { apiQwerty, createLoggedAsyncAction, isTokenExist } from "utils";
import { IAppState } from "types";
import { initState } from "./state";
import { createModel } from "@rematch/core";
import { RootModel } from "../models";
import { AUTHORIZATION } from "api";
import { Locale } from "const";
import AsyncStorage from "@react-native-community/async-storage";
import localization from "../../locales/i18n";

export const app = createModel<RootModel>()({
	state: initState,
	reducers: {
		reloadState(): IAppState {
			return initState;
		},
		pushTokenExist: (state: IAppState = initState): IAppState => {
			return state;
		},
		setLoggedTime(state) {
			return { ...state, loggedTime: new Date() };
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

		setAppLanguage(state, language: Locale): IAppState {
			return { ...state, language };
		}
	},
	effects: dispatch => ({
		pushTokenExist: createLoggedAsyncAction(
			async () => {
				const res = await isTokenExist();
				await dispatch.app.setToken(res);
				await dispatch.app.doneTokenExist(!!res);
				apiQwerty.defaults.headers.common[AUTHORIZATION] = res;
			},
			async () => {
				dispatch.app.failTokenExist(false);
			}
		),

		async changeAppLanguage(language: Locale) {
			await AsyncStorage.setItem("locale", language);
			localization.setLanguage(language);
			dispatch.app.setAppLanguage(language);
		},

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
