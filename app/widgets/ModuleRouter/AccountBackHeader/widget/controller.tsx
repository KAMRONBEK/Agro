import React, { Component } from 'react';
import { NavigationScreenProp } from 'react-navigation';
import { AccountBackHeaderView } from './view';

interface IOwnProps {
  navigation: NavigationScreenProp<void>;
  title: string;
}

export class AccountBackHeaderController extends Component<IOwnProps> {
  back = () => {
    const { navigation } = this.props;

    navigation.goBack();
  };

  render() {
    const { title } = this.props;

    return (
      <AccountBackHeaderView
        title={title}
        back={this.back}
      />
    )
  }
}
