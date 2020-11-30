import React, { Component } from "react";
import { ServicePaymentFooterButtonsView } from "./view";
import { ISupplierForm, FormTypes, IPayment } from "types";
import { NavigationScreenProp } from "react-navigation";

interface IConnectProps {
  supplierForm: ISupplierForm;
  payment: IPayment;
  paymentIsFetching: boolean;
  navigation: NavigationScreenProp<void>;
  pushSupplierPayment: () => void;
}

export class ServicePaymentFooterButtonsController extends Component<IConnectProps> {  
  cancel = () => {

  }

  next = () => {
    const { supplierForm, pushSupplierPayment } = this.props;
    // const button = this.getButton();

    pushSupplierPayment();
  }

  getButton = () => {
    const { supplierForm } = this.props;

    return supplierForm?.form[supplierForm.form.findIndex(item => item[0]?.type === FormTypes.Button_Button)][0];
  }

  render() {
    const { supplierForm, paymentIsFetching } = this.props;
    const button = this.getButton();

    return (
      <ServicePaymentFooterButtonsView 
        supplierForm={supplierForm}
        paymentIsFetching={paymentIsFetching}
        button={button}
        next={this.next}
      />
    )
  }
}