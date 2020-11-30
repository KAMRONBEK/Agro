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
  notifyButton: {
    ...baseButton,
    backgroundColor: Palette.transparent,
    marginLeft: 10
  },
  notifiationCountBox: {
    paddingHorizontal: 3,
    paddingVertical: 1,
    borderRadius: 20,
    backgroundColor: Palette.red,
    position: 'absolute',
    bottom: 0,
    right: -2
  },
  notificationCount: {
    fontFamily: 'SFUIDisplay-Bold',
    fontSize: 10,
    color: Palette.white
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
  },
  bottomLine: {
    height: 1,
    backgroundColor: Palette.white,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    marginHorizontal: 20,
    opacity: 0.5
  }
});
