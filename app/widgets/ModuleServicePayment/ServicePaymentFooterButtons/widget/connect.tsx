import { connect } from "react-redux";
import { IStoreState } from "types";
import { ServicePaymentFooterButtonsController } from "./controller";
import { IDispatch } from "store";
import { ComponentType } from "react";
import { compose } from "utils";

const mapState = ({ supplier: supplierState, payment: paymentState }: IStoreState) => ({
  supplierForm: supplierState?.form[supplierState?.form.findIndex(item => item.step === supplierState?.currentStep)],
  payment: paymentState.payment,
  paymentIsFetching: paymentState.paymentIsFetching
});

const mapDispatch = ({ supplier: supplierState }: IDispatch) => ({
  pushSupplierPayment: supplierState.pushSupplierPayment
});

type ExportComponent = ComponentType<{}>;

export const ServicePaymentFooterButtonsConnect = compose<ExportComponent>(
  connect(
    mapState,
    mapDispatch
  ),
)(ServicePaymentFooterButtonsController);
