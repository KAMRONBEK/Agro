import React from "react";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import {
	ScreenLocalization,
	ScreenLoginType,
	ScreenBranches,
	ScreenSmsConfirmation,
	ScreenMain,
	ScreenAuthorization,
	ScreenSettings,
	ScreenPayment,
	ScreenPaymentInnerList,
	ScreenOnlineConversion,
	ScreenCardOperations,
	ScreenServicePayment,
	ScreenSignup2,
	ScreenTransactionDetails,
	ScreenCreateVisaVirtual,
	ScreenAddCard,
	ScreenPinCode
} from "screens";
import {
	NoHeader,
	BackHeader,
	AccountHeader,
	BackGreenHeader,
	GreenHeader,
	AccountBackHeader
} from "widgets/ModuleRouter";
import { createStackNavigator } from "react-navigation-stack";
import { ROUTES } from "const/routes";
import { stackAuthConfig, stackLoggedInConfig, bottomTabNavigatorConfig } from "./stackConfigs";
import { Home, Wallet, Place, Settings } from "./assets";
import { strings } from "locales/i18n";

const bottomTabsStack = createBottomTabNavigator(
	{
		[ROUTES.SCREEN_MAIN]: {
			screen: createStackNavigator({
				[ROUTES.SCREEN_MAIN]: {
					screen: ScreenMain,
					navigationOptions: AccountHeader("FRESH")
				}
			}),
			navigationOptions: {
				tabBarIcon: ({ tintColor, focused }) => <Home focused={focused} color={tintColor} />,
				tabBarLabel: strings("main")
			}
		},
		[ROUTES.SCREEN_PAYMENT]: {
			screen: createStackNavigator({
				[ROUTES.SCREEN_PAYMENT]: {
					screen: ScreenPayment,
					navigationOptions: AccountHeader(strings("payments"))
				}
			}),
			navigationOptions: {
				tabBarIcon: ({ tintColor, focused }) => <Wallet focused={focused} color={tintColor} />,
				tabBarLabel: strings("payments")
			}
		},
		[ROUTES.SCREEN_BRANCHES]: {
			screen: createStackNavigator({
				[ROUTES.SCREEN_BRANCHES]: {
					screen: ScreenBranches,
					navigationOptions: GreenHeader(strings("branches"))
				}
			}),
			navigationOptions: {
				tabBarIcon: ({ tintColor, focused }) => <Place focused={focused} color={tintColor} />,
				tabBarLabel: strings("branches")
			}
		},
		[ROUTES.SCREEN_SETTINGS]: {
			screen: createStackNavigator({
				[ROUTES.SCREEN_SETTINGS]: {
					screen: ScreenSettings,
					navigationOptions: GreenHeader(strings("changeSettings"))
				}
			}),
			navigationOptions: {
				tabBarIcon: ({ tintColor, focused }) => <Settings focused={focused} color={tintColor} />,
				tabBarLabel: strings("settings")
			}
		}
	},
	bottomTabNavigatorConfig
);

const authStack = createStackNavigator(
	{
		[ROUTES.SCREEN_LOCALIZATION]: {
			screen: ScreenLocalization,
			navigationOptions: NoHeader
		},
		[ROUTES.SCREEN_LOGIN_TYPE]: {
			screen: ScreenLoginType,
			navigationOptions: BackHeader()
		},
		[ROUTES.SCREEN_AUTHORIZATION]: {
			screen: ScreenAuthorization,
			navigationOptions: BackGreenHeader(strings("auth"))
		},
		[ROUTES.SCREEN_SIGNUP]: {
			screen: ScreenSignup2,
			navigationOptions: BackGreenHeader(strings("register"))
		},
		[ROUTES.SCREEN_SMS_CONFIRMATION]: {
			screen: ScreenSmsConfirmation,
			navigationOptions: BackGreenHeader(strings("smsConfirm"))
		},
		[ROUTES.SCREEN_PIN_CODE]: {
			screen: ScreenPinCode,
			navigationOptions: NoHeader
		},
		[ROUTES.SCREEN_MAIN]: {
			screen: bottomTabsStack,
			navigationOptions: NoHeader
		},
		[ROUTES.SCREEN_PAYMENT_INNER_LIST]: {
			screen: ScreenPaymentInnerList,
			navigationOptions: BackGreenHeader()
		},
		[ROUTES.SCREEN_TRANSACTION_DETAILS]: {
			screen: ScreenTransactionDetails,
			navigationOptions: BackGreenHeader(strings("details"))
		},
		[ROUTES.SCREEN_ONLINE_CONVERSION]: {
			screen: ScreenOnlineConversion,
			navigationOptions: BackGreenHeader(strings("onlineConversion"))
		},
		[ROUTES.SCREEN_CARD_OPERATIONS]: {
			screen: ScreenCardOperations,
			navigationOptions: AccountBackHeader(strings("paylentWithCard"))
		},
		[ROUTES.SCREEN_SERVICE_PAYMENT]: {
			screen: ScreenServicePayment,
			navigationOptions: AccountBackHeader(strings("payment"))
		},
		[ROUTES.SCREEN_CREATE_VISA_VIRTUAL]: {
			screen: ScreenCreateVisaVirtual,
			navigationOptions: BackGreenHeader(strings("virtualVisaCard"))
		},
		[ROUTES.SCREEN_ADD_CARD]: {
			screen: ScreenAddCard,
			navigationOptions: BackGreenHeader(strings("addCard"))
		}
	},
	stackAuthConfig
);

const loggedInStack = createStackNavigator(
	{
		[ROUTES.SCREEN_LOCALIZATION]: {
			screen: ScreenLocalization,
			navigationOptions: NoHeader
		},
		[ROUTES.SCREEN_LOGIN_TYPE]: {
			screen: ScreenLoginType,
			navigationOptions: BackHeader()
		},
		[ROUTES.SCREEN_AUTHORIZATION]: {
			screen: ScreenAuthorization,
			navigationOptions: BackGreenHeader(strings("branches"))
		},
		[ROUTES.SCREEN_SIGNUP]: {
			screen: ScreenSignup2,
			navigationOptions: BackGreenHeader(strings("register"))
		},
		[ROUTES.SCREEN_PIN_CODE]: {
			screen: ScreenPinCode,
			navigationOptions: NoHeader
		},
		[ROUTES.SCREEN_SMS_CONFIRMATION]: {
			screen: ScreenSmsConfirmation,
			navigationOptions: BackGreenHeader(strings("smsConfirm"))
		},
		[ROUTES.SCREEN_MAIN]: {
			screen: bottomTabsStack,
			navigationOptions: NoHeader
		},
		[ROUTES.SCREEN_PAYMENT_INNER_LIST]: {
			screen: ScreenPaymentInnerList,
			navigationOptions: BackGreenHeader()
		},
		[ROUTES.SCREEN_TRANSACTION_DETAILS]: {
			screen: ScreenTransactionDetails,
			navigationOptions: BackGreenHeader(strings("details"))
		},
		[ROUTES.SCREEN_ONLINE_CONVERSION]: {
			screen: ScreenOnlineConversion,
			navigationOptions: BackGreenHeader(strings("onlineConversion"))
		},
		[ROUTES.SCREEN_CARD_OPERATIONS]: {
			screen: ScreenCardOperations,
			navigationOptions: AccountBackHeader(strings("paymentWithCard"))
		},
		[ROUTES.SCREEN_SERVICE_PAYMENT]: {
			screen: ScreenServicePayment,
			navigationOptions: AccountBackHeader(strings("payment"))
		},
		[ROUTES.SCREEN_CREATE_VISA_VIRTUAL]: {
			screen: ScreenCreateVisaVirtual,
			navigationOptions: BackGreenHeader(strings("virtualVisaCard"))
		},
		[ROUTES.SCREEN_ADD_CARD]: {
			screen: ScreenAddCard,
			navigationOptions: BackGreenHeader(strings("addCard"))
		}
	},
	stackLoggedInConfig
);

export const AppAuthWithNavigator = createAppContainer(authStack);
export const AppLoggedInWithNavigator = createAppContainer(loggedInStack);
