import { connect } from "react-redux";
import { AddCardModalController, IOwnProps } from "./controller";
import { IStoreState, FieldType } from "types";
import { IDispatch } from "store";
import { compose } from "utils";
import { ComponentType } from "react";
import { withNavigation } from "react-navigation";

const mapState = ({ cards: cardsState }: IStoreState) => ({
  createCard: cardsState.createCard,
  verifyCard: cardsState.verifyCard,
  createCardIsFetching: cardsState.createCardIsFetching,
  cardNumberField: cardsState.createCardFields.find(field => field.type === FieldType.CardNumber),
  expireDateField: cardsState.createCardFields.find(field => field.type === FieldType.ExpireDate),
  error: cardsState.error
});

const mapDispatch = ({ cards: cardsState }: IDispatch) => ({
  setCreateCardField: cardsState.setCreateCardField,
  pushCreateCard: cardsState.pushCreateCard
});

type ExportComponent = ComponentType<IOwnProps>;

export const AddCardModalConnect = compose<ExportComponent>(
  connect(
    mapState,
    mapDispatch
  ),
  withNavigation
)(AddCardModalController);