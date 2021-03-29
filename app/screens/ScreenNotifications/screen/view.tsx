import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";

export const ScreenNotificationsView = () => {
	return (
		<View style={styles.container}>
			<View style={styles.center}>
				<Text>Нет уведомлений</Text>
			</View>
		</View>
	);
};
