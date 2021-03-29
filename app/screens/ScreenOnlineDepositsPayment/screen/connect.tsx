import { compose } from "utils";
import { connect } from "react-redux";
import { ScreenOnlineDepositsPaymentController } from "./controller";
import { withErrorAuthentication } from "templates";
import { IStoreState } from "types";
import { ComponentType } from "react";
import { Dispatch } from "store";

const mapState = ({ deposits: depositState }: IStoreState) => ({
	currentDeposit: depositState.currentDeposit,
});

const mapDispatch = ({ deposits: depositsState }: Dispatch) => ({});

type ExportComponent = ComponentType<{}>;

export const ScreenOnlineDepositsPaymentConnect = compose<ExportComponent>(
	connect(mapState, mapDispatch),
	withErrorAuthentication
)(ScreenOnlineDepositsPaymentController);
