import React from 'react';
import { NavigationScreenProp } from 'react-navigation';
import { BackHeaderController } from './controller';
import { NavigationStackOptions } from 'react-navigation-stack';

export const BackHeader = (title?: string) => ({ navigation }: { navigation: NavigationScreenProp<any,any> }): NavigationStackOptions => {
  return {
    header: () => <BackHeaderController title={title} navigation={navigation} />,
    headerLeft: null
  };
};
