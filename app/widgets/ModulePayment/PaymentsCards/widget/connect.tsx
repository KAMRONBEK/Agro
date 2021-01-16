import { connect } from "react-redux";
import { PaymentsCardsController } from "./controller";
import { RootState } from "store";

const mapState = ({ cards: cardsState }: RootState) => ({
	cards: cardsState.cards
});

export const PaymentsCardsConnect = connect(mapState)(PaymentsCardsController);
