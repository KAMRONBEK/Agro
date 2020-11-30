export interface IPaymentState {
  payment: IPayment;
  paymentIsFetching: boolean;
  paymentIsError: boolean;
}

export interface IPaymentData {
  id: number;
  jsonrpc: number,
  result: IPayment
}

export interface IPayment {
  payment_id: string;
  payment_status: number;
  status_description: string;
  datetime: string;
  external_id: string;
}

export interface IPaymentParams {
  card_token: string;
  service_id: number;
  parameters: Object;
}