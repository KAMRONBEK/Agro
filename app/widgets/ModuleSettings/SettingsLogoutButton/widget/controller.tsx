import React, { Component } from 'react';
import { NavigationScreenProp } from 'react-navigation';
import { SettingsLogoutButtonView } from './view';
import { SettingsLogoutModal } from 'widgets/ModuleSettings';

interface IState {
  isModalVisible: boolean;
}

export class SettingsLogoutButtonController extends Component<{}, IState> {
  state: IState = {
    isModalVisible: false
  }

  openModal = () => {
    this.setState({ isModalVisible: true });
  }

  closeModal = () => {
    this.setState({ isModalVisible: false });
  }

  render() {
    const { isModalVisible } = this.state;

    return (
      <>
        <SettingsLogoutButtonView 
          openModal={this.openModal}
        />

        <SettingsLogoutModal 
          isVisible={isModalVisible}
          close={this.closeModal}
        />
      </>
    )
  }
}