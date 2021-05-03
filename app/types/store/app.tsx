import { Locale } from "const";

export interface IAppState {
	isLogged: boolean;
	language: Locale;
	token: string;
	loggedTime: Date | null;
	useFingerPrint: boolean;
}
