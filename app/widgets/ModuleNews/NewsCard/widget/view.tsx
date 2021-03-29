import { TOUCHABLE_OPACITY } from "const";
import React from "react";
import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Image } from "react-native-svg";
import { ChevronRight } from "widgets/ModuleSettings/SettingsSwitch/assets";
import { styles } from "./styles";

interface IOwnProps {
	content: string;
	content_mini: string;
	created_at: Date;
	id: number;
	title: string;
	updated_at: Date;
	views: null;
	onPress: (id: number) => void;
}

export function NewsCardView({ content, content_mini, created_at, id, title, updated_at, views, onPress }: IOwnProps) {
	return (
		<TouchableOpacity activeOpacity={TOUCHABLE_OPACITY} onPress={() => onPress(id)}>
			<View style={styles.container}>
				<View>
					<Text style={styles.title}>{title}</Text>
				</View>
				<View>
					<Text style={styles.text}>{title}</Text>
				</View>
				<ChevronRight />
			</View>
		</TouchableOpacity>
	);
}
