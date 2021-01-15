import React from "react";
import { View, TextInput, TouchableOpacity, Text } from "react-native";
import TextInputMask from "react-native-text-input-mask";
import { styles } from "./styles";
import { Palette } from "styles";
import { Eye, HideEye } from "../assets";
import { TOUCHABLE_OPACITY } from "const";
import { IFieldState, FieldType } from "types";
import { strings } from "locales/i18n";

interface IOwnProps {
	phone: IFieldState<FieldType, string>;
	password: IFieldState<FieldType, string>;
	hidePassword: boolean;
	onChangePhone: (formated: string, extracted: string) => void;
	onChangePassword: (value: string) => void;
	toggleHidePassword: () => void;
}

export function AuthorizationFormView({
	phone,
	password,
	hidePassword,
	onChangePhone,
	onChangePassword,
	toggleHidePassword
}: IOwnProps) {
	function renderError(value: string, index: number) {
		return (
			<Text key={index} style={styles.error}>
				{value}
			</Text>
		);
	}

	return (
		<View style={styles.container}>
			<View style={[styles.inputBox, phone.errors.length && styles.inputBoxError]}>
				<TextInputMask
					onChangeText={onChangePhone}
					style={styles.input}
					value={phone.value}
					placeholder={phone.required ? "998 (--) --- -- -- *" : "998 (--) --- -- --"}
					underlineColorAndroid={Palette.transparent}
					mask="[000] ([00]) [000] [00] [00]"
				/>
			</View>
			<View style={styles.errorBox}>{phone.errors.map(renderError)}</View>
			<View style={[styles.inputBox, password.errors.length && styles.inputBoxError]}>
				<TextInput
					maxLength={20}
					placeholder={password.required ? strings("password*") : strings("password")}
					style={styles.input}
					underlineColorAndroid={Palette.transparent}
					secureTextEntry={hidePassword}
					onChangeText={onChangePassword}
					value={password.value}
				/>
				<TouchableOpacity
					onPress={toggleHidePassword}
					activeOpacity={TOUCHABLE_OPACITY}
					style={styles.showPasswordButton}
				>
					{hidePassword ? <Eye /> : <HideEye />}
				</TouchableOpacity>
			</View>
			<View style={styles.errorBox}>{password.errors.map(renderError)}</View>
			<View style={styles.forgotPasswordBox}>
				<TouchableOpacity activeOpacity={TOUCHABLE_OPACITY} style={styles.forgotPasswordButton}>
					<Text style={styles.forgotPasswordButtonTitle}>{strings("forgotPassword")}</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}
