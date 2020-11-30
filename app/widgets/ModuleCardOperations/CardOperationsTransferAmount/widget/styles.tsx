import { StyleSheet } from 'react-native';
import { Palette } from 'styles';

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    alignItems: 'center',
    marginTop: 25
  },
  labelBox: {
    marginBottom: 20
  },
  label: {
    fontFamily: 'SFUIDisplay-Regular',
    fontSize: 16,
    color: Palette.greenText
  },
  inputBox: {

  },
  input: {
    fontFamily: 'SFUIDisplay-Regular',
    fontSize: 33,
    color: Palette.greyStreet,
    borderBottomWidth: 1,
    borderBottomColor: Palette.grey,
    minWidth: 150,
    textAlign: 'center',
    paddingBottom: 5
  },
  inputError: {
    borderBottomColor: Palette.red
  },
  errorBox: {},
  error: {
    marginTop: 5,
    fontFamily: 'SFUIDisplay-Regular',
    color: Palette.red
  }
});
