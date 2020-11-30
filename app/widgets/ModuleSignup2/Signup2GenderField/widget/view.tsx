import React from 'react';
import { FieldType, IFieldState, Gender, GenderRu } from 'types';
import { TouchableOpacity, Text, TextInput, View } from 'react-native';
import { TOUCHABLE_OPACITY } from 'const';
import { Palette } from 'styles';
import { styles } from './styles';

interface IOwnProps {
  field: IFieldState<FieldType.Gender, Gender>;
  openModal: () => void;
}

export function Signup2GenderFieldView({
  field,
  openModal
}: IOwnProps) {
  function renderError(value: string, index: number) {
    return <Text key={index} style={styles.error}>{value}</Text>
  }

  return (
    <TouchableOpacity onPress={openModal} activeOpacity={TOUCHABLE_OPACITY}>
      <View pointerEvents='none' style={[styles.inputBox, field.errors.length && styles.inputBoxError]}>
        <TextInput
          placeholder={field.required ? 'Пол*' : 'Пол'}
          style={styles.input}
          value={GenderRu[field.value]}
          editable={false}
          underlineColorAndroid={Palette.transparent}
        />
      </View>
      <View pointerEvents='none' style={styles.errorBox}>
        {field.errors.map(renderError)}
      </View>
    </TouchableOpacity>
  )
}
