import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { ROUTES } from "const";
import { ScreenSettings } from "screens/ScreenSettings";
import { screenOptions } from "../stackConfigs";
import { strings } from "locales/i18n";
import { GreenHeader } from "widgets/ModuleRouter";

type Nav = {
	[ROUTES.SCREEN_SETTINGS];
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
	</Navigator>
);

export default SettingStack;
