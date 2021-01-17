import { connect } from "react-redux";
import { Signup2ThirdStepController } from "./controller";
import { IStoreState } from "types";
import { compose } from "utils";
import { ComponentType } from "react";

const mapState = ({ signup2: signup2State }: IStoreState) => ({
  signup: signup2State.signup
});

type ExportComponent = ComponentType<{}>;

export const Signup2ThirdStepConnect = compose<ExportComponent>(
  connect(
    mapState
  ),
)(Signup2ThirdStepController);
