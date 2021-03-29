import { connect } from "react-redux";
import { OnlineDepositsInputController } from "./controller";
import { Dispatch } from "store";
import { IStoreState } from "types";
import { compose } from "utils";
import { ComponentType } from "react";

const mapState = ({ deposits }: IStoreState) => ({
	summa: deposits.summa
});

const mapDispatch = ({ deposits }: Dispatch) => ({
	setSumma: deposits.setSumma
});

type ExportComponent = ComponentType<{}>;

export const OnlineDepositsInputConnect = compose<ExportComponent>(
	connect(
		mapState,
		mapDispatch
	)
)(OnlineDepositsInputController);
