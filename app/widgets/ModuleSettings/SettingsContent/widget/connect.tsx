import { connect } from "react-redux";

import { SettingsContentController } from "./controller";
import { Dispatch, RootState } from "store";
import { withNavigation } from "router/withNavigation";

const mapState = ({ user, loading }: RootState) => ({
	user: user.data,
	isUserUpdating: loading.effects.user.updateUserData
});

const mapDispatch = ({ user: { getUserData, updateUserData, setUserData } }: Dispatch) => ({
	getUserData,
	updateUserData,
	setUserData
});

export const SettingsContentConnect = connect(
	mapState,
	mapDispatch
)(withNavigation(SettingsContentController));

type StateProps = ReturnType<typeof mapState>;
type DisPatchProps = ReturnType<typeof mapDispatch>;

export type Props = StateProps & DisPatchProps;
