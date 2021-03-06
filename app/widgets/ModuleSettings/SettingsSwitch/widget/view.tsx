import React from "react";
import { View, Text, Switch } from "react-native";
// import Switch from 'react-native-customisable-switch';
import { styles } from "./styles";
import { Palette } from "styles";

interface IOwnProps {
	icon: JSX.Element;
	name: string;
	showBorderBottom: boolean;
	onChange: () => void;
	value: boolean;
}

export function SettingsSwitchView({ icon, name, showBorderBottom, onChange, value }: IOwnProps) {
	return (
		<View style={[styles.button, showBorderBottom && styles.borderBottom]}>
			<View style={styles.buttonIconBox}>{icon}</View>
			<View style={styles.buttonNameBox}>
				<Text style={styles.buttonName}>{name}</Text>
			</View>
			<View style={styles.buttonChevronBox}>
				<Switch
					defaultValue={value}
					activeBackgroundColor={Palette.greenAloe}
					inactiveBackgroundColor={Palette.grey}
					activeButtonBackgroundColor={Palette.white}
					inactiveButtonBackgroundColor={Palette.white}
					switchWidth={45}
					switchHeight={13}
					switchBorderRadius={20}
					switchBorderWidth={0}
					buttonWidth={24}
					buttonHeight={24}
					buttonBorderRadius={30}
					buttonBorderColor={Palette.greenAloe}
					buttonBorderWidth={2.3}
					animationTime={150}
					// padding={false}
					onValueChange={onChange}
					value={value}
				/>
			</View>
		</View>
	);
}
