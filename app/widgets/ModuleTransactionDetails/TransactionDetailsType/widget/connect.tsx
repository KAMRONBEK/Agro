import { connect } from 'react-redux';
import { TransactionDetailsTypeController } from './controller';
import { IStoreState } from 'types';

const mapState = ({ transactions: transactionsState }: IStoreState) => ({
  details: transactionsState.transactionDetails,
  detailsIsFetching: transactionsState.transactionDetailsIsFetching
});

export const TransactionDetailsTypeConnect = connect(
  mapState
)(TransactionDetailsTypeController);