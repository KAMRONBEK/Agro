import React from "react";
import { ScrollView } from "react-native";
import { styles } from "./styles";
import { SettingsContent } from "widgets/ModuleSettings";

export function ScreenSettingsView({ setLanguage }) {
	return (
		<ScrollView contentContainerStyle={styles.container}>
			<SettingsContent />
		</ScrollView>
	);
}
