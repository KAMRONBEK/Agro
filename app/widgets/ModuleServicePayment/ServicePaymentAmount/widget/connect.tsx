import React from 'react';
import { connect } from 'react-redux';
import { IStoreState, FieldType } from 'types';
import { IDispatch } from 'store';
import { ServicePaymentAmountController } from './controller';

const mapState = ({ supplier }: IStoreState) => ({
  supplierForm: supplier?.form[supplier?.form.findIndex(item => item.step === supplier?.currentStep)],
  field: supplier.fields.find(item => item.type === FieldType.SupplierFieldAmount)
});

const mapDispatch = ({ supplier }: IDispatch) => ({
  pushFieldValue: supplier.pushFieldValue
});

export const ServicePaymentAmountConnect = connect(
  mapState,
  mapDispatch
)(ServicePaymentAmountController);
