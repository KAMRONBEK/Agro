import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { TOUCHABLE_OPACITY } from 'const';

export function AuthorizationFooterView() {
  return (
    <View style={styles.container}>
      <View style={styles.footerTextBox}>
        <Text style={styles.footerText}>У вас нет аккаунта?</Text>
        <TouchableOpacity activeOpacity={TOUCHABLE_OPACITY}>
          <Text style={styles.footerSignupButtonTitle}>Зарегистрируйтесь</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
