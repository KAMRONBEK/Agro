import { connect } from "react-redux";

import { SettingsContentController } from "./controller";
import { Dispatch, RootState } from "store";
import { withNavigation } from "router/withNavigation";

const mapState = ({ user, loading, settings }: RootState) => ({
	user: user.data,
	isUserUpdating: loading.effects.user.updateUserData,
	feedbackModalVisibility: settings.feedbackModal
});

const mapDispatch = ({
	user: { getUserData, updateUserData, setUserData },
	app: { setLanguage },
	settings: { showFeedbackModal, hideFeedbackModal }
}: Dispatch) => ({
	getUserData,
	updateUserData,
	setUserData,
	setLanguage,
	showFeedbackModal,
	hideFeedbackModal
});

export const SettingsContentConnect = connect(
	mapState,
	mapDispatch
)(withNavigation(SettingsContentController));

type StateProps = ReturnType<typeof mapState>;
type DisPatchProps = ReturnType<typeof mapDispatch>;

export type Props = StateProps & DisPatchProps;
