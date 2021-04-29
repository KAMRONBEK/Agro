import { createStackNavigator } from "@react-navigation/stack";
import { ROUTES } from "const";
import React from "react";
import TabNavigator from "./TabNavigator";

const Stack = createStackNavigator();

const RootRouter = () => {
	return (
		<Stack.Navigator headerMode="none">
			<Stack.Screen name={ROUTES.ROOT} component={TabNavigator} />
		</Stack.Navigator>
	);
};

export default RootRouter;
