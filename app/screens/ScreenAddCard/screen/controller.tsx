import React, { Component } from 'react';
import { ScreenAddCardView } from './view';
import { ICard } from 'types';
import { NavigationScreenProp } from 'react-navigation';

interface IConnectProps {
  navigation: NavigationScreenProp<void>;
  verifyCard: ICard;
}

export class ScreenAddCardController extends Component<IConnectProps> {
  componentDidUpdate(prevProps: IConnectProps) {
    const { verifyCard, navigation } = this.props;

    if (verifyCard !== prevProps.verifyCard) {
      console.log('verifyCard done!');
      navigation.goBack();
    } 
  }

  render() {
    return (
      <ScreenAddCardView />
    )
  }
}