import React from 'react';
import { KeyboardAvoidingView, ScrollView } from "react-native";
import { styles } from "./styles";
import { AuthorizationTitle, AuthorizationForm, AuthorizationButton, AuthorizationFooter } from 'widgets/ModuleAuthorization';

export function ScreenAuthorizationView() {
  return (
    <KeyboardAvoidingView behavior="height" style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer} keyboardShouldPersistTaps="handled">
        <AuthorizationTitle />
        <AuthorizationForm />
        <AuthorizationButton />
      </ScrollView>
      <AuthorizationFooter />
    </KeyboardAvoidingView>
  )
}
