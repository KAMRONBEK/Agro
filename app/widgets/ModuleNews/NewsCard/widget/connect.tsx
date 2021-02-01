import { connect } from "react-redux";
import { NewsCardController } from "./controller";
import { ComponentType } from "react";
import { compose } from "utils";
import { Dispatch, RootState } from "store";
import { withNavigation } from "router/withNavigation";

const mapState = ({ transactions: transactionsState }: RootState) => ({
	transactions: transactionsState.transactions,
	transactionsIsFetching: transactionsState.transactionsIsFetching
});

const mapDispatch = ({ payment: { getNewsSingle } }: Dispatch) => ({
	getNewsSingle: getNewsSingle
});

type ExportComponent = ComponentType<{}>;

export const NewsCardConnect = compose<ExportComponent>(
	connect(
		mapState,
		mapDispatch
	)
)(withNavigation(NewsCardController));
