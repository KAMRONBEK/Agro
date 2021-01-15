import { strings } from "locales/i18n";
import { ISwitchSelectorOption } from "react-native-switch-selector";
import { OperationType } from "types";

export const switchOptions: ISwitchSelectorOption[] = [
	{
		label: strings("transfer"),
		value: OperationType.Transfer
	},
	{
		label: strings("request"),
		value: OperationType.Request
	}
];
