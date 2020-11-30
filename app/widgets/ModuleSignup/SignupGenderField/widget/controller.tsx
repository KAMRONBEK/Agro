import React, { Component } from "react";
import { SignupGenderFieldView } from "./view";
import { SignupGenderModal } from "widgets/ModuleSignup";
import { FieldType, Gender, IFieldState } from "types";

interface IConnectProps {
  field: IFieldState<FieldType.Gender, Gender>;
}

interface IState {
  isModalVisible: boolean;
}

export class SignupGenderFieldController extends Component<IConnectProps> {
  state: IState = {
    isModalVisible: false
  }

  openModal = () => {
    this.setState({
      isModalVisible: true
    });
  }

  closeModal = () => {
    this.setState({
      isModalVisible: false
    });
  }

  render() {
    const { isModalVisible } = this.state;
    const { field } = this.props;

    return (
      <>
        <SignupGenderFieldView 
          field={field}
          openModal={this.openModal}
        />

        <SignupGenderModal 
          isVisible={isModalVisible} 
          closeModal={this.closeModal}
        />
      </>
    )
  }
}