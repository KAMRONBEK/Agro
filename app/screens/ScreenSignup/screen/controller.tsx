import React, { Component } from 'react';
import { ScreenSignupView } from './view';

interface IConnectProps {
  resetState: () => void;
}

export class ScreenSignupController extends Component<IConnectProps> {
  componentDidMount() {
    const { resetState } = this.props;

    resetState();
  }

  render() {
    return (
      <ScreenSignupView />
    )
  }
}