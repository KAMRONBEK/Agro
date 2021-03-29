import PINCode from "@haskkor/react-native-pincode";
import React from "react";
import { View } from "react-native";
import { styles } from "./style";

export const SetUpPinCode = ({}) => {
	return (
		<View style={styles.container}>
			<PINCode status="choose" finishProcess={pinCode => console.log(pinCode)} />
		</View>
	);
};
