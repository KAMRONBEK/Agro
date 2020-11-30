import { StyleSheet } from "react-native";
import { Palette } from "styles";
import { setAlpha } from "utils";

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    marginTop: 20
  },
  infoBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
    borderBottomWidth: 1,
    paddingBottom: 10,
    borderBottomColor: Palette.greyBg
  },
  infoTitle: {
    fontFamily: 'SFUIDisplay-Regular',
    color: Palette.blackText,
    fontSize: 16
  },
  infoData: {
    fontFamily: 'SFUIDisplay-Regular',
    color: Palette.greyText,
    fontSize: 16
  },
  maxLimit: {
    width: 200,
  }
});