import { connect } from "react-redux";
import { MainTransactionsHistoryController } from "./controller";
import { ComponentType } from "react";
import { compose } from "utils";
import { Dispatch, RootState } from "store";
import { withNavigation } from "router/withNavigation";

const mapState = ({ transactions: transactionsState }: RootState) => ({
	transactions: transactionsState.transactions,
	transactionsIsFetching: transactionsState.transactionsIsFetching
});

const mapDispatch = ({ transactions: transactionsState }: Dispatch) => ({
	pushTransactionDetails: transactionsState.pushTransactionDetails
});

type ExportComponent = ComponentType<{}>;

export const MainTransactionsHistoryConnect = compose<ExportComponent>(
	connect(
		mapState,
		mapDispatch
	)
)(withNavigation(MainTransactionsHistoryController));
