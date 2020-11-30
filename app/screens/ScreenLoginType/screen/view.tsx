import React from "react";
import { View } from "react-native";
import { styles } from './styles';
import { LoginTypeLogo, LoginTypeButtons } from 'widgets/ModuleLoginType';

export function ScreenLoginTypeView() {
  return (
    <View style={styles.safearea}>
      <LoginTypeLogo />
      <LoginTypeButtons />
    </View>
  )
}
