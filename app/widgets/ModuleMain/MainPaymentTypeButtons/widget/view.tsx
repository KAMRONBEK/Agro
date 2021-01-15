import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { ROUTES, TOUCHABLE_OPACITY } from "const";
import { Autopayment, LocalPayment, Mobile, NFC, Transfer, Visa } from "../assets";
import { strings } from "locales/i18n";

interface IOwnProps {
	routeTo: (route: ROUTES) => () => void;
}

export function MainPaymentTypeButtonsView({ routeTo }: IOwnProps) {
	return (
		<View style={styles.container}>
			<TouchableOpacity
				onPress={routeTo(ROUTES.SCREEN_PAYMENT_INNER_LIST)}
				activeOpacity={TOUCHABLE_OPACITY}
				style={styles.button}
			>
				<Mobile />
				<Text style={styles.buttonText}>{strings("mobileOperators")}</Text>
			</TouchableOpacity>
			<TouchableOpacity
				onPress={routeTo(ROUTES.SCREEN_CARD_OPERATIONS)}
				activeOpacity={TOUCHABLE_OPACITY}
				style={styles.button}
			>
				<Transfer />
				<Text style={styles.buttonText}>{strings("transfer")}</Text>
			</TouchableOpacity>
			<TouchableOpacity
				onPress={routeTo(ROUTES.SCREEN_CREATE_VISA_VIRTUAL)}
				activeOpacity={TOUCHABLE_OPACITY}
				style={styles.button}
			>
				<Visa />
				<Text style={styles.buttonText}>{strings("openVisaVirtual")}</Text>
			</TouchableOpacity>
			{/* <TouchableOpacity activeOpacity={TOUCHABLE_OPACITY} style={styles.button}>
        <Autopayment />
        <Text style={styles.buttonText}>Автоплатеж</Text>
      </TouchableOpacity> */}
			{/* <TouchableOpacity activeOpacity={TOUCHABLE_OPACITY} style={styles.button}>
        <LocalPayment />
        <Text style={styles.buttonText}>Оплата на местах</Text>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={TOUCHABLE_OPACITY} style={styles.button}>
        <NFC />
        <Text style={styles.buttonText}>Оплата NFC</Text>
      </TouchableOpacity> */}
		</View>
	);
}
