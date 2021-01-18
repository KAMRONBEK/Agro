import React from "react";
import { TouchableOpacity, Text, View } from "react-native";
import { styles } from "./styles";
import {TOUCHABLE_OPACITY} from "const";

export const SettingsModalButtonView = ({ text, onPress }) => {
	return (
		<TouchableOpacity activeOpacity={TOUCHABLE_OPACITY} onPress={onPress}>
			<View style={styles.container}>
				<Text style={styles.text}>{text}</Text>
			</View>
		</TouchableOpacity>
	);
};
