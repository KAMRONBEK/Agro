import { strings } from "locales/i18n";
import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";

export function AuthorizationTitleView() {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>{strings("enterYourDateInRegister")}</Text>
		</View>
	);
}
