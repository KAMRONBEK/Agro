import React, { Component } from "react";
import reactotron from "store/ReactatronConfig";
import { CardTypes, IActiveCard, ICard, ICardsState, ICreateDepositData, IDeposits } from "types";
import { OnlineDepositsConfirmationModalView } from "./view";

export interface IConnectProps {
	setConfirmationModal: (visibility: boolean) => void;
	confirmationModal: boolean;
	summa: string;
	currentDeposit?: IDeposits;
	cards?: ICard[];
	balances?: any;
	activeCard?: IActiveCard;
	pushCreateDeposit?: (credentials: ICreateDepositData) => void;
}

export class OnlineDepositsConfirmationModalController extends Component<IConnectProps> {
	componentDidUpdate() {}

	onRefuse = () => {
		let { setConfirmationModal } = this.props;
		setConfirmationModal(false);
	};

	onAccept = () => {
		let {
			setConfirmationModal,
			pushCreateDeposit,
			summa,
			currentDeposit,
			cards,
			balances,
			activeCard,
		} = this.props;
		setConfirmationModal(false);
		let credentials = {
			card_id: 0,
			deposit_id: "",
			summa: 0,
			mobileid: "",
			priv_cond: 0,
		};
		const depositCards = cards.filter((card) => {
			if (currentDeposit?.kod_b == "UZS") return card.card_type === CardTypes.Uzcard;
			else return card.card_type === CardTypes.Visa;
		});
		// let activeCardBalance;

		// balances.filter((item, index) => {
		// 	if (index == activeCard.index) {
		// 		console.log({ item });
		// 		if (depositCards.length > 0) activeCardBalance = item;
		// 		else {
		// 			return null;
		// 		}
		// 	} else return null;
		// });

		depositCards.map((card, index) => {
			if (index === activeCard.index) {
				credentials.card_id = card.id;
				credentials.mobileid = card.phone_number;
			}
		});
		credentials.deposit_id = currentDeposit.code;
		if (summa != "") {
			let newSumma = summa.replace(/ /g, "");
			credentials.summa = parseInt(newSumma);
		}
		credentials.priv_cond = currentDeposit.dop_day ? 1 : 0;

		reactotron.log({ credentials });
		pushCreateDeposit(credentials);
	};

	render() {
		const { confirmationModal, setConfirmationModal, summa } = this.props;

		return (
			<OnlineDepositsConfirmationModalView
				confirmationModal={confirmationModal}
				setConfirmationModal={setConfirmationModal}
				summa={summa}
				onAccept={this.onAccept}
				onRefuse={this.onRefuse}
			/>
		);
	}
}
