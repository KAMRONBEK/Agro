import { ComponentType } from "react";
import { withNavigation } from "react-navigation";
import { connect } from "react-redux";
import { IDispatch } from "store";
import { compose } from "utils";
import { MainPaymentTypeButtonsController } from "./controller";

const mapDispatch = ({ cards: cardsState, suppliers: suppliersState }: IDispatch) => ({
  setOpenVisaCurrencyType: cardsState.setOpenVisaCurrencyType,
  pushSuppliers: suppliersState.pushSuppliers
});

type ExportComponent = ComponentType<{}>;

export const MainPaymentTypeButtonsConnect = compose<ExportComponent>(
  connect(
    null,
    mapDispatch
  ),
  withNavigation
)(MainPaymentTypeButtonsController);