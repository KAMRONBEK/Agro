import { IStoreState, IClickErrorData, IError } from 'types';
import { ERRORS } from 'const';

export function createLoggedAsyncAction<T, E>(
  tryResolve: (payload: T, rootState: IStoreState) => Promise<void>,
  catchResolve?: (error: E, payload: T, rootState: IStoreState) => Promise<void>
) {
  return async (payload: T, rootState: IStoreState) => {
    try {
      await tryResolve(payload, rootState);
    } catch (error) {
      catchResolve && (await catchResolve(error, payload, rootState));
    }
  };
}

export function isFieldErrorExist(response): boolean {
  return !!response[ERRORS];
}

export function isClickApiError(response): boolean {
  return !!response;
}

export function isErrorExist(response: IClickErrorData<any> & IError<any>) {
  if (response?.errors) {
    return true;
  }

  if (response?.error) {
    return true;
  }

  return false;
}