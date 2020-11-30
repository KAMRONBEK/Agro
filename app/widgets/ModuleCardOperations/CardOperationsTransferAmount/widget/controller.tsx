import React, { Component } from 'react';
import { CardOperationsTransferAmountView } from './view';
import { OperationType, ITransferField, IFieldState, FieldType } from 'types';

interface IConnectProps {
  operationType: OperationType;
  field: IFieldState<FieldType.Amount, string>;
  transferIsFetching: boolean;
  setField: (params: ITransferField) => void;
}

export class CardOperationsTransferAmountController extends Component<IConnectProps> {
  onChangeAmount = (value: string) => {
    const { setField } = this.props;

    setField({
      type: FieldType.Amount,
      value
    });
  }

  render() {
    const { operationType, transferIsFetching, field } = this.props;

    return (
      <CardOperationsTransferAmountView
        field={field}
        operationType={operationType}
        transferIsFetching={transferIsFetching}
        onChangeAmount={this.onChangeAmount}
      />
    )
  }
}
