import { IFieldState, FieldType, VisaCurrencyType } from "types/shared";

export interface ICardsState {
  addCardModalVisible: boolean;
  cards: ICard[];
  cardsIsFetching: boolean;
  cardsIsError: boolean;
  cardsBalance: ICardBalance[];
  cardsBalanceIsFetching: boolean;
  cardsBalanceIsError: boolean;
  createCardFields: IFieldState<FieldType, string>[];
  createCard: ICreateCardData;
  createCardIsFetching: boolean;
  createCardIsError: boolean;
  verifyCard: ICard;
  verifyCardIsFetching: boolean;
  verifyCardIsError: boolean;
  createVisaVirtual: ICard;
  createVisaVirtualIsFetching: boolean;
  createVisaVirtualIsError: boolean;
  changeVisaVirtualStatusIsFetching: boolean;
  changeVisaVirtualStatusIsError: boolean;
  activeCard: IActiveCard;
  error: string;
  openVisaCurrencyType: VisaCurrencyType;
}

export interface ICreateCardData {
  id: number;
  jsonrpc: string;
  result: ICreateCard;
}

export interface ICreateCard {
  token_id: string;
  phone_number: string;
}

export interface ICreateCardParams {
  card_number: string;
  expire_date: string;
  phone_number: string;
  new_token: string;
}

export interface ICreateCardFieldsError {
  card_number: string[];
  expire_date: string[];
  verification_code: string[];
}

export interface IVerifyCardData {
  id: number;
  jsonrpc: string;
  result: ICard;
}

export interface IVerifyCardParams {
  token_id: string;
  verification_code: string;
}

export interface ICreateCardError {
  verification_code: string[];
  card_number: string[];
  expire_date: string[];
}

export interface ICardField {
  type: FieldType;
  value: string;
}

export interface ICard {
  id: number;
  card_number: string;
  card_type: string;
  expire_date: string;
  token: string;
  svgate: string;
  visa_balance: IVisaBalance;
  visa_info: IVisaInfo;
  phone_number: string;
}

export interface ICardsData {
  data: ICard[];
}

export interface IActiveCard {
  index: number;
  card: ICard;
}

export interface IVisaBalance {
  card: string;
  expirY1: string;
  carD_STATUS: string;
  accounT_NO: string;
  acC_STATUS: string;
  lockeD_AMOUNT: string;
  avaiL_AMOUNT: string;
}

export interface IVisaInfo {
  carD_NAME: string;
  statuS1: string;
  statuS2: string;
}

export interface ICardBalance {
  id: string;
  pan: string;
  balance: number;
}

export interface ICardBalanceParams {
  svgate: string[];
}

export interface ICardBalanceData {
  id: number;
  jsonrpc: string;
  result: ICardBalance[];
}

export interface IVisaCardInfoParams {
  id: number[];
}

export interface IVisaCardInfoData {
  id: number[];
}

export interface IChangeVisaVirtualParams {
  id: number;
  type: VisaStatusType;
}

export enum VisaStatusType {
  Activate = 'activate',
  Deactivate = 'deactivate'
}

export enum VisaStatusIntType {
  activate = '0',
  deactivate = '1'
}