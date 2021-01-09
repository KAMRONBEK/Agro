import React from 'react';
import { Keyboard, KeyboardAvoidingView, Platform, TouchableWithoutFeedback } from 'react-native';
import { Signup2Steps } from 'widgets/ModuleSignup2';
import { styles } from './styles';

export function ScreenSignup2View() {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : null}
        keyboardVerticalOffset={30}
        style={styles.container}
      >
        <Signup2Steps />
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  )
}