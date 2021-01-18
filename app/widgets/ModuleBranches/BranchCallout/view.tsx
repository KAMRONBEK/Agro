import { strings } from "locales/i18n";
import React from "react";
import { Image, Text, View } from "react-native";
import { styles } from "./styles";

interface IProps {
	manzili: string;
	nomi: string;
	phoneNumber: string;
}

export const BranchCalloutView = ({ manzili, nomi, phoneNumber }: IProps) => {
	return (
		<View style={styles.container}>
			<Text>
				{strings("branchName")}: {nomi}
				{"\n\n"}
				{strings("location")}: {manzili}
				{"\n\n"}
				{strings("phoneNumber")}: {phoneNumber}
			</Text>
		</View>
	);
};
