import React from 'react';
import { View, Text } from 'react-native';
import CodeInput from 'react-native-confirmation-code-input';
import TextInputMask from 'react-native-text-input-mask';
import { styles } from './styles';
import { Palette } from 'styles';
import { CountdownTimer } from 'widgets/ModuleShared/CountdownTimer';
import { IFieldState, FieldType } from 'types';

interface IOwnProps {
  field: IFieldState<FieldType.Code, string>;
  phoneField: IFieldState<FieldType.Phone, string>;
  onChange: (value: string) => void;
}

export function SmsConfirmationFormView({
  field,
  phoneField,
  onChange
}: IOwnProps) {
  function renderError(value: string, index: number) {
    return <Text key={index} style={styles.error}>{value}</Text>
  }

  return (
    <View style={styles.container}>
      <View style={styles.phoneBox}>
        <TextInputMask
          onChangeText={() => null}
          style={styles.phone}
          editable={false}
          value={phoneField.value}
          mask={'[000] [00] [000] [00] [00]'}
        />
        {
          !!phoneField.errors.length && <View style={styles.phoneErrorBox}>
            {phoneField.errors.map(renderError)}
          </View>
        }
      </View>
      <View style={styles.instructionBox}>
        <Text style={styles.instructionText}>Введите код полученный в сообщении</Text>
      </View>
      <View style={styles.form}>
        <CodeInput
          className={'border-b'}
          space={20}
          codeLength={5}
          codeInputStyle={styles.input}
          activeColor={Palette.greyBorder}
          inactiveColor={Palette.greyBorder}
          keyboardType="number-pad"
          size={22}
          value={field.value}
          inputPosition='center'
          onFulfill={onChange}
        />
        {
          !!field.errors.length && <View style={styles.errorBox}>
            {field.errors.map(renderError)}
          </View>
        }
      </View>
      <View style={styles.countdown}>
        <CountdownTimer />
      </View>
    </View>
  )
}
