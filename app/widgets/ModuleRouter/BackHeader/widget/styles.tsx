import { StyleSheet } from 'react-native';
import { Palette } from 'styles';

export const styles = StyleSheet.create({
  headerBox: {
    backgroundColor: Palette.background,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12
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
  }
});
