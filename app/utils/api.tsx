import Axios from "axios";
import sha1 from "crypto-js/sha1";
import {
	API_ENDPOINT,
	APPLICATION_JSON,
	PARTNER_KEY,
	PARTNER_ID,
	API_ENDPOINT_QWERTY,
	ACCEPT,
	CONTENT_TYPE,
	AUTHORIZATION,
} from "api";

export const apiClick = Axios.create({
	baseURL: API_ENDPOINT,
	headers: {
		[ACCEPT]: APPLICATION_JSON,
		[CONTENT_TYPE]: APPLICATION_JSON,
	},
	timeout: 30000,
});

export const apiQwerty = Axios.create({
	baseURL: API_ENDPOINT_QWERTY,
	headers: {
		[ACCEPT]: APPLICATION_JSON,
		[CONTENT_TYPE]: APPLICATION_JSON,
	},
	timeout: 30000,
});

// export const setToken = async store => {
// 	function select(state) {
// 		return state.app.token;
// 	}
//
// 	let currentValue;
//
// 	function handleChange() {
// 		let previousValue = currentValue;
// 		console.log({previousValue})
// 		currentValue = select(store.getState());
// 		if (previousValue !== currentValue && currentValue) {
// 			apiQwerty.defaults.headers.common[AUTHORIZATION] = currentValue;
// 		}
// 	}
//
// 	store.subscribe(handleChange);
// };

export function generateServiceKey(): string {
	let timestamp = Math.floor(Number(new Date()) / 1000);
	const shasum = sha1(timestamp + PARTNER_KEY);

	let service_key = PARTNER_ID + "; " + shasum + "; " + timestamp;

	return service_key;
}

export let formData = (rawData) => {
	let form = new FormData();
	Object.keys(rawData).forEach((key) => {
		if (Array.isArray(rawData[key])) {
			let obj = rawData[key];
			for (let index in obj) {
				form.append(`${key}[${index}]`, obj[index]);
			}
			return;
		}
		if (typeof rawData[key] === "object") {
			let obj = rawData[key];
			let i = 0;
			Object.keys(obj).forEach((id, index) => {
				if (obj[id]) form.append(`${key}[${i++}]`, parseInt(id));
			});
			return;
		}
		form.append(key, rawData[key]);
	});
	return form;
};
