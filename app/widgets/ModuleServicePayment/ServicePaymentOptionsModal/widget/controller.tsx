import React, { Component } from "react";
import { ServicePaymentOptionsModalView } from "./view";
import { ISupplierFormOptionsDropdownItem } from "types";

interface IOwnProps {
  isVisible: boolean,
  data: ISupplierFormOptionsDropdownItem[];
  label: string;
  fieldValue: number | string;
  onClose: () => void;
  onChange: (value: number) => void;
}

export class ServicePaymentOptionsModalController extends Component<IOwnProps> {
  setValue = (item: ISupplierFormOptionsDropdownItem) => () => {
    const { onChange, onClose } = this.props;

    onChange(!!item.extra ? item.extra.amount : item.value);

    onClose();
  }

  render() {
    const { isVisible, fieldValue, data, label, onClose } = this.props;

    return (
      <ServicePaymentOptionsModalView 
        isVisible={isVisible}
        data={data}
        fieldValue={fieldValue}
        label={label}
        onClose={onClose}
        setValue={this.setValue}
      />
    );
  }
}