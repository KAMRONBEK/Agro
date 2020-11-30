import { StyleSheet } from 'react-native';
import { setAlpha } from 'utils';
import { Palette } from 'styles';

export const styles = StyleSheet.create({
  container: {
    margin: 20,
    marginBottom: 0,
    paddingBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: setAlpha(Palette.black, 0.1)
  },
  logoBox: {
    width: 67,
    height: 38,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    padding: 9,
    backgroundColor: Palette.greenApple
  },
  logo: {
    width: '100%',
    height: '100%'
  },
  cardData: {
    width: 0,
    flexGrow: 1,
    paddingLeft: 15
  },
  cardNumber: {
    fontSize: 16,
    fontFamily: 'SFUIDisplay-Regular',
    color: Palette.greyRoad
  },
  cardAmount: {
    fontSize: 14,
    fontFamily: 'SFUIDisplay-Regular',
    color: Palette.greenApple,
    marginTop: 3
  },
  cardChevronBox: {},

});
