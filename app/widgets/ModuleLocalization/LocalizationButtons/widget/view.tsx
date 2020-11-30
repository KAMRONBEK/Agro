import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { styles } from './styles';
import { TOUCHABLE_OPACITY, Locale } from 'const';

interface IOwnProps {
  chooseLanguage: (locale: Locale) => () => void;
}

export function LocalizationButtonsView({
  chooseLanguage
}: IOwnProps) {
  return (
    <View style={styles.buttonsList}>
      <TouchableOpacity onPress={chooseLanguage(Locale.RU)} activeOpacity={TOUCHABLE_OPACITY} style={styles.button}>
        <Text style={styles.buttonText}>Русский</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={chooseLanguage(Locale.EN)} activeOpacity={TOUCHABLE_OPACITY} style={styles.button}>
        <Text style={styles.buttonText}>English</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={chooseLanguage(Locale.UZ)} activeOpacity={TOUCHABLE_OPACITY} style={styles.button}>
        <Text style={styles.buttonText}>O`zbek</Text>
      </TouchableOpacity>
    </View>
  )
}
