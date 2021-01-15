import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { TOUCHABLE_OPACITY } from "const";
import LinearGradient from "react-native-linear-gradient";
import { GRADIENT_COLORS } from "styles";
import { strings } from "locales/i18n";

export function OnlineConversationAcceptView() {
	return (
		<View style={styles.container}>
			<View style={styles.agreementBox}>
				<Text style={styles.agreement}>{strings("byPressingYouAgree")}</Text>
			</View>
			<TouchableOpacity activeOpacity={TOUCHABLE_OPACITY} style={styles.agreementButton}>
				<Text style={styles.agreementButtonTitle}>{strings("offer")}</Text>
			</TouchableOpacity>
			<TouchableOpacity activeOpacity={TOUCHABLE_OPACITY} style={styles.acceptButton}>
				<LinearGradient
					style={styles.acceptButtonInner}
					start={{ x: 0, y: 0 }}
					end={{ x: 1, y: 0 }}
					colors={GRADIENT_COLORS}
				>
					<Text style={styles.acceptButtonTitle}>{strings("confirm")}</Text>
				</LinearGradient>
			</TouchableOpacity>
		</View>
	);
}
