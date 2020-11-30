import { initState } from './state';
import { 
  ITransaction, 
  ITransactionsState, 
  ITransactionsData, 
  IMessageError, 
  ITransactionDetailsParams, 
  ITransactionDetails 
} from 'types';
import { createLoggedAsyncAction, isUnauthenticated } from 'utils';
import { callTransactions, callTransactionDetails } from './request';

export const transactions = {
  state: initState,
  reducers: {
    resetState: () => {
      return initState;
    },
    
    pushTransactions: (state: ITransactionsState): ITransactionsState => {
      return { ...state, transactions: [], transactionsIsFetching: true };
    },

    pushTransactionsDone: (state: ITransactionsState, payload: ITransaction[]): ITransactionsState => {
      return { ...state, transactions: payload, transactionsIsFetching: false, transactionsIsError: false };
    },

    pushTransactionsFail: (state: ITransactionsState): ITransactionsState => {
      return { ...state, transactionsIsFetching: false, transactionsIsError: true };
    },

    pushTransactionDetails: (state: ITransactionsState): ITransactionsState => {
      return { ...state, transactionDetails: null, transactionDetailsIsFetching: true };
    },

    pushTransactionDetailsDone: (state: ITransactionsState, payload: ITransactionDetails): ITransactionsState => {
      return { ...state, transactionDetails: payload, transactionDetailsIsFetching: false, transactionDetailsIsError: false };
    },

    pushTransactionDetailsFail: (state: ITransactionsState): ITransactionsState => {
      return { ...state, transactionDetailsIsFetching: false, transactionDetailsIsError: true };
    }
  },
  effects: dispatch => ({
    pushTransactions: createLoggedAsyncAction<void, void>(
      async () => {
        const response = await callTransactions();
        const isAuthenticatedError = isUnauthenticated(response as IMessageError);

        if (isAuthenticatedError) {
          dispatch.app.doneTokenExist(false);
          dispatch.transactions.pushTransactionsFail();
          
          return;
        }

        const checkedRes = response as ITransactionsData;

        dispatch.transactions.pushTransactionsDone(checkedRes.data);
      },
      async () => {
        dispatch.transactions.pushTransactionsFail();
      }
    ),

    pushTransactionDetails: createLoggedAsyncAction<ITransactionDetailsParams, void>(
      async (params: ITransactionDetailsParams) => {
        const response = await callTransactionDetails(params);
        const isAuthenticatedError = isUnauthenticated(response as IMessageError);

        if (isAuthenticatedError) {
          dispatch.app.doneTokenExist(false);
          dispatch.transactions.pushTransactionDetailsFail();
          
          return;
        }

        const checkedRes = response as ITransactionDetails[];

        dispatch.transactions.pushTransactionDetailsDone(checkedRes[0]);
      },
      async () => {
        dispatch.transactions.pushTransactionDetailsFail();
      }
    )
  })
};
