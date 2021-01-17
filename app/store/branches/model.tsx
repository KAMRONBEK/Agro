import { initState } from "./state";
import { createModel } from "@rematch/core";
import { RootModel } from "../models";
import { apiQwerty } from "utils";
import { BRANCHES } from "api";
import { IBranch } from "types/store";

export const branches = createModel<RootModel>()({
	state: initState,
	reducers: {
		setBranches(store, payload: IBranch[]) {
			return { ...store, payload };
		}
	},
	effects: dispatch => ({
		async getBranches() {
			try {
				const { data } = await apiQwerty.get(BRANCHES);
				dispatch.branches.setBranches(data.data);
			} catch (e) {
				console.log(e);
			}
		}
	})
});
