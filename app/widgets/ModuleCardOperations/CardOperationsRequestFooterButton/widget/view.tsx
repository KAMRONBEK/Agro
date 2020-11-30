import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { styles } from './styles';
import { Palette } from 'styles';
import { TOUCHABLE_OPACITY } from 'const';

export function CardOperationsRequestFooterButtonView() {
  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={TOUCHABLE_OPACITY} style={styles.requestButton}>
        <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={[Palette.greenGrace, Palette.greenCesar]} style={styles.requestButtonGradient}>
          <Text style={styles.requestButtonTitle}>Запросить</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  )
}
