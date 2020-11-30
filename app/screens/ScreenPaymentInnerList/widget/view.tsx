import React from 'react';
import { View } from 'react-native';
import { styles } from './styles';
import { PaymentInnerList } from 'widgets/ModulePaymentInnerList';

export function ScreenPaymentInnerListView() {
  return (
    <View style={styles.container}>
      <PaymentInnerList />
    </View>
  )
}
