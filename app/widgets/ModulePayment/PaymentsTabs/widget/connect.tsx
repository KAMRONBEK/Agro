import { connect } from "react-redux";
import { PaymentsTabsController } from "./controller";
import { IStoreState } from "types";

const mapState = ({ cards: cardsState }: IStoreState) => ({
	cards: cardsState.cards
});

export const PaymentsTabsConnect = connect(mapState)(PaymentsTabsController);
