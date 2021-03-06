import { connect } from "react-redux";
import { StackScreenProps } from "@react-navigation/stack";

import { SettingsContentController } from "./controller";
import { Dispatch, RootState } from "store";
import { withNavigation } from "router/withNavigation";

const mapState = ({ user, loading, settings }: RootState) => ({
	user: user.data,
	isUserUpdating: loading.effects.user.updateUserData,
	feedbackModalVisibility: settings.feedbackModal,
	languageModalVisibility: settings.languageModal
});

const mapDispatch = ({
	user: { getUserData, updateUserData, setUserData },
	app: { changeAppLanguage },
	settings: { showFeedbackModal, hideFeedbackModal, hideLanguageModal, showLanguageModal }
}: Dispatch) => ({
	getUserData,
	updateUserData,
	setUserData,
	showFeedbackModal,
	hideFeedbackModal,
	changeAppLanguage,
	showLanguageModal,
	hideLanguageModal
});

export const SettingsContentConnect = connect(
	mapState,
	mapDispatch
)(withNavigation(SettingsContentController));

type StateProps = ReturnType<typeof mapState>;
type DisPatchProps = ReturnType<typeof mapDispatch>;

export type Props = { navigation: StackScreenProps<any> } & StateProps & DisPatchProps;
