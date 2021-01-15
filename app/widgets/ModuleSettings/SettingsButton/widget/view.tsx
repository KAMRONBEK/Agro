import React from "react";
import { TouchableOpacity, View, Text, TextInput } from "react-native";
import { TOUCHABLE_OPACITY } from "const";
import { styles } from "./styles";
import { ChevronRight } from "../assets";
import reactotron from "store/reactotron-config";
import { Palette } from "styles";

interface IOwnProps {
	icon: JSX.Element;
	name: string;
	showBorderBottom: boolean;
	onPress?: (any) => void;
	placeholder?: string;
	hasInput?: boolean;
	onChange?: (e: string) => void;
}

export function SettingsButtonView({
	icon,
	name,
	showBorderBottom,
	onPress,
	placeholder,
	hasInput = false,
	onChange
}: IOwnProps) {
	return (
		<TouchableOpacity
			onPress={onPress}
			style={[styles.button, showBorderBottom && styles.borderBottom]}
			activeOpacity={TOUCHABLE_OPACITY}
		>
			<View style={styles.buttonIconBox}>{icon}</View>
			<View style={styles.buttonNameBox}>
				{hasInput ? (
					<TextInput
						value={name}
						style={styles.buttonName}
						placeholder={placeholder}
						placeholderTextColor={Palette.greyLightText}
						onChangeText={onChange}
					/>
				) : (
					<Text style={styles.buttonName}>{name}</Text>
				)}
			</View>
			<View style={styles.buttonChevronBox}>
				<ChevronRight />
			</View>
		</TouchableOpacity>
	);
}
