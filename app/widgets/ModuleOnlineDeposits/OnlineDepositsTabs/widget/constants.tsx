import { strings } from "locales/i18n";
import { Route } from "react-native-tab-view";
import { ISwitchSelectorOption } from "react-native-switch-selector";

export enum DepositListType {
	UserDeposits = "UserDeposits",
	AllDeposits = "AllDeposits"
}

export const switchOptions: ISwitchSelectorOption[] = [
	{
		label: strings("currentDeposits"),
		value: DepositListType.AllDeposits
	},
	{
		label: strings("myDeposits"),
		value: DepositListType.UserDeposits
	}
];

export const ROUTES: Route[] = [
	{ key: "first", title: strings("currentDeposits") },
	{ key: "second", title: strings("myDeposits") }
];
