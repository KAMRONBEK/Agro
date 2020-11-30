import { connect } from "react-redux";
import { Signup2FirstStepController } from "./controller";
import { IStoreState } from "types";
import { IDispatch } from "store";

const mapState = ({ signup2 }: IStoreState) => ({

});

const mapDispatch = ({ signup2 }: IDispatch) => ({

});

export const Signup2FirstStepConnect = connect(
  mapState,
  mapDispatch
)(Signup2FirstStepController);