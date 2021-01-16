import React, { Component } from "react";
import { NavigationScreenProp } from "react-navigation";
import { AccountHeaderView } from "./view";

interface IOwnProps {
	navigation: NavigationScreenProp<void>;
	title: string;
}

export class AccountHeaderController extends Component<IOwnProps> {
	render() {
		const { title } = this.props;

		return <AccountHeaderView title={title} />;
	}
}
