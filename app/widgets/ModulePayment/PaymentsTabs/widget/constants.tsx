import { strings } from "locales/i18n";
import { Route } from "react-native-tab-view";

export const ROUTES: Route[] = [
	{ key: "first", title: strings("somType") },
	{ key: "second", title: strings("currencyType") }
];
