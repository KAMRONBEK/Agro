import React from 'react';
import { View, Image } from 'react-native';
import { styles } from './styles';
import { Logo } from '../assets';

export function SmsConfirmationLogoView() {
  return (
    <View style={styles.wrapper}>
      <View style={styles.logoBox}>
        <Logo />
      </View>
    </View>
  )
}
