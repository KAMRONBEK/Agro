import { StyleSheet } from 'react-native';
import { Palette } from 'styles';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    marginTop: 35
  },
  labelBox: {
    alignItems: 'center',
    marginBottom: 15
  },
  label: {
    fontFamily: 'SFUIDisplay-Regular',
    fontSize: 15,
    color: Palette.greenText
  },
  commissionBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Palette.greyBg,
    borderRadius: 8,
    height: 42,
    paddingHorizontal: 13
  },
  commissionPercentBox: {
    minWidth: 50
  },
  commissionPercent: {
    fontFamily: 'SFUIDisplay-Bold',
    fontSize: 16,
    color: Palette.greyCloud
  },
  commissionAmountBox: {
    width: 0,
    flexGrow: 1,
    alignItems: 'center'
  },
  commissionAmount: {
    fontFamily: 'SFUIDisplay-Regular',
    fontSize: 16,
    color: Palette.greyRoad,
    padding: 0
  },
  commissionLogoBox: {
    minWidth: 50,
    alignItems: 'flex-end'
  }
})
