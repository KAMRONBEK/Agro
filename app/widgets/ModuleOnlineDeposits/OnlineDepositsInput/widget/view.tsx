import React from "react";
import { View, Text, TextInput } from "react-native";
import { styles } from "./styles";
import { Palette } from "styles";
import { strings } from "locales/i18n";
import { TextInputMask } from "react-native-masked-text";
import { IConnectProps } from "./controller";

interface IProps {}

export function OnlineDepositsInputView({ summa, setSumma }: IProps & IConnectProps) {
	return (
		<View style={styles.container}>
			<View style={styles.labelBox}>
				<Text style={styles.label}>{strings("enterAmount")}</Text>
			</View>
			<View style={styles.inputBox}>
				<TextInputMask
					type={"money"}
					placeholder={"0 " + strings("som")}
					editable={true}
					options={{
						precision: 0,
						separator: " ",
						delimiter: " ",
						unit: "",
						suffixUnit: "сум"
					}}
					style={styles.input}
					placeholderTextColor={Palette.greyLightText}
					value={summa}
					onChangeText={value => {
						setSumma(value);
					}}
				/>
			</View>
		</View>
	);
}
