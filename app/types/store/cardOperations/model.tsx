import { OperationType } from "../enums";
import { IFieldState, FieldType } from "types";
import { ICardImgInfo, ICardInfo } from "./cardInfo";
import { ITransfer } from "./transfer";
import { ITransferInfo } from "./transferInfo";

export interface ICardOperationsState {
  operationType: OperationType;
  transfer: ITransfer;
  transferIsFetching: boolean;
  transferIsError: boolean;
  cardInfo: ICardInfo;
  cardInfoIsFetching: boolean;
  cardInfoIsError: boolean;
  cardImgInfo: ICardImgInfo;
  cardImgInfoIsFetching: boolean;
  cardImgInfoIsError: boolean;
  transferInfo: ITransferInfo;
  transferInfoIsFetching: boolean;
  transferInfoIsError: boolean;
  fields: IFieldState<FieldType, string>[];
}