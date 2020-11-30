import React, { Component } from "react";
import { ScreenCardOperationsView } from './view';
import { OperationType, ITransfer, ICard } from 'types';
import { NavigationScreenProp } from "react-navigation";

interface IConnectProps {
  navigation: NavigationScreenProp<void>;
  operationType: OperationType;
  transfer: ITransfer;
  cards: ICard[];
  resetState: () => void;
}

export class ScreenCardOperationsController extends Component<IConnectProps> {
  componentWillUnmount() {
    const { resetState } = this.props;

    resetState();
  }
  
  render() {
    const { operationType, cards } = this.props;

    return (
      <ScreenCardOperationsView
        operationType={operationType}
        cards={cards}
      />
    )
  }
}
