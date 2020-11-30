import React, { Component } from 'react';
import { PaymentsCategoriesView } from './view';
import { NavigationScreenProp } from 'react-navigation';
import { ROUTES } from 'const';
import { ICategory, ISuppliersParams } from 'types';
import { API_VERSION } from 'api';

export interface IOwnProps {
  label: string;
  showAllServices?: boolean;
}

interface IConnectProps {
  navigation: NavigationScreenProp<void>;
  categories: ICategory[];
  pushSuppliers: (params: ISuppliersParams) => void;
}

export class PaymentsCategoriesController extends Component<IConnectProps & IOwnProps> {
  routeTo = (id: number, name: string) => () => {
    const { navigation, pushSuppliers } = this.props;
    
    pushSuppliers({
      category_id: id,
      page_number: 1,
      api_version: API_VERSION
    });
    
    navigation.navigate(
      ROUTES.SCREEN_PAYMENT_INNER_LIST, 
      {
        title: name
      }
    );
  }

  render() {
    const { 
      showAllServices, 
      label, 
      categories 
    } = this.props;

    return (
      <PaymentsCategoriesView
        label={label}
        routeTo={this.routeTo}
        showAllServices={showAllServices}
        categories={categories}
      />
    )
  }
}
