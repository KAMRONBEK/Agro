import { 
  IError, 
  ITransferFieldsError,
  ICardOperationsState,
  ITransferField, 
  IFieldState, 
  FieldType, 
  IClickError,
  IClickErrorData,
  IData,
  ITransfer,
  IStoreState
} from "types";
import { showMessage } from "react-native-flash-message";

export function setTransferFieldError(error: IError<ITransferFieldsError>, state: ICardOperationsState): ICardOperationsState {
  const { fields } = state;
  
  return {
    ...state,
    fields: fields.map((field) => error.errors[field.type] ? {
      ...field,
      errors: !!error.errors[field.type] ? error.errors[field.type] : []
    } : field),
    transferIsFetching: false,
    transferIsError: fields.some((field) => error.errors[field.type]) ? true : false
  }
}

export function setTransferFieldValue({ type, value }: ITransferField, { fields }: ICardOperationsState): IFieldState<FieldType>[] {
  return fields.map((field) => field.type === type ? {
    ...field,
    value,
    errors: []
  } : field)
};

export function resetCardOperationsFieldsError(state: ICardOperationsState): ICardOperationsState {
  const { fields } = state;
  
  return {
    ...state,
    fields: fields.map(field => ({
      ...field,
      errors: []
    }))
  }
}

export function isTransferErrorExist(response: IData<ITransfer> & IClickErrorData<IClickError> & IError<ITransferFieldsError>, { cardOperations }: IStoreState) {
  const state: ICardOperationsState = {
    ...cardOperations,
    transferIsFetching: false,
    transferIsError: false
  }

  if (response?.errors) {
    return setTransferFieldError(response, state);
  }
  
  if (response?.error) {
    showMessage({
      type: 'warning',
      message: response.error.message,
      autoHide: false
    });

    return state;
  }

  if (!!response.result && response.result.payment_status < 0) {
    showMessage({
      type: 'warning',
      message: response.result.status_description,
      autoHide: false
    });

    return state;
  }

  return false;
}