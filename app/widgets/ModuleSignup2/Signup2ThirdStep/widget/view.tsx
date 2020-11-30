import React from 'react';
import { View, ScrollView } from 'react-native';
import { styles } from './styles';
import { 
  Signup2NameField, 
  Signup2LastNameField, 
  Signup2GenderField,
  Signup2PasswordField
} from 'widgets/ModuleSignup2';

interface IOwnProps {

}

export function Signup2ThirdStepView({}: IOwnProps) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Signup2NameField />
      <Signup2LastNameField />
      <Signup2GenderField />
      <Signup2PasswordField />
    </ScrollView>
  )
}