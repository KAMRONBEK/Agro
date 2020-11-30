import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { TOUCHABLE_OPACITY } from 'const';
import { styles } from './styles';
import { ChevronRight } from '../assets';

interface IOwnProps {
  icon: JSX.Element;
  name: string;
  showBorderBottom: boolean;
  onPress?: () => void;
}

export function SettingsButtonView({
  icon,
  name,
  showBorderBottom,
  onPress
}: IOwnProps) {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, showBorderBottom && styles.borderBottom]} activeOpacity={TOUCHABLE_OPACITY}>
      <View style={styles.buttonIconBox}>
        {icon}
      </View>
      <View style={styles.buttonNameBox}>
        <Text style={styles.buttonName}>{name}</Text>
      </View>
      <View style={styles.buttonChevronBox}>
        <ChevronRight />
      </View>
    </TouchableOpacity>
  )
}
