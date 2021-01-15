import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";
import { AddCardButtons } from "widgets/ModuleAddCard";
import { strings } from "locales/i18n";

export function AddCardContentView() {
	return (
		<View style={styles.container}>
			<View style={styles.titleBox}>
				<Text style={styles.title}>{strings("whatTypeCardToAdd")}</Text>
			</View>

			<AddCardButtons />
		</View>
	);
}
