import React from 'react';
import { ScrollView, KeyboardAvoidingView, Platform, TouchableNativeFeedback, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { styles } from './styles';
import { Signup2Steps } from 'widgets/ModuleSignup2';

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