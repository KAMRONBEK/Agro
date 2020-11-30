import React, { Component } from 'react';
import { NavigationScreenProp } from 'react-navigation';
import { GreenHeaderView } from './view';

interface IOwnProps {
  navigation: NavigationScreenProp<void>;
  title: string;
}

export class GreenHeaderController extends Component<IOwnProps> {
  back = () => {
    const { navigation } = this.props;

    navigation.goBack();
  };

  render() {
    const { title } = this.props;

    return (
      <GreenHeaderView
        back={this.back}
        title={title}
      />
    )
  }
}
