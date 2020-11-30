import React from 'react';
import { KeyboardAvoidingView, ScrollView } from "react-native";
import { styles } from "./styles";
import { SignupTitle, SignupForm, SignupButton, SignupFooter } from 'widgets/ModuleSignup';

export function ScreenSignupView() {
  return (
    <KeyboardAvoidingView enabled={false} keyboardVerticalOffset={80} behavior="padding" style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer} keyboardShouldPersistTaps="handled">
        <SignupTitle />
        <SignupForm />
        <SignupButton />
        <SignupFooter />
      </ScrollView>
    </KeyboardAvoidingView>
  )
}
