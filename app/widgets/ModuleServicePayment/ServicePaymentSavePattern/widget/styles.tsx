import { StyleSheet } from 'react-native';
import { setAlpha } from 'utils';
import { Palette } from 'styles';

export const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    marginHorizontal: 20,
    paddingVertical: 20,
    borderTopWidth: 0.3,
    borderTopColor: Palette.greyWall,
    borderBottomWidth: 0.3,
    borderBottomColor: Palette.greyWall,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  title: {
    fontFamily: 'SFUIDisplay-Regular',
    fontSize: 16,
    color: Palette.greyRoad
  }
});
