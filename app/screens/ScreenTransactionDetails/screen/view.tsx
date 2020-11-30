import React from 'react';
import { View } from 'react-native';
import { styles } from './styles';
import { 
  TransactionDetailsType, TransactionDetailsInfo
} from 'widgets/ModuleTransactionDetails';

export function ScreenTransactionDetailsView() {
  return (
    <View style={styles.container}>
      <TransactionDetailsType />
      <TransactionDetailsInfo />
    </View>
  )
}