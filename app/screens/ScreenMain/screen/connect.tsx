import { connect } from "react-redux";
import { ScreenMainController } from "./controller";
import { Dispatch, RootState } from "store";
import { withErrorAuthentication } from "templates";
import { compose } from "utils";
import { ComponentType } from "react";

const mapState = ({ app: appState }: RootState) => ({
	isLogged: appState.isLogged,
});

const mapDispatch = ({
	app: appState,
	categories: categoriesState,
	cards: cardsState,
	transactions: transactionsState,
	login: loginState
}: Dispatch) => ({
	pushCategories: categoriesState.pushCategories,
	pushCards: cardsState.pushCards,
	pushTransactions: transactionsState.pushTransactions,
	pushTokenExist: appState.pushTokenExist,
	pushLogout: loginState.pushLogout
});

type ExportComponent = ComponentType<{}>;

export const ScreenMainConnect = compose<ExportComponent>(
	connect(
		mapState,
		mapDispatch
	),
	withErrorAuthentication
)(ScreenMainController);
