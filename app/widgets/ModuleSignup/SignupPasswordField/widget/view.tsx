import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Eye, HideEye } from '../assets';
import { Palette } from 'styles';
import { TOUCHABLE_OPACITY } from 'const';
import { styles } from './styles';
import { IFieldState, FieldType } from 'types';

interface IOwnProps {
  field: IFieldState<FieldType.Password, string>;
  hidePassword: boolean;
  onChange: (value: string) => void;
  toggleHidePassword: () => void;
}

export function SignupPasswordFieldView({
  field,
  hidePassword,
  onChange,
  toggleHidePassword
}: IOwnProps) {
  function renderError(value: string, index: number) {
    return <Text key={index} style={styles.error}>{value}</Text>
  }

  return (
    <View>
      <View style={[styles.inputBox, field.errors.length && styles.inputBoxError]}>
        <TextInput
          placeholder={field.required ? 'Пароль*' : 'Пароль'}
          style={styles.input}
          value={field.value}
          underlineColorAndroid={Palette.transparent}
          secureTextEntry={hidePassword}
          onChangeText={onChange}
        />
        <TouchableOpacity onPress={toggleHidePassword} activeOpacity={TOUCHABLE_OPACITY} style={styles.showPasswordButton}>
          {hidePassword ? <Eye /> : <HideEye />}
        </TouchableOpacity>
      </View>
      <View style={styles.errorBox}>
        {field.errors.map(renderError)}
      </View>
    </View>
  )
}
