import React from "react";
import { View, Text, TextInput } from "react-native";
import { styles } from "./styles";
import { Palette } from "styles";
import { strings } from "locales/i18n";

export function OnlineConversionFieldView() {
	return (
		<View style={styles.container}>
			<View style={styles.labelBox}>
				<Text style={styles.label}>{strings("currentRate")}</Text>
				<Text style={styles.labelCurrentRate}>
					9570.21 <Text style={styles.labelCurrentRateLight}>{strings("som")}</Text>
				</Text>
			</View>
			<View style={styles.box}>
				<View style={styles.inputBox}>
					<TextInput
						placeholder={strings("USDAmount")}
						keyboardType="number-pad"
						returnKeyType="done"
						placeholderTextColor={Palette.greyLightText}
						style={styles.input}
					/>
				</View>
				<View style={styles.resultBox}>
					<TextInput
						placeholder={strings("convertedAmount")}
						editable={false}
						placeholderTextColor={Palette.greyLightText}
						style={styles.result}
					/>
				</View>
			</View>
		</View>
	);
}
