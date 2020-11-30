import React, { ComponentType } from 'react';
import { connect } from 'react-redux';
import { IStoreState } from 'types';
import { IDispatch } from 'store';
import { PaymentInnerListController } from './controller';
import { withNavigation } from 'react-navigation';
import { compose } from 'utils';

const mapState = ({ suppliers: suppliersState }: IStoreState) => ({
  suppliers: suppliersState.suppliers
});

const mapDispatch = ({ supplier }: IDispatch) => ({
  pushSupplier: supplier.pushSupplier
});

type ExportComponent = ComponentType<{}>;

export const PaymentInnerListConnect = compose<ExportComponent>(
  withNavigation,
  connect(
    mapState,
    mapDispatch
  )
)(PaymentInnerListController);
