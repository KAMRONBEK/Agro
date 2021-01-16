import { connect, ConnectedProps } from "react-redux";

import { SettingsContentController } from "./controller";
import { Dispatch, RootState } from "store";

const mapState = ({  }: RootState) => ({});

const mapDispatch = ({ app }: Dispatch) => ({
	app: app.doneTokenExist
});

export const SettingsContentConnect = connect(
	mapState,
	mapDispatch
)(SettingsContentController);

type StateProps = ReturnType<typeof mapState>;
type DisPatchProps = ReturnType<typeof mapDispatch>;

export type Props = StateProps & DisPatchProps;
