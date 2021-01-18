import PINCode from "@haskkor/react-native-pincode";
import { useNavigation } from "@react-navigation/native";
import { ROUTES } from "const";
import React, { useEffect } from "react";
import { View } from "react-native";
import { styles } from "./styles";

export let PinCodeView = () => {

    const navigation = useNavigation()

    useEffect(() => {
        console.log("IT IS PIN CODE");
    }, []);

    const onFinish = () => {
        navigation.navigate(ROUTES.SCREEN_MAIN);
    };

    const isSetup = navigation.params?.isSetup;

    return (
        <View style={styles.container}>
            <PINCode finishProcess={onFinish} status={isSetup ? "choose" : "enter"}/>
        </View>
    );
};
