import { strings } from "locales/i18n";
import React from "react";
import { View } from "react-native";
import { PaymentsButton } from "widgets/ModulePayment";
import { styles } from "./styles";

export function PaymentsNewsView() {
	return (
		<View style={styles.container}>
			<PaymentsButton title={strings("news")} />
		</View>
	);
}
