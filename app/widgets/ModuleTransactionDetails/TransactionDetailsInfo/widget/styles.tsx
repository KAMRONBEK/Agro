import { StyleSheet } from "react-native";
import { Palette } from "styles";
import { setAlpha } from "utils";

export const styles = StyleSheet.create({
  infoBox: {
    backgroundColor: Palette.white,
    borderRadius: 12,
    padding: 16,
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowColor: Palette.black,
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 2,
    marginTop: 30
  },
  title: {
    fontFamily: 'SFUIDisplay-Semibold',
    fontSize: 16,
    color: Palette.greenText,
    marginBottom: 10
  },
  parameters: {

  },
  parameter: {
    fontFamily: 'SFUIDisplay-Regular',
    fontSize: 14,
    color: Palette.greyDay,
    marginVertical: 1.5
  },
  parameterBold: {
    fontFamily: 'SFUIDisplay-Bold'
  },
  parameterStatus: {
    color: Palette.greenText
  }
});