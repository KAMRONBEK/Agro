import { apiQwerty } from "utils";
import { ACCEPT_LANGUAGE, CONFIRM_PHONE, SIGNUP } from "api";
import { SEND_SMS_CODE } from "api";
import {
	ISignupSmsCode,
	ISignupSendSmsCodeParams,
	ISignupConfirmPhoneParams,
	ISignupConfirmPhoneData,
	ISignupParams,
	ISignup
} from "types";
import { Locale } from "const";

export async function callSendSmsCode(params: ISignupSendSmsCodeParams) {
	return apiQwerty
		.post<ISignupSmsCode>(SEND_SMS_CODE, params, {
			headers: {}
		})
		.then(response => response.data)
		.catch(err => err.response);
}

export async function callConfirmPhone(params: ISignupConfirmPhoneParams) {
	return apiQwerty
		.post<ISignupConfirmPhoneData>(CONFIRM_PHONE, params, {
			headers: {}
		})
		.then(response => response)
		.catch(err => err.response);
}

export async function callSignup(params: ISignupParams) {
	return apiQwerty
		.post<ISignup>(SIGNUP, params, {
			headers: {}
		})
		.then(response => response.data)
		.catch(err => err.response.data);
}
