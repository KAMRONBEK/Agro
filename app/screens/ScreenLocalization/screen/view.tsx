import React from "react";
import { View } from "react-native";
import { styles } from './styles';
import { LocalizationButtons } from 'widgets/ModuleLocalization';

export function ScreenLocalizationView() {
  return (
    <View style={styles.safearea}>
      <LocalizationButtons />
    </View>
  )
}
