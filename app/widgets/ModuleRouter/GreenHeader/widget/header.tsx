import React from 'react';
import { NavigationScreenProp } from 'react-navigation';
import { GreenHeaderController } from './controller';
import { NavigationStackOptions } from 'react-navigation-stack';

export const GreenHeader = (title?: string) => ({ navigation }: { navigation: NavigationScreenProp<any,any> }): NavigationStackOptions => {
  return {
    header: () => <GreenHeaderController title={title} navigation={navigation} />,
    headerLeft: null
  };
};
