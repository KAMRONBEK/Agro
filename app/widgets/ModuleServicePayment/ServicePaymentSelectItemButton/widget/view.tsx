import React from 'react';
import { View, TouchableOpacity, Text } from "react-native";
import { styles } from './styles';
import { ISupplierFormData } from 'types';

interface IOwnProps {
  selectForm: ISupplierFormData;
}

export function ServicePaymentSelectItemButtonView({
  selectForm,
}: IOwnProps) {
  return (
    <View>
      <TouchableOpacity style={styles.button}>
        <Text></Text>
      </TouchableOpacity>
    </View>
  )
}