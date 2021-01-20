import PINCode from "@haskkor/react-native-pincode";
import { useNavigation } from "@react-navigation/native";
import { ROUTES } from "const";
import React, { useEffect } from "react";
import { View } from "react-native";
import { styles } from "./styles";

export let PinCodeView = ({pushTokenExist,route}) => {

    const navigation = useNavigation()

    useEffect(() => {
        console.log("IT IS PIN CODE");
    }, []);

    const onFinish = () => {
		pushTokenExist();
        navigation.navigate(ROUTES.SCREEN_MAIN);
    };

    const isSetup = route.params?.isSetup;

    return (
        <View style={styles.container}>
            <PINCode finishProcess={onFinish} status={isSetup ? "choose" : "enter"}/>
        </View>
    );
};
