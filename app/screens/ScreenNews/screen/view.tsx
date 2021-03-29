import React from "react";
import { View, ScrollView, Text, FlatList } from "react-native";
import { NewsCard } from "widgets/ModuleNews";
import { styles } from "./styles";

interface IProps {
	news: [
		{
			content: string;
			content_mini: string;
			created_at: Date;
			id: number;
			title: string;
			updated_at: Date;
			views: null;
		}
	];
}
export function ScreenNewsView({ news }: IProps) {
	return (
		<View style={styles.container}>
			<FlatList data={news} renderItem={({ item, index }) => <NewsCard item={item} key={item.id.toString()} />} />
		</View>
	);
}
