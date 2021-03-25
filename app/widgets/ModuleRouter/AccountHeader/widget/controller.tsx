import React, { Component } from "react";
import { NavigationScreenProp } from "react-navigation";
import { AccountHeaderView } from "./view";
import { ROUTES } from "const";

interface IOwnProps {
	navigation: NavigationScreenProp<void>;
	title: string;
}

export class AccountHeaderController extends Component<IOwnProps> {
	render() {
		const { title, navigation } = this.props;

		return (
			<AccountHeaderView
				title={title}
				goToNotifications={() => navigation.navigate(ROUTES.SCREEN_NOTIFICATIONS)}
			/>
		);
	}
}
