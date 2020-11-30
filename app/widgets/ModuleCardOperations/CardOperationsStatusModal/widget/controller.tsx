import React, { Component } from 'react';
import { NavigationScreenProp } from 'react-navigation';
import { ITransfer, OperationType } from 'types';
import { CardOperationsStatusModalView } from './view';

interface IConnectProps {
  operationType: OperationType;
  transfer: ITransfer;
  transferIsFetching: boolean;
  transferIsError: boolean;
  navigation: NavigationScreenProp<void>;
}

interface IState {
  showStatusModal: boolean;
}

export class CardOperationsStatusModalController extends Component<IConnectProps> {
  state: IState = {
    showStatusModal: false
  };

  componentDidUpdate(prevProps: IConnectProps) {
    const { transferIsFetching, transferIsError, transfer } = this.props;
    
    if (prevProps.transferIsFetching !== transferIsFetching) {
      !!transferIsFetching ? this.setState({ showStatusModal: true }) : this.setState({ showStatusModal: false });
    }

    if (prevProps.transferIsError !== transferIsError) {
      !!transferIsError && this.setState({ showStatusModal: true });
    }

    if (prevProps.transfer !== transfer) {
      !!transfer && this.setState({ showStatusModal: true });
    }
  }

  done = () => {
    const { navigation } = this.props;

    this.setState({ showStatusModal: false });

    navigation.goBack();
  }

  doneError = () => {
    this.setState({ showStatusModal: false });
  }

  render() {
    const { transfer, transferIsFetching, transferIsError, operationType } = this.props;
    const { showStatusModal } = this.state;

    return !!showStatusModal && (
      <CardOperationsStatusModalView 
        operationType={operationType}
        transfer={transfer}
        transferIsFetching={transferIsFetching}
        transferIsError={transferIsError}
        done={this.done}
        doneError={this.doneError}
      />
    )
  }
};
