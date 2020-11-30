import React, { Component } from 'react';
import { Signup2GenderFieldView } from './view';
import { Signup2GenderModal } from 'widgets/ModuleSignup2';
import { FieldType, Gender, IFieldState } from 'types';

interface IConnectProps {
  field: IFieldState<FieldType.Gender, Gender>;
}

interface IState {
  isModalVisible: boolean;
}

export class Signup2GenderFieldController extends Component<IConnectProps> {
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
        <Signup2GenderFieldView 
          field={field}
          openModal={this.openModal}
        />

        <Signup2GenderModal 
          isVisible={isModalVisible} 
          closeModal={this.closeModal}
        />
      </>
    )
  }
}