/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import FlashMessage from 'react-native-flash-message';
import { Provider } from 'react-redux';
import { AppAuthWithNavigator, AppLoggedInWithNavigator } from 'router';
import { store } from 'store';
import reactotron from 'store/reactotron-config';
import { apiQwerty, isTokenExist } from 'utils';
import { AppLoadingView } from 'widgets/ModuleAppLoading';
import { MyStatusBar } from 'widgets/ModuleShared';

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
			val.headers = { ...val.headers, Authorization: !!hasToken ? hasToken : '' };
			return val;
		});
		this.setState({ tokenExist: !!hasToken, loading: false, token: hasToken });
	}

	renderNavigator = () => {
		const { tokenExist, loading } = this.state;
		if (loading) {
			return <AppLoadingView />;
		}
		switch (tokenExist) {
			case true: {
				return <AppLoggedInWithNavigator />;
			}
			case false: {
				return <AppAuthWithNavigator />;
			}
		}
	};

	render() {
		return (
			<Provider store={store}>
				<MyStatusBar />
				{this.renderNavigator()}
				<FlashMessage position="top" />
			</Provider>
		);
	}
}

const styles = StyleSheet.create({
	safearea: {
		flex: 1
	}
});
