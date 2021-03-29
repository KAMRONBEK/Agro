import { initState } from "./state";
import { IPaymentState, IPayment, IStoreState, IPaymentData, IMessageError } from "types";
import { createLoggedAsyncAction, isUnauthenticated, isErrorExist } from "utils";
import { callPayment, getBankomats, getNewsList, getRegions, getNewsSingle } from "./request";
import { formatedPaymentRequestParams } from "./parser";
import { createModel } from "@rematch/core";
import { RootModel } from "../models";

export const payment = createModel<RootModel>()({
	state: initState,
	reducers: {
		resetState: () => {
			return initState;
		},

		pushPayment: (state: IPaymentState): IPaymentState => {
			return { ...state, paymentIsFetching: true, paymentIsError: false };
		},

		pushPaymentDone: (state: IPaymentState, payload: IPayment): IPaymentState => {
			return { ...state, payment: payload, paymentIsFetching: false, paymentIsError: false };
		},

		pushPaymentFail: (state: IPaymentState): IPaymentState => {
			return { ...state, paymentIsFetching: false, paymentIsError: true };
		},
		pushRegions: (state: IPaymentState, regions): IPaymentState => {
			return {
				...state,
				regions: regions,
			};
		},
		pushBankomats: (state: IPaymentState, bankomats): IPaymentState => {
			return {
				...state,
				bankomats: bankomats,
				regions: [],
			};
		},
		pushNews: (state: IPaymentState, news): IPaymentState => {
			return {
				...state,
				news: news,
			};
		},
		pushCurrentNews: (state: IPaymentState, currentNews): IPaymentState => {
			return {
				...state,
				currentNews: currentNews,
			};
		},
	},
	effects: (dispatch) => ({
		pushPayment: createLoggedAsyncAction<void, void>(
			async (_: void, rootState: IStoreState) => {
				const requestParams = formatedPaymentRequestParams(rootState);
				console.log(requestParams);
				const response = await callPayment(requestParams);
				console.log(response);
				const errorRes = isErrorExist(response);
				const isAuthenticatedError = isUnauthenticated(response as IMessageError);

				if (isAuthenticatedError) {
					dispatch.app.doneTokenExist(false);
					dispatch.payment.pushPaymentFail();

					return;
				}

				if (errorRes) {
					dispatch.payment.pushPaymentFail();

					return;
				}

				const checkedRes = response as IPaymentData;

				dispatch.payment.pushPaymentDone(checkedRes.result);
				dispatch.supplier.resetFields();
				dispatch.transactions.pushTransactions();
			},
			async () => {
				dispatch.payment.pushPaymentFail();
			}
		),
		getRegions: async () => {
			let res = await getRegions();
			dispatch.payment.pushRegions(res);
		},
		getBankomats: async (id) => {
			console.log(id);
			try {
				let res = await getBankomats(id);
				dispatch.payment.pushBankomats(res);
			} catch (error) {
				console.log(error);
			}
		},
		getNews: async () => {
			try {
				let res = await getNewsList();
				dispatch.payment.pushNews(res);
			} catch (error) {
				console.log(error);
			}
		},
		getNewsSingle: async (id) => {
			try {
				let res = await getNewsSingle(id);
				dispatch.payment.pushCurrentNews(res);
			} catch (error) {
				console.log(error);
			}
		},
	}),
});
