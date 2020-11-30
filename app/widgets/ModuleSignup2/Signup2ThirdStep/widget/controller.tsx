import React, { Component } from 'react';
import { Signup2ThirdStepView } from './view';
import { NavigationScreenProp, StackActions, NavigationActions } from 'react-navigation';
import { ISignup } from 'types';
import { ROUTES } from 'const';

interface IConnectProps {
  navigation: NavigationScreenProp<void>;
  signup: ISignup;
}

export class Signup2ThirdStepController extends Component<IConnectProps> {
  componentDidUpdate(prevProps: IConnectProps) {
    const { signup, navigation } = this.props;

    if (signup !== prevProps.signup) {
      if (signup) {
        const resetAction = StackActions.reset({
          index: 0,
          actions: [NavigationActions.navigate({ routeName: ROUTES.SCREEN_MAIN })],
        });

        navigation.dispatch(resetAction);
      }
    }
  }

  render() {
    return (
      <Signup2ThirdStepView />
    )
  }
}