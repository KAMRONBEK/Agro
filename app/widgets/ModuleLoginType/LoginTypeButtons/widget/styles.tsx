import { StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { Palette } from 'styles';

const buttonBase: ViewStyle = {
  alignSelf: 'stretch',
  borderRadius: 50,
  height: 50,
  padding: 12,
  justifyContent: 'center',
  alignItems: 'center',
  marginVertical: 8,
  backgroundColor: Palette.white,
  elevation: 0.5
}

const shadowBase: ViewStyle = {
  shadowColor: Palette.black,
  shadowOffset: {
    width: 0,
    height: 1
  },
  shadowRadius: 10,
  shadowOpacity: 0.07,
}

const buttonTextBase: TextStyle = {
  fontSize: 18,
  fontWeight: "500",
  fontFamily: 'SFUIDisplay-Semibold'
}

export const styles = StyleSheet.create({
  buttonsBox: {
    flex: 1,
    justifyContent: 'center'
  },
  buttonGradient: {
    ...buttonBase,
    alignSelf: 'stretch'
  },
  buttonLogin: {
    ...shadowBase,
    marginHorizontal: 70
  },
  buttonLoginText: {
    ...buttonTextBase,
    color: Palette.white
  },
  buttonBecomeCustomer: {
    ...buttonBase,
    ...shadowBase,
    marginHorizontal: 70
  },
  buttonBecomeCustomerText: {
    ...buttonTextBase,
    color: Palette.greyText
  }
});
