import React, { Component } from 'react';
import { ScreenSignup2View } from './view';

interface IConnectProps {
  resetState: () => void
}

export class ScreenSignup2Controller extends Component<IConnectProps> {

  componentDidMount() {
    const { resetState } = this.props;

    resetState();
  }

  render() {
    return (
      <ScreenSignup2View />
    )
  }
}
