import React from "react";
import { TouchableOpacity, View, Text, TextInput, Modal } from "react-native";
import { Locale, TOUCHABLE_OPACITY, TOUCHABLE_OPACITY_2 } from "const";
import { styles } from "./styles";
import { ChevronRight } from "../assets";
import { Palette } from "styles";
import RNPickerSelect from "react-native-picker-select";
import localization from "../../../../locales/i18n";

interface IOwnProps {
	icon: JSX.Element;
	name: string;
	showBorderBottom: boolean;
	onPress?: (any) => void;
	placeholder?: string;
	hasInput?: boolean;
	onChange?: (e: string) => void;

	onPressLanguage: () => void;
}

export function SettingsSelectView({
	icon,
	name,
	showBorderBottom,
	onPress,
	placeholder,
	hasInput = false,
	onChange,
	onPressLanguage
}: IOwnProps) {
	return (
		<TouchableOpacity onPress={onPressLanguage} activeOpacity={TOUCHABLE_OPACITY}>
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
		</TouchableOpacity>
		// <RNPickerSelect
		// 	onValueChange={value => onPress(value)}
		// 	items={[
		// 		{ label: Locale.EN, value: Locale.EN },
		// 		{ label: Locale.RU, value: Locale.RU },
		// 		{ label: Locale.UZ, value: Locale.UZ }
		// 	]}
		// 	value={localization.getLanguage()}
		// 	placeholder={{}}
		// >
		// 	<Modal >
		// 		<View>
		// 			<Text>asda</Text>
		// 		</View>
		// 	</Modal>
		// 	<View style={[styles.button, showBorderBottom && styles.borderBottom]}>
		// 		<View style={styles.buttonIconBox}>{icon}</View>
		// 		<View style={styles.buttonNameBox}>
		// 			{hasInput ? (
		// 				<TextInput
		// 					value={name}
		// 					style={styles.buttonName}
		// 					placeholder={placeholder}
		// 					placeholderTextColor={Palette.greyLightText}
		// 					onChangeText={onChange}
		// 				/>
		// 			) : (
		// 				<Text style={styles.buttonName}>{name}</Text>
		// 			)}
		// 		</View>
		// 		<View style={styles.buttonChevronBox}>
		// 			<ChevronRight />
		// 		</View>
		// 	</View>
		// </RNPickerSelect>
	);
}
