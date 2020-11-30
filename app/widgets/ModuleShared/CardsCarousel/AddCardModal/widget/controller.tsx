import React, { Component } from "react";
import { AddCardModalView } from "./view";
import { ICardField, IFieldState, FieldType, ICreateCardData, ICard } from "types";
import { NavigationScreenProp } from "react-navigation";

interface IConnectProps {
  navigation: NavigationScreenProp<void>;
  createCard: ICreateCardData;
  createCardIsFetching: boolean;
  verifyCard: ICard;
  cardNumberField: IFieldState<FieldType.CardNumber, string>;
  expireDateField: IFieldState<FieldType.ExpireDate, string>;
  error: string;
  setCreateCardField: (params: ICardField) => void;
  pushCreateCard: () => void;
}

export interface IOwnProps {
  isVisible: boolean;
  closeModal: () => void;
}

export interface IState {
  verifyCardModalIsVisible: boolean;
}

export class AddCardModalController extends Component<IConnectProps & IOwnProps> {
  state: IState = {
    verifyCardModalIsVisible: false
  }

  componentDidUpdate(prevProps: IConnectProps) {
    const { createCard, verifyCard, closeModal } = this.props;

    if (createCard !== prevProps.createCard) {
      if (!!createCard) {
        this.openVerifyModal();
      }
    }

    if (verifyCard !== prevProps.verifyCard) {
      if (!!verifyCard) {
        this.closeVerifyModal();
        closeModal();
      }
    }
  }

  openVerifyModal = () => {
    this.setState({
      verifyCardModalIsVisible: true
    });
  }

  closeVerifyModal = () => {
    this.setState({
      verifyCardModalIsVisible: false
    });
  }

  onChangeCardNumber = (formated: string, extracted: string) => {
    const { setCreateCardField } = this.props;

    setCreateCardField({
      type: FieldType.CardNumber,
      value: extracted
    });
  }

  onChangeExpireDate = (formated: string, extracted: string) => {
    const { setCreateCardField } = this.props;

    setCreateCardField({
      type: FieldType.ExpireDate,
      value: extracted
    });
  }

  createCard = () => {
    const { pushCreateCard } = this.props;

    pushCreateCard();
  }

  render() {
    const { 
      isVisible, 
      closeModal,
      cardNumberField,
      expireDateField,
      createCardIsFetching,
      error
    } = this.props;
    const { verifyCardModalIsVisible } = this.state;

    return (
      <AddCardModalView 
        isVisible={isVisible} 
        closeModal={closeModal}
        createCardIsFetching={createCardIsFetching}
        cardNumberField={cardNumberField}
        expireDateField={expireDateField}
        verifyCardModalIsVisible={verifyCardModalIsVisible}
        error={error}
        onChangeCardNumber={this.onChangeCardNumber}
        onChangeExpireDate={this.onChangeExpireDate}
        createCard={this.createCard}
        closeVerifyCardModal={this.closeVerifyModal}
      />
    )
  }
}