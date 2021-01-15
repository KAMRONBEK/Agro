import React from "react";
import { connect } from "react-redux";
import { IStoreState, CardTypes } from "types";
import { ScreenCardOperationsController } from "./controller";
import { IDispatch } from "store";

const mapState = ({ cardOperations: cardOperationsState, cards: cardsState }: IStoreState) => ({
	operationType: cardOperationsState.operationType,
	transfer: cardOperationsState.transfer,
	cards: cardsState.cards.filter(card => card.card_type === CardTypes.Uzcard)
});

const mapDispatch = ({ cardOperations: cardOperationsState }: IDispatch) => ({
	resetState: cardOperationsState.resetState
});

export const ScreenCardOperationsConnect = connect(
	mapState,
	mapDispatch
)(ScreenCardOperationsController);
