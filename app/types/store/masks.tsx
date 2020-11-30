export enum MaskKeys {
  CREDIT_CARD_KEY = 'credit_card',
  PASSWORD = 'password'
}

export interface IMask {
  mask: string;
  error: string;
}