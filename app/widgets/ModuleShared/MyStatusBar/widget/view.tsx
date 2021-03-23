import React from "react";
import { View, StatusBar, StatusBarProps } from "react-native";
import { styles } from "./styles";
import { Palette } from "styles";
import LinearGradient from "react-native-linear-gradient";

export function MyStatusBarView({ ...props }: StatusBarProps) {
	return (
		<LinearGradient
			start={{ x: 0, y: 0 }}
			end={{ x: 1, y: 0 }}
			colors={[Palette.greenGrace, Palette.greenCesar]}
			style={styles.container}
		>
			<StatusBar barStyle="light-content" translucent backgroundColor={Palette.transparent} {...props} />
		</LinearGradient>
	);
}
