import React, { Component } from 'react';
import { ServicePaymentSelectContentView } from './view';
import { ISupplierForm, FormTypes } from 'types';

interface IConnectProps {
  supplierForm: ISupplierForm;
  selectValue: number;
}

export class ServicePaymentSelectContentController extends Component<IConnectProps> {
  render() {
    const { supplierForm, selectValue } = this.props;
    const selectForm = supplierForm?.form[supplierForm?.form
      .findIndex(item => !!item.length && item[0]?.type === FormTypes.Dropdown_Combobox && !item[0].options.hidden)]?.[0];

    return !!selectForm && (
      <ServicePaymentSelectContentView 
        selectValue={selectValue}
      />
    )
  }
}