import { StyleSheet } from 'react-native';
import { Palette } from 'styles';

export const styles = StyleSheet.create({
  container: {
    paddingTop: 15,
    marginBottom: 15
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
    shadowOpacity: 0.1,
    shadowRadius: 10,
    marginBottom: 30
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
  }
});
