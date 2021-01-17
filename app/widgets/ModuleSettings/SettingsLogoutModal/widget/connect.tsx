import { connect } from "react-redux";
import { SettingsLogoutModalController, IOwnProps } from "./controller";
import { Dispatch, RootState } from "store";
import { compose } from "utils";
import { ComponentType } from "react";

const mapState = ({ login: loginState }: RootState) => ({
	logout: loginState.logout,
	logoutIsFetching: loginState.logoutIsFetching
});

const mapDispatch = ({ login: loginState }: Dispatch) => ({
	pushLogout: loginState.pushLogout
});

type ExportComponent = ComponentType<IOwnProps>;

export const SettingsLogoutModalConnect = compose<ExportComponent>(
	connect(
		mapState,
		mapDispatch
	)
)(SettingsLogoutModalController);
