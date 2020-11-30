import { StyleSheet, Dimensions } from 'react-native';
import { Palette } from 'styles';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Palette.white
  },
  scrollKeyboardAwareContainer: {
    flexGrow: 1
  },
  scrollContainer: {
    flexGrow: 1
  },
  greenBg: {
    height: 235,
    width,
    position: 'absolute',
    top: -100,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16
  }
});
