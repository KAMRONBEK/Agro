import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { strings } from "translations/i18n";
import { IConnectProps } from "./controller";
import { Cards } from "widgets/ModuleShared";
import { ICard, ICardBalance } from "types";
import { TextInputMask } from "react-native-masked-text";
import { ROUTES, TOUCHABLE_OPACITY } from "const";
import LinearGradient from "react-native-linear-gradient";
import { Palette } from "styles";
import { StackNavigationProp } from "@react-navigation/stack";
import reactotron from "reactotron-react-native";

interface IProps {
	onPress: () => void;
	active: boolean;
}

export function OnlineDepositsPayButtonView({ onPress, active }: IProps) {
	return (
		<View style={styles.container}>
			<TouchableOpacity
				onPress={active ? onPress : undefined}
				activeOpacity={TOUCHABLE_OPACITY}
				style={styles.button}
			>
				<LinearGradient
					start={{ x: 0, y: 0 }}
					end={{ x: 1, y: 0 }}
					colors={!active ? [Palette.GREY_1, Palette.GREY_2] : [Palette.greenGrace, Palette.greenCesar]}
					style={styles.buttonGradient}
				>
					<Text style={styles.buttonText}>{strings("pay")}</Text>
				</LinearGradient>
			</TouchableOpacity>
		</View>
	);
}
