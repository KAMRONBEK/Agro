import React, { Component } from "react";
import { SignupPasswordFieldView } from "./view";
import { ISignupField, IFieldState, FieldType } from "types";

interface IConnectProps {
  field: IFieldState<FieldType.Password, string>;
  hidePassword: boolean;
  setField: (params: ISignupField) => void;
  toggleHidePassword: () => void;
}

export class SignupPasswordFieldController extends Component<IConnectProps> {
  onChange = (value: string) => {
    const { setField } = this.props;

    setField({
      type: FieldType.Password,
      value
    });
  }

  render() {
    const { field, hidePassword, toggleHidePassword } = this.props;
    
    return (
      <SignupPasswordFieldView 
        field={field}
        hidePassword={hidePassword}
        onChange={this.onChange}
        toggleHidePassword={toggleHidePassword}
      />
    )
  }
}