import React, { Component } from 'react';
import { ScreenCreateVisaVirtualView } from './view';
import { ICard } from 'types';
import { NavigationScreenProp } from 'react-navigation';
import { ROUTES } from 'const';

interface IConnectProps {
  navigation: NavigationScreenProp<void>;
  createVisaVirtual: ICard;
}

export class ScreenCreateVisaVirtualController extends Component<IConnectProps> {
  componentDidUpdate(prevProps: IConnectProps) {
    const { createVisaVirtual, navigation } = this.props;

    if (createVisaVirtual !== prevProps.createVisaVirtual) {
      console.log('visa created');
      navigation.navigate(ROUTES.SCREEN_MAIN);
    }
  }

  render() {
    return (
      <ScreenCreateVisaVirtualView />
    )
  }
}