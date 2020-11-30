import { FormTypes, IMask } from 'types/store';

export interface IFieldState<T, V = any> {
  formType?: FormTypes;
  type: T;
  title?: string;
  value: V;
  required?: boolean;
  errors: string[];
  mask?: IMask; 
}

export interface IData<T> {
  id: number;
  jsonrpc: string;
  result: T;
}

export interface IError<E> {
  message: string;
  errors: E;
}

export interface IClickErrorData<E> {
  error: E;
  id: number;
  jsonrpc: string;
}

export interface IClickError {
  code: number;
  data: null;
  message: string;
}

export interface IUser {
  id: number;
  name: string;
  lastname: string;
  father_name: string;
  gender: string;
  phone: string;
}

export interface IMessageError {
  message: string;
}