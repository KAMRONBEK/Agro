import React, { Component } from "react";
import { AuthorizationFormView } from "./view";
import { IFieldState, FieldType, ILoginField } from "types";

interface IConnectProps {
  phone: IFieldState<FieldType, string>;
  password: IFieldState<FieldType, string>;
  hidePassword: boolean;
  setField: (params: ILoginField) => void;
  toggleHidePassword: () => void;
}

export class AuthorizationFormController extends Component<IConnectProps> {
  onChangePhone = (formated: string, extracted: string) => {
    const { setField } = this.props;

    setField({
      type: FieldType.Phone,
      value: extracted
    });
  }
  
  onChangePassword = (value: string) => {
    const { setField } = this.props;

    setField({
      type: FieldType.Password,
      value
    });
  }

  render() {
    const { 
      hidePassword, 
      phone, 
      password,
      toggleHidePassword
    } = this.props;

    return (
      <AuthorizationFormView 
        phone={phone}
        password={password}
        hidePassword={hidePassword}
        onChangePhone={this.onChangePhone}
        onChangePassword={this.onChangePassword}
        toggleHidePassword={toggleHidePassword}
      />
    )
  }
}