import { connect } from "react-redux";
import { MainTransactionsHistoryController } from "./controller";
import { IStoreState } from "types";
import { ComponentType } from "react";
import { compose } from "utils";
import { IDispatch } from "store";

const mapState = ({ transactions: transactionsState }: IStoreState) => ({
  transactions: transactionsState.transactions,
  transactionsIsFetching: transactionsState.transactionsIsFetching
});

const mapDispatch = ({ transactions: transactionsState }: IDispatch) => ({
  pushTransactionDetails: transactionsState.pushTransactionDetails
});

type ExportComponent = ComponentType<{}>;

export const MainTransactionsHistoryConnect = compose<ExportComponent>(
  connect(
    mapState,
    mapDispatch
  ),
)(MainTransactionsHistoryController);
