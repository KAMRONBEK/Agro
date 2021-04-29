import { TOUCHABLE_OPACITY } from "const";
import { strings } from "translations/i18n";
import React from "react";
import { View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { PaymentsButton } from "widgets/ModulePayment";
import { styles } from "./styles";

interface IProps {
	onPress: () => void;
}

export const PaymentsNewsView = ({ onPress }: IProps) => {
	return (
		<TouchableOpacity activeOpacity={TOUCHABLE_OPACITY} onPress={onPress}>
			<View style={styles.container}>
				<PaymentsButton title={strings("news")} />
			</View>
		</TouchableOpacity>
	);
};
