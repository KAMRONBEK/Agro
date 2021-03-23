import { StackNavigationProp } from "@react-navigation/stack";
import { ROUTES } from "const";
import React, { Component } from "react";
import { CardTypes, IActiveCard, ICard, ICardBalance, IDeposits } from "types";
import { OnlineDepositsPayButtonView } from "./view";

export interface IConnectProps {
	cards: ICard[];
	activeCard: IActiveCard;
	balances: ICardBalance[];
	navigation: StackNavigationProp<{}>;
	currentDeposit: IDeposits;
	setConfirmationModal: (visibility: boolean) => void;
	summa: string;
	pushCreateDepost: (credentials: any) => void;
}

export class OnlineDepositsPayButtonController extends Component<IConnectProps> {
	state = {
		buttonActive: true,
	};

	effect() {
		let { cards, balances, activeCard, currentDeposit } = this.props;
		const depositCards = cards.filter((card) => {
			if (currentDeposit?.kod_b == "UZS") return card.card_type === CardTypes.Uzcard;
			else return card.card_type === CardTypes.Visa;
		});
		let activeCardBalance;

		balances.filter((item, index) => {
			if (index == activeCard.index) {
				console.log({ item });
				if (depositCards.length > 0) activeCardBalance = item;
				else {
					return null;
				}
			} else return null;
		});

		if (Math.round(activeCardBalance?.balance / 100) >= parseInt(currentDeposit?.min_sum)) {
			//balance of active card and minimum deposit summ
			this.setState({ buttonActive: true });
		} else {
			this.setState({ buttonActive: false });
		}
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevProps !== this.props) {
			this.effect();
		}
	}
	onPress = () => {
		let { navigation, setConfirmationModal } = this.props;
		setConfirmationModal(true);
		// navigation.navigate(ROUTES.SCREEN_MAIN);
	};

	render() {
		return <OnlineDepositsPayButtonView onPress={this.onPress} active={this.state.buttonActive} />;
	}
}
