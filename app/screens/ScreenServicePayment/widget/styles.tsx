import { StyleSheet, Dimensions } from 'react-native';
import { Palette } from 'styles';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  scrollContainer: {
    flexGrow: 1,
    paddingTop: 20,
    backgroundColor: Palette.white
  },
  greenBg: {
    height: 350,
    width,
    position: 'absolute',
    top: -100
  },
  greenInnerBg: {
    height: 220,
    width,
    position: 'absolute',
    top: -100,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16
  },
  loaderBox: {
    paddingTop: 30,
    justifyContent: 'center',
    alignItems: 'center'
  },
  loaderText: {
    fontFamily: 'SFUIDisplay-Regular',
    color: Palette.greyRoad,
    marginTop: 10
  }
});
