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
		this.props.navigation.navigate(ROUTES.SCREEN_SECURITY);
	};
	onPressLanguage = () => {
		this.props.showLanguageModal();
	};

	onSelectLanguage = (language: Locale) => {
		this.props.changeAppLanguage(language);
		this.props.hideLanguageModal();
	};

	onCloseLanguageModal = () => {
		this.props.hideLanguageModal();
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
				onPressLanguage={this.onPressLanguage}
				onSelectLanguage={this.onSelectLanguage}
				onFeedbackPress={this.onFeedbackPress}
				feedbackModalVisibility={this.props.feedbackModalVisibility}
				langaugeModalVisibility={this.props.languageModalVisibility}
				hideFeedbackModal={this.props.hideFeedbackModal}
				onCloseLanguageModal={this.onCloseLanguageModal}
			/>
		);
	}
}

export default SettingsContentController;
