import { connect } from "react-redux";
import { Dispatch, RootState } from "store";
import { ScreenSecurityController } from "./controller";
import { StackScreenProps } from "@react-navigation/stack";

const mapState = ({ app: { useFingerPrint } }: RootState) => ({ useFingerPrint });

let mapDispatch = ({ app: { setFingerPrint } }: Dispatch) => ({ setFingerPrint });

type StateProps = ReturnType<typeof mapState>;
type DisPatchProps = ReturnType<typeof mapDispatch>;

export type IProps = StateProps & DisPatchProps & StackScreenProps<any>;

export let ScreenSecurityConnect = connect(
	mapState,
	mapDispatch
)(ScreenSecurityController);
