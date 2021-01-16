import React from "react";
import { ROUTES, CARD_TYPE, HEADER_MODE } from "const";
import { Palette } from "../styles";
import { Platform } from "react-native";
import { setAlpha } from "../utils";

export const stackAuthConfig = {
	initialRouteName: ROUTES.SCREEN_LOCALIZATION,
	mode: CARD_TYPE,
	headerMode: HEADER_MODE,
	cardShadowEnabled: false,
	cardOverlayEnabled: false
};

export const screenOptions = {
	initialRouteName: ROUTES.SCREEN_PIN_CODE,
	mode: CARD_TYPE,
	headerMode: HEADER_MODE,
	cardShadowEnabled: false,
	cardOverlayEnabled: false
};

export const tabBarOptions = {
	activeTintColor: Palette.greenText,
	inactiveTintColor: Palette.greyLightText,
	allowFontScaling: false,
	tabStyle: {
		paddingTop: 5
	},
	labelStyle: {
		fontFamily: "SFUIDisplay-Regular",
		fontSize: 14,
		marginBottom: 5
	},
	style: {
		height: 70,
		borderTopWidth: Platform.OS === "ios" ? 0 : 1,
		borderTopColor: setAlpha(Palette.black, 0.1),
		shadowOffset: {
			width: 0,
			height: -5
		},
		shadowColor: Palette.black,
		shadowOpacity: 0.15,
		shadowRadius: 10
	}
};
