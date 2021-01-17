import { connect } from "react-redux";
import { CardsController, IOwnProps } from "./controller";
import { Dispatch, RootState } from "store";
import { compose } from "utils";
import { ComponentType } from "react";
import { withNavigation } from "../../../../../router/withNavigation";

const mapState = ({ cards: cardsState }: RootState) => ({
	activeCard: cardsState.activeCard,
	cardsBalance: cardsState.cardsBalance,
	cardsBalanceIsFetching: cardsState.cardsBalanceIsFetching,
	addCardModalVisible: cardsState.addCardModalVisible,
	changeVisaVirtualStatusIsFetching: cardsState.changeVisaVirtualStatusIsFetching
});

const mapDispatch = ({ cards: cardsState }: Dispatch) => ({
	resetCardsState: cardsState.resetState,
	setActiveCard: cardsState.setActiveCard,
	setAddCardModalVisible: cardsState.setAddCardModalVisible,
	pushCardsBalance: cardsState.pushCardsBalance,
	pushChangeVisaStatus: cardsState.pushChangeVisaStatus
});

type ExportComponent = ComponentType<IOwnProps>;

export const CardsConnect = compose<ExportComponent>(
	connect(
		mapState,
		mapDispatch
	),
	withNavigation
)(CardsController);
