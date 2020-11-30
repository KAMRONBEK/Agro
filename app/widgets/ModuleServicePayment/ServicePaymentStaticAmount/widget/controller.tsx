import React, { Component } from 'react';
import { ServicePaymentStaticAmountView } from './view';
import { ISupplierForm, IFieldState, FieldType, ISupplierField, FormTypes } from 'types';

interface IConnectProps {
  supplierForm: ISupplierForm;
  field: IFieldState<FieldType.SupplierFieldStaticAmount, string>; 
  pushFieldValue: (payload: ISupplierField) => void;
}

export class ServicePaymentStaticAmountController extends Component<IConnectProps> {
  render() {
    const { field, supplierForm } = this.props;
    const amountForm = supplierForm?.form[supplierForm?.form.findIndex(item => !!item.length && item[0]?.type === FormTypes.Amount_Static)]?.[0];

    return !!amountForm && (
      <ServicePaymentStaticAmountView
        field={field}
      />
    )
  }
}
