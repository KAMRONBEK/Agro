import { StyleSheet } from 'react-native';
import { Palette } from 'styles';

export const styles = StyleSheet.create({
  button: {
    width: 250,
    height: 50,
    alignSelf: 'center',
    marginTop: 30,
    marginBottom: 30,
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
