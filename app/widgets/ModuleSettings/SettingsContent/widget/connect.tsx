import { connect } from "react-redux";
import { StackNavigationProp } from "@react-navigation/stack";

import { SettingsContentController } from "./controller";
import { Dispatch, RootState } from "store";
import { withNavigation } from "router/withNavigation";

const mapState = ({ user, loading }: RootState) => ({
	user: user.data,
	isUserUpdating: loading.effects.user.updateUserData
});

const mapDispatch = ({ user: { getUserData, updateUserData, setUserData }, app: { changeAppLanguage } }: Dispatch) => ({
	getUserData,
	updateUserData,
	setUserData,
	changeAppLanguage
});

export const SettingsContentConnect = connect(
	mapState,
	mapDispatch
)(withNavigation(SettingsContentController));

type StateProps = ReturnType<typeof mapState>;
type DisPatchProps = ReturnType<typeof mapDispatch>;

export type Props = { navigation: StackNavigationProp<any> } & StateProps & DisPatchProps;
