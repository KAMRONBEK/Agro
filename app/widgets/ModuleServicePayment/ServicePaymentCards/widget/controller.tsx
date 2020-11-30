import React, { Component } from 'react';
import { ServicePaymentCardsView } from './view';

interface IState {
  carouselActive: number
}

export class ServicePaymentCardsController extends Component<{}, IState> {
  state: IState = {
    carouselActive: 0
  }

  onSnapToItem = (index: number) => {
    this.setState({ carouselActive: index });
  }

  render() {
    const { carouselActive } = this.state;

    return (
      <ServicePaymentCardsView
        carouselActive={carouselActive}
        onSnapToItem={this.onSnapToItem}
      />
    )
  }
}
