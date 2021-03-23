import React, { Component } from "react";
import { ScreenOnlineDepositsView } from "./view";

interface IConnectProps {}

export class ScreenOnlineDepositsController extends Component<IConnectProps> {
	render() {
		return <ScreenOnlineDepositsView />;
	}
}
