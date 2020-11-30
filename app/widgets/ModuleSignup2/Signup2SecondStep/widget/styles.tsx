import { StyleSheet } from 'react-native';
import { Palette } from 'styles';

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 50,
    flex: 1
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
    height: 40,
    color: Palette.black
  },
  phoneErrorBox: {
    marginTop: 20,
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
    marginTop: 50,
    width: 200,
    alignSelf: 'center'
  },
  error: {
    fontFamily: 'SFUIDisplay-Regular',
    color: Palette.red,
    fontSize: 15,
    textAlign: 'center'
  },
  countdown: {
    alignItems: 'center',
    marginTop: 52
  }
});