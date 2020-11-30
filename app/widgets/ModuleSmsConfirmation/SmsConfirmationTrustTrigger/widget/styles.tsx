import { StyleSheet } from 'react-native';
import { Palette } from 'styles';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingTop: 50
  },
  trustTitle: {
    textAlign: 'center',
    fontSize: 18,
    fontFamily: 'SFUIDisplay-Regular',
    color: Palette.greyLightText,
    marginBottom: 30
  }
});
