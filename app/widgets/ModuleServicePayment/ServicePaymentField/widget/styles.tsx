import { StyleSheet } from 'react-native';
import { Palette } from 'styles';
import { setAlpha } from 'utils';

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    marginTop: 30
  },
  labelBox: {
    marginBottom: 15
  },
  label: {
    fontFamily: 'SFUIDisplay-Regular',
    fontSize: 16,
    color: Palette.greenText,
    textAlign: 'center'
  },
  box: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    borderRadius: 8,
    backgroundColor: setAlpha(Palette.black, 0.03)
  },
  logoBox: {
    width: 67,
    height: 46,
    backgroundColor: Palette.white,
    borderRadius: 8,
    padding: 5,
    marginLeft: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    width: '100%',
    height: '100%'
  },
  inputBox: {
    width: 0,
    flexGrow: 1,
    height: '100%'
  },
  input: {
    fontSize: 18,
    color: Palette.greyDay,
    fontFamily: 'SFUIDisplay-Regular',
    flex: 1,
    padding: 0,
    paddingLeft: 20,
  },
  errorBox: {
    marginTop: 5
  },
  error: {
    fontFamily: 'SFUIDisplay-Regular',
    color: Palette.red
  }
})
