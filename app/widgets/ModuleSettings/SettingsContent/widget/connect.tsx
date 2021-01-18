import { connect } from "react-redux";

import { SettingsContentController } from "./controller";
import { Dispatch, RootState } from "store";

const mapState = ({ user, loading }: RootState) => ({
	user: user.data,
	isUserUpdating: loading.effects.user.updateUserData
});

const mapDispatch = ({ user: { getUserData, updateUserData }, app: {setLanguage} }: Dispatch) => ({
	getUserData,
	updateUserData,
	setLanguage
});

export const SettingsContentConnect = connect(
	mapState,
	mapDispatch
)(SettingsContentController);

type StateProps = ReturnType<typeof mapState>;
type DisPatchProps = ReturnType<typeof mapDispatch>;

export type Props = StateProps & DisPatchProps;
