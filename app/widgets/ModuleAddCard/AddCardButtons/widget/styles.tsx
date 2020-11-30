import { StyleSheet } from "react-native";
import { Palette } from "styles";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    alignSelf: 'stretch',
    paddingHorizontal: 50
  },
  button: {
    marginTop: 15,
    borderRadius: 50,
    height: 50,
    paddingHorizontal: 30,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Palette.white,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowColor: Palette.black,
    shadowOpacity: 0.08,
    shadowRadius: 5
  },
  buttonText: {
    fontFamily: 'SFUIDisplay-Semibold',
    fontSize: 18,
    color: Palette.greyDay,
    marginLeft: 20
  }
});