import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { styles } from './styles';
import { Palette } from 'styles';

export function OnlineCurrencyMFIView() {
  return (
    <View style={styles.container}>
      <View style={styles.labelBox}>
        <Text style={styles.label}>МФО</Text>
      </View>
      <View style={styles.inputBox}>
        <TextInput
          placeholder="Введите МФО"
          style={styles.input}
          returnKeyType="done"
          keyboardType="number-pad"
          placeholderTextColor={Palette.greyLightText}
        />
      </View>
    </View>
  )
}
