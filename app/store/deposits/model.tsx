import { initState } from "./state";
import { ICategoriesState, ICategory, ICategoriesData, IMessageError, IDepositsState } from "types";
import { createLoggedAsyncAction, isErrorExist, isUnauthenticated } from "utils";
import { allDeposits, createDeposit, depositInfo, userDeposits } from "./request";
import { createModel } from "@rematch/core";
import { RootModel } from "../models";
import reactotron from "store/ReactatronConfig";

export const deposits = createModel<RootModel>()({
	state: initState,
	reducers: {
		resetState: () => {
			return initState;
		},
		pushCreateDeposit: (state: IDepositsState): IDepositsState => {
			return { ...state, createDepositIsFetching: true, createDepositIsError: false };
		},

		pushCreateDepositDone: (state: IDepositsState, payload): IDepositsState => {
			return { ...state, createDeposit: payload, createDepositIsFetching: false, createDepositIsError: false };
		},

		pushCreateDepositFail: (state: IDepositsState): IDepositsState => {
			return { ...state, createDepositIsFetching: false, createDepositIsError: true };
		},
		pushDeposits: (state: IDepositsState, depositsList): IDepositsState => {
			return { ...state, depositsList: depositsList };
		},
		pushUserDeposits: (state: IDepositsState, activeDeposits): IDepositsState => {
			return { ...state, activeDeposits: activeDeposits };
		},
		setSumma: (state: IDepositsState, summa): IDepositsState => {
			return { ...state, summa: summa };
		},
		setDepositListType: (state: IDepositsState, type): IDepositsState => {
			return { ...state, depositListType: type };
		},
		pushCurrentDeposit: (state: IDepositsState, deposit): IDepositsState => {
			return { ...state, currentDeposit: deposit };
		},
		setConfirmationModal: (state: IDepositsState, visibility): IDepositsState => {
			return { ...state, confirmationModal: visibility };
		},
	},

	effects: (dispatch) => ({
		getAllDeposits: createLoggedAsyncAction<void, void>(async () => {
			const response = await allDeposits();
			let deposits = [];

			Object.keys(response).map((key, index) => {
				deposits.push({ name: key, deposits: response[key] });
			});
			dispatch.deposits.pushDeposits(deposits);
		}),

		getUserDeposits: createLoggedAsyncAction<void, void>(async () => {
			const response = await userDeposits();

			dispatch.deposits.pushUserDeposits(response);
		}),
		setCurrentDeposit: createLoggedAsyncAction<void, void>(async (code) => {
			const response = await depositInfo(code);
			dispatch.deposits.pushCurrentDeposit(response);
		}),
		pushCreateDeposit: async (payload) => {
			try {
				const response = await createDeposit(payload);
				dispatch.deposits.pushCreateDeposit(response);
				reactotron.log({ response });
				const errorRes = isErrorExist(response);

				if (errorRes) {
					dispatch.deposits.pushCreateDepositFail();
					reactotron.log("Create Deposit", { errorRes });
					return;
				}

				dispatch.deposits.pushCreateDepositDone(response);
			} catch (error) {
				reactotron.log("Create Deposit", { error });
			}
		},
		// async () => {
		// 	dispatch.deposits.pushCreateDepositFail();
		// }
	}),
});
