import { API_VERSION } from 'api';
import { ROUTES } from 'const';
import React, { Component } from 'react';
import { NavigationScreenProp } from 'react-navigation';
import { ISuppliersParams, VisaCurrencyType } from 'types';
import { MainPaymentTypeButtonsView } from './view';

interface IConnectProps {
  navigation: NavigationScreenProp<void, void>;
  setOpenVisaCurrencyType: (payload: VisaCurrencyType) => void;
  pushSuppliers: (params: ISuppliersParams) => void;
}

export class MainPaymentTypeButtonsController extends Component<IConnectProps> {
  routeTo = (route: ROUTES) => () => {
    const { navigation, setOpenVisaCurrencyType, pushSuppliers } = this.props;

    if (route === ROUTES.SCREEN_PAYMENT_INNER_LIST) {
      pushSuppliers({
        category_id: 1,
        page_number: 1,
        api_version: API_VERSION
      });

      navigation.navigate(route, {
        title: 'Мобильные операторы'
      });

      return;
    }

    if (route === ROUTES.SCREEN_CREATE_VISA_VIRTUAL) {
      setOpenVisaCurrencyType(VisaCurrencyType.Usd);
    }

    navigation.navigate(route);
  }

  render() {
    return (
      <MainPaymentTypeButtonsView routeTo={this.routeTo} />
    )
  }
}