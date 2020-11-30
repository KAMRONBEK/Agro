import { VisaCurrencyType, ICreateVisaVirtualData, ICreateVisaVirtualParams, ICardsState, CardTypes, ICard, IChangeVisaVirtualParams, VisaStatusIntType } from 'types';
import { callCreateVisaVirtual, callCreateSumVisaVirtual, callCreateVisaDuplicate } from './request';
import { VISA_EXIST } from './types';
import { showMessage } from 'react-native-flash-message';
import { WARNING, DONE } from 'const';

export async function createVisaRequestType(
  openVisaCurrencyType: VisaCurrencyType, 
  { activeCard, cards }: ICardsState
): Promise<ICreateVisaVirtualData | string> {
  const visaCards = cards.filter(card => card.card_type === CardTypes.Visa);
  const activeCardVisa = visaCards.find(visaCard => visaCard.phone_number === activeCard.card.phone_number);
  const isOpenVisaCurrency = openVisaCurrencyType === VisaCurrencyType.Usd;

  if (!activeCardVisa) {
    return isOpenVisaCurrency ?
      await callCreateVisaVirtual({ id: activeCard.card.id }) :
      await callCreateSumVisaVirtual({ id: activeCard.card.id });
  }

  if (activeCardVisa.visa_info.statuS1 === '0') {
    showMessage({
      ...DONE,
      message: 'Виртуальная Visa карта уже существует'
    });

    return VISA_EXIST;
  }

  if (activeCardVisa.visa_info.statuS1 === '2') {
    return await callCreateVisaDuplicate({ id: activeCardVisa.id });
  }
}

export function formattedCards(cards: ICard[], params: IChangeVisaVirtualParams): ICard[] {
  console.log(params, params);
  return cards.map(card => 
    card.id === params.id ? 
      ({ 
        ...card, 
        visa_info: { 
          ...card.visa_info, 
          statuS1: VisaStatusIntType[params.type]
        } 
      }) : card
  )
}