import React from 'react';
import { KeyboardAvoidingView, ScrollView } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { styles } from './styles';
import {
  SmsConfirmationLogo,
  SmsConfirmationForm,
  SmsConfirmationTrustTrigger,
  SmsConfirmationButton
} from 'widgets/ModuleSmsConfirmation';

export function ScreenSmsConfirmationView() {
  return (
    <KeyboardAwareScrollView contentContainerStyle={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer} keyboardShouldPersistTaps="handled">
        <SmsConfirmationLogo />
        <SmsConfirmationForm />
        <SmsConfirmationTrustTrigger />
        <SmsConfirmationButton />
      </ScrollView>
    </KeyboardAwareScrollView>
  )
}
