import { initState } from "./state";
import {
	ICardOperationsState,
	OperationType,
	ITransfer,
	IStoreState,
	ITransferField,
	ICardInfo,
	IData,
	ICardImgInfo,
	ITransferInfo,
	IMessageError
} from "types";
import {
	createLoggedAsyncAction,
	setTransferFieldValue,
	isTransferErrorExist,
	resetCardOperationsFieldsError,
	isErrorExist,
	isUnauthenticated
} from "utils";
import {
	formatedTransferCardTokenRequestParams,
	formatedCardInfoRequestParams,
	formatedTransferInfoRequestParams
} from "./parser";
import { callTransferCardToken, callCardInfo, callCardImgInfo, callTransferInfo } from "./request";
import { validateFields, cardIsFilled } from "./validation";
import { createModel } from "@rematch/core";
import { RootModel } from "../models";

export const cardOperations = createModel<RootModel>()({
	state: initState,
	reducers: {
		resetState: () => {
			return initState;
		},

		setOperationType: (state: ICardOperationsState, type: OperationType): ICardOperationsState => {
			return { ...state, operationType: type };
		},

		setField: (state: ICardOperationsState, payload: ITransferField): ICardOperationsState => {
			return { ...state, fields: setTransferFieldValue(payload, state) };
		},

		pushCardField: (state: ICardOperationsState): ICardOperationsState => {
			return { ...state };
		},

		pushCardFieldDone: (state: ICardOperationsState, payload: ITransferField): ICardOperationsState => {
			return { ...state, fields: setTransferFieldValue(payload, state) };
		},

		pushTransferCardToken: (state: ICardOperationsState): ICardOperationsState => {
			return { ...state, transferIsFetching: true, transferIsError: false };
		},

		pushTransferCardTokenDone: (state: ICardOperationsState, payload: ITransfer): ICardOperationsState => {
			return { ...state, transfer: payload, transferIsFetching: false, transferIsError: false };
		},

		pushTransferCardTokenFail: (state: ICardOperationsState): ICardOperationsState => {
			return { ...state, transferIsFetching: false, transferIsError: true };
		},

		setTransferError: (state: ICardOperationsState, payload: ICardOperationsState): ICardOperationsState => {
			return payload;
		},

		resetFieldsErrors: (state: ICardOperationsState): ICardOperationsState => {
			return resetCardOperationsFieldsError(state);
		},

		resetCardInfo: (state: ICardOperationsState): ICardOperationsState => {
			return { ...state, cardInfo: null };
		},

		pushCardInfo: (state: ICardOperationsState): ICardOperationsState => {
			return { ...state, cardInfoIsFetching: true };
		},

		pushCardInfoDone: (state: ICardOperationsState, payload: ICardInfo): ICardOperationsState => {
			return { ...state, cardInfo: payload, cardInfoIsFetching: false, cardInfoIsError: false };
		},

		pushCardInfoFail: (state: ICardOperationsState): ICardOperationsState => {
			return { ...state, cardInfoIsFetching: false, cardInfoIsError: true };
		},

		resetCardImgInfo: (state: ICardOperationsState): ICardOperationsState => {
			return { ...state, cardImgInfo: null };
		},

		pushCardImgInfo: (state: ICardOperationsState): ICardOperationsState => {
			return { ...state, cardImgInfoIsFetching: true };
		},

		pushCardImgInfoDone: (state: ICardOperationsState, payload: ICardImgInfo): ICardOperationsState => {
			return { ...state, cardImgInfo: payload, cardImgInfoIsFetching: false, cardImgInfoIsError: false };
		},

		pushCardImgInfoFail: (state: ICardOperationsState): ICardOperationsState => {
			return { ...state, cardImgInfoIsFetching: false, cardImgInfoIsError: true };
		},

		resetTransferInfo: (state: ICardOperationsState): ICardOperationsState => {
			return { ...state, transferInfo: null };
		},

		pushTransferInfo: (state: ICardOperationsState): ICardOperationsState => {
			return { ...state, transferInfoIsFetching: true };
		},

		pushTransferInfoDone: (state: ICardOperationsState, payload: ITransferInfo): ICardOperationsState => {
			return { ...state, transferInfo: payload, transferInfoIsFetching: false, transferInfoIsError: false };
		},

		pushTransferInfoFail: (state: ICardOperationsState): ICardOperationsState => {
			return { ...state, transferInfoIsFetching: false, transferInfoIsError: true };
		}
	},
	effects: dispatch => ({
		pushCardField: createLoggedAsyncAction<ITransferField, void>(async (params: ITransferField) => {
			const cardIsFilledRes = cardIsFilled(params);

			if (cardIsFilledRes) {
				dispatch.cardOperations.pushCardInfo();
				dispatch.cardOperations.pushCardImgInfo();
				dispatch.cardOperations.pushTransferInfo();
			}

			dispatch.cardOperations.pushCardFieldDone(params);
			dispatch.cardOperations.resetCardInfo();
			dispatch.cardOperations.resetCardImgInfo();
			dispatch.cardOperations.resetTransferInfo();
		}),

		pushTransferCardToken: createLoggedAsyncAction<void, void>(
			async (_: void, rootState: IStoreState) => {
				const validateResult = validateFields(rootState);

				if (validateResult.hasErrors) {
					dispatch.cardOperations.setTransferError(validateResult.state);

					return;
				}

				const requestParams = formatedTransferCardTokenRequestParams(rootState);
				const res = await callTransferCardToken(requestParams);
				const errorRes = isTransferErrorExist(res, rootState);
				const isAuthenticatedError = isUnauthenticated(res as IMessageError);

				if (isAuthenticatedError) {
					dispatch.app.doneTokenExist(false);
					dispatch.cardOperations.pushTransferCardTokenFail();

					return;
				}

				if (!errorRes) {
					const checkedRes = res as IData<ITransfer>;

					dispatch.cardOperations.pushTransferCardTokenDone(checkedRes.result);
					dispatch.transactions.pushTransactions();

					return;
				}

				dispatch.cardOperations.setTransferError(errorRes);
			},
			async () => {
				dispatch.cardOperations.pushTransferCardTokenFail();
			}
		),

		pushCardInfo: createLoggedAsyncAction<void, void>(
			async (_: void, { cardOperations }: IStoreState) => {
				const requestParams = formatedCardInfoRequestParams(cardOperations);
				const res = await callCardInfo(requestParams);
				const isError = isErrorExist(res);
				const isAuthenticatedError = isUnauthenticated(res as IMessageError);

				if (isAuthenticatedError) {
					dispatch.app.doneTokenExist(false);
					dispatch.cardOperations.pushCardInfoFail();

					return;
				}

				if (!isError) {
					const checkedRes = res as IData<ICardInfo>;

					dispatch.cardOperations.pushCardInfoDone(checkedRes.result);
				}

				dispatch.cardOperations.pushCardInfoFail();
			},
			async () => {
				dispatch.cardOperations.pushCardInfoFail();
			}
		),

		pushCardImgInfo: createLoggedAsyncAction<void, void>(
			async (_: void, { cardOperations }: IStoreState) => {
				const requestParams = formatedCardInfoRequestParams(cardOperations);
				const res = await callCardImgInfo(requestParams);
				const isError = isErrorExist(res);
				const isAuthenticatedError = isUnauthenticated(res as IMessageError);

				if (isAuthenticatedError) {
					dispatch.app.doneTokenExist(false);
					dispatch.cardOperations.pushCardImgInfoFail();

					return;
				}

				if (!isError) {
					const checkedRes = res as IData<ICardImgInfo>;

					dispatch.cardOperations.pushCardImgInfoDone(checkedRes.result);
				}

				dispatch.cardOperations.pushCardImgInfoFail();
			},
			async () => {
				dispatch.cardOperations.pushCardImgInfoFail();
			}
		),

		pushTransferInfo: createLoggedAsyncAction<void, void>(
			async (_: void, rootState: IStoreState) => {
				const requestParams = formatedTransferInfoRequestParams(rootState);
				const res = await callTransferInfo(requestParams);
				const isError = isErrorExist(res);
				const isAuthenticatedError = isUnauthenticated(res as IMessageError);

				if (isAuthenticatedError) {
					dispatch.app.doneTokenExist(false);
					dispatch.cardOperations.pushTransferInfoFail();

					return;
				}

				if (!isError) {
					const checkedRes = res as IData<ITransferInfo>;

					dispatch.cardOperations.pushTransferInfoDone(checkedRes.result);
				}

				dispatch.cardOperations.pushTransferInfoFail();
			},
			async () => {
				dispatch.cardOperations.pushTransferInfoFail();
			}
		)
	})
});
