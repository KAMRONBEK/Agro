import { apiQwerty } from "utils";
import { ACCEPT_LANGUAGE } from "api";
import { LOGIN } from "api";
import { ILoginParams, ILoginData } from "types";
import { Locale } from "const";

export async function callLogin(params: ILoginParams) {
	return apiQwerty
		.post<ILoginData>(LOGIN, params, {
			headers: {}
		})
		.then(response => response.data)
		.catch(err => err.response.data);
}

export async function callLogout() {
	return apiQwerty
		.post<ILoginData>(LOGIN, {
			headers: {}
		})
		.then(response => response.data)
		.catch(err => err.response.data);
}
