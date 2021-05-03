import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { ROUTES } from "const";
import { ScreenSettings } from "screens/ScreenSettings";
import { screenOptions } from "../stackConfigs";
import { strings } from "translations/i18n";
import { BackGreenHeader, GreenHeader } from "widgets/ModuleRouter";
import { ScreenSecurity } from "../../screens/ScreenSecurity";
import { ScreenPinCode } from "../../screens";
import { ScreenSetupPinCode } from "../../screens/ScreenSetupPinCode";

type Nav = {
	[ROUTES.SCREEN_SETTINGS];
	[ROUTES.SCREEN_PIN_CODE];
	[ROUTES.SCREEN_SECURITY];
	[ROUTES.SCREEN_SETUP_PIN];
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
			name={ROUTES.SCREEN_SECURITY}
			component={ScreenSecurity}
			initialParams={{
				isSetup: true
			}}
			options={{
				...BackGreenHeader(strings("security"))
			}}
		/>
		<Screen
			name={ROUTES.SCREEN_PIN_CODE}
			component={ScreenPinCode}
			initialParams={{
				isChange: true
			}}
			options={{
				...BackGreenHeader(strings("security"))
			}}
		/>
		<Screen
			name={ROUTES.SCREEN_SETUP_PIN}
			component={ScreenSetupPinCode}
			options={{
				...BackGreenHeader(strings("security"))
			}}
		/>
	</Navigator>
);

export default SettingStack;
