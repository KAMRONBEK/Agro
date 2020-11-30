import { ILoginField, ILoginState, IFieldState, FieldType, IError, ILoginError } from "types";

export function setFieldValue({ type, value }: ILoginField, { fields }: ILoginState): IFieldState<FieldType>[] {
  return fields.map((field) => field.type === type ? {
    ...field,
    value,
    errors: []
  } : field)
};

export function setLoginError(error: IError<ILoginError>, state: ILoginState): ILoginState {
  const { fields } = state;
  
  return {
    ...state,
    fields: fields.map((field) => error.errors[field.type] ? {
      ...field,
      errors: !!error.errors[field.type] ? error.errors[field.type] : []
    } : field),
    loginIsFetching: false,
    loginIsError: fields.some((field) => error.errors[field.type]) ? true : false
  }
}

export function resetLoginError(state: ILoginState): ILoginState {
  const { fields } = state;
  
  return {
    ...state,
    fields: fields.map(field => ({
      ...field,
      errors: []
    }))
  }
}