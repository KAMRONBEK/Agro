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
  IStoreState,
  ICreateCardError,
  ICardsState,
  ICreateCardFieldsError,
  ICardField
} from 'types';
import { showMessage } from 'react-native-flash-message';

export function setCreateCardFieldValue({ type, value }: ICardField, { createCardFields }: ICardsState): IFieldState<FieldType>[] {
  return createCardFields.map((field) => field.type === type ? {
    ...field,
    value,
    errors: []
  } : field)
};

export function setCreateCardError(error: IError<ICreateCardError>, state: ICardsState): ICardsState {
  const { createCardFields } = state;
  
  return {
    ...state,
    createCardFields: createCardFields.map((field) => error.errors[field.type] ? {
      ...field,
      errors: !!error.errors[field.type] ? error.errors[field.type] : []
    } : field),
    createCardIsFetching: false,
    createCardIsError: createCardFields.some((field) => error.errors[field.type]) ? true : false
  }
}

export function isCreateCardErrorExist(response: IClickErrorData<IClickError> & IError<ICreateCardFieldsError>, { cards }: IStoreState) {
  const state: ICardsState = {
    ...cards,
    createCardIsFetching: false,
    createCardIsError: false
  }

  if (response?.errors) {
    return setCreateCardError(response, state);
  }
  
  if (response?.error) {
    return {
      ...state,
      error: response.error.message
    };
  }

  return false;
}