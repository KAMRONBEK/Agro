import { IStoreState, FieldType, ITransferCardTokenParams, ICardOperationsState, ICardInfoParams, ITransferInfoParams, ICreateVisaVirtualParams } from "types";

export function formatedTransferCardTokenRequestParams({ cards, cardOperations }: IStoreState): ITransferCardTokenParams {
  const card_token = cards.activeCard.card.token;
  const card_number_receiver = cardOperations.fields.find(field => field.type === FieldType.CardNumberReceiver).value.split(' ').join('');
  const amount = cardOperations.fields.find(field => field.type === FieldType.Amount).value.split(' ').join('');

  return {
    card_token,
    card_number_receiver,
    amount
  }
}

export function formatedCardInfoRequestParams({ fields }: ICardOperationsState): ICardInfoParams {
  const card_number = fields.find(field => field.type === FieldType.CardNumberReceiver).value.split(' ').join('');

  return {
    card_number
  }
}


export function formatedTransferInfoRequestParams({ cardOperations, cards }: IStoreState): ITransferInfoParams {
  const card_number = cards.activeCard.card.card_number;
  const card_number_receiver = cardOperations.fields.find(field => field.type === FieldType.CardNumberReceiver).value.split(' ').join('');

  return {
    card_number,
    card_number_receiver
  }
}