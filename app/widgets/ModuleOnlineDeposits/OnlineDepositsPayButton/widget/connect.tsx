import { connect } from "react-redux";
import { OnlineDepositsPayButtonController } from "./controller";
import { Dispatch } from "store";
import { IStoreState } from "types";
import { compose } from "utils";
import { ComponentType } from "react";
import { withNavigation } from "router/withNavigation";

const mapState = ({ cards: cardsState, deposits: depositsState }: IStoreState) => ({
	currentDeposit: depositsState.currentDeposit,
	cards: cardsState.cards,
	balances: cardsState.cardsBalance,
	activeCard: cardsState.activeCard,
	summa: depositsState.summa,
});

const mapDispatch = ({ deposits: depositsState }: Dispatch) => ({
	setConfirmationModal: depositsState.setConfirmationModal,
	pushCreateDeposit: depositsState.pushCreateDeposit,
});

type ExportComponent = ComponentType<{}>;

export const OnlineDepositsPayButtonConnect = compose<ExportComponent>(
	connect(mapState, mapDispatch),
	withNavigation
)(OnlineDepositsPayButtonController);
