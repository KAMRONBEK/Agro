import React, { Component } from 'react';
import { Signup2StepsView } from './view';
import { IFieldState, FieldType } from 'types';

interface IConnectProps {
  phone: IFieldState<FieldType.Phone, string>;
  code: IFieldState<FieldType.Code, string>;
  confirmPhone: boolean;
  signupIsFetching: boolean;
  pushSendCode: () => void;
  pushSignup: () => void;
}

interface IState {
  activeStep: number;
}

export class Signup2StepsController extends Component<IConnectProps, IState> {
  state: IState = {
    activeStep: 1
  }

  isDisabledFirstStep = () => {
    const { phone } = this.props;

    return phone.value.length < 12;
  }

  isDisabledSecondStep = () => {
    const { confirmPhone } = this.props;

    return !confirmPhone;
  }

  sendSmsCode = () => {
    const { pushSendCode } = this.props;

    pushSendCode();
    
    this.setState({ activeStep: 2 });
  }

  confirmPhone = () => {
    this.setState({ activeStep: 3 });
  }

  signup = () => {
    const { pushSignup } = this.props;

    pushSignup();
  }

  prevStep = (step: number) => () => {
    this.setState({ activeStep: step });
  }

  render() {
    const { activeStep } = this.state;
    const { signupIsFetching } = this.props;

    return (
      <Signup2StepsView 
        signupIsFetching={signupIsFetching}
        activeStep={activeStep}
        isDisabledFirstStep={this.isDisabledFirstStep}
        sendSmsCode={this.sendSmsCode}
        prevStep={this.prevStep}
      />
    )
  }
}