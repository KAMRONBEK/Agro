import { StyleSheet } from 'react-native';
import { Palette } from 'styles';

export const styles = StyleSheet.create({
  inputBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Palette.white,
    alignSelf: 'stretch',
    justifyContent: 'space-between',
    borderRadius: 100,
    paddingLeft: 24,
    shadowOffset: {
      width: 0,
      height: 0
    },
    shadowColor: Palette.black,
    shadowOpacity: 0.07,
    shadowRadius: 10,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: Palette.transparent
  },
  inputBoxError: {
    borderColor: Palette.red
  },
  input: {
    height: 50,
    color: Palette.black,
    width: 0,
    flexGrow: 1,
    fontFamily: 'SFUIDisplay-Regular',
    fontSize: 16
  },
  errorBox: {
    marginBottom: 5
  },
  error: {
    fontFamily: 'SFUIDisplay-Regular',
    color: Palette.red
  }
});
