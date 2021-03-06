import PINCode from "@haskkor/react-native-pincode";
import { strings } from "translations/i18n";
import React from "react";
import { View } from "react-native";
import { styles } from "./styles";
import { IProps } from "./connect";
import { useNavigation } from "@react-navigation/native";
import { ROUTES } from "../../../const";
export let PinCodeView = ({ pushTokenExist, route, setLoggedTime, useFingerPrint }: IProps) => {
	const navigation = useNavigation();
	const onFinish = () => {
		const isChange = route.params.isChange;
		if (!isChange) {
			pushTokenExist();
			setLoggedTime();
		} else {
			navigation.navigate(ROUTES.SCREEN_SETUP_PIN);
		}
	};

	const isSetup = route.params.isSetup;

	return (
		<View style={styles.container}>
			<PINCode
				vibrationEnabled
				touchIDDisabled={!useFingerPrint}
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
