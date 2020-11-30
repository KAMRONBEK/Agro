import { connect } from "react-redux";
import { VerifyCardModalController, IOwnProps } from "./controller";
import { IStoreState, FieldType } from "types";
import { IDispatch } from "store";
import { compose } from "utils";
import { ComponentType } from "react";

const mapState = ({ cards: cardsState }: IStoreState) => ({
  createCard: cardsState.createCard,
  createCardIsFetching: cardsState.createCardIsFetching,
  codeField: cardsState.createCardFields.find(field => field.type === FieldType.VerificationCode),
});

const mapDispatch = ({ cards: cardsState }: IDispatch) => ({
  setCreateCardField: cardsState.setCreateCardField,
  pushVerifyCard: cardsState.pushVerifyCard
});

type ExportComponent = ComponentType<IOwnProps>;

export const VerifyCardModalConnect = compose<ExportComponent>(
  connect(
    mapState,
    mapDispatch
  )
)(VerifyCardModalController);