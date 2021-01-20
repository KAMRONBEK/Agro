import { ROUTES } from "const";
import React, { Component } from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { PaymentsATMView } from "./view";

interface IConnectProps {
	navigation: StackNavigationProp<any>;
}

export class PaymentsATMController extends Component<IConnectProps, {}> {
	onPressBankomats = () => {
		let { navigation } = this.props;
		navigation.navigate(ROUTES.SCREEN_BANKOMAT);
	};
	render() {
		return <PaymentsATMView onPress={this.onPressBankomats} />;
	}
}
