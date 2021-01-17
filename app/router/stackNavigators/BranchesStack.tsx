import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { ROUTES } from "const";
import { ScreenBranches } from "screens/ScreenBranches";
import { screenOptions } from "../stackConfigs";
import { GreenHeaderController } from "widgets/ModuleRouter/GreenHeader/widget/controller";
import { strings } from "locales/i18n";

type Nav = {
	[ROUTES.SCREEN_BRANCHES];
};

const { Navigator, Screen } = createStackNavigator<Nav>();

const BranchesStack = () => (
	<Navigator screenOptions={screenOptions}>
		<Screen
			name={ROUTES.SCREEN_BRANCHES}
			component={ScreenBranches}
			options={{
				header: ({ navigation }) => (
					<GreenHeaderController navigation={navigation} title={strings("branches")} />
				)
			}}
		/>
	</Navigator>
);

export default BranchesStack;
