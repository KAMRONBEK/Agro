import React from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";

interface IProps {
	getNewsSingle: (id: number) => void;
	currentNews: {};
}

export function ScreenNewsSingleView({ getNewsSingle, currentNews }: IProps) {
	return (
		<View style={styles.container}>
			<View style={styles.top}>
				<Text style={styles.title}>{currentNews.title}</Text>
			</View>
			<View>
				<Text style={styles.text}>{currentNews.content}</Text>
			</View>
		</View>
	);
}
