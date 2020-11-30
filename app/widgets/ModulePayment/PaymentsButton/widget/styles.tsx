import { StyleSheet } from 'react-native';
import { Palette } from 'styles';

export const styles = StyleSheet.create({
  button: {
    minHeight: 54,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Palette.white,
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowColor: Palette.black,
    shadowOpacity: 0.1,
    shadowRadius: 5,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginHorizontal: 5
  },
  titleBox: {
    width: 0,
    flexGrow: 1
  },
  title: {
    fontFamily: 'SFUIDisplay-Regular',
    fontSize: 16,
    color: Palette.greenText
  },
  iconBox: {}
});
