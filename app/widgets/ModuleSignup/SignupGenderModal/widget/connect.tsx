import { connect } from "react-redux";
import { SignupGenderModalController, IOwnProps } from "./controller";
import { IDispatch } from "store";
import { IStoreState, FieldType } from "types";
import { compose } from "utils";
import { ComponentType } from "react";

const mapState = ({ signup }: IStoreState) => ({
  field: signup.fields.find(field => field.type === FieldType.Gender)
});

const mapDispatch = ({ signup }: IDispatch) => ({
  setField: signup.setField
});

type ExportComponent = ComponentType<IOwnProps>;

export const SignupGenderModalConnect = compose<ExportComponent>(
  connect(
    mapState,
    mapDispatch
  )
)(SignupGenderModalController);