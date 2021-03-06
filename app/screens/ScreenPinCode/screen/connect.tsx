import { connect } from "react-redux";
import { Dispatch, RootState } from "store";
import { ScreenPinController } from "./controller";
import { StackScreenProps } from "@react-navigation/stack";

const mapState = ({ app: { useFingerPrint } }: RootState) => ({ useFingerPrint });

let mapDispatch = ({ app: { pushTokenExist, setLoggedTime } }: Dispatch) => ({ pushTokenExist, setLoggedTime });

export let ScreenPinCode = connect(
	mapState,
	mapDispatch
)(ScreenPinController);

type StateProps = ReturnType<typeof mapState>;
type DisPatchProps = ReturnType<typeof mapDispatch>;

export type IProps = StateProps & DisPatchProps & StackScreenProps<any>;
