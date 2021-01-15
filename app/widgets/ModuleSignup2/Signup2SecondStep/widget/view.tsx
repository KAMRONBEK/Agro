import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";
import CodeInput from "react-native-confirmation-code-input";
import TextInputMask from "react-native-text-input-mask";
import { IFieldState, FieldType } from "types";
import { Palette } from "styles";
import { Signup2CountdownTimer } from "widgets/ModuleSignup2";
import { strings } from "locales/i18n";

interface IOwnProps {
	phone: IFieldState<FieldType.Phone, string>;
	formatedPhone: string;
	code: IFieldState<FieldType.Code, string>;
	onChange: (value: string) => void;
}

export function Signup2SecondStepView({ phone, formatedPhone, code, onChange }: IOwnProps) {
	function renderError(value: string, index: number) {
		return (
			<Text key={index} style={styles.error}>
				{value}
			</Text>
		);
	}

	return (
		<View style={styles.container}>
			<View style={styles.phoneBox}>
				<TextInputMask
					onChangeText={() => null}
					style={styles.phone}
					editable={false}
					value={formatedPhone}
					mask={"[000] [00] *** ** [00]"}
				/>
				{!!phone.errors.length && <View style={styles.phoneErrorBox}>{phone.errors.map(renderError)}</View>}
			</View>
			<View style={styles.instructionBox}>
				<Text style={styles.instructionText}>{strings("enterSmsCode")}</Text>
			</View>
			<View style={styles.form}>
				<CodeInput
					className={"border-b"}
					space={20}
					codeLength={5}
					codeInputStyle={styles.input}
					activeColor={Palette.greyBorder}
					inactiveColor={Palette.greyBorder}
					keyboardType="number-pad"
					size={22}
					value={code.value}
					inputPosition="center"
					onFulfill={onChange}
				/>
				{!!code.errors.length && <View style={styles.errorBox}>{code.errors.map(renderError)}</View>}
			</View>
			<View style={styles.countdown}>
				<Signup2CountdownTimer />
			</View>
		</View>
	);
}
