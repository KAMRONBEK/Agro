import React, { Component } from 'react';
import { CardOperationsRecipientCardView } from './view';
import { IFieldState, FieldType, ITransferField } from 'types';

interface IConnectProps {
  field: IFieldState<FieldType.CardNumberReceiver, string>;
  transferIsFetching: boolean;
  setField: (params: ITransferField) => void;
}

export class CardOperationsRecipientCardController extends Component<IConnectProps> {
  onChangeCardNumber = (value: string) => {
    const { setField } = this.props;
    
    setField({
      type: FieldType.CardNumberReceiver,
      value: value
    });
  }

  render() {
    const { field, transferIsFetching } = this.props;

    return (
      <CardOperationsRecipientCardView
        field={field}
        transferIsFetching={transferIsFetching}
        onChangeCardNumber={this.onChangeCardNumber}
      />
    )
  }
}
