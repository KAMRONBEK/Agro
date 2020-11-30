import { StyleSheet } from "react-native";
import { Palette } from "styles";

export const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  chooseCardTextBox: {
    paddingHorizontal: 30,
    marginTop: 15
  },
  agrobank: {
    fontFamily: 'SFUIDisplay-Bold',
    color: Palette.greenAloe
  },
  chooseCardText: {
    fontFamily: 'SFUIDisplay-Regular',
    fontSize: 15,
    color: Palette.GREY_1,
    textAlign: 'center'
  }
});