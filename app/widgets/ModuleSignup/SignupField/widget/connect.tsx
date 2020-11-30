import { connect } from "react-redux";
import { SignupFieldController, IOwnProps } from "./controller";
import { IStoreState } from "types";
import { IDispatch } from "store";
import { compose } from "utils";
import { ComponentType } from "react";

const mapState = ({ signup }: IStoreState, { type }: IOwnProps) => ({
  field: signup.fields.find(field => field.type === type)
});

const mapDispatch = ({ signup }: IDispatch) => ({
  setField: signup.setField
});

type ExportComponent = ComponentType<IOwnProps>;

export const SignupFieldConnect = compose<ExportComponent>(
  connect(
    mapState,
    mapDispatch
  )
)(SignupFieldController);