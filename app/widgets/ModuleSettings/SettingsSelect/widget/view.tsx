import React from "react";
import { TouchableOpacity, View, Text, TextInput } from "react-native";
import { Locale, TOUCHABLE_OPACITY } from "const";
import { styles } from "./styles";
import { ChevronRight } from "../assets";
import { Palette } from "styles";
import RNPickerSelect from "react-native-picker-select";
import I18n from "i18n-js";

interface IOwnProps {
	icon: JSX.Element;
	name: string;
	showBorderBottom: boolean;
	onPress?: (any) => void;
	placeholder?: string;
	hasInput?: boolean;
	onChange?: (e: string) => void;
}

export function SettingsSelectView({
	icon,
	name,
	showBorderBottom,
	onPress,
	placeholder,
	hasInput = false,
	onChange,
}: IOwnProps) {
	return (
		<RNPickerSelect
			onValueChange={value => onPress(value)}
			items={[
				{ label: Locale.EN, value: Locale.EN },
				{ label: Locale.RU, value: Locale.RU },
				{ label: Locale.UZ, value: Locale.UZ }
			]}
			value={I18n.currentLocale}
			placeholder={{}}
		>
			<View style={[styles.button, showBorderBottom && styles.borderBottom]}>
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
			</View>
		</RNPickerSelect>
	);
}
