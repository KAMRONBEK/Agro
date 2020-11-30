import { Gender } from "types";

export interface ITransactionsState {
  transactions: ITransaction[];
  transactionsIsFetching: boolean;
  transactionsIsError: boolean;
  transactionDetails: ITransactionDetails;
  transactionDetailsIsFetching: boolean;
  transactionDetailsIsError: boolean;
}

export interface ITransactionsData {
  data: ITransaction[];
}

export interface ITransaction {
  id: number;
  type: string;
  logo: string;
  transfer_id: number;
  user_id: number;
  card_token: string;
  service_id: number;
  status: number;
  payment_id: string;
  payment_status: string;
  external_id: string;
  amount: string;
  card_number: string;
  service_name: string;
  service_category_name: string;
  service_category_id: string;
  created_at: string;
  updated_at: string;
}

export enum ITransactionType {
  Transfer = 'transfer',
  Token = 'token'
}

export interface ITransactionDetails {
  id: number;
  type: ITransactionType;
  logo: string;
  transfer_id: number;
  user_id: number;
  receiver_id: number;
  card_token: string;
  service_id: number;
  status: number;
  payment_status: string;
  payment_id: string;
  external_id: string;
  amount: string;
  commission: string;
  title: string;
  value: string;
  amount_commission: string;
  card_number: string;
  card_number_receiver: string;
  service_name: string;
  service_category_name: string;
  service_category_id: string;
  datetime: string;
  created_at: string;
  updated_at: string;
  sender: ITransactionSender;
  receiver: ITransactionSender;
}

export interface ITransactionDetailsParams {
  id: number;
}

export interface ITransactionSender {
  id: number;
  name: string;
  lastname: string;
  father_name: string;
  phone: string;
  gender: Gender;
}