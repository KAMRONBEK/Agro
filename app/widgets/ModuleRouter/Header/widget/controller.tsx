import React, { Component } from 'react';
import { NavigationScreenProp } from 'react-navigation';
import { AccountHeaderView } from './view';

interface IOwnProps {
  navigation: NavigationScreenProp<void>;
}

export class AccountHeaderController extends Component<IOwnProps> {
  render() {
    return (
      <AccountHeaderView />
    )
  }
}
