import { strings } from "translations/i18n";
import React from "react";
import { View } from "react-native";
import { PaymentsButton } from "widgets/ModulePayment";
import { styles } from "./styles";

export function PaymentsBankBranchView() {
	return (
		<View style={styles.container}>
			<PaymentsButton title={strings("bankBranch")} />
		</View>
	);
}
