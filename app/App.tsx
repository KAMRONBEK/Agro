import React, { Component } from "react";
import FlashMessage from "react-native-flash-message";
import { Provider } from "react-redux";
import { store } from "store";
import { isTokenExist } from "utils";
import { AppLoadingView } from "widgets/ModuleAppLoading";
import { MyStatusBar } from "widgets/ModuleShared";
import TabNavigator from "./router/TabNavigator";
import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./router/stackNavigators/AuthStack";
import AsyncStorage from "@react-native-community/async-storage";
import localization from "./locales/i18n";

interface IState {
	tokenExist: Boolean;
	isLoading: Boolean;
}

export default class App extends Component<{}, IState> {
	state: IState = {
		tokenExist: null,
		isLoading: true
	};

	async componentDidMount() {
		try {
			const hasToken = await isTokenExist();
			const language = await AsyncStorage.getItem("locale");
			localization.setLanguage(language);
			this.setState({ tokenExist: hasToken });
		} finally {
			this.setState({ isLoading: false });
		}
	}

	renderNavigator = () => {
		const { tokenExist, isLoading } = this.state;
		if (isLoading) {
			return <AppLoadingView />;
		}
		switch (tokenExist) {
			case true: {
				return <TabNavigator key={localization.getLanguage()} />;
			}
			case false: {
				return <AuthStack key={localization.getLanguage()} />;
			}
		}
	};

	render() {
		return (
			<Provider store={store}>
				<MyStatusBar />
				<NavigationContainer>{this.renderNavigator()}</NavigationContainer>
				<FlashMessage position="top" />
			</Provider>
		);
	}
}
