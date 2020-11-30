import { StyleSheet } from 'react-native';
import { Palette } from 'styles';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  },
  countdown: {
    color: Palette.darkRed,
    fontSize: 17,
    fontFamily: 'SFUIDisplay-Semibold'
  },
  sendCodeButton: {
    height: 40,
    alignItems: 'center',
    justifyContent: 'center'
  },
  sendCodeButtonText: {
    fontFamily: 'SFUIDisplay-Medium',
    fontSize: 15,
    color: Palette.greenLeaf
  }
});
