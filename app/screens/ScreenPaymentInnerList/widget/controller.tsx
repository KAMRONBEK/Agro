import React, { Component } from "react";
import { ScreenPaymentInnerListView } from "./view";
import { TemplateScreenLoading } from "templates";

interface IConnectProps {
  suppliersIsFetching: boolean;
}

export class ScreenPaymentInnerListController extends Component<IConnectProps> {
  render() {
    const { suppliersIsFetching } = this.props;

    return suppliersIsFetching ? <TemplateScreenLoading /> : <ScreenPaymentInnerListView />;
  }
}