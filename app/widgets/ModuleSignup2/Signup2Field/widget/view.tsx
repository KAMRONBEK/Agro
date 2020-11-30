import React from 'react';
import { View, TextInput, Text, KeyboardTypeOptions } from 'react-native';
import TextInputMask from 'react-native-text-input-mask';
import { styles } from './styles';
import { Palette } from 'styles';
import { IFieldState, FieldType } from 'types';

interface IOwnProps {
  placeholder: string;
  field: IFieldState<FieldType, string>;
  mask: string;
  keyboardType: KeyboardTypeOptions;
  editable: boolean;
  onChange: (value: string) => void;
  onChangeMasked: (formatted: string, extracted: string) => void;
}

export function Signup2FieldView({
  placeholder,
  field,
  mask,
  keyboardType,
  editable,
  onChange,
  onChangeMasked
}: IOwnProps) {
  function renderError(value: string, index: number) {
    return <Text key={index} style={styles.error}>{value}</Text>
  }
  
  return (
    <View>
      <View style={[styles.inputBox, field.errors.length && styles.inputBoxError]}>
        {
          !!mask ? <TextInputMask
            onChangeText={onChangeMasked}
            style={styles.input}
            value={field.value}
            placeholderTextColor={Palette.grey}
            editable={editable}
            keyboardType={keyboardType}
            placeholder={field.required ? placeholder + '*' : placeholder}
            underlineColorAndroid={Palette.transparent}
            mask={mask}
          /> : <TextInput
            placeholder={field.required ? placeholder + '*' : placeholder}
            style={styles.input}
            placeholderTextColor={Palette.grey}
            value={field.value}
            keyboardType={keyboardType}
            editable={editable}
            underlineColorAndroid={Palette.transparent}
            onChangeText={onChange}
          />
        }
      </View>
      <View style={styles.errorBox}>
        {field.errors.map(renderError)}
      </View>
    </View>
  )
}
