import { FieldType } from "types";

export interface ITransferField {
  type: FieldType,
  value: string;
}

export interface ITransferCardTokenParams {
  card_token: string;
  card_number_receiver: string;
  amount: string;
}

export interface ITransferData {
  id: number;
  jsonrpc: string;
  result: ITransfer;
}

export interface ITransfer {
  payment_id: string;
  payment_status: number;
  status_description: string;
  datetime: string;
  external_id: string;
}

export interface ITransferDataError {
  id: number;
  jsonrpc: string;
  error: ITransferError;
}

export interface ITransferError {
  code: number;
  message: string;
}

export interface ITransferFieldsError {
  card_number_receiver: string[];
  amount: string[];
}