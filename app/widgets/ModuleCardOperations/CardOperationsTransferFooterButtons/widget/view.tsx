import React from 'react';
import { View, TouchableOpacity, Text, ActivityIndicator } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { styles } from './styles';
import { Palette } from 'styles';
import { TOUCHABLE_OPACITY } from 'const';

interface IOwnProps {
  transferIsFetching: boolean;
  transfer: () => void;
  cancel: () => void;
}

export function CardOperationsTransferFooterButtonsView({
  transferIsFetching,
  transfer,
  cancel
}: IOwnProps) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={cancel} activeOpacity={TOUCHABLE_OPACITY} style={styles.cancelButton}>
        <Text style={styles.cancelButtonTitle}>Отмена</Text>
      </TouchableOpacity>
      <TouchableOpacity disabled={transferIsFetching} onPress={transfer} activeOpacity={TOUCHABLE_OPACITY} style={styles.transferButton}>
        <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={[Palette.greenGrace, Palette.greenCesar]} style={styles.transferButtonGradient}>
          {
            transferIsFetching ? 
              <ActivityIndicator size='small' color={Palette.white} animating={transferIsFetching} /> :
              <Text style={styles.transferButtonTitle}>Перевести</Text>
          }
        </LinearGradient>
      </TouchableOpacity>
    </View>
  )
}
