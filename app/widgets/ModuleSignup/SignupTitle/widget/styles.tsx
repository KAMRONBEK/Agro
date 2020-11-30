import { StyleSheet } from 'react-native';
import { Palette } from 'styles';

export const styles = StyleSheet.create({
  container: {
    paddingVertical: 50,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30
  },
  title: {
    fontFamily: 'SFUIDisplay-Semibold',
    fontSize: 20,
    color: Palette.black,
    textAlign: 'center'
  }
});
