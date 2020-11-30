import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { TOUCHABLE_OPACITY } from 'const';
import { UzCard, Humo, Visa } from '../assets';
import { VisaCurrencyType } from 'types';

interface IOwnProps {
  openAddCardModal: () => void;
  createVisaVirtual: (type: VisaCurrencyType) => () => void;
}

export function AddCardButtonsView({
  openAddCardModal,
  createVisaVirtual
}: IOwnProps) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={openAddCardModal} activeOpacity={TOUCHABLE_OPACITY} style={styles.button}>
        <UzCard />
        <Text style={styles.buttonText}>Uzcard</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={openAddCardModal} activeOpacity={TOUCHABLE_OPACITY} style={styles.button}>
        <Humo />
        <Text style={styles.buttonText}>Humo</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={createVisaVirtual(VisaCurrencyType.Usd)} activeOpacity={TOUCHABLE_OPACITY} style={styles.button}>
        <Visa />
        <Text style={styles.buttonText}>Visa Virtual (USD)</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={createVisaVirtual(VisaCurrencyType.Sum)} activeOpacity={TOUCHABLE_OPACITY} style={styles.button}>
        <Visa />
        <Text style={styles.buttonText}>Visa Virtual (SUM)</Text>
      </TouchableOpacity>
    </View>
  )
}