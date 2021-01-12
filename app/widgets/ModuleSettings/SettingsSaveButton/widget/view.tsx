import React from 'react';
import { ActivityIndicator, Text, TouchableWithoutFeedback, View } from 'react-native';
import { Palette } from 'styles';
import { styles } from './styles';

interface IOwnProps {
	text?: string;
	loading?: boolean;
	onPress: () => void;
}

export function SettingsSaveButtonView({ text, loading, onPress }: IOwnProps) {
	return (
		<TouchableWithoutFeedback onPress={onPress}>
			<View style={styles.container}>
				{loading ? <ActivityIndicator color={Palette.greenApple} /> : <Text style={styles.text}>{text}</Text>}
			</View>
		</TouchableWithoutFeedback>
	);
}
