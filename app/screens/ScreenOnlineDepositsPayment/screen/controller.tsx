import React, { Component } from "react";
import { IDeposits } from "types";
import { ScreenOnlineDepositsPaymentView } from "./view";

interface IConnectProps {
	currentDeposit: IDeposits;
}

export class ScreenOnlineDepositsPaymentController extends Component<IConnectProps> {
	render() {
		let { currentDeposit } = this.props;

		return <ScreenOnlineDepositsPaymentView currentDeposit={currentDeposit} />;
	}
}
