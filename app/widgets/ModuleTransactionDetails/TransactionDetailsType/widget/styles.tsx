import { StyleSheet } from "react-native";
import { Palette } from "styles";
import { setAlpha } from "utils";

export const styles = StyleSheet.create({
  container: {
    
  },
  content: {

  },
  typeBox: {
    alignItems: 'center'
  },
  typeName: {
    fontFamily: 'SFUIDisplay-Regular',
    fontSize: 22,
    color: Palette.greenText
  },
  typeLogoBox: {
    width: 100,
    height: 100,
    backgroundColor: Palette.white,
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowColor: Palette.black,
    shadowOpacity: 0.07,
    shadowRadius: 5,
    elevation: 2,
    marginTop: 30,
    borderRadius: 8,
    padding: 5
  },
  typeLogoTransferBox: {
    padding: 20
  },
  typeLogo: {
    width: '100%',
    height: '100%'
  },
  loaderBox: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});