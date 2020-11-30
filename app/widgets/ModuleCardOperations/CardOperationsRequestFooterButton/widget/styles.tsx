import { StyleSheet, ViewStyle } from 'react-native';
import { Palette } from 'styles';

const baseButton: ViewStyle = {
  height: 50,
  borderRadius: 60,
  justifyContent: 'center',
  alignItems: 'center',
  overflow: 'hidden'
}

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 60,
    marginBottom: 30,
    marginTop: 60
  },
  requestButton: {
    ...baseButton
  },
  requestButtonGradient: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  requestButtonTitle: {
    color: Palette.white,
    fontFamily: 'SFUIDisplay-Semibold',
    fontSize: 16
  }
});
