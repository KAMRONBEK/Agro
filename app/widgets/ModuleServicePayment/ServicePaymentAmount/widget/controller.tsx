import React, { Component } from 'react';
import { ServicePaymentAmountView } from './view';
import { ISupplierForm, IFieldState, FieldType, ISupplierField, FormTypes } from 'types';
import { clearSpaces } from 'utils';

interface IConnectProps {
  supplierForm: ISupplierForm;
  field: IFieldState<FieldType.SupplierField, string>; 
  pushFieldValue: (payload: ISupplierField) => void;
}

export class ServicePaymentAmountController extends Component<IConnectProps> {
  onChangeAmount = (value: string) => {
    const { pushFieldValue } = this.props;
    
    pushFieldValue({
      type: FieldType.SupplierFieldAmount,
      value: clearSpaces(value)
    });
  }

  render() {
    const { field, supplierForm } = this.props;
    console.log(supplierForm);
    const amountForm = supplierForm?.form[supplierForm?.form.findIndex(item => !!item.length && item[0]?.type === FormTypes.Amount_Input)]?.[0];

    return !!amountForm && (
      <ServicePaymentAmountView
        field={field}
        onChangeAmount={this.onChangeAmount}
      />
    )
  }
}
