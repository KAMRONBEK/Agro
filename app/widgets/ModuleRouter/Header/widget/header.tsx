import React from 'react';
import { NavigationScreenProp } from 'react-navigation';
import { AccountHeaderController } from './controller';
import { NavigationStackOptions } from 'react-navigation-stack';
import { Palette } from 'styles';

export const AccountHeader = ({ navigation }: { navigation: NavigationScreenProp<any,any> }): NavigationStackOptions => {
  return {
    header: () => <AccountHeaderController navigation={navigation} />,
    headerLeft: null
  };
};
