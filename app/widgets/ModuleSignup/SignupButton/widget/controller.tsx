import React, { Component } from "react";
import { SignupButtonView } from "./view";
import { ISignupSmsCode } from "types";
import { NavigationScreenProp } from "react-navigation";
import { ROUTES } from "const";

interface IConnectProps {
  code: ISignupSmsCode;
  codeIsFetching: boolean;
  navigation: NavigationScreenProp<void>;
  pushSendCode: () => void;
}

export class SignupButtonController extends Component<IConnectProps> {
  componentDidUpdate(prevProps: IConnectProps) {
    const { code, navigation } = this.props;

    if (code !== prevProps.code) {
      if (!!code.session_id) {
        navigation.navigate(ROUTES.SCREEN_SMS_CONFIRMATION);
      }
    }
  }

  sendCode = () => {
    const { pushSendCode } = this.props;

    pushSendCode();
  }

  render() {
    const { codeIsFetching } = this.props;

    return (
      <SignupButtonView 
        sendCode={this.sendCode}
        codeIsFetching={codeIsFetching}
      />
    )
  }
}