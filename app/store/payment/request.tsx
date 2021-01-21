import AsyncStorage from "@react-native-community/async-storage";
import { apiQwerty } from "utils";
import { ACCEPT_LANGUAGE, AUTHORIZATION, BANKOMATS, PAYMENT, REGIONS } from "api";
import { IPaymentData, IPaymentParams } from "types";
import { Locale, USER_TOKEN } from "const";

export async function callPayment(params: IPaymentParams) {
	console.log(await AsyncStorage.getItem(USER_TOKEN));
	return apiQwerty
		.post<IPaymentData>(PAYMENT, params, {
			headers: {
				[AUTHORIZATION]: await AsyncStorage.getItem(USER_TOKEN),
				[ACCEPT_LANGUAGE]: Locale.RU
			}
		})
		.then(response => response.data)
		.catch(err => err.response.data);
}

export async function getRegions() {
	return apiQwerty
		.get(REGIONS)
		.then(response => response.data)
		.catch(err => err.response.data);
}

export async function getBankomats(id) {
	return apiQwerty
		.get(BANKOMATS(id))
		.then(response => response.data.data)
		.catch(err => err.response.data);
}
