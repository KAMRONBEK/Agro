import React, { Component } from 'react';
import { BackGreenHeaderView } from './view';

interface IOwnProps {
  navigation: any;
  title: string;
}

export class BackGreenHeaderController extends Component<IOwnProps> {
  back = () => {
    const { navigation } = this.props;

    navigation.goBack();
  };

  render() {
    const { title, navigation } = this.props;
    const navTitle = navigation.params?.title;
    return (
      <BackGreenHeaderView
        back={this.back}
        title={title || navTitle}
      />
    )
  }
}
