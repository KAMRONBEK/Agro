import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { styles } from './styles';
import {
  SignupNameField,
  SignupLastNameField,
  SignupSecondNameField,
  SignupPasswordField
} from 'widgets/ModuleSignup';
import { SignupGenderField } from 'widgets/ModuleSignup/SignupGenderField';
import { SignupPhoneField } from 'widgets/ModuleSignup/SignupPhoneField';
import { TOUCHABLE_OPACITY } from 'const';

export function SignupFormView() {
  return (
    <View style={styles.container}>
      <SignupLastNameField />
      <SignupNameField />
      <SignupSecondNameField />
      <SignupGenderField />
      <SignupPhoneField />
      <SignupPasswordField />
      <View style={styles.forgotPasswordBox}>
        <TouchableOpacity activeOpacity={TOUCHABLE_OPACITY} style={styles.forgotPasswordButton}>
          <Text style={styles.forgotPasswordButtonTitle}>Забыли пароль?</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
