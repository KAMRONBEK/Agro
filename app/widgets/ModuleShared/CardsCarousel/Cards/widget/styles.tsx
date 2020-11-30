import { StyleSheet, ViewStyle, Platform } from 'react-native';
import { Palette } from 'styles';
import { setAlpha } from 'utils';

const cardStyle: ViewStyle = {
  borderRadius: 8,
  backgroundColor: Palette.white,
  minHeight: 160,
  shadowOffset: {
    width: 0,
    height: 2
  },
  shadowColor: Palette.black,
  shadowOpacity: 0.1,
  shadowRadius: 10
}

export const styles = StyleSheet.create({
  container: {},
  addCardBox: {
    ...cardStyle,
    borderWidth: 1,
    borderColor: Palette.greyLightText,
    borderStyle: 'dashed',
    justifyContent: 'center',
    alignItems: 'center'
  },
  addCardTitle: {
    fontFamily: 'SFUIDisplay-Semibold',
    fontSize: 15,
    color: Palette.greyLightText,
    marginTop: 5
  },
  card: {
    ...cardStyle
  },
  prevCard: {

  },
  nextCard: {

  },
  cardBg: {
    borderRadius: 8,
    paddingVertical: 20,
    overflow: 'hidden'
  },
  visaCardBg: {
    borderRadius: 8,
    backgroundColor: Palette.black
  },
  cardContent: {
    paddingHorizontal: 20,
    justifyContent: 'space-between'
  },
  balanceContent: {
    minHeight: 35,
    justifyContent: 'center'
  },
  balanceBox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20
  },
  visaBalanceBox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10
  },
  balance: {
    fontSize: 24,
    padding: 0,
    color: Palette.white,
    fontFamily: 'SFUIDisplay-Bold'
  },
  visaBalance: {
    fontSize: 14,
    padding: 0,
    color: Palette.white,
    fontFamily: 'SFUIDisplay-Bold',
    marginRight: 15
  },
  balanceCurrency: {
    fontSize: 14,
    fontFamily: 'SFUIDisplay-Light',
    color: Palette.white,
    marginLeft: 10,
    marginRight: 12
  },
  balanceUSDCurrency: {
    marginLeft: 0,
    marginRight: 0,
    fontFamily: 'SFUIDisplay-Bold'
  },
  cardData: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 15
  },
  visaCardData: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: Platform.OS === 'ios' ? 15 : 0
  },
  cardNumber: {
    padding: 0,
    fontSize: 14,
    fontFamily: 'SFUIDisplay-Regular',
    color: Palette.white
  },
  visaCardNumber: {
    fontFamily: 'SFUIDisplay-Semibold',
    color: Palette.white,
    fontSize: 12
  },
  cardExpire: {
    fontSize: 14,
    fontFamily: 'SFUIDisplay-Regular',
    color: Palette.white
  },
  visaCardExpire: {
    fontSize: 14,
    fontFamily: 'SFUIDisplay-Semibold',
    color: Palette.white
  },
  activeCardBox: {
    alignItems: 'center',
    paddingVertical: 10,
    position: 'relative',
    flexDirection: 'row',
    paddingHorizontal: 25
  },
  activeBoxLine: {
    height: 1,
    width: 0,
    flexGrow: 1,
    backgroundColor: setAlpha(Palette.white, 0.2)
  },
  activeCardTitle: {
    fontFamily: 'SFUIDisplay-Regular',
    fontSize: 15,
    color: Palette.white,
    marginHorizontal: 15
  },
  reloadButton: {
    
  },
  visaWaves: {
    position: 'absolute',
    left: -20,
    right: 0,
    bottom: 0
  },
  agroBgLogo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0
  },
  cardContentTop: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between'
  },
  virtualTitle: {
    fontFamily: 'SFUIDisplay-Semibold',
    fontSize: 15,
    color: Palette.white,
    alignSelf: 'flex-end'
  },
  cardContentFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: Platform.OS === 'ios' ? 12 : 0
  },
  cardContentFooterLeft: {
    width: 0,
    flexGrow: 1,
    paddingRight: 20
  },
  cardHolder: {
    fontFamily: 'SFUIDisplay-Semibold',
    fontSize: 13,
    color: Palette.white
  },
  blur: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1,
    paddingVertical: 15,
    paddingHorizontal: 15
  },
  blurText: {
    fontFamily: 'SFUIDisplay-Bold',
    color: Palette.white,
    fontSize: 18,
    lineHeight: 20
  },
  blurCardNumberBox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8
  },
  blurVisaCardNumber: {
    fontFamily: 'SFUIDisplay-Bold',
    fontSize: 13,
    color: Palette.white,
    alignSelf: 'flex-end',
    marginLeft: 15,
    marginBottom: 3
  },
  blurButton: {
    height: 30,
    paddingHorizontal: 20,
    borderRadius: 40,
    alignSelf: 'flex-start',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Palette.greenAloe,
    marginTop: 12,
    shadowOffset: {
      width: 0,
      height: 5
    },
    shadowColor: Palette.greenAloe,
    shadowOpacity: 0.2,
    shadowRadius: 8
  },
  blurButtonText: {
    fontFamily: 'SFUIDisplay-Bold',
    fontSize: 13,
    color: Palette.white
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
    marginRight: Platform.OS === 'ios' ? -10 : 0
  },
  switchTitle: {
    fontFamily: 'SFUIDisplay-Regular',
    fontSize: 13,
    marginLeft: 5,
    color: Palette.white,
    marginRight: Platform.OS === 'ios' ? -2 : 5
  },
  switch: {
    transform: [{ scale: Platform.OS === 'ios' ? 0.7 : 1 }]
  }
});
