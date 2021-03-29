import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { ROUTES } from "const";
import { ScreenPayment } from "../../screens/ScreenPayment";
import { screenOptions } from "../stackConfigs";
import { AccountHeader, BackGreenHeader } from "widgets/ModuleRouter";
import { strings } from "../../locales/i18n";
import { ScreenPaymentInnerList } from "../../screens/ScreenPaymentInnerList";
import { ScreenOnlineConversion } from "../../screens/ScreenOnlineConversion";
import { ScreenCardOperations } from "../../screens/ScreenCardOperations";
import { ScreenBankomats } from "screens/ScreenBankomats";
import { ScreenNews } from "screens/ScreenNews";
import { ScreenNewsSingle } from "screens/ScreenNewsSingle";
import { ScreenOnlineDepositsPayment, ScreenOnlineDeposits } from "screens";

type Nav = {
	[ROUTES.SCREEN_PAYMENT];
	[ROUTES.SCREEN_PAYMENT_INNER_LIST];
	[ROUTES.SCREEN_ONLINE_CONVERSION];
	[ROUTES.SCREEN_CARD_OPERATIONS];
	[ROUTES.SCREEN_BANKOMAT];
	[ROUTES.SCREEN_NEWS_SINGLE];
	[ROUTES.SCREEN_NEWS];
	[ROUTES.SCREEN_ONLINE_DEPOSITS_PAYMENT];
	[ROUTES.SCREEN_ONLINE_DEPOSITS];
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
		<Screen
			name={ROUTES.SCREEN_BANKOMAT}
			component={ScreenBankomats}
			options={{
				...BackGreenHeader(strings("bankomats"))
			}}
		/>
		<Screen
			name={ROUTES.SCREEN_NEWS_SINGLE}
			component={ScreenNewsSingle}
			options={{
				...BackGreenHeader(strings("news"))
			}}
		/>
		<Screen
			name={ROUTES.SCREEN_NEWS}
			component={ScreenNews}
			options={{
				...BackGreenHeader(strings("news"))
			}}
		/>
		<Screen
			name={ROUTES.SCREEN_ONLINE_DEPOSITS_PAYMENT}
			component={ScreenOnlineDepositsPayment}
			options={{
				...BackGreenHeader(strings("onlineDeposit"))
			}}
		/>
		<Screen
			name={ROUTES.SCREEN_ONLINE_DEPOSITS}
			component={ScreenOnlineDeposits}
			options={{
				...BackGreenHeader(strings("onlineDeposit"))
			}}
		/>
	</Navigator>
);

export default PaymentStack;
