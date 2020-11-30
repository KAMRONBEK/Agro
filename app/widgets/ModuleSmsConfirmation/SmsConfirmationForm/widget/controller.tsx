import React, { Component } from "react";
import { SmsConfirmationFormView } from "./view";
import { ISignupField, FieldType, IFieldState } from "types";

interface IConnectProps {
  field: IFieldState<FieldType.Code, string>;
  phoneField: IFieldState<FieldType.Phone, string>;
  setCode: (params: ISignupField) => void;
}

export class SmsConfirmationFormController extends Component<IConnectProps> {
  onChange = (value: string) => {
    const { setCode } = this.props;

    setCode({
      type: FieldType.Code,
      value
    });
  }

  render() {
    const { field, phoneField } = this.props;
    
    return (
      <SmsConfirmationFormView
        field={field}
        phoneField={phoneField}
        onChange={this.onChange}
      />
    )
  }
}