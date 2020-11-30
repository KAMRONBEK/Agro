import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { TemplateModal } from "templates";
import { styles } from './styles';
import { ISupplierFormOptionsDropdownItem } from 'types';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { Palette } from 'styles';
import { ScrollView } from 'react-native-gesture-handler';

interface IOwnProps {
  isVisible: boolean;
  data: ISupplierFormOptionsDropdownItem[];
  label: string;
  fieldValue: number | string;
  onClose: () => void;
  setValue: (value: ISupplierFormOptionsDropdownItem) => () => void;
}

export function ServicePaymentOptionsModalView({
  isVisible,
  data = [],
  label,
  fieldValue,
  onClose,
  setValue
}: IOwnProps) {
  function renderItem(
    item: ISupplierFormOptionsDropdownItem, 
    index: number
  ) {
    return (
      <TouchableOpacity onPress={setValue(item)} style={styles.button} key={index}>
        <Text style={styles.buttonText}>{item.title}</Text>
        {
          item.title === fieldValue && <MaterialCommunityIcons name='check' color={Palette.greenAloe} size={24} />
        }
      </TouchableOpacity>
    )
  }
  
  return (
    <TemplateModal 
      visible={isVisible}
      style={styles.modal}
      swipeDirection={null}
      close={onClose}
    >
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.headerLabel}>{label}</Text>
          <TouchableOpacity onPress={onClose} style={styles.closeButton}>
            <MaterialCommunityIcons name='close' size={28} color={Palette.white} />
          </TouchableOpacity>
        </View>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          {data.map(renderItem)}
        </ScrollView>
      </View>
    </TemplateModal>
  )
}