import React, { Component } from 'react';
import { ITransactionDetails } from 'types';
import { TransactionDetailsInfoView } from './view';

interface IConnectProps {
  details: ITransactionDetails;
  detailsIsFetching: boolean;
}

export class TransactionDetailsInfoController extends Component<IConnectProps> {
  render() {
    const { details, detailsIsFetching } = this.props;
    
    return !detailsIsFetching && (
      <TransactionDetailsInfoView 
        details={details}
      />
    )
  }
}