import { connect } from "react-redux";
import { IStoreState } from "types";
import { CardsController, IOwnProps } from "./controller";
import { IDispatch } from "store";
import { compose } from "utils";
import { ComponentType } from "react";
import { withNavigation } from "react-navigation";

const mapState = ({ cards: cardsState }: IStoreState) => ({
  activeCard: cardsState.activeCard,
  cardsBalance: cardsState.cardsBalance,
  cardsBalanceIsFetching: cardsState.cardsBalanceIsFetching,
  addCardModalVisible: cardsState.addCardModalVisible,
  changeVisaVirtualStatusIsFetching: cardsState.changeVisaVirtualStatusIsFetching
});

const mapDispatch = ({ cards: cardsState }: IDispatch) => ({
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