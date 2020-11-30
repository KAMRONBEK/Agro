import { StyleSheet } from 'react-native';
import { Palette } from 'styles';

export const styles = StyleSheet.create({
  container: {},
  labelBox: {
    paddingBottom: 15
  },
  label: {
    fontSize: 16,
    fontFamily: 'SFUIDisplay-Regular',
    color: Palette.greenText
  },
  whiteBox: {
    backgroundColor: Palette.white,
    borderRadius: 12,
    paddingVertical: 5,
    shadowOffset: {
      width: 0,
      height: 5
    },
    shadowColor: Palette.black,
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5
  }
});
