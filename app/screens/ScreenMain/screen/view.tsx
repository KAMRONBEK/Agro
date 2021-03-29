import React from "react";
import { View, ScrollView } from "react-native";
import { styles } from "./styles";
import { TemplateGreenBackground } from "templates";
import {
	MainSelectCurrency,
	MainTabs,
	MainTransactionsHistory,
	MainPaymentTypeButtons,
	MainLoginSuccessModal
} from "widgets/ModuleMain";

export function ScreenMainView() {
	return (
		<View style={styles.container}>
			<TemplateGreenBackground style={[styles.greenBg]} />
			<ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContainer}>
				<MainSelectCurrency />
				<MainTabs />
				<MainPaymentTypeButtons />
			</ScrollView>
			<MainTransactionsHistory />
			<MainLoginSuccessModal />
		</View>
	);
}
