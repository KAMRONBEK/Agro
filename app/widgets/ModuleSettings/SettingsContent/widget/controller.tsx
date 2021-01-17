import React, { Component } from "react";
import { SettingsContentView } from "./view";
import { Props } from "./connect";
import { IUser } from "types";
import { ROUTES } from "const";

export class SettingsContentController extends Component<Props> {
	componentDidMount() {
		this.props.getUserData();
	}

	updateUserData = values => {
		this.props.updateUserData({ ...this.props.user, ...values });
	};

	onFieldChange = (key: keyof IUser, value: string) => {
		this.props.setUserData({ ...this.props.user, [key]: value });
	};

	onSecurityPress = () => {
		this.props.navigation.navigate(ROUTES.SCREEN_PIN_CODE);
	};

	render() {
		return (
			<SettingsContentView
				userData={this.props.user}
				updateUserData={this.updateUserData}
				isUserUpdating={this.props.isUserUpdating}
				onFieldChange={this.onFieldChange}
				onSecurityPress={this.onSecurityPress}
			/>
		);
	}
}

export default SettingsContentController;
