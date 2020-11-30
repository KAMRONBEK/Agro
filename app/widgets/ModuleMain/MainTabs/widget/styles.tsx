import { StyleSheet } from 'react-native';
import { Palette } from 'styles';

export const styles = StyleSheet.create({
  container: {
    marginBottom: 20
  },
  tabIndicator: {
    backgroundColor: Palette.transparent
  },
  tabLabel: {
    fontSize: 15,
    fontFamily: 'SFUIDisplay-Regular',
    textTransform: 'capitalize'
  },
  tabContainer: {}
});
