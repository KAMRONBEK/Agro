import { StyleSheet } from 'react-native';
import { Palette } from 'styles';
import { setAlpha } from 'utils';

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    marginTop: 25
  },
  labelBox: {
    alignItems: 'center',
    marginBottom: 15
  },
  label: {
    fontFamily: 'SFUIDisplay-Regular',
    fontSize: 16,
    color: Palette.greenText
  },
  cardBox: {
    height: 48,
    backgroundColor: setAlpha(Palette.black, 0.03),
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Palette.transparent
  },
  cardBoxError: {
    borderColor: Palette.red
  },
  logoBox: {
    width: 67,
    height: 38,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Palette.greenApple,
    borderRadius: 8,
    margin: 5
  },
  logo: {
    width: '100%',
    height: '100%'
  },
  inputBox: {
    width: 0,
    flexGrow: 1,
    height: '100%',
    paddingLeft: 10
  },
  input: {
    flex: 1,
    fontSize: 16,
    fontFamily: 'SFUIDisplay-Regular',
    color: Palette.greyRoad
  },
  uzcardBox: {
    paddingHorizontal: 12
  },
  errorBox: {},
  error: {
    marginTop: 5,
    fontFamily: 'SFUIDisplay-Regular',
    color: Palette.red
  }
});
