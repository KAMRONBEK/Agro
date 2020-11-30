import React from 'react';
import { View, Text } from 'react-native';
import { TextInputMask } from 'react-native-masked-text';
import { styles } from './styles';
import { Logo } from '../assets';
import { ITransferInfo } from 'types';

interface IOwnProps {
  transferInfo: ITransferInfo;
  commission: number;
}

export function CardOperationsBankCommissionView({
  transferInfo,
  commission
}: IOwnProps) {
  return (
    <View style={styles.container}>
      <View style={styles.labelBox}>
        <Text style={styles.label}>Комиссия банка</Text>
      </View>
      <View style={styles.commissionBox}>
        <View style={styles.commissionPercentBox}>
          <Text style={styles.commissionPercent}>{transferInfo?.percent}% =</Text>
        </View>
        <View style={styles.commissionAmountBox}>
          <TextInputMask
            type={'money'}
            editable={false}
            options={{
              precision: 0,
              separator: ' ',
              delimiter: ' ',
              unit: '',
              suffixUnit: 'сум'
            }}
            value={String(commission)}
            style={styles.commissionAmount}
          />
        </View>
        <View style={styles.commissionLogoBox}>
          <Logo />
        </View>
      </View>
    </View>
  )
}
