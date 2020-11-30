import React, { Component } from 'react';
import { SettingsLogoutModalView } from './view';
import { StackActions, NavigationActions, NavigationScreenProp } from 'react-navigation';
import { ROUTES } from 'const';

interface IConnectProps {
  logout: boolean;
  logoutIsFetching: boolean;
  navigation: NavigationScreenProp<void>;
  pushLogout: () => void;
}

export interface IOwnProps {
  isVisible: boolean;
  close: () => void;
}

export class SettingsLogoutModalController extends Component<IConnectProps & IOwnProps> {
  componentDidUpdate(prevProps: IConnectProps) {
    const { logout, navigation } = this.props;

    if (logout !== prevProps.logout) {
      if (logout) {
        const resetAction = StackActions.reset({
          index: 0,
          actions: [NavigationActions.navigate({ routeName: ROUTES.SCREEN_LOCALIZATION })],
        });
  
        navigation.dispatch(resetAction);
      }
    }
  }

  render() {
    const { isVisible, logoutIsFetching, close, pushLogout } = this.props;
    
    return (
      <SettingsLogoutModalView 
        isVisible={isVisible}
        close={close}
        logout={pushLogout}
        logoutIsFetching={logoutIsFetching}
      />
    )
  }
}