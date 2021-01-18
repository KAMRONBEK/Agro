import { connect } from "react-redux";
import { ScreenAddCardController } from "./controller";
import { IStoreState } from "types";
import { withNavigation } from "../../../router/withNavigation";

const mapState = ({ cards: cardsState }: IStoreState) => ({
	verifyCard: cardsState.verifyCard
});

export const ScreenAddCardConnect = connect(mapState)(withNavigation(ScreenAddCardController));
