import { IUser } from "types";
import { IFieldState, FieldType } from "types/shared";

export interface ILoginState {
  login: ILogin,
  loginIsFetching: boolean;
  loginIsError: boolean;
  logout: boolean;
  logoutIsFetching: boolean;
  fields: IFieldState<FieldType>[];
  hidePassword: boolean;
}

export interface ILogin {
  user: IUser;
  api_token: string
}

export interface ILoginData {
  data: ILogin;
}

export interface ILoginParams {
  phone: string;
  password: string;
}

export interface ILoginField {
  type: FieldType,
  value: string;
}

export interface ILoginError {
  phone: string[];
  password: string[];
}

export interface ILogoutData {
  data: ILogout;
}

export interface ILogout {
  message: string;
}