import { StyleSheet, Dimensions } from 'react-native';
import { Palette } from 'styles';
import { setAlpha } from 'utils';

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    position: 'relative'
  },
  selectButton: {
    height: 41,
    paddingVertical: 6,
    paddingHorizontal: 8,
    borderRadius: 12,
    backgroundColor: setAlpha(Palette.white, 0.15),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'stretch',
    marginTop: 15
  },
  selectLeftBox: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 0,
    flexGrow: 1
  },
  currencyFlagBox: {
    width: 25,
    height: 25,
    overflow: 'hidden',
    borderRadius: 40,
    marginRight: 16
  },
  currencyFlag: {
    borderRadius: 40,
    width: '100%',
    height: '100%'
  },
  currencyCost: {
    fontFamily: 'SFUIDisplay-Semibold',
    fontSize: 14,
    color: Palette.white
  },
  selectRightBox: {
    marginRight: 10
  },
  dropdown: {
    width: Dimensions.get('window').width - 40,
    height: 'auto',
    borderRadius: 12,
    paddingHorizontal: 20,
    paddingTop: 17,
    paddingBottom: 10,
    shadowOffset: {
      width: 0,
      height: 5
    },
    shadowColor: Palette.black,
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 5
  },
  currencyBox: {
    paddingBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 0.5,
    borderBottomColor: Palette.greyWall
  },
  currencyBoxBottomMargin: {
    marginTop: 10
  },
  currencyLastBox: {
    borderBottomWidth: 0,
    borderBottomColor: Palette.transparent
  },
  currencyLeftBox: {
    width: 0,
    flexGrow: 1,
    flexDirection: 'row'
  },
  flagBox: {
    width: 25,
    height: 25,
    marginTop: 3,
    borderRadius: 60,
    overflow: 'hidden'
  },
  flag: {
    width: '100%',
    height: '100%',
    borderRadius: 60
  },
  currencyDesc: {
    paddingLeft: 10
  },
  name: {
    fontFamily: 'SFUIDisplay-Semibold',
    fontSize: 16,
    color: Palette.greyLightText
  },
  fullName: {
    fontFamily: 'SFUIDisplay-Regular',
    fontSize: 13,
    color: Palette.greyLightText
  },
  currencyRightBox: {
    justifyContent: 'flex-end'
  },
  rate: {
    fontFamily: 'SFUIDisplay-Light',
    fontSize: 15,
    color: Palette.greyLightText
  },
  rateBold: {
    fontFamily: 'SFUIDisplay-Bold'
  }
});
