import React, { Component } from 'react';
import { CardsView } from './view';
import { ICard, IActiveCard, ICardBalance, CardTypes, VisaStatusType, IChangeVisaVirtualParams } from 'types';
import { AddCardModal } from 'widgets/ModuleShared';
import Carousel, { CarouselStatic } from 'react-native-snap-carousel';
import { ScrollViewProps } from 'react-native';
import { ADD_CARD } from './consts';
import { NavigationScreenProp } from 'react-navigation';
import { ROUTES } from 'const';

export interface IOwnProps {
  showAddCard?: boolean;
  activeCardTitle?: string;
  cards: ICard[];
}

interface IConnectProps {
  navigation: NavigationScreenProp<void>;
  activeCard: IActiveCard;
  cardsBalance: ICardBalance[];
  cardsBalanceIsFetching: boolean;
  addCardModalVisible: boolean;
  cardType: CardTypes;
  changeVisaVirtualStatusIsFetching: boolean;
  resetCardsState: () => void;
  setActiveCard: (params: IActiveCard) => void;
  setAddCardModalVisible: (payload: boolean) => void;
  pushCardsBalance: () => void;
  pushChangeVisaStatus: (params: IChangeVisaVirtualParams) => void;
}

export class CardsController extends Component<IConnectProps & IOwnProps> {
  carouselRef = React.createRef<Carousel<any> & ScrollViewProps & CarouselStatic<any>>()

  onSnapToItem = (index: number) => {
    const { setActiveCard, cards } = this.props;

    setActiveCard({
      index,
      card: cards[index]
    });
  }

  openAddModal = () => {
    const { navigation } = this.props;

    navigation.navigate(ROUTES.SCREEN_ADD_CARD);
  }

  closeAddModal = () => {
    const { setAddCardModalVisible, resetCardsState } = this.props;
    
    resetCardsState();
    
    setAddCardModalVisible(false);
  }

  onValueChange = (value: boolean) => {
    const { activeCard, cards, pushChangeVisaStatus } = this.props;
    console.log(activeCard, 'activeCard');
    const card = cards.find(card => card.id === activeCard.card.id);
    const id = card.id;
    const type = card.visa_info.statuS1 === '0' ? VisaStatusType.Deactivate : VisaStatusType.Activate;

    pushChangeVisaStatus({
      id,
      type
    });
  }

  render() {
    const { 
      cards, 
      activeCard, 
      showAddCard, 
      activeCardTitle, 
      cardsBalance, 
      cardsBalanceIsFetching, 
      addCardModalVisible,
      changeVisaVirtualStatusIsFetching,
      pushCardsBalance 
    } = this.props;
    const formatedCards = showAddCard || !cards.length ? [...cards, ADD_CARD] : [...cards];

    return (
      <>
        <CardsView
          carouselRef={this.carouselRef}
          activeCard={activeCard}
          activeCardTitle={activeCardTitle}
          cards={formatedCards}
          cardsBalance={cardsBalance}
          cardsBalanceIsFetching={cardsBalanceIsFetching}
          changeVisaVirtualStatusIsFetching={changeVisaVirtualStatusIsFetching}
          onSnapToItem={this.onSnapToItem}
          openAddModal={this.openAddModal}
          getCardsBalance={pushCardsBalance}
          onValueChange={this.onValueChange}
        />

        <AddCardModal 
          isVisible={addCardModalVisible}
          closeModal={this.closeAddModal}
        />
      </>
    )
  }
}
