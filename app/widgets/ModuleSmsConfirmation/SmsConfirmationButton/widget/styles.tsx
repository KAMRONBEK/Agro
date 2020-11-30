import { StyleSheet } from 'react-native';
import { Palette } from 'styles';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 60,
    paddingTop: 45,
    paddingBottom: 30
  },
  button: {
    height: 50,
    shadowOffset: {
      width: 0,
      height: 10
    },
    shadowColor: Palette.black,
    shadowOpacity: 0.15,
    shadowRadius: 10
  },
  buttonInner: {
    flex: 1,
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonTitle: {
    fontFamily: 'SFUIDisplay-Semibold',
    fontSize: 16,
    color: Palette.white
  }
});
