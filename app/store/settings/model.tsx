import { createModel } from "@rematch/core";
import { RootModel } from "store/models";
import { ISettingsState } from "types/store/settings";
import { initState } from "./state";

export const settings = createModel<RootModel>()({
	state: initState,
	reducers: {
		showFeedbackModal(state: ISettingsState = initState): ISettingsState {
			return { ...state, feedbackModal: true };
		},
		hideFeedbackModal(state: ISettingsState = initState): ISettingsState {
			return { ...state, feedbackModal: false };
		},
		showLanguageModal(state: ISettingsState = initState): ISettingsState {
			return { ...state, languageModal: true };
		},
		hideLanguageModal(state: ISettingsState = initState): ISettingsState {
			return { ...state, languageModal: false };
		}
	},
	effects: dispatch => ({})
});
