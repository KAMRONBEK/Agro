import { StyleSheet } from 'react-native';
import { Palette } from 'styles';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16
  },
  headerBox: {
    height: 60,
  },
  backButton: {
    width: 50,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center'
  },
  titleBox: {
    width: 0,
    flexGrow: 1,
    paddingRight: 50,
    alignItems: 'center'
  },
  title: {
    color: Palette.white,
    fontFamily: 'SFUIDisplay-Light',
    fontSize: 20
  }
});
