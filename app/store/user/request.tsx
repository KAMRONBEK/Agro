import AsyncStorage from "@react-native-community/async-storage";
import { apiQwerty } from "utils";
import { ACCEPT_LANGUAGE, AUTHORIZATION, USER_DATA } from "api";
import { Locale, USER_TOKEN } from "const";
import { IUser } from "types";

export async function getUserData() {
	return apiQwerty
		.get<IUser>(USER_DATA, {
			headers: {
				[AUTHORIZATION]: await AsyncStorage.getItem(USER_TOKEN)
			}
		})
		.then(response => response.data)
		.catch(err => err.response.data);
}

export async function updateUserData(params) {
	return apiQwerty
		.post<IUser>(USER_DATA, params, {
			headers: {}
		})
		.then(response => response.data)
		.catch(err => err.response.data);
}
