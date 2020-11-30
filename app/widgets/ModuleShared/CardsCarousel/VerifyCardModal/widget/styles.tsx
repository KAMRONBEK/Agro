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
    padding: 20,
    paddingBottom: 40
  },
  inputBox: {
    marginBottom: 10,
    alignItems: 'center'
  },
  inputLabel: {
    fontFamily: 'SFUIDisplay-Regular',
    color: Palette.greenLeaf,
    fontSize: 18
  },
  input: {
    fontSize: 24,
    color: Palette.black,
    height: 40
  },
  errorBox: {
    alignItems: 'center'
  },
  error: {
    marginBottom: 5,
    fontFamily: 'SFUIDisplay-Regular',
    color: Palette.red
  },
  addCardButton: {
    backgroundColor: Palette.greenLeaf,
    height: 40,
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