import { StyleSheet } from 'react-native';
import { Palette } from 'styles';

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 60,
    marginTop: 40,
    marginBottom: 60,
    alignItems: 'center'
  },
  agreementBox: {
    paddingHorizontal: 30
  },
  agreement: {
    fontFamily: 'SFUIDisplay-Regular',
    fontSize: 16,
    color: Palette.greyRoad,
    textAlign: 'center'
  },
  agreementButton: {
    alignItems: 'center'
  },
  agreementButtonTitle: {
    fontFamily: 'SFUIDisplay-Bold',
    fontSize: 16,
    color: Palette.darkRed
  },
  acceptButton: {
    height: 50,
    shadowOffset: {
      width: 0,
      height: 10
    },
    shadowColor: Palette.black,
    shadowOpacity: 0.15,
    shadowRadius: 10,
    alignSelf: 'stretch',
    marginTop: 30
  },
  acceptButtonInner: {
    flex: 1,
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center'
  },
  acceptButtonTitle: {
    fontFamily: 'SFUIDisplay-Semibold',
    fontSize: 16,
    color: Palette.white
  }
});
