import React from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import { styles } from './styles';
import { TOUCHABLE_OPACITY } from 'const';
import { Palette } from 'styles';

interface IOwnProps {
  countdown: number;
  codeIsFetching: boolean;
  showCountdown: boolean;
  formatedSeconds: (countdown: number) => string;
  sendCode: () => void;
}

export function CountdownTimerView({ 
  countdown, 
  formatedSeconds,
  codeIsFetching,
  showCountdown,
  sendCode
}: IOwnProps) {
  return (
    <View style={styles.container}>
      {
        !showCountdown ? <TouchableOpacity onPress={sendCode} activeOpacity={TOUCHABLE_OPACITY} style={styles.sendCodeButton}>
          {
            codeIsFetching ? 
              <ActivityIndicator color={Palette.greenLeaf} size='small' animating={codeIsFetching} /> : 
              <Text style={styles.sendCodeButtonText}>Отправить код</Text>
          }
        </TouchableOpacity> : <Text style={styles.countdown}>00:{formatedSeconds(countdown)}</Text>
      }
    </View>
  )
}