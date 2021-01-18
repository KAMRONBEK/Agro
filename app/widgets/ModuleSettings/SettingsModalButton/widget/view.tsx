import { strings } from "locales/i18n";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { styles } from "./styles";

export const SettingsModalButtonView = ({ text, onPress }) => {
	return (
		<TouchableOpacity onPress={onPress}>
			<View style={styles.container}>
				<Text style={styles.text}>{text}</Text>
			</View>
		</TouchableOpacity>
	);
};
