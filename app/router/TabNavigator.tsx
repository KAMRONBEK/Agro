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
import {Place} from "./assets/Place";

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
				tabBarIcon: ({ tintColor, focused }) => <Home focused={focused} color={tintColor} />,
				tabBarLabel: strings("main")
			}}
		/>
		<Tab.Screen
			name={ROUTES.SCREEN_PAYMENT}
			component={PaymentStack}
			options={{
				tabBarIcon: ({ tintColor, focused }) => <Wallet focused={focused} color={tintColor} />,
				tabBarLabel: strings("payments")
			}}
		/>
		<Tab.Screen
			name={ROUTES.SCREEN_BRANCHES}
			component={BranchesStack}
			options={{
				tabBarIcon: ({ tintColor, focused }) => <Place focused={focused} color={tintColor} />,
				tabBarLabel: strings("branches")
			}}
		/>
		<Tab.Screen
			name={ROUTES.SCREEN_SETTINGS}
			component={SettingStack}
			options={{
				tabBarIcon: ({ tintColor, focused }) => <Settings focused={focused} color={tintColor} />,
				tabBarLabel: strings("settings")
			}}
		/>
	</Tab.Navigator>
);

export default TabNavigator;
