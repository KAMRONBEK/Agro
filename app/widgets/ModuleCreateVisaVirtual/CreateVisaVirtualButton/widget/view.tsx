import React from "react";
import { TouchableOpacity, Text, ActivityIndicator } from "react-native";
import { styles } from "./styles";
import { TOUCHABLE_OPACITY } from "const";
import LinearGradient from "react-native-linear-gradient";
import { GRADIENT_COLORS, Palette } from "styles";
import { strings } from "../../../../translations/i18n";

interface IOwnProps {
	createVisaVirtualIsFetching: boolean;
	createCard: () => void;
}

export function CreateVisaVirtualButtonView({ createVisaVirtualIsFetching, createCard }: IOwnProps) {
	return (
		<TouchableOpacity
			disabled={createVisaVirtualIsFetching}
			onPress={createCard}
			activeOpacity={TOUCHABLE_OPACITY}
			style={styles.button}
		>
			<LinearGradient
				style={styles.buttonInner}
				start={{ x: 0, y: 0 }}
				end={{ x: 1, y: 0 }}
				colors={GRADIENT_COLORS}
			>
				{createVisaVirtualIsFetching ? (
					<ActivityIndicator animating={createVisaVirtualIsFetching} size="small" color={Palette.white} />
				) : (
					<Text style={styles.buttonTitle}>{strings("open")}</Text>
				)}
			</LinearGradient>
		</TouchableOpacity>
	);
}
