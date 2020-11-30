import { StyleSheet } from 'react-native';
import { Palette } from 'styles';

export const styles = StyleSheet.create({
  modal: {
    marginHorizontal: 40
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
    paddingTop: 26,
    paddingBottom: 20,
    flexDirection: 'column',
    alignItems: 'center'
  },
  topText: {
    textAlign: 'center',
    fontSize: 18,
    fontFamily: 'SFUIDisplay-Bold',
    color: Palette.orange,
    marginBottom: 20
  },
  reasons: {
    textAlign: 'center',
    fontSize: 16,
    fontFamily: 'SFUIDisplay-Bold',
    color: Palette.orange
  },
  reasonsList: {
    marginTop: 10,
    paddingHorizontal: 15,
    borderRadius: 8
  },
  botText: {
    textAlign: 'center',
    fontSize: 14,
    fontFamily: 'SFUIDisplay-Regular',
    color: Palette.greyText,
    marginVertical: 2.5
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
  },
  orange: {
    color: Palette.orange
  },
  red: {
    color: Palette.redBlood
  },
  green: {
    color: Palette.greenSalad
  },
  loader: {
    position: 'absolute',
    top: 50,
    left: 15,
    right: 0
  }
});
