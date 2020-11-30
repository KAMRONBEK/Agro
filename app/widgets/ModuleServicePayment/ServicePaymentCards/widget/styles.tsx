import { StyleSheet } from 'react-native';
import { Palette } from 'styles';
import { setAlpha } from 'utils';

export const styles = StyleSheet.create({
  container: {
    marginTop: -10
  },
  carouselContainer: {
    paddingBottom: 20
  },
  card: {
    borderRadius: 8,
    height: 155,
    backgroundColor: Palette.white,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowColor: Palette.black,
    shadowOpacity: 0.2,
    shadowRadius: 10
  },
  prevCard: {

  },
  nextCard: {

  },
  cardBg: {
    flex: 1,
    paddingTop: 70
  },
  cardContent: {
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    flex: 1,
    paddingBottom: 20
  },
  balance: {
    fontSize: 24,
    color: Palette.white,
    fontFamily: 'SFUIDisplay-Bold'
  },
  balanceCurrency: {
    fontSize: 18,
    fontFamily: 'SFUIDisplay-Light',
    color: Palette.white
  },
  cardData: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between'
  },
  cardNumber: {
    fontSize: 14,
    fontFamily: 'SFUIDisplay-Regular',
    color: Palette.white
  },
  cardExpire: {
    fontSize: 14,
    fontFamily: 'SFUIDisplay-Regular',
    color: Palette.white
  },
  chooseCardTitleBox: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingHorizontal: 20
  },
  chooseCardTitleLine: {
    height: 1,
    width: 0,
    flexGrow: 1,
    backgroundColor: setAlpha(Palette.white, 0.2)
  },
  chooseCardTitleInnerBox: {
    paddingVertical: 15,
    paddingHorizontal: 10
  },
  chooseCardTitle: {
    fontFamily: 'SFUIDisplay-Regular',
    fontSize: 15,
    color: Palette.white
  }
});
