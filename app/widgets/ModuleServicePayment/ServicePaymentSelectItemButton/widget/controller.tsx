import React, { Component } from "react";
import { ServicePaymentSelectItemButtonView } from "./view";
import { ISupplierForm, FormTypes } from "types";

interface IConnectProps {
  supplierForm: ISupplierForm;
}

export class ServicePaymentSelectItemButtonController extends Component<IConnectProps> {
  render() {
    const { supplierForm } = this.props;
    const selectForm = supplierForm?.form[supplierForm?.form
      .findIndex(item => !!item.length && item[0].type === FormTypes.Dropdown_Combobox)]?.[0];

    return (
      <ServicePaymentSelectItemButtonView 
        selectForm={selectForm}
      />
    )
  }
}