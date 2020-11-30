import React from 'react';
import { connect } from 'react-redux';
import { IStoreState, FieldType } from 'types';
import { IDispatch } from 'store';
import { ServicePaymentSelectButtonController } from './controller';

const mapState = ({ supplier }: IStoreState) => ({
  supplierForm: supplier?.form[supplier?.form.findIndex(item => item.step === supplier?.currentStep)],
  selectField: supplier.fields.find(field => field.type === FieldType.SupplierDropdown),
  selectItemField: supplier.fields.find(field => field.type === FieldType.SupplierDropdownItem)
});

const mapDispatch = ({ supplier }: IDispatch) => ({
  pushFieldValue: supplier.pushFieldValue
});

export const ServicePaymentSelectButtonConnect = connect(
  mapState,
  mapDispatch
)(ServicePaymentSelectButtonController);
