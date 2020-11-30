import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';
import { Signup2PhoneField } from 'widgets/ModuleSignup2';

interface IOwnProps {

}

export function Signup2FirstStepView({

}: IOwnProps) {
  return (
    <View style={styles.container}>
      <View style={styles.field}>
        <Signup2PhoneField />
      </View>

      <View style={styles.titleBox}>
        <Text style={styles.title}>На указанный номер будет отправлен СМС код с активацией</Text>
      </View>
    </View>
  )
}