import { StyleSheet } from 'react-native';
import { Palette } from 'styles';

export const styles = StyleSheet.create({
  modal: {
    margin: 0,
    justifyContent: 'flex-end'
  },
  content: {
    backgroundColor: Palette.white,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    overflow: 'hidden'
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 15,
    backgroundColor: Palette.background
  },
  headerLabel: {
    fontSize: 20,
    fontFamily: 'SFUIDisplay-Medium',
    color: Palette.blackText
  },
  closeButton: {
    backgroundColor: Palette.greenAloe,
    borderBottomLeftRadius: 16,
    paddingHorizontal: 10,
    paddingVertical: 10
  },
  buttons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  buttonYes: {
    height: 40,
    width: 0,
    flexGrow: 1,
    borderRadius: 40,
    marginRight: 10
  },
  buttonNo: {
    height: 40,
    width: 0,
    flexGrow: 1,
    borderRadius: 40,
    borderWidth: 1,
    borderColor: Palette.greenAloe,
    marginLeft: 10
  },
  buttonInner: {
    flex: 1,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonTextYes: {
    fontSize: 16,
    color: Palette.white,
    fontFamily: 'SFUIDisplay-Regular'
  },
  buttonTextNo: {
    fontSize: 16,
    color: Palette.greenAloe,
    fontFamily: 'SFUIDisplay-Regular'
  }
});