import { StyleSheet } from 'react-native';
import { Palette } from 'styles';

export const styles = StyleSheet.create({
  buttonsList: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 70,
    flex: 1
  },
  button: {
    alignSelf: 'stretch',
    backgroundColor: Palette.white,
    borderRadius: 50,
    height: 50,
    padding: 12,
    shadowColor: Palette.black,
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowRadius: 5,
    shadowOpacity: 0.07,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 12,
    elevation: 0.5
  },
  buttonText: {
    fontSize: 18,
    color: Palette.greenText,
    fontWeight: '500',
    fontFamily: 'SFUIDisplay-Semibold'
  }
})
