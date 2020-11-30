import React from 'react';
import { View, TouchableOpacity, Text, ActivityIndicator } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { styles } from './styles';
import { Palette } from 'styles';
import { TOUCHABLE_OPACITY } from 'const';
import { ISupplierForm, ISupplierFormData } from 'types';

interface IOwnProps {
  supplierForm: ISupplierForm;
  button: ISupplierFormData;
  paymentIsFetching: boolean;
  next: () => void;
}

export function ServicePaymentFooterButtonsView({
  supplierForm,
  button,
  paymentIsFetching,
  next
}: IOwnProps) {
  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={TOUCHABLE_OPACITY} style={styles.cancelButton}>
        <Text style={styles.cancelButtonTitle}>Отмена</Text>
      </TouchableOpacity>
      <TouchableOpacity disabled={paymentIsFetching} onPress={next} activeOpacity={TOUCHABLE_OPACITY} style={styles.transferButton}>
        <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={[Palette.greenGrace, Palette.greenCesar]} style={styles.transferButtonGradient}>
          {
            paymentIsFetching ? 
              <ActivityIndicator size='small' color={Palette.white} animating={paymentIsFetching} /> :
              <Text style={styles.transferButtonTitle}>{button?.options.text}</Text>
          }
        </LinearGradient>
      </TouchableOpacity>
    </View>
  )
}
