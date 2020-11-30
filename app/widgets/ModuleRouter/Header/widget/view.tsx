import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { styles } from './styles';
import { TOUCHABLE_OPACITY } from 'const';
import { Notification } from '../assets';

interface IOwnProps {

}

export function AccountHeaderView({}: IOwnProps) {
  return (
    <View style={styles.headerBox}>
      <TouchableOpacity activeOpacity={TOUCHABLE_OPACITY} style={styles.notifyButton}>
        <Notification />
        <View style={styles.notifiationCountBox}>
          <Text style={styles.notificationCount}>10</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.titleBox}>
        <Text style={styles.title}>FRESH</Text>
      </View>
      <TouchableOpacity activeOpacity={TOUCHABLE_OPACITY} style={styles.accountButton}>
        <Image source={require('../assets/Avatar/avatar.png')} resizeMode="contain" style={styles.accountAvatar} />
      </TouchableOpacity>
      <View style={styles.bottomLine} />
    </View>
  )
}
