import React, { Component } from 'react';
import { LoginTypeButtonsView } from './view';
import { Locale, ROUTES } from 'const';
import { NavigationScreenProp } from 'react-navigation';
import { setLocale } from 'utils';

interface IConnectProps {
  navigation: NavigationScreenProp<void>;
}

export class LoginTypeButtonsController extends Component<IConnectProps> {
  routeTo = (routeName: ROUTES) => () => {
    const { navigation: { navigate } } = this.props;

    navigate(routeName);
  }

  render() {
    return (
      <LoginTypeButtonsView
        routeTo={this.routeTo}
      />
    )
  }
}
