import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import { styles } from "./styles";
import { ChevronRight } from "../assets";
import { TOUCHABLE_OPACITY } from "const";

interface IOwnProps {
	title: string;
}

export function PaymentsButtonView({ title }: IOwnProps) {
	return (
		<View style={styles.button}>
			<View style={styles.titleBox}>
				<Text style={styles.title}>{title}</Text>
			</View>
			<View style={styles.iconBox}>
				<ChevronRight />
			</View>
		</View>
	);
}
