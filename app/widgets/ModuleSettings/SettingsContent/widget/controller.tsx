import React, { Component } from "react";
import { SettingsContentView } from "./view";
import { Props } from "./connect";
import { IUser } from "types";
import { ROUTES } from "const";
import { Locale } from "const";
import { validateEmail } from "../../../../utils";
import { Alert } from "react-native";

export class SettingsContentController extends Component<Props> {
	componentDidMount() {
		this.props.getUserData();
	}

	updateUserData = values => {
		if (!validateEmail(values.email)) {
			return Alert.alert("Ошибка", "Вы ввели не корректный email");
		}
		this.props.updateUserData({ ...this.props.user, ...values });
	};

	onFieldChange = (key: keyof IUser, value: string) => {
		this.props.setUserData({ ...this.props.user, [key]: value });
	};

	onSecurityPress = () => {
		this.props.navigation.navigate(ROUTES.SCREEN_AUTHORIZATION, {
			screen: ROUTES.SCREEN_PIN_CODE,
			params: { isSetup: true }
		});
	};
	changeAppLang = (language: Locale) => {
		this.props.changeAppLanguage(language);
	};
	onFeedbackPress = () => {
		this.props.showFeedbackModal();
	};

	render() {
		return (
			<SettingsContentView
				userData={this.props.user}
				updateUserData={this.updateUserData}
				isUserUpdating={this.props.isUserUpdating}
				onFieldChange={this.onFieldChange}
				onSecurityPress={this.onSecurityPress}
				changeAppLang={this.changeAppLang}
				onFeedbackPress={this.onFeedbackPress}
				feedbackModalVisibility={this.props.feedbackModalVisibility}
				hideFeedbackModal={this.props.hideFeedbackModal}
			/>
		);
	}
}

export default SettingsContentController;
