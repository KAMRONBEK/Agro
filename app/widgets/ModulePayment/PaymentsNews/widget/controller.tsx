import { ROUTES } from "const";
import React, { Component } from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { PaymentsNewsView } from "./view";
import { View } from "react-native";

interface IConnectProps {
	navigation: StackNavigationProp<any>;
}

export class PaymentsNewsController extends Component<IConnectProps, {}> {
	onPressNews = () => {
		let { navigation } = this.props;
		console.log("navigating to NEWS");
		navigation.navigate(ROUTES.SCREEN_NEWS);
	};

	render() {
		console.log(PaymentsNewsView);

		return (
			<View>
				<PaymentsNewsView onPress={this.onPressNews} />
			</View>
		);
	}
}
