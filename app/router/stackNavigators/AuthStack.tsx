import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { ROUTES } from "const";
import { stackAuthConfig } from "../stackConfigs";
import { BackGreenHeader, BackHeader, NoHeader } from "widgets/ModuleRouter";
import { ScreenLocalization } from "screens/ScreenLocalization";
import { ScreenLoginType } from "screens/ScreenLoginType";
import { ScreenAuthorization } from "screens/ScreenAuthorization";
import { strings } from "locales/i18n";
import { ScreenSignup2 } from "screens/ScreenSignup2";
import { ScreenSmsConfirmation } from "screens/ScreenSmsConfirmation";
import { ScreenPinCode } from "screens/ScreenPinCode/screen";

type Nav = {
	[ROUTES.SCREEN_LOCALIZATION];
	[ROUTES.SCREEN_LOGIN_TYPE];
	[ROUTES.SCREEN_AUTHORIZATION];
	[ROUTES.SCREEN_SIGNUP];
	[ROUTES.SCREEN_SMS_CONFIRMATION];
	[ROUTES.SCREEN_PIN_CODE];
};

const { Navigator, Screen } = createStackNavigator<Nav>();

const AuthStack = () => (
	<Navigator screenOptions={stackAuthConfig}>
		<Screen
			name={ROUTES.SCREEN_LOCALIZATION}
			component={ScreenLocalization}
			options={{
				header: NoHeader
			}}
		/>
		<Screen
			name={ROUTES.SCREEN_LOGIN_TYPE}
			component={ScreenLoginType}
			options={{
				...BackHeader()
			}}
		/>
		<Screen
			name={ROUTES.SCREEN_AUTHORIZATION}
			component={ScreenAuthorization}
			options={{
				...BackGreenHeader(strings("auth"))
			}}
		/>
		<Screen
			name={ROUTES.SCREEN_SIGNUP}
			component={ScreenSignup2}
			options={{
				...BackGreenHeader(strings("register"))
			}}
		/>
		<Screen
			name={ROUTES.SCREEN_SMS_CONFIRMATION}
			component={ScreenSmsConfirmation}
			options={{
				...BackGreenHeader(strings("smsConfirm"))
			}}
		/>
		<Screen
			name={ROUTES.SCREEN_PIN_CODE}
			component={ScreenPinCode}
			options={{
				header: NoHeader
			}}
		/>
	</Navigator>
);

export default AuthStack;
