import React from 'react';
import { connect } from 'react-redux';
import { IStoreState } from 'types';
import { IDispatch } from 'store';
import { ServicePaymentSelectItemButtonController } from './controller';

const mapState = ({ supplier }: IStoreState) => ({
  supplierForm: supplier?.form[supplier?.form.findIndex(item => item.step === supplier?.currentStep)]
});

const mapDispatch = ({ supplier }: IDispatch) => ({
  
});

export const ServicePaymentSelectItemButtonConnect = connect(
  mapState,
  mapDispatch
)(ServicePaymentSelectItemButtonController);
