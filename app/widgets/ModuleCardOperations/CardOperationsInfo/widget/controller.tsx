import React, { Component } from "react";
import { CardOperationsInfoView } from "./view";
import { ICardInfo, ICardImgInfo, ITransferInfo, IFieldState, FieldType } from "types";

interface IConnectProps {
  cardInfo: ICardInfo;
  cardImgInfo: ICardImgInfo;
  transferInfo: ITransferInfo;
  amount: IFieldState<FieldType.Amount, string>;
}

export class CardOperationsInfoController extends Component<IConnectProps> {
  render() {
    const { cardInfo, cardImgInfo, transferInfo, amount } = this.props;

    return !!cardInfo && !!cardImgInfo && !!transferInfo && (
      <CardOperationsInfoView 
        cardInfo={cardInfo}
        transferInfo={transferInfo}
        amount={amount}
      />
    )
  }
}