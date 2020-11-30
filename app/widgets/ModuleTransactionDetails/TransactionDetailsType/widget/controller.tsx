import React, { Component } from 'react';
import { ITransactionDetails } from 'types';
import { TransactionDetailsTypeView } from './view';

interface IConnectProps {
  details: ITransactionDetails;
  detailsIsFetching: boolean;
}

export class TransactionDetailsTypeController extends Component<IConnectProps> {
  render() {
    const { details, detailsIsFetching } = this.props;

    return (
      <TransactionDetailsTypeView 
        details={details}
        detailsIsFetching={detailsIsFetching}
      />
    )
  }
}