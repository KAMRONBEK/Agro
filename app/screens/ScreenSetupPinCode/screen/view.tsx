import PINCode from "@haskkor/react-native-pincode";
import { strings } from "translations/i18n";
import React from "react";
import { View } from "react-native";
import { styles } from "./styles";
import { IProps } from "./connect";

export let ScreenSetupPinCodeControllerView = ({ pushTokenExist, setLoggedTime }: IProps) => {
	const onFinish = () => {
		pushTokenExist();
		setLoggedTime();
	};

	return (
		<View style={styles.container}>
			<PINCode
				vibrationEnabled
				titleConfirm={strings("confirmPinCode")}
				titleChoose={strings("enterPinCodeChange")}
				titleEnter={strings("enterPinCode")}
				titleAttemptFailed={strings("attemptFailed")}
				subtitleChoose=" "
				subtitleConfirm=" "
				subtitleEnter=" "
				subtitleError=" "
				finishProcess={onFinish}
				status={"choose"}
				maxAttempts={1000}
			/>
		</View>
	);
};
