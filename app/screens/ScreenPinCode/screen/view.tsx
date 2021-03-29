import PINCode from "@haskkor/react-native-pincode";
import { useNavigation } from "@react-navigation/native";
import { ROUTES } from "const";
import { strings } from "locales/i18n";
import React, { useEffect } from "react";
import { View } from "react-native";
import reactotron from "store/ReactatronConfig";
import { styles } from "./styles";

export let PinCodeView = ({ pushTokenExist, route,setLoggedTime }) => {

	useEffect(() => {
		console.log("IT IS PIN CODE");
		reactotron.log({ route });
	}, []);

	const onFinish = () => {
		pushTokenExist();
		setLoggedTime()
	};

	const isSetup = route.params?.isSetup;

	return (
		<View style={styles.container}>
			<PINCode
				titleConfirm={strings("confirmPinCode")}
				titleChoose={strings("enterPinCode")}
				titleEnter={strings("enterPinCode")}
				subtitleChoose=" "
				subtitleConfirm=" "
				subtitleEnter=" "
				subtitleError=" "
				finishProcess={onFinish}
				status={isSetup ? "choose" : "enter"}
			/>
		</View>
	);
};
