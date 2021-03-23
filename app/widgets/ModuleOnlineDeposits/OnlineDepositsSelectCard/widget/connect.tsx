import { connect } from "react-redux";
import { OnlineDepositsCardSelectController } from "./controller";
import { Dispatch } from "store";
import { IStoreState } from "types";
import { compose } from "utils";
import { ComponentType } from "react";

const mapState = ({ cards: cardsState, deposits: depositState }: IStoreState) => ({
	cards: cardsState.cards,
	activeCard: cardsState.activeCard,
	balances: cardsState.cardsBalance,
	currentDeposit: depositState.currentDeposit,
});

const mapDispatch = ({ deposits }: Dispatch) => ({});

type ExportComponent = ComponentType<{}>;

export const OnlineDepositsCardSelectConnect = compose<ExportComponent>(connect(mapState, mapDispatch))(
	OnlineDepositsCardSelectController
);
