import React, { Component } from 'react';
import { Signup2GenderModalView } from './view';
import { IFieldState, FieldType, Gender, ISignupField } from 'types';

export interface IOwnProps {
  isVisible: boolean;
  closeModal: () => void;
}

interface IConnectProps {
  field: IFieldState<FieldType.Gender, Gender>;
  setField: (params: ISignupField) => void;
}

export class Signup2GenderModalController extends Component<IConnectProps & IOwnProps> {
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
      <Signup2GenderModalView 
        field={field}
        setGender={this.setGender}
        isVisible={isVisible}
        closeModal={closeModal}
      />
    )
  }
}