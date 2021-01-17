import React from "react";
import { GreenHeaderController } from "./controller";

export const GreenHeader = (title?: string) => {
	return {
		header: ({ navigation }) => <GreenHeaderController title={title} navigation={navigation} />,
		headerLeft: null
	};
};
