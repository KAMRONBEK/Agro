import React from "react";
import { BackGreenHeaderController } from "./controller";

export const BackGreenHeader = (title?: string) => {
	return {
		header: ({ navigation }) => <BackGreenHeaderController title={title} navigation={navigation} />,
		headerLeft: null
	};
};
