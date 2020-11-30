import { StyleSheet } from "react-native";
import { Palette } from "styles";

export const styles = StyleSheet.create({
  labelBox: {
    marginBottom: 10
  },
  label: {
    fontFamily: 'SFUIDisplay-Regular',
    fontSize: 16,
    color: Palette.greenText,
    textAlign: 'center'
  },
  button: {
    borderBottomWidth: 0.6,
    borderColor: Palette.greyWall,
    height: 45,
    paddingLeft: 5,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  selectItemsButton: {
    borderBottomWidth: 0.6,
    borderColor: Palette.greyWall,
    height: 45,
    paddingLeft: 5,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20
  },
  buttonText: {
    fontSize: 16,
    width: 0,
    flexGrow: 1,
    color: Palette.greyRoad
  }
});