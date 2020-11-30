import React, { Component } from "react";
import { SignupFieldView } from "./view";
import { FieldType, ISignupField, IFieldState } from "types";

interface IConnectProps {
  field: IFieldState<FieldType, string>;
  setField: (params: ISignupField) => void;
}

export interface IOwnProps {
  type: FieldType;
  placeholder: string;
  mask?: string;
  editable?: boolean;
}

export class SignupFieldController extends Component<IConnectProps & IOwnProps> {
  onChange = (value: string) => {
    const { setField, type } = this.props;

    setField({
      type,
      value
    });
  }

  onChangeMasked = (formated: string, extracted: string) => {
    const { setField, type } = this.props;

    setField({
      type,
      value: extracted
    });
  }

  render() {
    const { placeholder, editable, field, mask } = this.props;

    return (
      <SignupFieldView 
        placeholder={placeholder}
        field={field}
        mask={mask}
        editable={editable}
        onChange={this.onChange}
        onChangeMasked={this.onChangeMasked}
      />
    )
  }
}