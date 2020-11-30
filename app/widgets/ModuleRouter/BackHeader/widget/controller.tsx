import React, { Component } from 'react';
import { NavigationScreenProp } from 'react-navigation';
import { BackHeaderView } from './view';

interface IOwnProps {
  navigation: NavigationScreenProp<void>;
  title: string;
}

export class BackHeaderController extends Component<IOwnProps> {
  back = () => {
    const { navigation } = this.props;

    navigation.goBack();
  };

  render() {
    const { title } = this.props;

    return (
      <BackHeaderView
        back={this.back}
        title={title}
      />
    )
  }
}
