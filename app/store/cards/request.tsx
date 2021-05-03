import AsyncStorage from "@react-native-community/async-storage";
import { apiQwerty } from "utils";
import {
	ACCEPT_LANGUAGE,
	LIST_CARDS,
	AUTHORIZATION,
	TOKEN_CREATE_QWERTY,
	TOKEN_VERIFY_QWERTY,
	CARDS_BALANCE,
	CREATE_VISA_VIRTUAL,
	VISA_CARD_INFO,
	CREATE_SUM_VISA_VIRTUAL,
	CREATE_VISA_DUPLICATE,
	VISA_ACTIVATION
} from "api";
import {
	ICreateCardData,
	ICreateCardParams,
	ICardsData,
	IVerifyCardData,
	IVerifyCardParams,
	ICardBalanceParams,
	ICreateVisaVirtualParams,
	IVisaCardInfoParams,
	IChangeVisaVirtualParams
} from "types";
import { Locale, USER_TOKEN } from "const";

export async function callCreateCard(params: ICreateCardParams) {
	return apiQwerty
		.post<ICreateCardData>(TOKEN_CREATE_QWERTY, params, {
			headers: {
				[AUTHORIZATION]: await AsyncStorage.getItem(USER_TOKEN)
			}
		})
		.then(response => response.data)
		.catch(err => err.response.data);
}

export async function callCreateVisaVirtual(params: ICreateVisaVirtualParams) {
	return apiQwerty
		.post(CREATE_VISA_VIRTUAL, params, {
			headers: {
				[AUTHORIZATION]: await AsyncStorage.getItem(USER_TOKEN)
			}
		})
		.then(response => response)
		.catch(err => err.response);
}

export async function callCreateSumVisaVirtual(params: ICreateVisaVirtualParams) {
	return apiQwerty
		.post(CREATE_SUM_VISA_VIRTUAL, params, {
			headers: {
				[AUTHORIZATION]: await AsyncStorage.getItem(USER_TOKEN)
			}
		})
		.then(response => response)
		.catch(err => err.response);
}

export async function callCreateVisaDuplicate(params: ICreateVisaVirtualParams) {
	return apiQwerty
		.post(CREATE_VISA_DUPLICATE, params, {
			headers: {
				[AUTHORIZATION]: await AsyncStorage.getItem(USER_TOKEN)
			}
		})
		.then(response => response)
		.catch(err => err.response);
}

export async function callChangeVisaVirtualStatus(params: IChangeVisaVirtualParams) {
	return apiQwerty
		.post(VISA_ACTIVATION, params, {
			headers: {
				[AUTHORIZATION]: await AsyncStorage.getItem(USER_TOKEN)
			}
		})
		.then(response => response)
		.catch(err => err.response);
}

export async function callVerifyCard(params: IVerifyCardParams) {
	return apiQwerty
		.post<IVerifyCardData>(TOKEN_VERIFY_QWERTY, params, {
			headers: {
				[AUTHORIZATION]: await AsyncStorage.getItem(USER_TOKEN)
			}
		})
		.then(response => response.data)
		.catch(err => err.response.data);
}

export async function callCards() {
	console.log(await AsyncStorage.getItem(USER_TOKEN));
	return apiQwerty
		.get<ICardsData>(LIST_CARDS, {
			headers: {
				[AUTHORIZATION]: await AsyncStorage.getItem(USER_TOKEN)
			}
		})
		.then(response => response)
		.catch(err => err.response.data);
}

export async function callCardsBalance(params: ICardBalanceParams) {
	return apiQwerty
		.post<ICardsData>(CARDS_BALANCE, params, {
			headers: {
				[AUTHORIZATION]: await AsyncStorage.getItem(USER_TOKEN)
			}
		})
		.then(response => response.data)
		.catch(err => err.response.data);
}

export async function callVisaCardInfo(params: IVisaCardInfoParams) {
	console.log();
	return apiQwerty
		.post(VISA_CARD_INFO, params, {
			headers: {
				[AUTHORIZATION]: await AsyncStorage.getItem(USER_TOKEN)
			}
		})
		.then(response => response.data)
		.catch(err => err.response.data);
}
