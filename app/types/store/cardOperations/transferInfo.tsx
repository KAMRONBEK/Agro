export interface ITransferInfo {
  receive_min_limit: number;
  receive_max_limit: number;
  percent: number;
}

export interface ITransferInfoParams {
  card_number: string;
  card_number_receiver: string;
}