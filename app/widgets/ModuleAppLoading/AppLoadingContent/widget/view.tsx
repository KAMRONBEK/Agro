import React from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { Palette } from 'styles';
import { styles } from './styles';

export const AppLoadingView = () => {
	return (
		<View style={styles.container}>
			<ActivityIndicator size={'large'} color={Palette.greenApple} />
		</View>
	);
};
