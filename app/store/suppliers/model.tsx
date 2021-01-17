import { initState } from "./state";
import { ISupplier, ISuppliersState, ISuppliersData, ISuppliersParams, IMessageError } from "types";
import { createLoggedAsyncAction, isUnauthenticated } from "utils";
import { callSuppliers } from "./request";
import { createModel } from "@rematch/core";
import { RootModel } from "../models";

export const suppliers = createModel<RootModel>()({
	state: initState,
	reducers: {
		resetState: () => {
			return initState;
		},

		pushSuppliers: (state: ISuppliersState): ISuppliersState => {
			return { ...state, suppliers: [], suppliersIsFetching: true };
		},

		pushSuppliersDone: (state: ISuppliersState, payload: ISupplier[]): ISuppliersState => {
			return { ...state, suppliers: payload, suppliersIsFetching: false, suppliersIsError: false };
		},

		pushSuppliersFail: (state: ISuppliersState): ISuppliersState => {
			return { ...state, suppliersIsFetching: false, suppliersIsError: true };
		}
	},
	effects: dispatch => ({
		pushSuppliers: createLoggedAsyncAction<ISuppliersParams, void>(
			async (params: ISuppliersParams) => {
				const response = await callSuppliers(params);
				const isAuthenticatedError = isUnauthenticated(response as IMessageError);

				if (isAuthenticatedError) {
					dispatch.app.doneTokenExist(false);
					dispatch.suppliers.pushSuppliersFail();

					return;
				}

				const checkedRes = response as ISuppliersData;

				dispatch.suppliers.pushSuppliersDone(checkedRes.result);
			},
			async () => {
				dispatch.suppliers.pushSuppliersFail();
			}
		)
	})
});
