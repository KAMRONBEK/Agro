import { IStoreState, CardTypes } from "types";
import { connect } from "react-redux";
import { CreateVisaVirtualContentView } from "./view";

const mapState = ({ cards: cardsState }: IStoreState) => ({
  cards: cardsState.cards.filter(card => card.card_type === CardTypes.Uzcard)
});

export const CreateVisaVirtualContentConnect = connect(
  mapState
)(CreateVisaVirtualContentView);