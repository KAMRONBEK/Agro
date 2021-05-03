import { connect } from "react-redux";
import { Dispatch, RootState } from "store";
import { ScreenSetupPinCodeController } from "./controller";
import { StackScreenProps } from "@react-navigation/stack";

const mapState = ({ app: {} }: RootState) => ({});

let mapDispatch = ({ app: { pushTokenExist, setLoggedTime } }: Dispatch) => ({ pushTokenExist, setLoggedTime });

export let ScreenSetupPinCode = connect(
	mapState,
	mapDispatch
)(ScreenSetupPinCodeController);

type StateProps = ReturnType<typeof mapState>;
type DisPatchProps = ReturnType<typeof mapDispatch>;

export type IProps = StateProps & DisPatchProps & StackScreenProps<any>;
