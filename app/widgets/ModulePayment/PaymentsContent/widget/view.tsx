import React from 'react';
import { View } from 'react-native';
import { styles } from './styles';
import {
  PaymentsATM,
  PaymentsBankBranch,
  PaymentsCategoriesBox,
  PaymentsNews,
  PaymentsCategories,
  PaymentsTabs
} from 'widgets/ModulePayment';
import { SERVICES } from './contants';

export function PaymentsContentView() {
  return (
    <View style={styles.container}>
      <PaymentsTabs />
      <PaymentsCategoriesBox data={SERVICES} label="Онлайн сервисы" />
      <PaymentsCategories showAllServices={false} label="Оплата услуг" />
      <PaymentsATM />
      <PaymentsBankBranch />
      <PaymentsNews />
    </View>
  )
}
