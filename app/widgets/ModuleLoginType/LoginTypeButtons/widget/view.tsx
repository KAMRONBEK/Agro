import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { styles } from './styles';;
import LinearGradient from 'react-native-linear-gradient';
import { LOGIN, BECOME_CUSTOMER, TOUCHABLE_OPACITY, ROUTES } from 'const';
import I18n from 'translations/i18n';
import { Palette } from 'styles';

interface IOwnProps {
  routeTo: (routeName: ROUTES) => () => void;
}

export function LoginTypeButtonsView({
  routeTo
}: IOwnProps) {
  return (
    <View style={styles.buttonsBox}>
      <TouchableOpacity onPress={routeTo(ROUTES.SCREEN_AUTHORIZATION)} activeOpacity={TOUCHABLE_OPACITY} style={styles.buttonLogin}>
        <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={[Palette.greenGrace, Palette.greenCesar]} style={styles.buttonGradient}>
          <Text style={styles.buttonLoginText}>{I18n.t(LOGIN)}</Text>
        </LinearGradient>
      </TouchableOpacity>
      <TouchableOpacity onPress={routeTo(ROUTES.SCREEN_SIGNUP)} activeOpacity={TOUCHABLE_OPACITY} style={styles.buttonBecomeCustomer}>
        <Text style={styles.buttonBecomeCustomerText}>{I18n.t(BECOME_CUSTOMER)}</Text>
      </TouchableOpacity>
    </View>
  )
}
