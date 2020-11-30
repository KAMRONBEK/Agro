import { ISuppliersState, OperationType } from 'types';

export const initState: ISuppliersState = {
  suppliers: [],
  suppliersIsFetching: false,
  suppliersIsError: false
};
