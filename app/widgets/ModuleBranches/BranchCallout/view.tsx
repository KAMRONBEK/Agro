import React from "react";
import { Image, Text, View } from "react-native";
import { styles } from "./styles";

interface IProps {
	manzili: string;
	nomi: string;
}

export const BranchCalloutView = ({ manzili, nomi }: IProps) => {
	return (
		<View style={styles.container}>
			{/*<Image source={require("")} />*/}
			<Text>
				{nomi} - {manzili}
			</Text>
		</View>
	);
};

