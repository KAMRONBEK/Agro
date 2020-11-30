import { StyleSheet } from 'react-native';
import { Palette } from 'styles';

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    flex: 1
  },
  field: {
    marginTop: 50
  },
  titleBox: {
    alignItems: 'center',
    marginTop: 50
  },
  title: {
    fontFamily: 'SFUIDisplay-Regular',
    color: Palette.greyText,
    fontSize: 15,
    textAlign: 'center'
  }
});