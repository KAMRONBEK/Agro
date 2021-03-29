import { ComponentType } from "react";
import { connect } from "react-redux";
import { Dispatch } from "store";
import { IStoreState } from "types";
import { ScreenPinController } from "./controller";

const mapState = ({ app: {} }: IStoreState) => ({});

type ExportComponent = ComponentType<{}>;

let mapDispatch = ({ app: { pushTokenExist, setLoggedTime } }: Dispatch) => ({ pushTokenExist, setLoggedTime });

export let ScreenPinCode = connect(
	mapState,
	mapDispatch
)(ScreenPinController);
