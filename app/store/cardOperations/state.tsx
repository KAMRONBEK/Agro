  
import { ICardOperationsState, OperationType, FieldType, MaskKeys } from 'types';
import { MASKS } from 'const';

export const initState: ICardOperationsState = {
  operationType: OperationType.Transfer,
  transfer: null,
  transferIsFetching: false,
  transferIsError: false,
  cardInfo: null,
  cardInfoIsFetching: false,
  cardInfoIsError: false,
  cardImgInfo: null,
  cardImgInfoIsFetching: false,
  cardImgInfoIsError: false,
  transferInfo: null,
  transferInfoIsFetching: false,
  transferInfoIsError: false,
  fields: [
    {
      type: FieldType.CardNumberReceiver,
      value: '8600 ',
      mask: MASKS[MaskKeys.CREDIT_CARD_KEY],
      errors: []
    },
    {
      type: FieldType.Amount,
      value: '',
      errors: []
    }
  ]
};