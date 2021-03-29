import { IAppState } from "types";
import { Locale } from "const";

export const initState: IAppState = {
	isLogged: false,
	language: Locale.RU,
	token: null,
	loggedTime: null
};
