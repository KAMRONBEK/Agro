import { StyleSheet } from 'react-native';
import { Palette } from 'styles';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    height: 60,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16
  },
  headerBox: {
    height: 60
  },
  titleBox: {
    width: 0,
    flexGrow: 1,
    alignItems: 'center'
  },
  title: {
    color: Palette.white,
    fontFamily: 'SFUIDisplay-Light',
    fontSize: 20
  }
});
