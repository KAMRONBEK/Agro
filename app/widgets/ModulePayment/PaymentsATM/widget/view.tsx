import { TOUCHABLE_OPACITY } from "const";
import { strings } from "locales/i18n";
import React from "react";
import { View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { PaymentsButton } from "widgets/ModulePayment/PaymentsButton";
import { styles } from "./styles";

interface OwnProps {
	onPress: () => void;
}

export function PaymentsATMView({ onPress }: OwnProps) {
	return (
		<TouchableOpacity activeOpacity={TOUCHABLE_OPACITY} onPress={onPress}>
			<View style={styles.container}>
				<PaymentsButton title={strings("atms")} />
			</View>
		</TouchableOpacity>
	);
}
