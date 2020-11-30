import React, { Component } from "react";
import { Signup2FieldView } from "./view";
import { FieldType, ISignupField, IFieldState } from "types";
import { KeyboardTypeOptions } from "react-native";

interface IConnectProps {
  field: IFieldState<FieldType, string>;
  setField: (params: ISignupField) => void;
}

export interface IOwnProps {
  type: FieldType;
  placeholder: string;
  keyboardType?: KeyboardTypeOptions;
  mask?: string;
  editable?: boolean;
}

export class Signup2FieldController extends Component<IConnectProps & IOwnProps> {
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
    const { placeholder, keyboardType, editable, field, mask } = this.props;

    return (
      <Signup2FieldView 
        placeholder={placeholder}
        field={field}
        keyboardType={keyboardType}
        mask={mask}
        editable={editable}
        onChange={this.onChange}
        onChangeMasked={this.onChangeMasked}
      />
    )
  }
}