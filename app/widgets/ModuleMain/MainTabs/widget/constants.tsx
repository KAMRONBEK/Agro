import { strings } from "translations/i18n";
import { Route } from "react-native-tab-view";

export const ROUTES: Route[] = [
	{ key: "first", title: strings("somType") },
	{ key: "second", title: strings("currencyType") }
	// { key: 'third', title: 'Депозитные' }
];
