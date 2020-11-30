import React, { Component } from "react";
import { ScreenServicePaymentView } from "./view";
import { ICard } from "types";

interface IConnectProps {
  supplierIsFetching: boolean;
  cards: ICard[]
  resetSupplierState: () => void;
}

export class ScreenServicePaymentController extends Component<IConnectProps> {
  componentWillUnmount() {
    const { resetSupplierState } = this.props;

    resetSupplierState();
  }

  render() {
    const { supplierIsFetching, cards } = this.props;
    
    return (
      <ScreenServicePaymentView cards={cards} supplierIsFetching={supplierIsFetching} />
    )
  }
}