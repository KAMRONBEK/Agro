import React from 'react';
import { connect } from 'react-redux';
import { IStoreState, FieldType } from 'types';
import { ServicePaymentSelectContentController } from './controller';

const mapState = ({ supplier }: IStoreState) => ({
  supplierForm: supplier?.form[supplier?.form.findIndex(item => item.step === supplier?.currentStep)],
  selectValue: supplier.fields.find(field => field.type === FieldType.SupplierDropdown).value
});

export const ServicePaymentSelectContentConnect = connect(
  mapState
)(ServicePaymentSelectContentController);
