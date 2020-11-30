import React, { Component } from 'react';
import { CardOperationsTypeView } from './view';
import { OperationType } from 'types';

interface IConnectProps {
  setOperationType: (type: OperationType) => void;
}

export class CardOperationsTypeController extends Component<IConnectProps> {
  setType = (value: OperationType) => {
    const { setOperationType } = this.props;

    setOperationType(value);
  }

  render() {
    return (
      <CardOperationsTypeView
        setType={this.setType}
      />
    )
  }
}
