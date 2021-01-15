import { connect } from "react-redux";
import { IDispatch } from "store";
import { withErrorAuthentication } from "templates";
import { compose } from "utils";
import { ComponentType } from "react";
import { IStoreState } from "types";
import { ScreenSettingsView } from "./view";

const mapState = ({ appState }: IStoreState) => ({
	appLang: appState.appLang
});

const mapDispatch = ({ appState }: IDispatch) => ({
	setLanguage: appState.setLanguage
});

type ExportComponent = ComponentType<{}>;

export const ScreenSettingsConnect = compose<ExportComponent>(
	connect(
		mapState,
		mapDispatch
	),
	withErrorAuthentication
)(ScreenSettingsView);
