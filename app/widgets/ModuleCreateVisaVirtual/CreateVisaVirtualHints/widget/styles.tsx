import { StyleSheet } from "react-native";
import { Palette } from "styles";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  carouselBox: {

  },
  hint: {
    paddingHorizontal: 21,
    paddingVertical: 27,
    borderRadius: 8,
    backgroundColor: Palette.white,
    marginVertical: 20,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowColor: Palette.black,
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2
  },
  hintIcon: {
    alignSelf: 'center',
    marginBottom: 20
  },
  question: {
    fontFamily: 'SFUIDisplay-Bold',
    fontSize: 14,
    color: Palette.greenText
  },
  answer: {
    marginTop: 10,
    fontFamily: 'SFUIDisplay-Regular',
    fontSize: 15,
    color: Palette.GREY_1
  },
  paginationContainer: {
    paddingVertical: 0
  },
  dotStyle: {
    width: 12,
    height: 12,
    borderRadius: 20,
    marginHorizontal: -4,
    backgroundColor: Palette.greenAloe,
  },
  inactiveDotStyle: {
    backgroundColor: Palette.GREY_2
  }
});