import React from 'react';
import { View, TouchableOpacity, Text } from "react-native";
import Entypo from 'react-native-vector-icons/Entypo';
import { styles } from './styles';
import { ISupplierFormOptionsDropdownItem, ISupplierFormData, FieldType, IFieldState } from 'types';
import { TOUCHABLE_OPACITY } from 'const';
import { ServicePaymentOptionsModal, ServicePaymentDropdownField, ServicePaymentStaticAmount } from 'widgets/ModuleServicePayment';
import { Palette } from 'styles';

interface IOwnProps {
  fieldValue: number | string;
  field: IFieldState<FieldType.SupplierDropdown, number>;
  selectItemFieldValue: string;
  selectForm: ISupplierFormData;
  openModal: () => void;
  openSelectItemsModal: () => void;
}

export function ServicePaymentSelectButtonView({
  fieldValue,
  field,
  selectItemFieldValue,
  selectForm,
  openModal,
  openSelectItemsModal
}: IOwnProps) {
  return (
    <View>
      <View style={styles.labelBox}>
        <Text style={styles.label}>{selectForm?.options.label}</Text>
      </View>

      <TouchableOpacity onPress={openModal} activeOpacity={TOUCHABLE_OPACITY} style={styles.button}>
        <Text numberOfLines={1} style={styles.buttonText}>{fieldValue}</Text>
        <Entypo name='chevron-small-down' size={24} color={Palette.greenAloe} />
      </TouchableOpacity>

      <ServicePaymentDropdownField />

      {
        !!selectItemFieldValue && <TouchableOpacity onPress={openSelectItemsModal} activeOpacity={TOUCHABLE_OPACITY} style={styles.selectItemsButton}>
          <Text numberOfLines={1} style={styles.buttonText}>{selectItemFieldValue}</Text>
          <Entypo name='chevron-small-down' size={24} color={Palette.greenAloe} />
        </TouchableOpacity>
      }

      <ServicePaymentStaticAmount />
    </View>
  )
}