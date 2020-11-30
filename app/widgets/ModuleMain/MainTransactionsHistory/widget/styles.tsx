import { StyleSheet, Dimensions } from 'react-native';
import { Palette } from 'styles';
import { setAlpha } from 'utils';

export const styles = StyleSheet.create({
  header: {
    marginTop: 12,
    paddingVertical: 15,
    width: Dimensions.get('window').width + 4,
    marginLeft: -2,
    borderTopLeftRadius: 60,
    borderTopRightRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Palette.white,
    borderWidth: 2,
    borderColor: setAlpha(Palette.blackLight, 0.1),
    borderBottomWidth: 0,
    shadowOffset: {
      width: 0,
      height: -5
    },
    shadowColor: Palette.black,
    shadowOpacity: 0.05,
    shadowRadius: 5
  },
  swipeLine: {
    height: 4,
    width: 31,
    borderRadius: 20,
    backgroundColor: Palette.grey,
    marginBottom: 5
  },
  content: {
    height: '100%',
    backgroundColor: Palette.white
  },
  contentAndroid: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    height: 1000,
    backgroundColor: Palette.white
  },
  buttonBox: {
    backgroundColor: Palette.white,
    paddingHorizontal: 20
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 10
  },
  buttonBorder: {
    borderTopWidth: 1,
    borderTopColor: Palette.greyDust,
    paddingVertical: 12
  },
  buttonLogoBox: {
    width: 48,
    height: 48
  },
  buttonLogo: {
    width: '100%',
    height: '100%'
  },
  serviceNameBox: {
    width: 0,
    flexGrow: 1,
    paddingLeft: 20
  },
  serviceName: {
    fontFamily: 'SFUIDisplay-Bold',
    fontSize: 14,
    color: Palette.blackText
  },
  categoryName: {
    fontFamily: 'SFUIDisplay-Medium',
    fontSize: 12,
    color: Palette.greyLightText,
    marginTop: 2
  },
  transactionPriceBox: {
    alignItems: 'flex-end'
  },
  transactionPrice: {
    fontFamily: 'SFUIDisplay-Medium',
    fontSize: 16,
    color: Palette.darkRed
  },
  transactionDate: {
    marginTop: 2,
    fontFamily: 'SFUIDisplay-Medium',
    fontSize: 12,
    color: Palette.greyLightText
  },
  emptyListBox: {
    height: '100%',
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: Palette.white
  },
  emptyListTitle: {
    fontFamily: 'SFUIDisplay-Medium',
    fontSize: 16,
    color: Palette.greenAloe
  }
});
