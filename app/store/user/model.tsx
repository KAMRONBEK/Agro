import { initState } from "./state";
import { createModel } from "@rematch/core";
import { RootModel } from "../models";
import { getUserData, updateUserData } from "./request";
import { IUser } from "types";

export const user = createModel<RootModel>()({
	state: initState,
	reducers: {
		resetState() {
			return initState;
		},
		setUserData(state, payload: IUser) {
			return { ...state, data: payload };
		}
	},
	effects: dispatch => ({
		async getUserData() {
			try {
				const data = await getUserData();
				dispatch.user.setUserData(data);
			} catch (e) {
				console.log(e);
			}
		},
		async updateUserData(params) {
			try {
				const data = await updateUserData(params);
				dispatch.user.setUserData(data);
			} catch (e) {
				console.log(e);
			}
		}
	})
});
