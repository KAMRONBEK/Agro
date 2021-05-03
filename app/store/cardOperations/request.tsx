import AsyncStorage from "@react-native-community/async-storage";
import { apiQwerty } from "utils";
import {
	TRANSFER_CARD_TOKEN,
	AUTHORIZATION,
	ACCEPT_LANGUAGE,
	CARD_INFO,
	CARD_LOGO,
	TRANSFER_INFO,
	CREATE_VISA_VIRTUAL
} from "api";
import { Locale, USER_TOKEN } from "const";
import {
	ITransferCardTokenParams,
	ITransferData,
	ICardInfoParams,
	IData,
	ICardInfo,
	ICardImgInfo,
	ITransferInfoParams,
	ITransferInfo,
	ICreateVisaVirtualParams
} from "types";

export async function callTransferCardToken(params: ITransferCardTokenParams) {
	return apiQwerty
		.post<ITransferData>(TRANSFER_CARD_TOKEN, params, {
			headers: {
				[AUTHORIZATION]: await AsyncStorage.getItem(USER_TOKEN)
			}
		})
		.then(response => response.data)
		.catch(err => err.response.data);
}

export async function callCardInfo(params: ICardInfoParams) {
	return apiQwerty
		.post<IData<ICardInfo>>(CARD_INFO, params, {
			headers: {
				[AUTHORIZATION]: await AsyncStorage.getItem(USER_TOKEN)
			}
		})
		.then(response => response.data)
		.catch(err => err.response.data);
}

export async function callCardImgInfo(params: ICardInfoParams) {
	return apiQwerty
		.post<IData<ICardImgInfo>>(CARD_LOGO, params, {
			headers: {
				[AUTHORIZATION]: await AsyncStorage.getItem(USER_TOKEN)
			}
		})
		.then(response => response.data)
		.catch(err => err.response.data);
}

export async function callTransferInfo(params: ITransferInfoParams) {
	return apiQwerty
		.post<IData<ITransferInfo>>(TRANSFER_INFO, params, {
			headers: {
				[AUTHORIZATION]: await AsyncStorage.getItem(USER_TOKEN)
			}
		})
		.then(response => response.data)
		.catch(err => err.response.data);
}
