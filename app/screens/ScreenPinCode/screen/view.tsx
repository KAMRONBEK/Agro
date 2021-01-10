import PINCode from '@haskkor/react-native-pincode';
import { ROUTES } from 'const';
import React, { useEffect } from 'react';
import { View } from 'react-native';
import { withNavigation } from 'react-navigation';
import { styles } from './styles';

let PinCodeView = ({ navigation }) => {
	useEffect(() => {}, []);

	let onFinish = () => {
		navigation.navigate(ROUTES.SCREEN_MAIN);
	};

	return (
		<View style={styles.container}>
			<PINCode finishProcess={onFinish} status="choose" />
		</View>
	);
};
export let ScreenPinCodeView = () => withNavigation(PinCodeView);
