import React, { Component } from "react";
import { AuthorizationButtonView } from "./view";
import { ILogin } from "types";
import { StackActions, NavigationActions, NavigationScreenProp } from "react-navigation";
import { ROUTES } from "const";

interface IConnectProps {
  loginIsFetching: boolean
  login: ILogin;
  navigation: NavigationScreenProp<void>;
  pushLogin: () => void;
}

export class AuthorizationButtonController extends Component<IConnectProps> {
  componentDidUpdate(prevProps: IConnectProps) {
    const { login, navigation } = this.props;

    if (login !== prevProps.login) {
      if (!!login) {
        const resetAction = StackActions.reset({
          index: 0,
          actions: [NavigationActions.navigate({ routeName: ROUTES.SCREEN_MAIN })],
        });
  
        navigation.dispatch(resetAction);
      }
    }
  } 

  login = () => {
    const { pushLogin } = this.props;

    pushLogin();
  }

  render() {
    const { loginIsFetching } = this.props;

    return (
      <AuthorizationButtonView 
        loginIsFetching={loginIsFetching}
        login={this.login}
      />
    )
  }
}