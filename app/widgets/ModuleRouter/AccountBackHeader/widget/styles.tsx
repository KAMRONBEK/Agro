import { StyleSheet, ViewStyle } from 'react-native';
import { Palette } from 'styles';

const baseButton: ViewStyle = {
  width: 35,
  height: 35,
  justifyContent: 'center',
  alignItems: 'center'
}

export const styles = StyleSheet.create({
  headerBox: {

  },
  gradient: {

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
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontFamily: 'SFUIDisplay-Light',
    fontSize: 20,
    color: Palette.white
  },
  accountButton: {
    ...baseButton,
    borderWidth: 3,
    borderColor: Palette.white,
    borderRadius: 60,
    marginRight: 20
  },
  accountAvatar: {
    width: '100%',
    height: '100%'
  }
});
