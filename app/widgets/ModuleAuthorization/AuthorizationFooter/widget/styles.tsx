import { StyleSheet } from 'react-native';
import { Palette } from 'styles';

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 60,
    paddingVertical: 25,
    alignItems: 'center'
  },
  footerTextBox: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center'
  },
  footerText: {
    fontSize: 14,
    fontFamily: 'SFUIDisplay-Semibold',
    color: Palette.blackLight,
    marginRight: 3
  },
  footerSignupButtonTitle: {
    fontSize: 14,
    fontFamily: 'SFUIDisplay-Semibold',
    color: Palette.greenText
  }
});
