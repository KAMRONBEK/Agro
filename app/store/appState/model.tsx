import { appStateInitialState } from "./state";
import { IAppStateModel, IUser } from "types";
import AsyncStorage from "@react-native-community/async-storage";
import I18n from "react-native-i18n";

export const appState = {
	state: appStateInitialState,
	reducers: {
		setLanguage(state, language): IAppStateModel {
			I18n.locale = language;
			AsyncStorage.setItem("locale", language);
			return { ...state, appLang: language };
		}
	},
	effects: dispatch => ({
		// pushTokenExist: createLoggedAsyncAction(
		// 	async () => {
		// 		const res = await isTokenExist();
		// 		dispatch.app.doneTokenExist(res);
		// 	},
		// 	async () => {
		// 		dispatch.app.failTokenExist(false);
		// 	}
		// )
	})
};
