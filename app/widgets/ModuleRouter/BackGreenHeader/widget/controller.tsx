import React, { Component } from 'react';
import { NavigationScreenProp } from 'react-navigation';
import { BackGreenHeaderView } from './view';

interface IOwnProps {
  navigation: NavigationScreenProp<void>;
  title: string;
}

export class BackGreenHeaderController extends Component<IOwnProps> {
  back = () => {
    const { navigation } = this.props;

    navigation.goBack();
  };

  render() {
    const { title, navigation } = this.props;
    const navTitle = navigation.getParam('title');

    return (
      <BackGreenHeaderView
        back={this.back}
        title={title || navTitle}
      />
    )
  }
}
