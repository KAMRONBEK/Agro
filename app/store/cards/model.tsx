import { initState } from './state';
import {
	ICardsState,
	ICardField,
	IStoreState,
	ICreateCardData,
	ICard,
	ICardsData,
	IVerifyCardData,
	IActiveCard,
	IMessageError,
	ICardBalance,
	ICardBalanceData,
	VisaCurrencyType,
	IChangeVisaVirtualParams
} from 'types';
import {
	createLoggedAsyncAction,
	isFieldErrorExist,
	isCreateCardErrorExist,
	setCreateCardFieldValue,
	isUnauthenticated
} from 'utils';
import { callCreateCard, callCards, callVerifyCard, callCardsBalance, callChangeVisaVirtualStatus } from './request';
import {
	formatedCreateCardRequestParams,
	formatedVerifyCardRequestParams,
	formatedCardBalanceRequestParams
} from './parser';
import { showMessage } from 'react-native-flash-message';
import { ERROR, DONE } from 'const';
import { createVisaRequestType, formattedCards } from './utils';

export const cards = {
	state: initState,
	reducers: {
		resetState: () => {
			return { ...initState };
		},

		setCreateCardField: (state: ICardsState, payload: ICardField): ICardsState => {
			return { ...state, createCardFields: setCreateCardFieldValue(payload, state), error: null };
		},

		setActiveCard: (state: ICardsState, payload: IActiveCard): ICardsState => {
			return { ...state, activeCard: payload };
		},

		setAddCardModalVisible: (state: ICardsState, payload: boolean): ICardsState => {
			return { ...state, addCardModalVisible: payload };
		},

		setOpenVisaCurrencyType: (state: ICardsState, payload: VisaCurrencyType): ICardsState => {
			return { ...state, openVisaCurrencyType: payload };
		},

		pushCreateCard: (state: ICardsState): ICardsState => {
			return { ...state, createCardIsFetching: true };
		},

		pushCreateCardDone: (state: ICardsState, payload: ICreateCardData): ICardsState => {
			return { ...state, createCard: payload, createCardIsFetching: false, createCardIsError: false };
		},

		pushCreateCardFail: (state: ICardsState): ICardsState => {
			return { ...state, createCardIsFetching: false, createCardIsError: true };
		},

		pushVerifyCard: (state: ICardsState): ICardsState => {
			return { ...state, createCardIsFetching: true };
		},

		pushVerifyCardDone: (state: ICardsState, payload: ICard): ICardsState => {
			return { ...state, verifyCard: payload, createCardIsFetching: false, createCardIsError: false };
		},

		pushVerifyCardFail: (state: ICardsState): ICardsState => {
			return { ...state, createCardIsFetching: false, createCardIsError: true };
		},

		setCreateCardFieldsError: (state: ICardsState, payload: ICardsState): ICardsState => {
			return payload;
		},

		pushCards: (state: ICardsState): ICardsState => {
			return { ...state, cardsIsFetching: true };
		},

		pushCardsDone: (state: ICardsState, payload: ICard[]): ICardsState => {
			return { ...state, cards: payload, cardsIsFetching: false, cardsIsError: false };
		},

		pushCardsFail: (state: ICardsState): ICardsState => {
			return { ...state, cardsIsFetching: false, cardsIsError: true };
		},

		pushCardsBalance: (state: ICardsState): ICardsState => {
			return { ...state, cardsBalanceIsFetching: true };
		},

		pushCardsBalanceDone: (state: ICardsState, payload: ICardBalance[]): ICardsState => {
			return { ...state, cardsBalance: payload, cardsBalanceIsFetching: false, cardsBalanceIsError: false };
		},

		pushCardsBalanceFail: (state: ICardsState): ICardsState => {
			return { ...state, cardsBalanceIsFetching: false, cardsBalanceIsError: true };
		},

		pushCreateVisaVirtual: (state: ICardsState): ICardsState => {
			return { ...state, createVisaVirtualIsFetching: true };
		},

		pushCreateVisaVirtualDone: (state: ICardsState, payload: ICard): ICardsState => {
			return {
				...state,
				createVisaVirtual: payload,
				createVisaVirtualIsFetching: false,
				createVisaVirtualIsError: false
			};
		},

		pushCreateVisaVirtualFail: (state: ICardsState): ICardsState => {
			return { ...state, createVisaVirtualIsFetching: false, createVisaVirtualIsError: true };
		},

		pushChangeVisaStatus: (state: ICardsState): ICardsState => {
			return { ...state, changeVisaVirtualStatusIsFetching: true };
		},

		pushChangeVisaStatusDone: (state: ICardsState, payload: ICard[]): ICardsState => {
			return {
				...state,
				cards: payload,
				changeVisaVirtualStatusIsFetching: false,
				changeVisaVirtualStatusIsError: false
			};
		},

		pushChangeVisaStatusFail: (state: ICardsState): ICardsState => {
			return { ...state, changeVisaVirtualStatusIsFetching: false, changeVisaVirtualStatusIsError: true };
		}
	},
	effects: dispatch => ({
		pushCards: createLoggedAsyncAction<void, void>(
			async (_: void) => {
				const res = await callCards();
				const isAuthenticatedError = isUnauthenticated(res as IMessageError);

				if (isAuthenticatedError) {
					dispatch.app.doneTokenExist(false);
					dispatch.cards.pushCardsFail();

					return;
				}

				const checkedRes = res as ICardsData;

				dispatch.cards.setActiveCard({
					index: 0,
					card: checkedRes.data[0]
				});
				dispatch.cards.pushCardsDone(checkedRes.data);
				dispatch.cards.pushCardsBalance();
			},
			async () => {
				dispatch.cards.pushCardsFail();
			}
		),

		pushCreateCard: createLoggedAsyncAction<void, void>(
			async (_: void, rootState: IStoreState) => {
				const requestParams = await formatedCreateCardRequestParams(rootState);
				const res = await callCreateCard(requestParams);
				const isError = isCreateCardErrorExist(res, rootState);
				const isAuthenticatedError = isUnauthenticated(res as IMessageError);
				console.log(res);
				if (isAuthenticatedError) {
					dispatch.app.doneTokenExist(false);
					dispatch.cards.pushCreateCardFail();

					return;
				}

				if (!isError) {
					const checkedRes = res as ICreateCardData;

					dispatch.cards.pushCreateCardDone(checkedRes);

					return;
				}

				dispatch.cards.setCreateCardFieldsError(isError);
			},
			async () => {
				dispatch.cards.pushCreateCardFail();
			}
		),

		pushVerifyCard: createLoggedAsyncAction<void, void>(
			async (_: void, rootStore: IStoreState) => {
				const requestParams = await formatedVerifyCardRequestParams(rootStore);
				const res = await callVerifyCard(requestParams);
				const isError = isFieldErrorExist(res);
				const isAuthenticatedError = isUnauthenticated(res as IMessageError);
				console.log(res);
				if (isAuthenticatedError) {
					dispatch.app.doneTokenExist(false);
					dispatch.cards.pushVerifyCardFail();

					return;
				}

				if (isError) {
					dispatch.cards.setCreateCardFieldsError(res);

					return;
				}

				const checkedRes = res as IVerifyCardData;

				dispatch.cards.pushVerifyCardDone(checkedRes.result);
				dispatch.cards.pushCards();
			},
			async () => {
				dispatch.cards.pushVerifyCardFail();
			}
		),

		pushCardsBalance: createLoggedAsyncAction<void, void>(
			async (_: void, store: IStoreState) => {
				const requestParams = formatedCardBalanceRequestParams(store);
				const res = await callCardsBalance(requestParams);
				const isAuthenticatedError = isUnauthenticated(res as IMessageError);

				if (isAuthenticatedError) {
					dispatch.app.doneTokenExist(false);
					dispatch.cards.pushCardsBalanceFail();

					return;
				}

				const checkedRes = res as ICardBalanceData;

				dispatch.cards.pushCardsBalanceDone(checkedRes.result);
			},
			async () => {
				dispatch.cards.pushCardsBalanceFail();
			}
		),

		pushCreateVisaVirtual: createLoggedAsyncAction<void, void>(
			async (_: void, rootState: IStoreState) => {
				const { cards } = rootState;
				const { openVisaCurrencyType } = cards;
				const res = await createVisaRequestType(openVisaCurrencyType, cards);
				console.log(res);
				if (typeof res === 'string') {
					dispatch.cards.pushCreateVisaVirtualFail();

					return;
				}

				const isAuthenticatedError = isUnauthenticated(res.data as IMessageError);

				if (isAuthenticatedError) {
					dispatch.app.doneTokenExist(false);
					dispatch.cards.pushCreateVisaVirtualFail();

					return;
				}

				if (res.status === 200) {
					const checkedRes = res.data as ICard;

					showMessage({
						...DONE,
						message: 'Виртуальная Visa карта успешно создана'
					});

					dispatch.cards.pushCreateVisaVirtualDone(checkedRes);
					dispatch.cards.pushCards();

					return;
				}

				showMessage({
					...ERROR,
					message: res.data.message
				});

				dispatch.cards.pushCreateVisaVirtualFail();
			},
			async () => {
				dispatch.cards.pushCreateVisaVirtualFail();
			}
		),

		pushChangeVisaStatus: createLoggedAsyncAction<IChangeVisaVirtualParams, void>(
			async (params: IChangeVisaVirtualParams, rootState: IStoreState) => {
				const { cards: cardsState } = rootState;
				const res = await callChangeVisaVirtualStatus(params);
				const isAuthenticatedError = isUnauthenticated(res as IMessageError);
				console.log(res);
				if (isAuthenticatedError) {
					dispatch.app.doneTokenExist(false);
					dispatch.cards.pushChangeVisaStatusFail();

					return;
				}

				const checkedRes = res as ICardsData;
				const data = formattedCards(cardsState.cards, params);

				dispatch.cards.pushChangeVisaStatusDone(data);
				dispatch.cards.pushCardsBalance();
			},
			async () => {
				dispatch.cards.pushChangeVisaStatusFail();
			}
		)
	})
};
