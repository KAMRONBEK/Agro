import { connect } from "react-redux";
import { OnlineDepositsTabsController } from "./controller";
import { IStoreState } from "types";
import { Dispatch } from "store";
import { ComponentType } from "react";
import { compose } from "utils";
import { withNavigation } from "router/withNavigation";

const mapState = ({ deposits: depositsState }: IStoreState) => ({
	userDeposits: depositsState.activeDeposits,
	currentDeposits: depositsState.depositsList,
	depositListType: depositsState.depositListType,
});

const mapDispatch = ({ deposits: depositsState }: Dispatch) => ({
	getCurrentDeposits: depositsState.getAllDeposits,
	getUserDeposits: depositsState.getUserDeposits,
	setDepositListType: depositsState.setDepositListType,
	setCurrentDeposit: depositsState.setCurrentDeposit,
});

type ExportComponent = ComponentType<{}>;

export const OnlineDepositsTabsConnect = compose<ExportComponent>(
	connect(mapState, mapDispatch),
	withNavigation
)(OnlineDepositsTabsController);
