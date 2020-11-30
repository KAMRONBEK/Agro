import React, { ComponentType } from 'react';
import { connect } from 'react-redux';
import { IStoreState } from 'types';
import { IDispatch } from 'store';
import { PaymentsCategoriesController, IOwnProps } from './controller';
import { withNavigation } from 'react-navigation';
import { compose } from 'utils';

const mapState = ({ categories: categoriesState }: IStoreState) => ({
  categories: categoriesState.categories
});

const mapDispatch = ({ suppliers }: IDispatch) => ({
  pushSuppliers: suppliers.pushSuppliers
});

type ExportComponent = ComponentType<IOwnProps>;

export const PaymentsCategoriesConnect = compose<ExportComponent>(
  withNavigation,
  connect(
    mapState,
    mapDispatch
  )
)(PaymentsCategoriesController);
