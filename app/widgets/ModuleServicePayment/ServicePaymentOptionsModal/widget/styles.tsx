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
    overflow: 'hidden',
    maxHeight: 400
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
  scrollContainer: {

  },
  button: {
    height: 50,
    paddingHorizontal: 15,
    justifyContent: 'space-between',
    borderBottomWidth: 0.3,
    borderColor: Palette.grey,
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonText: {
    fontFamily: 'SFUIDisplay-Medium',
    fontSize: 14,
    color: Palette.blackText,
    width: 0,
    flexGrow: 1
  }
});