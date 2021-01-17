import React from "react";
import { AccountHeaderController } from "./controller";

export const AccountHeader = (title?: string) => {
	return {
		header: ({ navigation }) => <AccountHeaderController title={title} navigation={navigation} />,
		headerLeft: null
	};
};
