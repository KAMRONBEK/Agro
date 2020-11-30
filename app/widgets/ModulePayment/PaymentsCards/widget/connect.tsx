import { connect } from "react-redux";
import { PaymentsCardsController } from "./controller";
import { IStoreState } from "types";

const mapState = ({ cards: cardsState }: IStoreState) => ({
  cards: cardsState.cards
});

export const PaymentsCardsConnect = connect(
  mapState
)(PaymentsCardsController);