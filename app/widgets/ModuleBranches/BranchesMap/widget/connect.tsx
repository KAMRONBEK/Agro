import { connect } from "react-redux";

import { BranchesMapController } from "./controller";
import { Dispatch, RootState } from "store";

const mapState = ({ branches, loading }: RootState) => ({
	user: branches.data,
	isLoading: loading.effects.branches.getBranches
});

const mapDispatch = ({ branches: { getBranches } }: Dispatch) => ({
	getBranches
});

export const BranchesMapConnect = connect(
	mapState,
	mapDispatch
)(BranchesMapController);

type StateProps = ReturnType<typeof mapState>;
type DisPatchProps = ReturnType<typeof mapDispatch>;

export type Props = StateProps & DisPatchProps;
