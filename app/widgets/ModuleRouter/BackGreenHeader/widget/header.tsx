import React from 'react';
import { NavigationScreenProp } from 'react-navigation';
import { BackGreenHeaderController } from './controller';
import { NavigationStackOptions } from 'react-navigation-stack';

export const BackGreenHeader = (title?: string) => ({ navigation }: { navigation: NavigationScreenProp<any,any> }): NavigationStackOptions => {
  return {
    header: () => <BackGreenHeaderController title={title} navigation={navigation} />,
    headerLeft: null
  };
};
