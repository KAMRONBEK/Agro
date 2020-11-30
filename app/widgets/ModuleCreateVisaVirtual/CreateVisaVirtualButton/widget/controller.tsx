import React, { Component } from 'react';
import { CreateVisaVirtualButtonView } from './view';

interface IConnectProps {
  createVisaVirtualIsFetching: boolean;
  pushCreateVisaVirtual: () => void;
}

export class CreateVisaVirtualButtonController extends Component<IConnectProps> {
  createCard = () => {
    const { pushCreateVisaVirtual } = this.props;
    
    pushCreateVisaVirtual();
  }

  render() {
    const { createVisaVirtualIsFetching } = this.props;

    return (
      <CreateVisaVirtualButtonView
        createVisaVirtualIsFetching={createVisaVirtualIsFetching} 
        createCard={this.createCard}
      />
    )
  }
}