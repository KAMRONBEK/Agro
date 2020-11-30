import { connect } from 'react-redux';
import { TransactionDetailsInfoController } from './controller';
import { IStoreState } from 'types';

const mapState = ({ transactions: transactionsState }: IStoreState) => ({
  details: transactionsState.transactionDetails,
  detailsIsFetching: transactionsState.transactionDetailsIsFetching
});

export const TransactionDetailsInfoConnect = connect(
  mapState
)(TransactionDetailsInfoController);