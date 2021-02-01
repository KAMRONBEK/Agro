import { IPaymentState } from "types";

export const initState: IPaymentState = {
	payment: null,
	paymentIsFetching: false,
	paymentIsError: false,
	regions: [],
	bankomats: [],
	news: [],
	currentNews: {}
};
