import React from "react";
import { NavigationScreenProp } from "react-navigation";
import { BackHeaderController } from "./controller";

export const BackHeader = (title?: string) => ({ navigation }: { navigation: NavigationScreenProp<any, any> }) => {
	return {
		header: () => <BackHeaderController title={title} navigation={navigation} />,
		headerLeft: null
	};
};
