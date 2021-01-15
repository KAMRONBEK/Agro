import React from "react";
import { ScrollView } from "react-native";
import { styles } from "./styles";
import { SettingsContent } from "widgets/ModuleSettings";

export function ScreenSettingsView({ appLang, setLanguage }) {
	return (
		<ScrollView contentContainerStyle={styles.container}>
			<SettingsContent appLang={appLang} setLanguage={setLanguage} />
		</ScrollView>
	);
}
