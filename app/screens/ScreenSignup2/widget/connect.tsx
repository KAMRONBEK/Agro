import { connect } from "react-redux";
import { ScreenSignup2Controller } from "./controller";
import { Dispatch } from "store";

const mapDispatch = ({ signup2: signup2State }: Dispatch) => ({
	resetState: signup2State.resetState
});

export const ScreenSignup2Connect = connect(
	null,
	mapDispatch
)(ScreenSignup2Controller);
