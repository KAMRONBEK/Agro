import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ROUTES } from "const";
import PaymentStack from "./stackNavigators/PaymentStack";
import MainStack from "./stackNavigators/MainStack";
import BranchesStack from "./stackNavigators/BranchesStack";
import SettingStack from "./stackNavigators/SettingsStack";
import { Home } from "./assets/Home";
import { strings } from "../locales/i18n";
import { Wallet } from "./assets/Wallet";
import { Settings } from "./assets/Settings";
import { tabBarOptions } from "./stackConfigs";
import { Place } from "./assets/Place";

type Nav = {
	[ROUTES.SCREEN_MAIN];
	[ROUTES.SCREEN_PAYMENT];
	[ROUTES.SCREEN_BRANCHES];
	[ROUTES.SCREEN_SETTINGS];
};

const Tab = createBottomTabNavigator<Nav>();

const TabNavigator = () => (
	<Tab.Navigator initialRouteName={ROUTES.SCREEN_MAIN} tabBarOptions={tabBarOptions}>
		<Tab.Screen
			name={ROUTES.SCREEN_MAIN}
			component={MainStack}
			options={{
				tabBarIcon: ({ color, focused }) => <Home focused={focused} color={color} />,
				tabBarLabel: strings("main")
			}}
		/>
		<Tab.Screen
			name={ROUTES.SCREEN_PAYMENT}
			component={PaymentStack}
			options={{
				tabBarIcon: ({ color, focused }) => <Wallet focused={focused} color={color} />,
				tabBarLabel: strings("payments")
			}}
		/>
		<Tab.Screen
			name={ROUTES.SCREEN_BRANCHES}
			component={BranchesStack}
			options={{
				tabBarIcon: ({ color, focused }) => <Place focused={focused} color={color} />,
				tabBarLabel: strings("branches")
			}}
		/>
		<Tab.Screen
			name={ROUTES.SCREEN_SETTINGS}
			component={SettingStack}
			options={{
				tabBarIcon: ({ color, focused }) => <Settings focused={focused} color={color} />,
				tabBarLabel: strings("settings")
			}}
		/>
	</Tab.Navigator>
);

export default TabNavigator;
