import PINCode from '@haskkor/react-native-pincode';
import { ROUTES } from 'const';
import React, { useEffect } from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-svg';
import { withNavigation } from 'react-navigation';
import { styles } from './styles';

export let PinCodeView = ({ navigation }) => {
	useEffect(() => {
		console.log('IT IS PIN CODE');
	}, []);

	let onFinish = () => {
		navigation.navigate(ROUTES.SCREEN_MAIN);
	};

	let isSetup = navigation.getParam('isSetup');

	return (
		<View style={styles.container}>
			<Text>LOLLL</Text>
			<PINCode finishProcess={onFinish} status={isSetup ? 'choose' : 'enter'} />
		</View>
	);
};
