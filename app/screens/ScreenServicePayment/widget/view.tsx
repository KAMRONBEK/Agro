import React from "react";
import { ActivityIndicator, ScrollView, Text, View } from "react-native";
import { TemplateGreenBackground } from "templates";
import { ICard } from "types";
import {
	ServicePaymentAmount,
	ServicePaymentField,
	ServicePaymentFooterButtons,
	ServicePaymentSavePattern,
	ServicePaymentSelectContent,
	ServicePaymentStatusModal
} from "widgets/ModuleServicePayment";
import { Cards } from "widgets/ModuleShared";
import { styles } from "./styles";

interface IOwnProps {
	supplierIsFetching: boolean;
	cards: ICard[];
}

export function ScreenServicePaymentView({ supplierIsFetching, cards }: IOwnProps) {
	function renderForm() {
		return (
			<>
				<ServicePaymentSelectContent />
				<ServicePaymentField />
				<ServicePaymentAmount />
			</>
		);
	}

	function renderLoader() {
		return (
			<View style={styles.loaderBox}>
				<ActivityIndicator size="large" animating={true} />
				<Text style={styles.loaderText}>Загрузка формы</Text>
			</View>
		);
	}

	return (
		<View style={styles.container}>
			<TemplateGreenBackground showLogo={false} style={[styles.greenBg]} />
			<ScrollView contentContainerStyle={styles.scrollContainer}>
				<TemplateGreenBackground showLogo={false} style={[styles.greenInnerBg]} />
				<Cards cards={cards} showAddCard={false} />
				{supplierIsFetching ? renderLoader() : renderForm()}
				<ServicePaymentSavePattern />
				<ServicePaymentFooterButtons />
			</ScrollView>
			<ServicePaymentStatusModal />
		</View>
	);
}
