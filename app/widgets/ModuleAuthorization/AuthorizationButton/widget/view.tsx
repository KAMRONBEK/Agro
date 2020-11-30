import React from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import { styles } from './styles';
import { TOUCHABLE_OPACITY } from 'const';
import LinearGradient from 'react-native-linear-gradient';
import { GRADIENT_COLORS, Palette } from 'styles';

interface IOwnProps {
  loginIsFetching: boolean;
  login: () => void;
}

export function AuthorizationButtonView({
  loginIsFetching,
  login
}: IOwnProps) {
  return (
    <View style={styles.container}>
      <TouchableOpacity disabled={loginIsFetching} onPress={login} activeOpacity={TOUCHABLE_OPACITY} style={styles.button}>
        <LinearGradient style={styles.buttonInner} start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={GRADIENT_COLORS}>
          {
            loginIsFetching ? 
              <ActivityIndicator size='small' color={Palette.white} animating={loginIsFetching} /> :
              <Text style={styles.buttonTitle}>Войти</Text>
          }
        </LinearGradient>
      </TouchableOpacity>
    </View>
  )
}
