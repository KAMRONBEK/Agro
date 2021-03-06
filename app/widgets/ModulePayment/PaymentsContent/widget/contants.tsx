import React from "react";
import { ROUTES } from "const";
import { CardTransfer, OnlineConversion, OnlineCredit, OnlineDeposit, OnTimePayment } from "../assets";
import { strings } from "translations/i18n";

export interface IService {
	name: string;
	routeName?: ROUTES;
	icon: JSX.Element;
}

export const SERVICES: IService[] = [
	{
		name: strings("onlineConversion"),
		routeName: ROUTES.SCREEN_ONLINE_CONVERSION,
		icon: <OnlineConversion />
	},
	{
		name: strings("transferToCard"),
		routeName: ROUTES.SCREEN_CARD_OPERATIONS,
		icon: <CardTransfer />
	},
	{
		name: strings("onlineDeposit"),
		icon: <OnlineDeposit />,
		routeName: ROUTES.SCREEN_ONLINE_DEPOSITS
	},
	{
		name: strings("onlineCredit"),
		icon: <OnlineCredit />
	},
	{
		name: strings("oneTimePayment"),
		icon: <OnTimePayment />
	},
	{
		name: strings("repaymentCredit"),
		icon: <OnlineCredit />
	}
];
