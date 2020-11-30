import { ICardsState, FieldType } from 'types';

export const initState: ICardsState = {
  addCardModalVisible: false,
  cards: [],
  cardsIsFetching: false,
  cardsIsError: false,
  cardsBalance: [],
  cardsBalanceIsFetching: false,
  cardsBalanceIsError: false,
  createCardFields: [
    {
      type: FieldType.CardNumber,
      value: '',
      errors: []
    },
    {
      type: FieldType.ExpireDate,
      value: '',
      errors: []
    },
    {
      type: FieldType.VerificationCode,
      value: '',
      errors: []
    }
  ],
  createCard: null,
  createCardIsFetching: false,
  createCardIsError: false,
  verifyCard: null,
  verifyCardIsFetching: false,
  verifyCardIsError: false,
  createVisaVirtual: null,
  createVisaVirtualIsFetching: false,
  createVisaVirtualIsError: false,
  changeVisaVirtualStatusIsFetching: false,
  changeVisaVirtualStatusIsError: false,
  activeCard: null,
  error: null
};
