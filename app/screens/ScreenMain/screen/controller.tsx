import React, { Component } from "react";
import { ScreenMainView } from "./view";

interface IConnectProps {
  isLogged: boolean;
  pushCategories: () => void;
  pushCards: () => void;
  pushTransactions: () => void;
  pushTokenExist: () => void;
}

export class ScreenMainController extends Component<IConnectProps> {
  componentDidMount() {
    const { 
      pushCategories, 
      pushTransactions, 
      pushTokenExist
    } = this.props;
    
    pushTokenExist();
    pushCategories();
    pushTransactions();
  }

  componentDidUpdate(prevProps: IConnectProps) {
    const { isLogged, pushCards } = this.props;

    if (isLogged !== prevProps.isLogged) {
      console.log(isLogged);
      if (isLogged) {
        pushCards();
      }
    }
  }

  render() {
    return (
      <ScreenMainView />
    )
  }
}