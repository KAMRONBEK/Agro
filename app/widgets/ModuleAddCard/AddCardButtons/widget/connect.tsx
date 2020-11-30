import { IDispatch } from "store";
import { connect } from "react-redux";
import { AddCardButtonsController } from "./controller";
import { compose } from "utils";
import { withNavigation } from "react-navigation";
import { ComponentType } from "react";

const mapDispatch = ({ cards: cardsState }: IDispatch) => ({
  setAddCardModalVisible: cardsState.setAddCardModalVisible,
  setOpenVisaCurrencyType: cardsState.setOpenVisaCurrencyType
});

type ExportComponent = ComponentType<{}>;

export const AddCardButtonsConnect = compose<ExportComponent>(
  connect(
    null,
    mapDispatch
  ),
  withNavigation
)(AddCardButtonsController);