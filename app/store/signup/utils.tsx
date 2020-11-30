import { ISignupField, IFieldState, FieldType, ISignupState, IConfirmPhoneError, IError } from "types";

export function setFieldValue({ type, value }: ISignupField, { fields }: ISignupState): IFieldState<FieldType>[] {
  return fields.map((field) => field.type === type ? {
    ...field,
    value,
    errors: []
  } : field)
};

export function setConfirmError(error: IError<IConfirmPhoneError>, state: ISignupState): ISignupState {
  const { fields } = state;
  
  return {
    ...state,
    fields: fields.map((field) => error.errors[field.type] ? {
      ...field,
      errors: error.errors[field.type]
    } : field),
    codeField: {
      ...state.codeField,
      errors: !!error.errors.code ? error.errors.code : []
    },
    confirmIsFetching: false,
    confirmIsError: fields.some((field) => error.errors[field.type]) ? true : false
  }
}