import React, { Component } from "react";
import { OnlineDepositsTabsView } from "./view";
import { NavigationState, Route } from "react-native-tab-view";
import { ROUTES } from "./constants";
import { ICard, CardTypes, DepositListType } from "types";
import reactotron from "store/ReactatronConfig";
import { NavigationScreenProp } from "react-navigation";
import { ROUTES as ROUTE } from "const";
import { strings } from "../../../../translations/i18n";

interface IConnectProps {
	currentDeposits: [];
	userDeposits: [];
	getCurrentDeposits: () => void;
	getUserDeposits: () => void;
	navigation: NavigationScreenProp<void>;
	setDepositListType: (type: DepositListType) => void;
	depositListType: DepositListType;
	setCurrentDeposit: (code: string) => void;
}

interface IState {
	tabsState: NavigationState<Route>;
}

export class OnlineDepositsTabsController extends Component<IConnectProps, IState> {
	state: IState = {
		tabsState: {
			index: 0,
			routes: [
				{ key: "first", title: strings("currentDeposits") },
				{ key: "second", title: strings("myDeposits") }
			]
		}
	};

	tabOnChange = (type: DepositListType) => {
		const { tabsState } = this.state;
		let { setDepositListType } = this.props;
		setDepositListType(type);

		switch (type) {
			case DepositListType.UserDeposits:
				reactotron.log({ type });
				this.setState({ tabsState: { ...tabsState, index: 1 } });
				break;
			case DepositListType.AllDeposits:
				reactotron.log({ type });
				this.setState({ tabsState: { ...tabsState, index: 0 } });
				break;
			default:
				break;
		}
	};

	componentDidMount() {
		let { getCurrentDeposits, getUserDeposits } = this.props;
		getCurrentDeposits();
		getUserDeposits();
	}

	onNewDepositPress = code => {
		let { navigation, setCurrentDeposit } = this.props;
		setCurrentDeposit(code);
		navigation.navigate(ROUTE.SCREEN_ONLINE_DEPOSITS_PAYMENT);
	};

	render() {
		const { tabsState } = this.state;
		const { currentDeposits, userDeposits, setDepositListType, depositListType } = this.props;

		return (
			<OnlineDepositsTabsView
				tabsState={tabsState}
				userDeposits={userDeposits}
				currentDeposits={currentDeposits}
				tabOnChange={this.tabOnChange}
				onNewDepositPress={this.onNewDepositPress}
				depositListType={depositListType}
			/>
		);
	}
}
