import { StyleSheet } from 'react-native';
import { Palette } from 'styles';

export const styles = StyleSheet.create({
  modal: {

  },
  main: {
    backgroundColor: Palette.white,
    borderRadius: 8,
    padding: 20
  },
  warning: {
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center'
  },
  topDiv: {
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20,
    paddingBottom: 20
  },
  imgBox: {

  },
  botDiv: {
    alignSelf: 'stretch',
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 16,
    paddingBottom: 20,
    flexDirection: 'column',
    alignItems: 'center'
  },
  topText: {
    alignItems: 'center',
    textAlign: 'center',
    fontSize: 16,
    fontFamily: 'SFUIDisplay-Regular',
    color: Palette.greyRoad,
    marginBottom: 20
  },
  button: {
    alignSelf: 'stretch',
    marginTop: 40,
    borderRadius: 12,
    height: 50
  },
  buttonInner: {
    flex: 1,
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    alignItems: 'center',
    textAlign: 'center',
    fontFamily: 'SFUIDisplay-Bold',
    color: Palette.white,
    fontSize: 16
  }
});
