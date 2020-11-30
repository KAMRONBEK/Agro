import { StyleSheet } from 'react-native';
import { Palette } from 'styles';

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    marginTop: 10,
    marginBottom: 15
  },
  title: {
    fontFamily: 'SFUIDisplay-Light',
    fontSize: 13,
    color: Palette.greyDust,
    marginBottom: 8
  },
  currencyBox: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  currencyScrollBox: {
    width: 0,
    flexGrow: 1,
    marginLeft: 5,
    paddingLeft: 10
  },
  currency: {
    borderBottomWidth: 2,
    borderBottomColor: Palette.transparent,
    paddingBottom: 3,
    marginRight: 30
  },
  activeCurrency: {
    borderBottomColor: Palette.white
  },
  currencyName: {
    fontFamily: 'SFUIDisplay-Semibold',
    fontSize: 15,
    color: Palette.white
  }
});
