import { StyleSheet, Platform } from 'react-native';
import { Palette } from 'styles';
import { setAlpha } from 'utils';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15
  },
  button: {
    height: 123,
    width: 0,
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Palette.white,
    borderRadius: 8,
    shadowOffset: {
      width: 0,
      height: 5
    },
    shadowColor: Palette.black,
    shadowOpacity: 0.07,
    shadowRadius: 4,
    marginHorizontal: 5,
    padding: 10,
    borderWidth: Platform.OS === 'android' ? 1 : 0,
    borderColor: setAlpha(Palette.black, 0.1)
  },
  buttonText: {
    fontFamily: 'SFUIDisplay-Regular',
    fontSize: 14,
    color: Palette.greyLightText,
    marginTop: 18,
    textAlign: 'center'
  }
});
