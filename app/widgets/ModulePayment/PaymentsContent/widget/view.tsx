import React from "react";
import { View } from "react-native";
import { styles } from "./styles";
import {
	PaymentsATM,
	PaymentsBankBranch,
	PaymentsCategoriesBox,
	PaymentsNews,
	PaymentsCategories,
	PaymentsTabs
} from "widgets/ModulePayment";
import { SERVICES } from "./contants";
import { strings } from "translations/i18n";
import { ROUTES } from "../../../../const";
import { CardTransfer, OnlineConversion, OnlineCredit, OnlineDeposit, OnTimePayment } from "../assets";

export function PaymentsContentView() {
	return (
		<View style={styles.container}>
			<PaymentsTabs />
			<PaymentsCategoriesBox
				data={[
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
				]}
				label={strings("onlineServices")}
			/>
			<PaymentsCategories showAllServices={false} label={strings("paymentForServices")} />
			<PaymentsATM />
			<PaymentsBankBranch />
			<PaymentsNews />
		</View>
	);
}
