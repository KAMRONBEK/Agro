import React from 'react';
import { View, Text } from 'react-native';
// import Switch from 'react-native-customisable-switch';
import { styles } from './styles';
import { Palette } from 'styles';

export function ServicePaymentSavePatternView() {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Сохранить как шаблон</Text>
			{/* <Switch
        defaultValue={true}
        activeBackgroundColor={Palette.greenAloe}
        inactiveBackgroundColor={Palette.greyLightText}
        activeButtonBackgroundColor={Palette.white}
        inactiveButtonBackgroundColor={Palette.white}
        switchWidth={45}
        switchHeight={13}
        switchBorderRadius={20}
        switchBorderWidth={0}
        buttonWidth={24}
        buttonHeight={24}
        buttonBorderRadius={30}
        buttonBorderColor={Palette.greenAloe}
        buttonBorderWidth={2.3}
        animationTime={150}
        padding={false}
        onChangeValue={(value) => {
          console.log(value);
        }}
      /> */}
		</View>
	);
}
