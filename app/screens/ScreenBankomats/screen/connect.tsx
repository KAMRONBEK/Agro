import { ComponentType } from "react";
import { connect } from "react-redux";
import { Dispatch } from "store";
import { IStoreState } from "types";
import { ScreenBankomatsController } from "./controller";

const mapState = ({ payment: { regions, bankomats } }: IStoreState) => ({ regions, bankomats });

type ExportComponent = ComponentType<{}>;

let mapDispatch = ({ app: { pushTokenExist }, payment: { getRegions, getBankomats } }: Dispatch) => ({
	pushTokenExist,
	getRegions,
	getBankomats
});

export let ScreenBankomatsConnect = connect(
	mapState,
	mapDispatch
)(ScreenBankomatsController);
