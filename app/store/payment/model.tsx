import { initState } from './state';
import { IPaymentState, IPayment, IStoreState, IPaymentData, IMessageError } from 'types';
import { createLoggedAsyncAction, isUnauthenticated, isErrorExist } from 'utils';
import { callPayment } from './request';
import { formatedPaymentRequestParams } from './parser';

export const payment = {
  state: initState,
  reducers: {
    resetState: () => {
      return initState;
    },

    pushPayment: (state: IPaymentState): IPaymentState => {
      return { ...state, paymentIsFetching: true, paymentIsError: false };
    },

    pushPaymentDone: (state: IPaymentState, payload: IPayment): IPaymentState => {
      return { ...state, payment: payload, paymentIsFetching: false, paymentIsError: false };
    },

    pushPaymentFail: (state: IPaymentState): IPaymentState => {
      return { ...state, paymentIsFetching: false, paymentIsError: true };
    }
  },
  effects: dispatch => ({
    pushPayment: createLoggedAsyncAction<void, void>(
      async (_: void, rootState: IStoreState) => {
        const requestParams = formatedPaymentRequestParams(rootState);
        console.log(requestParams);
        const response = await callPayment(requestParams);
        console.log(response);
        const errorRes = isErrorExist(response);
        const isAuthenticatedError = isUnauthenticated(response as IMessageError);

        if (isAuthenticatedError) {
          dispatch.app.doneTokenExist(false);
          dispatch.payment.pushPaymentFail();
          
          return;
        }

        if (errorRes) {
          dispatch.payment.pushPaymentFail();

          return;
        }

        const checkedRes = response as IPaymentData;

        dispatch.payment.pushPaymentDone(checkedRes.result);
        dispatch.supplier.resetFields();
        dispatch.transactions.pushTransactions();
      },
      async () => {
        dispatch.payment.pushPaymentFail();
      }
    )
  })
};
