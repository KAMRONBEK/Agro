import { connect } from "react-redux";
import { MainTabsController } from "./controller";
import { IStoreState } from "types";

const mapState = ({ cards: cardsState }: IStoreState) => ({
  cards: cardsState.cards
});

export const MainTabsConnect = connect(
  mapState
)(MainTabsController);