import React, { Component } from "react";
import { CardTypes, IActiveCard, ICard, ICardBalance, IDeposits } from "types";
import { OnlineDepositsCardSelectView } from "./view";

export interface IConnectProps {
	cards: ICard[];
	activeCard: IActiveCard;
	balances: ICardBalance[];
	currentDeposit: IDeposits;
}

export class OnlineDepositsCardSelectController extends Component<IConnectProps> {
	componentDidUpdate() {}

	render() {
		const { cards, activeCard, balances, currentDeposit } = this.props;
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

		return <OnlineDepositsCardSelectView cards={depositCards} activeCardBalance={activeCardBalance} />;
	}
}
