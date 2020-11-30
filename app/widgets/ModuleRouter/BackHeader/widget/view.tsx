import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { styles } from './styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Palette } from 'styles';
import { TOUCHABLE_OPACITY } from 'const';

interface IOwnProps {
  title: string;
  back: () => void;
}

export function BackHeaderView({ title, back }: IOwnProps) {
  return (
    <View style={styles.headerBox}>
      <TouchableOpacity activeOpacity={TOUCHABLE_OPACITY} onPress={back} style={styles.backButton}>
        <FontAwesome name="angle-left" size={36} color={Palette.blackText} />
      </TouchableOpacity>
      <View style={styles.titleBox}>
        <Text>{title}</Text>
      </View>
    </View>
  )
}
