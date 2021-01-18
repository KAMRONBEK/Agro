import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";

export const withNavigation = (Component: any) => {
	return (props: any) => {
		const navigation = useNavigation();
		let route = useRoute();
		return <Component navigation={navigation} route={route} {...props} />;
	};
};
