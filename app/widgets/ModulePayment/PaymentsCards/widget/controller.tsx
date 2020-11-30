import React, { Component } from 'react';
import { PaymentsCardsView } from './view';
import { ICard } from 'types';

interface IConnectProps {
  cards: ICard[];
}

export class PaymentsCardsController extends Component<IConnectProps> {
  render() {
    const { cards } = this.props;
    console.log(cards);
    return (
      <PaymentsCardsView
        cards={cards}
      />
    )
  }
}
