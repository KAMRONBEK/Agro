import { StyleSheet } from 'react-native';
import { Palette } from 'styles';

export const styles = StyleSheet.create({
  container: {
    borderRadius: 12,
    backgroundColor: Palette.white,
    paddingHorizontal: 15,
    marginHorizontal: 5,
    shadowOffset: {
      width: 0,
      height: 10
    },
    shadowColor: Palette.black,
    shadowOpacity: 0.05,
    shadowRadius: 10,
    marginBottom: 7
  },
  scrollContainer: {
    marginTop: 18
  },
  labelBox: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  label: {
    fontSize: 16,
    fontFamily: 'SFUIDisplay-Bold',
    color: Palette.greyDay
  },
  openAllServicesButton: {
    width: 30,
    alignItems: 'center'
  },
  serviceBox: {

  },
  service: {
    width: 91,
    height: 94,
    borderRadius: 8,
    marginVertical: 8,
    padding: 14,
    backgroundColor: Palette.white,
    shadowOffset: {
      width: 0,
      height: 5
    },
    shadowColor: Palette.black,
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 7
  },
  serviceName: {
    fontSize: 12,
    fontFamily: 'SFUIDisplay-Regular',
    color: Palette.greyDay,
    textAlign: 'center'
  },
  serviceIconBox: {
    width: 35,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10
  },
  serviceIcon: {
    width: '100%',
    height: '100%'
  }
});
