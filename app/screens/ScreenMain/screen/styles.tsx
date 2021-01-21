import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    // paddingBottom: 130,
  },
  greenBg: {
    height: 280,
    width,
    position: 'absolute',
    top: -100,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16
  }
});
