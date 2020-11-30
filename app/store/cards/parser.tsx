import AsyncStorage from '@react-native-community/async-storage';
import { ICreateCardParams, FieldType, IStoreState, IVerifyCardParams, ICardBalanceParams, ICreateVisaVirtualParams, IVisaCardInfoParams, IChangeVisaVirtualParams, VisaStatusType } from 'types';
import { PHONE_NUMBER } from 'const';

export async function formatedCreateCardRequestParams({ cards,  }: IStoreState): Promise<ICreateCardParams> {
  const { createCardFields } = cards;

  const phone_number = await AsyncStorage.getItem(PHONE_NUMBER);
  const expire_date = createCardFields.find(field => field.type === FieldType.ExpireDate).value;
  const card_number = createCardFields.find(field => field.type === FieldType.CardNumber).value;

  return {
    card_number,
    expire_date,
    phone_number,
    new_token: '1'
  }
}

export function formatedVerifyCardRequestParams({ cards }: IStoreState): IVerifyCardParams {
  const { createCard, createCardFields } = cards;

  const verification_code = createCardFields.find(field => field.type === FieldType.VerificationCode).value;

  return {
    token_id: createCard.result.token_id,
    verification_code
  }
}

export function formatedCardBalanceRequestParams({ cards: cardsState }: IStoreState): ICardBalanceParams {
  const { cards } = cardsState;
  
  return {
    svgate: cards.map(card => card.svgate)
  }
}