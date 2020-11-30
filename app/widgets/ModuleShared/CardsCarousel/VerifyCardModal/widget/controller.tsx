import React, { Component } from "react";
import { VerifyCardModalView } from "./view";
import { FieldType, ICreateCardData, IFieldState, ICardField } from "types";

interface IConnectProps {
  createCard: ICreateCardData;
  createCardIsFetching: boolean;
  codeField: IFieldState<FieldType.VerificationCode, string>;
  setCreateCardField: (params: ICardField) => void;
  pushVerifyCard: () => void;
}

export interface IOwnProps {
  isVisible: boolean;
  closeModal: () => void;
}

export class VerifyCardModalController extends Component<IConnectProps & IOwnProps> {
  onChange = (value: string) => {
    const { setCreateCardField } = this.props;

    setCreateCardField({
      type: FieldType.VerificationCode,
      value
    });
  }

  verifyCard = () => {
    const { pushVerifyCard } = this.props;

    pushVerifyCard();
  }

  render() {
    const { 
      isVisible, 
      closeModal,
      createCard,
      codeField,
      createCardIsFetching
    } = this.props;
    const createCardResult = createCard?.result;

    return (
      <VerifyCardModalView 
        isVisible={isVisible} 
        closeModal={closeModal}
        createCard={createCardResult}
        onChange={this.onChange}
        codeField={codeField}
        verifyCard={this.verifyCard}
        createCardIsFetching={createCardIsFetching}
      />
    )
  }
}