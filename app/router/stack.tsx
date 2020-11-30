import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
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
  ScreenAddCard
} from 'screens';
import { 
  NoHeader, 
  BackHeader, 
  AccountHeader, 
  BackGreenHeader, 
  GreenHeader, 
  AccountBackHeader 
} from 'widgets/ModuleRouter';
import { createStackNavigator } from 'react-navigation-stack';
import { ROUTES } from 'const/routes';
import { stackAuthConfig, stackLoggedInConfig, bottomTabNavigatorConfig } from './stackConfigs';
import { Home, Wallet, Place, Settings } from './assets';

const bottomTabsStack = createBottomTabNavigator(
  {
    [ROUTES.SCREEN_MAIN]: {
      screen: createStackNavigator({
        [ROUTES.SCREEN_MAIN]: {
          screen: ScreenMain,
          navigationOptions: AccountHeader('FRESH')
        }
      }),
      navigationOptions: {
        tabBarIcon: ({ tintColor, focused }) => <Home focused={focused} color={tintColor} />,
        tabBarLabel: 'Главная'
      }
    },
    [ROUTES.SCREEN_PAYMENT]: {
      screen: createStackNavigator({
        [ROUTES.SCREEN_PAYMENT]: {
          screen: ScreenPayment,
          navigationOptions: AccountHeader('Оплаты')
        }
      }),
      navigationOptions: {
        tabBarIcon: ({ tintColor, focused }) => <Wallet focused={focused} color={tintColor} />,
        tabBarLabel: 'Оплаты'
      }
    },
    [ROUTES.SCREEN_BRANCHES]: {
      screen: createStackNavigator({
        [ROUTES.SCREEN_BRANCHES]: {
          screen: ScreenBranches,
          navigationOptions: GreenHeader('Филиалы')
        }
      }),
      navigationOptions: {
        tabBarIcon: ({ tintColor, focused }) => <Place focused={focused} color={tintColor} />,
        tabBarLabel: 'Филиалы'
      }
    },
    [ROUTES.SCREEN_SETTINGS]: {
      screen: createStackNavigator({
        [ROUTES.SCREEN_SETTINGS]: {
          screen: ScreenSettings,
          navigationOptions: GreenHeader('Поменять настройки')
        }
      }),
      navigationOptions: {
        tabBarIcon: ({ tintColor, focused }) => <Settings focused={focused} color={tintColor} />,
        tabBarLabel: 'Настройки'
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
      navigationOptions: BackGreenHeader('Авторизация')
    },
    [ROUTES.SCREEN_SIGNUP]: {
      screen: ScreenSignup2,
      navigationOptions: BackGreenHeader('Регистрация')
    },
    [ROUTES.SCREEN_SMS_CONFIRMATION]: {
      screen: ScreenSmsConfirmation,
      navigationOptions: BackGreenHeader('СМС подтверждение')
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
      navigationOptions: BackGreenHeader('Детали')
    },
    [ROUTES.SCREEN_ONLINE_CONVERSION]: {
      screen: ScreenOnlineConversion,
      navigationOptions: BackGreenHeader('Онлайн конверсия')
    },
    [ROUTES.SCREEN_CARD_OPERATIONS]: {
      screen: ScreenCardOperations,
      navigationOptions: AccountBackHeader('Операции с картой')
    },
    [ROUTES.SCREEN_SERVICE_PAYMENT]: {
      screen: ScreenServicePayment,
      navigationOptions: AccountBackHeader('Оплата')
    },
    [ROUTES.SCREEN_CREATE_VISA_VIRTUAL]: {
      screen: ScreenCreateVisaVirtual,
      navigationOptions: BackGreenHeader('Виртуальная Visa карта')
    },
    [ROUTES.SCREEN_ADD_CARD]: {
      screen: ScreenAddCard,
      navigationOptions: BackGreenHeader('Добавить карту')
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
      navigationOptions: BackGreenHeader('Филиалы')
    },
    [ROUTES.SCREEN_SIGNUP]: {
      screen: ScreenSignup2,
      navigationOptions: BackGreenHeader('Регистрация')
    },
    [ROUTES.SCREEN_SMS_CONFIRMATION]: {
      screen: ScreenSmsConfirmation,
      navigationOptions: BackGreenHeader('СМС подтверждение')
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
      navigationOptions: BackGreenHeader('Детали')
    },
    [ROUTES.SCREEN_ONLINE_CONVERSION]: {
      screen: ScreenOnlineConversion,
      navigationOptions: BackGreenHeader('Онлайн конверсия')
    },
    [ROUTES.SCREEN_CARD_OPERATIONS]: {
      screen: ScreenCardOperations,
      navigationOptions: AccountBackHeader('Операции с картой')
    },
    [ROUTES.SCREEN_SERVICE_PAYMENT]: {
      screen: ScreenServicePayment,
      navigationOptions: AccountBackHeader('Оплата')
    },
    [ROUTES.SCREEN_CREATE_VISA_VIRTUAL]: {
      screen: ScreenCreateVisaVirtual,
      navigationOptions: BackGreenHeader('Виртуальная Visa карта')
    },
    [ROUTES.SCREEN_ADD_CARD]: {
      screen: ScreenAddCard,
      navigationOptions: BackGreenHeader('Добавить карту')
    }
  },
  stackLoggedInConfig
);

export const AppAuthWithNavigator = createAppContainer(authStack);
export const AppLoggedInWithNavigator = createAppContainer(loggedInStack);
