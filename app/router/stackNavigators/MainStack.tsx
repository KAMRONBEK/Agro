import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { ROUTES } from "const";
import { ScreenMain } from "screens/ScreenMain";
import { AccountHeader, BackGreenHeader } from "widgets/ModuleRouter";
import { screenOptions } from "../stackConfigs";
import { ScreenAddCard } from "screens/ScreenAddCard";
import { strings } from "translations/i18n";
import { ScreenCreateVisaVirtual } from "screens/ScreenCreateVisaVirtual";
import { ScreenPaymentInnerList } from "../../screens/ScreenPaymentInnerList";
import { ScreenCardOperations } from "../../screens/ScreenCardOperations";

import { ScreenNotifications, ScreenOnlineConversion, ScreenServicePayment, ScreenTransactionDetails } from "screens";
// import { ScreenOnlineDeposits } from "screens/ScreenOnlineDepositsPayment";

type Nav = {
	[ROUTES.SCREEN_MAIN];
	[ROUTES.SCREEN_ADD_CARD];
	[ROUTES.SCREEN_CREATE_VISA_VIRTUAL];
	[ROUTES.SCREEN_PAYMENT_INNER_LIST];
	[ROUTES.SCREEN_CARD_OPERATIONS];
	[ROUTES.SCREEN_SERVICE_PAYMENT];
	[ROUTES.SCREEN_TRANSACTION_DETAILS];
	[ROUTES.SCREEN_ONLINE_CONVERSION];
	[ROUTES.SCREEN_NOTIFICATIONS];
};

const Stack = createStackNavigator<Nav>();

const MainStack = () => (
	<Stack.Navigator screenOptions={screenOptions}>
		<Stack.Screen
			name={ROUTES.SCREEN_MAIN}
			component={ScreenMain}
			options={{
				...AccountHeader("Fresh")
			}}
		/>
		<Stack.Screen
			name={ROUTES.SCREEN_ADD_CARD}
			component={ScreenAddCard}
			options={{
				...BackGreenHeader(strings("addCard"))
			}}
		/>
		<Stack.Screen
			name={ROUTES.SCREEN_CREATE_VISA_VIRTUAL}
			component={ScreenCreateVisaVirtual}
			options={{
				...BackGreenHeader(strings("virtualVisaCard"))
			}}
		/>
		<Stack.Screen
			name={ROUTES.SCREEN_PAYMENT_INNER_LIST}
			component={ScreenPaymentInnerList}
			options={{
				...BackGreenHeader()
			}}
		/>
		<Stack.Screen
			name={ROUTES.SCREEN_SERVICE_PAYMENT}
			component={ScreenServicePayment}
			options={{
				...BackGreenHeader()
			}}
		/>
		<Stack.Screen
			name={ROUTES.SCREEN_CARD_OPERATIONS}
			component={ScreenCardOperations}
			options={{
				...BackGreenHeader(strings("paymentWithCard"))
			}}
		/>
		<Stack.Screen
			name={ROUTES.SCREEN_ONLINE_CONVERSION}
			component={ScreenOnlineConversion}
			options={{
				...BackGreenHeader(strings("onlineConversion"))
			}}
		/>
		<Stack.Screen
			name={ROUTES.SCREEN_TRANSACTION_DETAILS}
			component={ScreenTransactionDetails}
			options={{
				...BackGreenHeader(strings("details"))
			}}
		/>
		<Stack.Screen
			name={ROUTES.SCREEN_NOTIFICATIONS}
			component={ScreenNotifications}
			options={{
				...BackGreenHeader(strings("notifications"))
			}}
		/>
	</Stack.Navigator>
);

export default MainStack;
