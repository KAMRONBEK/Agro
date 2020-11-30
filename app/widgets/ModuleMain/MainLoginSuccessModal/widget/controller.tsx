import React, { Component } from 'react';
import { MainLoginSuccessModalView } from './view';
import _ from 'lodash';

interface IConnectProps {
  signupSuccessModalVisible: boolean;
  setSignupSuccessModalState: (payload: boolean) => void;
}

export class MainLoginSuccessModalController extends Component<IConnectProps> {
  componentDidMount() {
    _.delay(this.closeModal, 2000); 
  }

  closeModal = () => {
    const { setSignupSuccessModalState } = this.props;

    setSignupSuccessModalState(false);
  }

  render() {
    const { signupSuccessModalVisible } = this.props;

    return (
      <MainLoginSuccessModalView 
        isVisible={signupSuccessModalVisible}
      />
    )
  }
}