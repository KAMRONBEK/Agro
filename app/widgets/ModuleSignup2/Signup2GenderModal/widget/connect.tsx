import { connect } from "react-redux";
import { Signup2GenderModalController, IOwnProps } from "./controller";
import { IDispatch } from "store";
import { IStoreState, FieldType } from "types";
import { compose } from "utils";
import { ComponentType } from "react";

const mapState = ({ signup2: signup2State }: IStoreState) => ({
  field: signup2State.fields.find(field => field.type === FieldType.Gender)
});

const mapDispatch = ({ signup2: signup2State }: IDispatch) => ({
  setField: signup2State.setField
});

type ExportComponent = ComponentType<IOwnProps>;

export const Signup2GenderModalConnect = compose<ExportComponent>(
  connect(
    mapState,
    mapDispatch
  )
)(Signup2GenderModalController);