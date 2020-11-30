import React, { Component } from 'react';
import { Signup2CountdownTimerView } from './view';

interface IConnectProps {
  codeIsFetching: boolean;
  pushSendCode: () => void;
}

interface IState {
  countdown: number;
  showCountdown: boolean;
}

export class Signup2CountdownTimerController extends Component<IConnectProps, IState> {
  countdown;

  state: IState = {
    countdown: 59,
    showCountdown: true
  }

  componentDidMount() {
    this.startCountdown();
  }

  componentDidUpdate(prevProps: IConnectProps, prevState: IState) {
    const { countdown } = this.state;

    if (countdown !== prevState.countdown) {
      if (countdown === 0) {
        this.stopCountdown();
      }
    }
  }

  componentWillUnmount() {
    this.stopCountdown();
  }

  startCountdown = () => {
    this.countdown = setInterval(() => {
      this.setState((prevState: IState) => ({
        showCountdown: true,
        countdown: prevState.countdown - 1
      }))
    }, 1000);
  }

  stopCountdown = () => {
    clearInterval(this.countdown);
    this.setState({ 
      showCountdown: false,
      countdown: 59
    })
  }

  formatedSeconds = (countdown: number) => {
    return countdown < 10 ? '0' + countdown : String(countdown);
  }

  sendCode = () => {
    const { pushSendCode } = this.props;

    pushSendCode();

    this.startCountdown();
  }

  render() {
    const { countdown, showCountdown } = this.state;
    const { codeIsFetching } = this.props;
    
    return (
      <Signup2CountdownTimerView
        countdown={countdown}
        showCountdown={showCountdown}
        codeIsFetching={codeIsFetching}
        sendCode={this.sendCode}
        formatedSeconds={this.formatedSeconds}
      />
    )
  }
}
