import { StyleSheet, Dimensions } from 'react-native';
import { Palette } from 'styles';
import { setAlpha } from 'utils';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  steps: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingHorizontal: 50,
    marginTop: 30
  },
  step: {
    width: 40,
    alignItems: 'center'
  },
  stepRound: {
    borderRadius: 50,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: setAlpha(Palette.grey, 0.7)
  },
  stepRoundActive: {
    borderWidth: 5,
    borderColor: Palette.greenAloe,
    backgroundColor: Palette.white
  },
  stepRoundDone: {
    backgroundColor: Palette.greenAloe
  },
  stepNumber: {
    fontFamily: 'SFUIDisplay-Regular',
    fontSize: 14,
    color: Palette.white
  },
  stepNumberActive: {
    color: Palette.blackText
  },
  stepNumberDone: {
    color: Palette.white
  },
  stepName: {
    fontFamily: 'SFUIDisplay-Regular',
    fontSize: 14,
    color: setAlpha(Palette.grey, 0.7),
    width: 100,
    textAlign: 'center',
    marginTop: 5
  },
  stepNameActive: {
    color: Palette.greenAloe
  },
  stepNameDone: {
    color: Palette.greenAloe
  },
  progressLine: {
    height: 5,
    width: 0,
    flexGrow: 1,
    marginTop: 18,
    backgroundColor: setAlpha(Palette.grey, 0.7)
  },
  progressLineDone: {
    backgroundColor: Palette.greenAloe
  },
  stepContent: {
    flex: 1
  },
  actionButtons: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  nextBtn: {
    backgroundColor: Palette.greenAloe,
    paddingVertical: 10,
    paddingHorizontal: 20,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch'
  },
  backBtn: {
    backgroundColor: Palette.red,
    paddingVertical: 10,
    paddingHorizontal: 20,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch'
  },
  btnFlexGrow: {
    width: 0,
    flexGrow: 1,
  },
  btnDisabled: {
    backgroundColor: setAlpha(Palette.greenAloe, 0.7)
  },
  btnText: {
    fontFamily: 'SFUIDisplay-Regular',
    fontSize: 18,
    color: Palette.white
  },
  signupProcessBox: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  },
  signupProcess: {
    backgroundColor: setAlpha(Palette.black, 0.7),
    minHeight: 100,
    width: 150,
    padding: 15,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center'
  },
  signupProcessText: {
    fontFamily: 'SFUIDisplay-Regular',
    fontSize: 14,
    color: Palette.white,
    marginTop: 10,
    textAlign: 'center'
  }
});