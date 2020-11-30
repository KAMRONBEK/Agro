import { IFieldState, FieldType, IError, IUser } from "types/shared";

export interface ISignupState {
  fields: IFieldState<FieldType, string>[];
  codeField: IFieldState<FieldType>;
  hidePassword: boolean;
  code: ISignupSmsCode;
  codeIsFetching: boolean;
  codeIsError: boolean;
  confirmPhone: boolean;
  confirmIsFetching: boolean;
  confirmIsError: boolean;
  signup: boolean;
  signupIsFetching: boolean;
  signupIsError: boolean;
  signupSuccessModalVisible: boolean;
}

export interface ISignupField {
  type: FieldType;
  value: string;
}

export interface ISignupSmsCode {
  session_id: string;
}

export interface ISignupSendSmsCodeParams {
  phone: string;
}

export interface ISignupValidatedFields {
  isError: boolean;
  result: IFieldState<FieldType>[];
}

export interface ISignupConfirmPhoneParams {
  session_id: string;
  code: string;
}

export interface ISignupConfirmPhoneData {
  data: string | IError<IConfirmPhoneError>;
  status: number;
}

export interface IConfirmPhoneError {
  code: string[];
  phone: string[];
}

export interface ISignupParams {
  phone: string;
}

export interface ISignup {
  user: IUser;
  api_token: string;
}