import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { ROUTES } from "const";
import { ScreenPayment } from "../../screens/ScreenPayment";
import { screenOptions } from "../stackConfigs";
import { AccountHeader, BackGreenHeader } from "widgets/ModuleRouter";
import { strings } from "../../locales/i18n";
import { ScreenPaymentInnerList } from "../../screens/ScreenPaymentInnerList";
import { ScreenOnlineConversion } from "../../screens/ScreenOnlineConversion";
import {ScreenCardOperations} from "../../screens/ScreenCardOperations";

type Nav = {
	[ROUTES.SCREEN_PAYMENT];
	[ROUTES.SCREEN_PAYMENT_INNER_LIST];
	[ROUTES.SCREEN_ONLINE_CONVERSION];
	[ROUTES.SCREEN_CARD_OPERATIONS];
};

const { Navigator, Screen } = createStackNavigator<Nav>();

const PaymentStack = () => (
	<Navigator screenOptions={screenOptions}>
		<Screen
			name={ROUTES.SCREEN_PAYMENT}
			component={ScreenPayment}
			options={{
				...AccountHeader(strings("payments"))
			}}
		/>
		<Screen
			name={ROUTES.SCREEN_ONLINE_CONVERSION}
			component={ScreenOnlineConversion}
			options={{
				...BackGreenHeader(strings("onlineConversion"))
			}}
		/>
		<Screen
			name={ROUTES.SCREEN_PAYMENT_INNER_LIST}
			component={ScreenPaymentInnerList}
			options={{
				...BackGreenHeader()
			}}
		/>
		<Screen
			name={ROUTES.SCREEN_CARD_OPERATIONS}
			component={ScreenCardOperations}
			options={{
				...BackGreenHeader(strings("paylentWithCard"))
			}}
		/>
	</Navigator>
);

export default PaymentStack;
