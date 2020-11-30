import React, { Component } from 'react';
import { SignupGenderModalView } from './view';
import { IFieldState, FieldType, Gender, ISignupField } from 'types';

export interface IOwnProps {
  isVisible: boolean;
  closeModal: () => void;
}

interface IConnectProps {
  field: IFieldState<FieldType.Gender, Gender>;
  setField: (params: ISignupField) => void;
}

export class SignupGenderModalController extends Component<IConnectProps & IOwnProps> {
  setGender = (value: Gender) => () => {
    const { setField, closeModal } = this.props;

    setField({
      type: FieldType.Gender,
      value
    });

    closeModal();
  }

  render() {
    const { isVisible, closeModal, field } = this.props;

    return (
      <SignupGenderModalView 
        field={field}
        setGender={this.setGender}
        isVisible={isVisible}
        closeModal={closeModal}
      />
    )
  }
}