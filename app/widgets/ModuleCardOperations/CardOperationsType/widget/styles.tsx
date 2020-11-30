import { StyleSheet } from 'react-native';
import { Palette } from 'styles';
import { setAlpha } from 'utils';

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    backgroundColor: Palette.transparent,
    marginTop: 10,
    marginBottom: 10
  },
  switch: {
    borderWidth: 1,
    borderColor: setAlpha(Palette.white, 0.2),
    borderRadius: 30,
    padding: 4
  },
  switchText: {
    fontFamily: 'SFUIDisplay-Regular',
    fontSize: 16
  }
});
