import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { styles } from './styles';
import { TOUCHABLE_OPACITY } from 'const';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Palette } from 'styles';
import LinearGradient from 'react-native-linear-gradient';

interface IOwnProps {
  title: string;
  back: () => void;
}

export function AccountBackHeaderView({
  title,
  back
}: IOwnProps) {
  return (
    <View style={styles.headerBox}>
      <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={[Palette.greenGrace, Palette.greenCesar]} style={styles.gradient}>
        <TouchableOpacity activeOpacity={TOUCHABLE_OPACITY} onPress={back} style={styles.backButton}>
          <FontAwesome name="angle-left" size={32} color={Palette.white} />
        </TouchableOpacity>
        <View style={styles.titleBox}>
          <Text style={styles.title}>{title}</Text>
        </View>
        <TouchableOpacity activeOpacity={TOUCHABLE_OPACITY} style={styles.accountButton}>
          <Image source={require('../assets/Avatar/avatar.png')} resizeMode="contain" style={styles.accountAvatar} />
        </TouchableOpacity>
      </LinearGradient>
    </View>
  )
}
