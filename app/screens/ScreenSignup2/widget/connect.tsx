import { connect } from "react-redux";
import { ScreenSignup2Controller } from "./controller";
import { IDispatch } from "store";

const mapDispatch = ({ signup2: signup2State }: IDispatch) => ({
  resetState: signup2State.resetState
});

export const ScreenSignup2Connect = connect(
  null,
  mapDispatch
)(ScreenSignup2Controller);