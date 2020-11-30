import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { styles } from './styles';
import { TextInputMask } from 'react-native-masked-text';
import { IFieldState, FieldType } from 'types';

interface IOwnProps {
  field: IFieldState<FieldType.SupplierFieldStaticAmount, string>;
}

export function ServicePaymentStaticAmountView({
  field
}: IOwnProps) {
  return (
    <View style={styles.container}>
      <View style={styles.labelBox}>
        <Text style={styles.label}>Cумма</Text>
      </View>
      <View style={styles.inputBox}>
        <TextInputMask
          type={'money'}
          options={{
            precision: 0,
            separator: ' ',
            delimiter: ' ',
            unit: '',
            suffixUnit: ''
          }}
          keyboardType='number-pad'
          returnKeyType='done'
          value={field.value}
          style={styles.input}
          editable={false}
        />
      </View>
    </View>
  )
}
