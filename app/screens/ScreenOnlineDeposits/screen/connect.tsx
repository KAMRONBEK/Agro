import { compose } from "utils";
import { connect } from "react-redux";
import { ScreenOnlineDepositsController } from "./controller";
import { withErrorAuthentication } from "templates";
import { IStoreState } from "types";
import { ComponentType } from "react";

const mapState = ({ app }: IStoreState) => ({
	isLogged: app.isLogged
});

type ExportComponent = ComponentType<{}>;

export const ScreenOnlineDepositsConnect = compose<ExportComponent>(
	connect(mapState),
	withErrorAuthentication
)(ScreenOnlineDepositsController);
