import React from "react";
import { View } from "react-native";
import SwitchSelector from "react-native-switch-selector";
import { styles } from "./styles";
import { Palette } from "styles";
import { setAlpha } from "utils";
import { strings } from "../../../../translations/i18n";

export function OnlineConversionTypeView() {
	return (
		<View style={styles.container}>
			<SwitchSelector
				initial={0}
				onPress={value => null}
				animationDuration={300}
				textColor={Palette.white}
				selectedColor={Palette.white}
				buttonColor={setAlpha(Palette.white, 0.1)}
				backgroundColor={Palette.transparent}
				options={[
					{
						label: strings("buy"),
						value: 0
					},
					{
						label: strings("sell"),
						value: 1
					}
				]}
				selectedTextStyle={styles.switchText}
				textStyle={styles.switchText}
				height={40}
				style={styles.switch}
			/>
		</View>
	);
}
