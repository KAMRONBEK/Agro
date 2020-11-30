import React, { Component } from "react";
import { CardOperationsTransferFooterButtonsView } from "./view";
import { NavigationScreenProp } from "react-navigation";

interface IConnectProps {
  transferIsFetching: boolean;
  navigation: NavigationScreenProp<void, void>;
  pushTransferCardToken: () => void;
  resetState: () => void;
}

export class CardOperationsTransferFooterButtonsController extends Component<IConnectProps> {
  transfer = () => {
    const { pushTransferCardToken } = this.props;

    pushTransferCardToken();
  }

  cancel = () => {
    const { navigation, resetState } = this.props;

    navigation.goBack();
    resetState();
  }
  
  render() {
    const { transferIsFetching } = this.props;

    return (
      <CardOperationsTransferFooterButtonsView 
        transferIsFetching={transferIsFetching}
        transfer={this.transfer}
        cancel={this.cancel}
      />
    )
  }
}