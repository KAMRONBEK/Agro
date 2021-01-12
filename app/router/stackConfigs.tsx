import React from 'react';
import { ROUTES, CARD_TYPE, HEADER_MODE } from 'const';
import { CreateNavigatorConfig, NavigationStackRouterConfig, NavigationRoute } from 'react-navigation';
import { NavigationStackConfig, NavigationStackOptions, NavigationStackProp } from 'react-navigation-stack';
import { NavigationTabRouterConfig } from 'react-navigation';
import { Palette } from 'styles';
import { NavigationTabProp } from 'react-navigation-tabs';
import { Platform } from 'react-native';
import { setAlpha } from 'utils';

export const stackAuthConfig: CreateNavigatorConfig<NavigationStackConfig, NavigationStackRouterConfig, NavigationStackOptions, NavigationStackProp<NavigationRoute, any>> = {
  initialRouteName: ROUTES.SCREEN_LOCALIZATION,
  mode: CARD_TYPE,
  headerMode: HEADER_MODE,
  cardShadowEnabled: false,
  cardOverlayEnabled: false
}

export const stackLoggedInConfig: CreateNavigatorConfig<NavigationStackConfig, NavigationStackRouterConfig, NavigationStackOptions, NavigationStackProp<NavigationRoute, any>> = {
  initialRouteName: ROUTES.SCREEN_PIN_CODE,
  mode: CARD_TYPE,
  headerMode: HEADER_MODE,
  cardShadowEnabled: false,
  cardOverlayEnabled: false
}

export const bottomTabNavigatorConfig: CreateNavigatorConfig<any, NavigationTabRouterConfig, any, NavigationTabProp<any>> = {
  initialRouteName: ROUTES.SCREEN_MAIN,
  tabBarOptions: {
    activeTintColor: Palette.greenText,
    inactiveTintColor: Palette.greyLightText,
    allowFontScaling: false,
    style: {
      height: 70,
      borderTopWidth: Platform.OS === 'ios' ? 0 : 1,
      borderTopColor: setAlpha(Palette.black, 0.1),
      shadowOffset: {
        width: 0,
        height: -5
      },
      shadowColor: Palette.black,
      shadowOpacity: 0.15,
      shadowRadius: 10,
    },
    tabStyle: {
      paddingTop: 5
    },
    labelStyle: {
      fontFamily: 'SFUIDisplay-Regular',
      fontSize: 14,
      marginBottom: 5
    }
  }
}
