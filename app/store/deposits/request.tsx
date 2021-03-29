import { apiClick, apiQwerty, formData, generateServiceKey } from "utils";
import { SERVICE, JSONRPC, ACCEPT_LANGUAGE, ALL_DEPOSITS, ACTIVE_DEPOSITS, DEPOSIT_INFO, CREATE_DEPOSIT } from "api";
import { CATEGORY_LIST } from "api";
import { Locale } from "const";

export async function allDeposits() {
	return apiQwerty
		.get(ALL_DEPOSITS, {
			headers: {
				[ACCEPT_LANGUAGE]: Locale.RU,
			},
		})
		.then((response) => response.data.data)
		.catch((err) => err.response.data);
}

export async function userDeposits() {
	return apiQwerty
		.get(ACTIVE_DEPOSITS, {
			headers: {
				[ACCEPT_LANGUAGE]: Locale.RU,
			},
		})
		.then((response) => response.data.data)
		.catch((err) => err.response.data);
}

export async function depositInfo(code) {
	return apiQwerty
		.get(DEPOSIT_INFO(code), {
			headers: {
				[ACCEPT_LANGUAGE]: Locale.RU,
			},
		})
		.then((response) => response.data.data)
		.catch((err) => err.response.data);
}

export async function createDeposit(credentials) {
	return apiQwerty
		.post(CREATE_DEPOSIT, formData(credentials), {
			headers: {
				[ACCEPT_LANGUAGE]: Locale.RU,
			},
		})
		.then((response) => response.data.data)
		.catch((err) => err.response.data);
}
