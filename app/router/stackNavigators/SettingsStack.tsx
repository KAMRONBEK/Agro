import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { ROUTES } from "const";
import { ScreenSettings } from "screens/ScreenSettings";
import { screenOptions } from "../stackConfigs";
import { strings } from "translations/i18n";
import {GreenHeader, NoHeader} from "widgets/ModuleRouter";
import {ScreenPinCode} from "../../screens";

type Nav = {
	[ROUTES.SCREEN_SETTINGS];
	[ROUTES.SCREEN_PIN_CODE];
};

const { Navigator, Screen } = createStackNavigator<Nav>();

const SettingStack = () => (
	<Navigator screenOptions={screenOptions}>
		<Screen
			name={ROUTES.SCREEN_SETTINGS}
			component={ScreenSettings}
			options={{
				...GreenHeader(strings("changeSettings"))
			}}
		/>
		<Screen
			name={ROUTES.SCREEN_PIN_CODE}
			component={ScreenPinCode}
			initialParams={{
				isSetup: true
			}}
			options={{
				header: NoHeader,
				headerShown: false,
			}}
		/>
	</Navigator>
);

export default SettingStack;
