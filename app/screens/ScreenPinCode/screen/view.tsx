import PINCode from "@haskkor/react-native-pincode";
import { strings } from "translations/i18n";
import React from "react";
import { View } from "react-native";
import { styles } from "./styles";

export let PinCodeView = ({ pushTokenExist, route, setLoggedTime }) => {

	const onFinish = () => {
		pushTokenExist();
		setLoggedTime()
	};

	const isSetup = route.params.isSetup;

	return (
		<View style={styles.container}>
			<PINCode
				vibrationEnabled
				titleConfirm={strings("confirmPinCode")}
				titleChoose={strings("enterPinCode")}
				titleEnter={strings("enterPinCode")}
				titleAttemptFailed={strings("attemptFailed")}
				subtitleChoose=" "
				subtitleConfirm=" "
				subtitleEnter=" "
				subtitleError=" "
				finishProcess={onFinish}
				status={isSetup ? "choose" : "enter"}
				maxAttempts={1000}
			/>
		</View>
	);
};
