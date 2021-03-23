import React, { Component } from "react";
import { OnlineDepositsInputView } from "./view";

export interface IConnectProps {
	summa: number;
	setSumma: (summa: number) => void;
}

export class OnlineDepositsInputController extends Component<IConnectProps> {
	componentDidUpdate() {}

	render() {
		const { summa, setSumma } = this.props;

		return <OnlineDepositsInputView summa={summa} setSumma={setSumma} />;
	}
}
