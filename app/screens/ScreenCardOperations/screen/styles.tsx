import { StyleSheet, Dimensions } from 'react-native';
import { Palette } from 'styles';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: Palette.white
  },
  greenBg: {
    height: 350,
    width,
    position: 'absolute',
    top: -100
  },
  greenInnerBg: {
    height: 290,
    width,
    position: 'absolute',
    top: -100,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16
  }
});
