import React, { Component } from "react";
import { SettingsContentView } from "./view";
import { Props } from "./connect";

export class SettingsContentController extends Component<Props> {
	componentDidMount() {
		this.props.getUserData();
	}

	updateUserData = values => {
		this.props.updateUserData({ ...this.props.user, ...values });
	};

	render() {
		return <SettingsContentView
			userData={this.props.user}
			updateUserData={this.updateUserData}
			isUserUpdating={this.props.isUserUpdating}
		/>;
	}
}

export default SettingsContentController;
