import { initState } from './state';
import { 
  ISupplierState, 
  ISupplierForm, 
  ISupplierParams, 
  ISupplierData, 
  ISupplierField, 
  IStoreState, 
  IFieldState, 
  FieldType, 
  IMessageError
} from 'types';
import { createLoggedAsyncAction, isUnauthenticated } from 'utils';
import { callSupplier } from './request';
import { validateField, validateFields } from './validation';

export const supplier = {
  state: initState,
  reducers: {
    resetState: (): ISupplierState => {
      return initState;
    },

    pushSupplier: (state: ISupplierState): ISupplierState => {
      return { ...state, supplierIsFetching: true };
    },

    pushSupplierDone: (state: ISupplierState, payload: ISupplierForm[]): ISupplierState => {
      return { ...state, form: payload, supplierIsFetching: false, supplierIsError: false };
    },

    pushSupplierFail: (state: ISupplierState): ISupplierState => {
      return { ...state, supplierIsFetching: false, supplierIsError: true };
    },

    pushFieldValue: (state: ISupplierState): ISupplierState => {
      return { ...state };
    },

    pushFieldValueDone: (state: ISupplierState, payload: IFieldState<FieldType>[]): ISupplierState => {
      return { ...state, fields: payload };
    },

    pushFieldValueFail: (state: ISupplierState): ISupplierState => {
      return { ...state };
    },

    setCurrentStep: (state: ISupplierState, step: number): ISupplierState => {
      return { ...state, currentStep: step };
    },

    setSupplierId: (state: ISupplierState, id: number): ISupplierState => {
      return { ...state, supplier_id: id };
    },

    resetFields: (state: ISupplierState): ISupplierState => {
      return { ...state, fields: initState.fields };
    }
  },
  effects: dispatch => ({
    pushSupplierPayment: createLoggedAsyncAction<void, void>(
      async (_: void, { supplier }: IStoreState) => {
        const validatedResult = validateFields(supplier);

        if (validatedResult.isError) {
          dispatch.supplier.pushFieldValueDone(validatedResult.result);
          
          return;
        }

        dispatch.payment.pushPayment(validatedResult);
      }
    ),

    pushSupplier: createLoggedAsyncAction<ISupplierParams, void>(
      async (params: ISupplierParams, { supplier }: IStoreState) => {
        const response = await callSupplier(params);
        const isAuthenticatedError = isUnauthenticated(response as IMessageError);

        if (isAuthenticatedError) {
          dispatch.app.doneTokenExist(false);
          dispatch.supplier.pushSupplierFail();
          
          return;
        }

        const checkedRes = response as ISupplierData;

        dispatch.supplier.setCurrentStep(checkedRes.result.step);
        dispatch.supplier.setSupplierId(params.service_id);
        dispatch.supplier.pushSupplierDone([checkedRes.result])
      },
      async () => {
        dispatch.supplier.pushSupplierFail();
      }
    ),

    pushFieldValue: createLoggedAsyncAction<ISupplierField, void>(
      async (params: ISupplierField, { supplier }: IStoreState) => {
        const validatedResult = validateField(params, supplier);

        dispatch.supplier.pushFieldValueDone(validatedResult);
      },
      async () => {
        dispatch.supplier.pushFieldValueFail();
      }
    )
  })
};
