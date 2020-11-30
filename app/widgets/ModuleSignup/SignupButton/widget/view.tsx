import React from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import { styles } from './styles';
import { TOUCHABLE_OPACITY } from 'const';
import LinearGradient from 'react-native-linear-gradient';
import { GRADIENT_COLORS, Palette } from 'styles';

interface IOwnProps {
  codeIsFetching: boolean;
  sendCode: () => void;
}

export function SignupButtonView({
  codeIsFetching,
  sendCode
}: IOwnProps) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={sendCode} activeOpacity={TOUCHABLE_OPACITY} style={styles.button}>
        <LinearGradient style={styles.buttonInner} start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={GRADIENT_COLORS}>
          {
            codeIsFetching ? 
              <ActivityIndicator animating={codeIsFetching} size='small' color={Palette.white} /> :
              <Text style={styles.buttonTitle}>Подтвердить</Text>
          }
        </LinearGradient>
      </TouchableOpacity>
    </View>
  )
}
