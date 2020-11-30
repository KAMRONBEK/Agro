import { StyleSheet } from 'react-native';
import { Palette } from 'styles';

export const styles = StyleSheet.create({
  modal: {
    margin: 0,
    justifyContent: 'flex-end'
  },
  content: {
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    paddingHorizontal: 20,
    paddingTop: 50,
    backgroundColor: Palette.white,
    alignItems: 'center'
  },
  title: {
    fontSize: 18,
    fontFamily: 'SFUIDisplay-Bold',
    color: Palette.greenAloe,
    textAlign: 'center',
    marginBottom: 30
  },
  iconBox: {
    paddingLeft: 30
  }
});