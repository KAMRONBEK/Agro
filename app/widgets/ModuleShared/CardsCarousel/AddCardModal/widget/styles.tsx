import { StyleSheet } from "react-native";
import { Palette } from "styles";

export const styles = StyleSheet.create({
  modal: {
    justifyContent: 'flex-end',
    margin: 0
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
  form: {
    padding: 20
  },
  topError: {
    fontFamily: 'SFUIDisplay-Regular',
    color: Palette.red,
    marginBottom: 20,
    textAlign: 'center'
  },
  cardView: {
    backgroundColor: Palette.greyBg,
    padding: 20,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: Palette.greyDust
  },
  inputBox: {
    marginBottom: 5
  },
  inputLabel: {
    fontFamily: 'SFUIDisplay-Regular',
    color: Palette.greyBorder
  },
  input: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Palette.white,
    alignSelf: 'flex-start',
    justifyContent: 'space-between',
    borderRadius: 100,
    shadowOffset: {
      width: 0,
      height: 0
    },
    shadowColor: Palette.black,
    shadowOpacity: 0.05,
    shadowRadius: 10,
    marginVertical: 8,
    height: 40,
    color: Palette.black,
    fontFamily: 'SFUIDisplay-Regular',
    fontSize: 16,
    paddingVertical: 0,
    borderWidth: 1,
    borderColor: Palette.transparent
  },
  numberInput: {
    alignSelf: 'stretch',
    paddingHorizontal: 20
  },
  expireInput: {
    width: 85,
    textAlign: 'center'
  },
  inputBoxError: {
    borderColor: Palette.red
  },
  errorBox: {},
  error: {
    marginBottom: 5,
    fontFamily: 'SFUIDisplay-Regular',
    color: Palette.red
  },
  addCardButton: {
    backgroundColor: Palette.greenLeaf,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20
  },
  addCardButtonText: {
    color: Palette.white,
    fontSize: 16,
    fontFamily: 'SFUIDisplay-Regular',
  }
});