import { StyleSheet } from 'react-native';
import { Palette } from 'styles';

export const styles = StyleSheet.create({
  container: {
    
  },
  flatListContainer: {
    paddingHorizontal: 5,
    marginVertical: 10
  },
  listItems: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    paddingHorizontal: 10,
    marginTop: 20
  },
  item: {
    padding: 11,
    flex: 1,
    height: 103,
    margin: 5,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Palette.white,
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowColor: Palette.black,
    shadowOpacity: 0.07,
    shadowRadius: 5,
    elevation: 5
  },
  logoBox: {
    width: '100%',
    height: 100,
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    width: '100%',
    height: '100%'
  }
});
