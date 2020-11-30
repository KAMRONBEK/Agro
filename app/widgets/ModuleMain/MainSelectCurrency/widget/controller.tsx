import React, { Component } from 'react';
import { MainSelectCurrencyView } from './view';

interface IState {
  listVisible: boolean;
}

export class MainSelectCurrencyController extends Component<{}, IState> {
  state: IState = {
    listVisible: false
  }

  toggleListVisible = () => {
    const { listVisible } = this.state;

    this.setState({
      listVisible: !listVisible
    });
  }

  render() {
    const { listVisible } = this.state;

    return (
      <MainSelectCurrencyView
        listVisible={listVisible}
        toggleListVisible={this.toggleListVisible}
      />
    )
  }
}
