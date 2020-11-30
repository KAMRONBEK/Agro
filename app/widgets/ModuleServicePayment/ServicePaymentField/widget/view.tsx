import React from 'react';
import { View, Text, Image, TextInput } from 'react-native';
import { styles } from './styles';
// import { TextInputMask } from 'react-native-masked-text';
import TextInputMask, { onChangeTextCallback } from 'react-native-text-input-mask';
import { Palette } from 'styles';
import { ISupplierFormData, IFieldKeyboardTypes, IFieldState, FieldType, ISupplier } from 'types';
import { formatedMask, formatedMaxLength } from 'utils';

interface IOwnProps {
  field: IFieldState<FieldType.SupplierField, string>;
  supplierInputFormData: ISupplierFormData[][];
  supplier_logo: string;
  onChangeMasked: onChangeTextCallback;
  onChange: (value: string) => void;
}

export function ServicePaymentFieldView({
  field,
  supplierInputFormData,
  supplier_logo,
  onChangeMasked,
  onChange
}: IOwnProps) {
  function renderInput(form: ISupplierFormData, index: number) {
    return (
      <View key={index}>
        <View style={styles.labelBox}>
          <Text style={styles.label}>{form?.options.label}</Text>
        </View>
        <View style={styles.box}>
          <View style={styles.logoBox}>
            <Image style={styles.logo} resizeMode="contain" source={{uri: supplier_logo}} />
          </View>
          <View style={styles.inputBox}>
            {!!form?.options.mask ? (
                <TextInputMask
                  mask={formatedMask(form?.options.mask)}
                  onChangeText={onChangeMasked}
                  maxLength={formatedMaxLength(form?.options.mask)}
                  returnKeyType="done"
                  keyboardType={IFieldKeyboardTypes[form?.options.keyboard]}
                  style={styles.input}
                  placeholder={form?.options.placeholder}
                  placeholderTextColor={Palette.greyDay}
                />
              ) : (
                <TextInput
                  onChangeText={onChange}
                  maxLength={formatedMaxLength(form?.options.mask)}
                  returnKeyType="done"
                  keyboardType={IFieldKeyboardTypes[form?.options.keyboard]}
                  style={styles.input}
                  placeholder={form?.options.placeholder}
                  placeholderTextColor={Palette.greyDay}
                />
              )
            }
          </View>
        </View>
        <View style={styles.errorBox}>
          {field.errors.map((err, index) => (
            <Text key={index} style={styles.error}>{err}</Text>
          ))}
        </View>
      </View>
    )  
  }

  return (
    <View style={styles.container}>
      {
        supplierInputFormData.map(item => item.map(renderInput))
      }
    </View>
  )
}
