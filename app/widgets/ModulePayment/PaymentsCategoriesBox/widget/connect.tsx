import React, { ComponentType } from 'react';
import { connect } from 'react-redux';
import { IStoreState } from 'types';
import { IDispatch } from 'store';
import { PaymentsCategoriesBoxController, IOwnProps } from './controller';
import { withNavigation } from 'react-navigation';
import { compose } from 'utils';

const mapState = ({ categories: categoriesState }: IStoreState) => ({
  categories: categoriesState.categories
});

const mapDispatch = ({}: IDispatch) => ({

});

type ExportComponent = ComponentType<IOwnProps>;

export const PaymentsCategoriesBoxConnect = compose<ExportComponent>(
  withNavigation,
  connect(
    mapState,
    mapDispatch
  )
)(PaymentsCategoriesBoxController);
