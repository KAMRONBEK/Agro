import React, { Component } from "react";
import { CreateVisaVirtualContentView } from "./view";
import { ICard } from "types";

interface IConnectProps {
  cards: ICard[];
}

export class CreateVisaVirtualContentController extends Component<IConnectProps> {
  render() {
    const { cards } = this.props;
    console.log(cards);
    return (
      <CreateVisaVirtualContentView cards={cards} />
    )
  }
}