import React, { Component } from 'react';
import { PaymentsCategoriesBoxView } from './view';
import { IService } from 'widgets/ModulePayment/PaymentsContent/widget/contants';
import { NavigationScreenProp } from 'react-navigation';
import { ROUTES } from 'const';

export interface IOwnProps {
  label: string;
  data: IService[];
  showAllServices?: boolean;
}

interface IConnectProps {
  navigation: NavigationScreenProp<void>;
}

export class PaymentsCategoriesBoxController extends Component<IConnectProps & IOwnProps> {
  routeTo = (routeName?: ROUTES) => () => {
    const { navigation } = this.props;

    routeName ? navigation.navigate(routeName) : navigation.navigate(ROUTES.SCREEN_PAYMENT_INNER_LIST);
  }

  render() {
    const { 
      data, 
      showAllServices, 
      label 
    } = this.props;

    return (
      <PaymentsCategoriesBoxView
        label={label}
        data={data}
        routeTo={this.routeTo}
        showAllServices={showAllServices}
      />
    )
  }
}
