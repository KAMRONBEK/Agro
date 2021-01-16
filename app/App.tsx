import React, { Component } from "react";
import FlashMessage from "react-native-flash-message";
import { Provider } from "react-redux";
import { store } from "store";
import { apiQwerty, isTokenExist, setLocale } from "utils";
import { AppLoadingView } from "widgets/ModuleAppLoading";
import { MyStatusBar } from "widgets/ModuleShared";
import TabNavigator from "./router/TabNavigator";
import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./router/stackNavigators/AuthStack";
import { Locale } from "./const";

interface IState {
	tokenExist: Boolean;
	loading: boolean;
	token?: string;
}

export default class App extends Component<{}, IState> {
	state: IState = {
		tokenExist: null,
		loading: true
	};

	async componentDidMount() {
		let hasToken;
		try {
			hasToken = await isTokenExist();
		} catch (error) {}
		apiQwerty.interceptors.request.use(val => {
			val.headers = { ...val.headers, Authorization: !!hasToken ? hasToken : "" };
			return val;
		});
		this.setState({ tokenExist: !!hasToken, loading: false, token: hasToken });
	}

	async componentDidUpdate(prevProps: Readonly<{}>, prevState: Readonly<IState>, snapshot?: any) {
		if (await isTokenExist()) {
			let hasToken;
			try {
				hasToken = await isTokenExist();
			} catch (error) {}
			apiQwerty.interceptors.request.use(val => {
				val.headers = { ...val.headers, Authorization: !!hasToken ? hasToken : "" };
				return val;
			});
			this.setState({ tokenExist: !!hasToken, loading: false, token: hasToken });
		} else {
			this.setState({ tokenExist: false, loading: false, token: null });
		}
	}

	renderNavigator = () => {
		const { tokenExist, loading } = this.state;
		if (loading) {
			return <AppLoadingView />;
		}
		switch (tokenExist) {
			case true: {
				return <TabNavigator />;
			}
			case false: {
				return <AuthStack />;
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
