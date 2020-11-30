import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { styles } from './styles';
import { Palette } from 'styles';

export function OnlineConversionFieldView() {
  return (
    <View style={styles.container}>
      <View style={styles.labelBox}>
        <Text style={styles.label}>Текущий курс</Text>
        <Text style={styles.labelCurrentRate}>9570.21 <Text style={styles.labelCurrentRateLight}>сум</Text></Text>
      </View>
      <View style={styles.box}>
        <View style={styles.inputBox}>
          <TextInput
            placeholder="Сумма USD"
            keyboardType="number-pad"
            returnKeyType="done"
            placeholderTextColor={Palette.greyLightText}
            style={styles.input}
          />
        </View>
        <View style={styles.resultBox}>
          <TextInput
            placeholder="Сконвертированная сумма"
            editable={false}
            placeholderTextColor={Palette.greyLightText}
            style={styles.result}
          />
        </View>
      </View>
    </View>
  )
}
