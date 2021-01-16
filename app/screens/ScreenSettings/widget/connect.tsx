import { connect } from "react-redux";
import { Dispatch, RootState } from "store";
import { withErrorAuthentication } from "templates";
import { compose } from "utils";
import { ComponentType } from "react";
import { ScreenSettingsView } from "./view";

const mapState = ({  }: RootState) => ({});

const mapDispatch = ({  }: Dispatch) => ({});

type ExportComponent = ComponentType<{}>;

export const ScreenSettingsConnect = compose<ExportComponent>(
	connect(
		mapState,
		mapDispatch
	),
	withErrorAuthentication
)(ScreenSettingsView);
