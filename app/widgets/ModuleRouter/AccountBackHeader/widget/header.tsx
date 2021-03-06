import React from 'react';
import { NavigationScreenProp } from 'react-navigation';
import { AccountBackHeaderController } from './controller';

export const AccountBackHeader = (title?: string) => ({ navigation }: { navigation: NavigationScreenProp<any,any> }): NavigationStackOptions => {
  return ({
    header: () => <AccountBackHeaderController title={title} navigation={navigation} />,
    headerLeft: null
  });
};
