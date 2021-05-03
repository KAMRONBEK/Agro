import { ISwitchSelectorOption } from "react-native-switch-selector";
import { strings } from "../../../../translations/i18n";

export const switchOptions: ISwitchSelectorOption[] = [
	{
		label: strings("buy"),
		value: 0
	},
	{
		label: strings("sell"),
		value: 1
	}
];
