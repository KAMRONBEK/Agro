import React, { Component } from 'react';
import { AddCardButtonsView } from './view';
import { NavigationScreenProp } from 'react-navigation';
import { ROUTES } from 'const';
import { VisaCurrencyType } from 'types';

interface IConnectProps {
  navigation: NavigationScreenProp<void>;
  setAddCardModalVisible: (payload: boolean) => void;
  setOpenVisaCurrencyType: (payload: VisaCurrencyType) => void;
}

export class AddCardButtonsController extends Component<IConnectProps> {
  openAddCardModal = () => {
    const { setAddCardModalVisible } = this.props;  

    setAddCardModalVisible(true);
  }

  createVisaVirtual = (type: VisaCurrencyType) => () => {
    const { navigation, setOpenVisaCurrencyType } = this.props;

    type === VisaCurrencyType.Usd ? 
      setOpenVisaCurrencyType(VisaCurrencyType.Usd) : 
      setOpenVisaCurrencyType(VisaCurrencyType.Sum);

    navigation.navigate(ROUTES.SCREEN_CREATE_VISA_VIRTUAL);
  }

  render() {
    return (
      <AddCardButtonsView 
        createVisaVirtual={this.createVisaVirtual} 
        openAddCardModal={this.openAddCardModal} 
      />
    )
  }
}