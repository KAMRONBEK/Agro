import { StyleSheet } from 'react-native';
import { Palette } from 'styles';

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 60,
    paddingTop: 54
  },
  phoneBox: {
    alignItems: 'center'
  },
  phone: {
    fontFamily: 'SFUIDisplay-Bold',
    fontSize: 20,
    color: Palette.black
  },
  instructionBox: {
    alignItems: 'center',
    marginTop: 16
  },
  instructionText: {
    textAlign: 'center',
    fontFamily: 'SFUIDisplay-Regular',
    fontSize: 18,
    color: Palette.greyLightText
  },
  form: {
    paddingTop: 20
  },
  input: {
    fontSize: 24,
    color: Palette.black,
    height: 40
  },
  phoneErrorBox: {
    marginTop: 10,
    backgroundColor: Palette.white,
    borderRadius: 30,
    padding: 10
  },
  phoneErrorText: {
    fontFamily: 'SFUIDisplay-Regular',
    color: Palette.white,
    fontSize: 15
  },
  errorBox: {
    marginTop: 30,
    width: 200,
    alignSelf: 'center'
  },
  error: {
    fontFamily: 'SFUIDisplay-Regular',
    color: Palette.red,
    fontSize: 15
  },
  countdown: {
    alignItems: 'center',
    marginTop: 32
  }
});
