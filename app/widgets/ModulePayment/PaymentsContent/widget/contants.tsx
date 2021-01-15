import React from "react";
import { ROUTES } from "const";
import { CardTransfer } from "../assets";
import { strings } from "locales/i18n";

export interface IService {
	name: string;
	routeName?: ROUTES;
	icon: JSX.Element;
}

export const SERVICES: IService[] = [
	{
		name: strings("onlineConversion"),
		routeName: ROUTES.SCREEN_ONLINE_CONVERSION,
		icon: <CardTransfer />
	},
	{
		name: strings("transferToCard"),
		routeName: ROUTES.SCREEN_CARD_OPERATIONS,
		icon: <CardTransfer />
	},
	{
		name: strings("onlineDeposit"),
		icon: <CardTransfer />
	},
	{
		name: strings("onlineCredit"),
		icon: <CardTransfer />
	},
	{
		name: strings("oneTimePayment"),
		icon: <CardTransfer />
	},
	{
		name: strings("repaymentCredit"),
		icon: <CardTransfer />
	}
];
