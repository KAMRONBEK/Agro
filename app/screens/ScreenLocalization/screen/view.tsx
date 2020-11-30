import React from "react";
import { View, StatusBar } from "react-native";
import { styles } from './styles';
import { LocalizationButtons } from 'widgets/ModuleLocalization';
import { Palette } from 'styles';

export function ScreenLocalizationView() {
  return (
    <View style={styles.safearea}>
      <LocalizationButtons />
    </View>
  )
}
