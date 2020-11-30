import React from 'react';
import { View, Image } from 'react-native';
import { styles } from './styles';

export function LoginTypeLogoView() {
  return (
    <View style={styles.wrapper}>
      <View style={styles.logoBox}>
        <Image resizeMode="contain" source={require('../assets/Agrobank.png')} style={styles.logo} />
      </View>
    </View>
  )
}
