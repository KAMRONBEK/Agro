import React, { Component } from "react";
import { SettingsContentView } from "./view";
import { Props } from "./connect";
import { Locale } from "const";

export class SettingsContentController extends Component<Props> {
	componentDidMount() {
		this.props.getUserData();
	}

	updateUserData = values => {
		this.props.updateUserData({ ...this.props.user, ...values });
	};

	changeAppLang = (language: Locale) => {
		this.props.setLanguage(language);
	};

	render() {
		return (
			<SettingsContentView
				changeAppLang={this.changeAppLang}
				userData={this.props.user}
				updateUserData={this.updateUserData}
				isUserUpdating={this.props.isUserUpdating}
			/>
		);
	}
}

export default SettingsContentController;
