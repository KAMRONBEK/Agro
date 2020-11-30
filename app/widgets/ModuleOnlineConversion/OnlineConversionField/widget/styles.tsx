import { StyleSheet } from "react-native";
import { Palette } from 'styles';
import { setAlpha } from 'utils';

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    marginTop: 25
  },
  labelBox: {
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  label: {
    fontSize: 16,
    fontFamily: 'SFUIDisplay-Regular',
    color: Palette.greenText
  },
  labelCurrentRate: {
    fontSize: 16,
    fontFamily: 'SFUIDisplay-Semibold',
    color: Palette.greyLightText
  },
  labelCurrentRateLight: {
    fontFamily: 'SFUIDisplay-Light',
  },
  box: {
    backgroundColor: Palette.white,
    borderRadius: 12,
    shadowOffset: {
      width: 0,
      height: 5
    },
    shadowColor: Palette.black,
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 2
  },
  inputBox: {
    borderBottomWidth: 1,
    borderBottomColor: setAlpha(Palette.black, 0.1)
  },
  input: {
    fontFamily: 'SFUIDisplay-Light',
    fontSize: 20,
    height: 65,
    paddingHorizontal: 25,
    color: Palette.blackText
  },
  resultBox: {},
  result: {
    fontFamily: 'SFUIDisplay-Light',
    fontSize: 17,
    height: 65,
    paddingHorizontal: 25,
    color: Palette.blackText
  }
});
