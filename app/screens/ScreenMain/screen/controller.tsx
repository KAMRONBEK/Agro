import React, { Component } from "react";
import { ScreenMainView } from "./view";

interface IConnectProps {
	isLogged: boolean;
	pushCategories: () => void;
	pushCards: () => void;
	pushTransactions: () => void;
	pushTokenExist: () => void;
}

export class ScreenMainController extends Component<IConnectProps> {
	componentDidMount() {
		const { pushCategories, pushTransactions, isLogged, pushCards } = this.props;
		// pushTokenExist();
		pushCategories();
		pushTransactions();
		if (isLogged) {
			pushCards();
		}
	}

	render() {
		return <ScreenMainView />;
	}
}
