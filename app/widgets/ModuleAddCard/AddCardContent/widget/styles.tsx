import { StyleSheet } from "react-native";
import { Palette } from "styles";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 65
  },
  titleBox: {
    width: 200
  },
  title: {
    fontFamily: 'SFUIDisplay-Semibold',
    fontSize: 20,
    color: Palette.black,
    textAlign: 'center'
  }
});