import React, { Component } from 'react';
import { CardOperationsBankCommissionView } from './view';
import { ITransferInfo, IFieldState, FieldType } from 'types';

interface IConnectProps {
  transferInfo: ITransferInfo;
  amount: IFieldState<FieldType, string>;
}

export class CardOperationsBankCommissionController extends Component<IConnectProps> {
  render() {
    const { amount, transferInfo } = this.props;
    const formatedCommissionPercent = '0.0' + transferInfo?.percent;
    const formatedAmount = Number(amount.value.split(' ').join(''));
    const commission = formatedAmount * Number(formatedCommissionPercent);

    return !!transferInfo && (
      <CardOperationsBankCommissionView
        transferInfo={transferInfo}
        commission={commission}
      />
    )
  }
}