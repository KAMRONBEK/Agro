import { connect } from "react-redux";
import { OnlineDepositsConfirmationModalController } from "./controller";
import { Dispatch } from "store";
import { IStoreState } from "types";
import { compose } from "utils";
import { ComponentType } from "react";

const mapState = ({ deposits: depositsState, cards: cardsState }: IStoreState) => ({
	confirmationModal: depositsState.confirmationModal,
	summa: depositsState.summa,
	currentDeposit: depositsState.currentDeposit,
	cards: cardsState.cards,
	balances: cardsState.cardsBalance,
	activeCard: cardsState.activeCard,
});

const mapDispatch = ({ deposits: depositsState }: Dispatch) => ({
	setConfirmationModal: depositsState.setConfirmationModal,
	pushCreateDeposit: depositsState.pushCreateDeposit,
});

type ExportComponent = ComponentType<{}>;

export const OnlineDepositsConfirmationModalConnect = compose<ExportComponent>(connect(mapState, mapDispatch))(
	OnlineDepositsConfirmationModalController
);
