import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { ChevronDown } from '../assets';
import { TOUCHABLE_OPACITY } from 'const';

export function OnlineConversionCardView() {
  return (
    <TouchableOpacity activeOpacity={TOUCHABLE_OPACITY} style={styles.container}>
      <View style={styles.logoBox}>
        <Image style={styles.logo} resizeMode="contain" source={require('../assets/Logo/logo17x20.png')} />
      </View>
      <View style={styles.cardData}>
        <Text style={styles.cardNumber}>8600 2555 5465 1973</Text>
        <Text style={styles.cardAmount}>15 000 000</Text>
      </View>
      <View style={styles.cardChevronBox}>
        <ChevronDown />
      </View>
    </TouchableOpacity>
  )
}
