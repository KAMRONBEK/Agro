import { ITransactionsState } from 'types';

export const initState: ITransactionsState = {
  transactions: [],
  transactionsIsFetching: false,
  transactionsIsError: false,
  transactionDetails: null,
  transactionDetailsIsFetching: false,
  transactionDetailsIsError: false
};
