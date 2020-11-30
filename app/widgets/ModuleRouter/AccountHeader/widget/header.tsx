import React from 'react';
import { NavigationScreenProp } from 'react-navigation';
import { AccountHeaderController } from './controller';
import { NavigationStackOptions } from 'react-navigation-stack';

export const AccountHeader = (title?: string) => ({ navigation }: { navigation: NavigationScreenProp<any,any> }): NavigationStackOptions => {
  return {
    header: () => <AccountHeaderController title={title} navigation={navigation} />,
    headerLeft: null
  };
};
