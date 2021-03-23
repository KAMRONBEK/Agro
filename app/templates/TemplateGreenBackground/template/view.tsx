import React from "react";
import { ViewStyle, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { Palette } from "styles";
import { Logo } from "../assets";
import { styles } from "./styles";

interface IOwnProps {
	style: ViewStyle[];
	showLogo?: boolean;
}

export function TemplateGreenBackgroundView({ style, showLogo = true }: IOwnProps) {
	return (
		<View style={styles.container}>
			<LinearGradient
				start={{ x: 0, y: 0 }}
				end={{ x: 1, y: 0 }}
				colors={[Palette.greenGrace, Palette.greenCesar]}
				style={style}
			>
				{showLogo && <Logo style={styles.logo} />}
			</LinearGradient>
		</View>
	);
}
