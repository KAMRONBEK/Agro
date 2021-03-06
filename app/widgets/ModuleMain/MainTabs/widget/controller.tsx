import React, { Component } from 'react';
import { MainTabsView } from './view';
import { NavigationState, Route } from 'react-native-tab-view';
import { ICard, CardTypes } from 'types';
import {strings} from "../../../../translations/i18n";

interface IConnectProps {
  cards: ICard[];
}

interface IState {
  tabsState: NavigationState<Route>;
}

export class MainTabsController extends Component<IConnectProps, IState> {
  state: IState = {
    tabsState: {
      index: 0,
      routes: [
        { key: "first", title: strings("somType") },
        { key: "second", title: strings("currencyType") }
        // { key: 'third', title: 'Депозитные' }
      ]
    }
  }

  tabOnChange = (index: number) => {
    const { tabsState } = this.state;

    this.setState({ tabsState: { ...tabsState, index } });
  }

  render() {
    const { tabsState } = this.state;
    const { cards } = this.props;
    const sumCards = cards.filter(card => card.card_type === CardTypes.Uzcard);
    const visaCards = cards
      .filter(card => card.card_type === CardTypes.Visa)
      .map(card => ({
        ...card,
        visa_balance: {
          ...card.visa_balance,
          avaiL_AMOUNT: !!card?.visa_balance ? card?.visa_balance.avaiL_AMOUNT.slice(0, card?.visa_balance.avaiL_AMOUNT.length - 2) : null
        }
      }));

    return (
      <MainTabsView
        tabsState={tabsState}
        sumCards={sumCards}
        visaCards={visaCards}
        tabOnChange={this.tabOnChange}
      />
    )
  }
}
