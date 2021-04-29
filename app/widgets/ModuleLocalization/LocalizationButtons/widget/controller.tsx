import React, { Component } from "react";
import { LocalizationButtonsView } from "./view";
import { Locale, ROUTES } from "const";

interface IConnectProps {
	navigation: any;
	changeAppLanguage: (lang: Locale) => void;
}

export class LocalizationButtonsController extends Component<IConnectProps> {
	chooseLanguage = (locale: Locale) => () => {
		const {
			navigation: { navigate },
			changeAppLanguage,
		} = this.props;

		changeAppLanguage(locale);

		navigate(ROUTES.SCREEN_SIGNUP);
	};

	render() {
		return <LocalizationButtonsView chooseLanguage={this.chooseLanguage} />;
	}
}
