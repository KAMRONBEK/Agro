import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';

export function SignupTitleView() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Введите ваши данные для регистрации в системе</Text>
    </View>
  )
}
