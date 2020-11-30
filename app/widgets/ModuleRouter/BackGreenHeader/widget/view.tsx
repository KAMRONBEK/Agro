import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { styles } from './styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Palette } from 'styles';
import { TOUCHABLE_OPACITY } from 'const';
import LinearGradient from 'react-native-linear-gradient';

interface IOwnProps {
  title: string;
  back: () => void;
}

export function BackGreenHeaderView({ title, back }: IOwnProps) {
  return (
    <View style={styles.headerBox}>
      <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={[Palette.greenGrace, Palette.greenCesar]} style={styles.container}>
        <TouchableOpacity activeOpacity={TOUCHABLE_OPACITY} onPress={back} style={styles.backButton}>
          <FontAwesome name="angle-left" size={36} color={Palette.white} />
        </TouchableOpacity>
        <View style={styles.titleBox}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </LinearGradient>
    </View>
  )
}
