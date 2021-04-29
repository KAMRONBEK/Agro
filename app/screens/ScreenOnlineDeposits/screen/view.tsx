import { strings } from "translations/i18n";
import React from "react";
import { View, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { TemplateGreenBackground } from "templates";
import { OnlineDepositsTabs } from "widgets/ModuleOnlineDeposits";
import { styles } from "./styles";

export function ScreenOnlineDepositsView() {
	return (
		<View style={{ flex: 1 }}>
			<ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.container}>
				<TemplateGreenBackground showLogo={false} style={[styles.greenInnerBg]} />
				<OnlineDepositsTabs />
			</ScrollView>
		</View>
	);
}
