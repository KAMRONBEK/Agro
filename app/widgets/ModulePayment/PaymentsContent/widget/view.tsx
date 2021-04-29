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

export function PaymentsContentView() {
	return (
		<View style={styles.container}>
			<PaymentsTabs />
			<PaymentsCategoriesBox data={SERVICES} label={strings("onlineServices")} />
			<PaymentsCategories showAllServices={false} label={strings("paymentForServices")} />
			<PaymentsATM />
			<PaymentsBankBranch />
			<PaymentsNews />
		</View>
	);
}
