import { StyleSheet } from 'react-native';
import { Palette } from 'styles';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Palette.white
  },
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: Palette.black
  }
});