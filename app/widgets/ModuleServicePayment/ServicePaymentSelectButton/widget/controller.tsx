import React, { Component } from "react";
import { ServicePaymentSelectButtonView } from "./view";
import { ISupplierForm, FormTypes, IFieldState, FieldType, ISupplierField } from "types";
import { ServicePaymentOptionsModal } from "widgets/ModuleServicePayment";

interface IConnectProps {
  supplierForm: ISupplierForm;
  selectField: IFieldState<FieldType.SupplierDropdown, number>;
  selectItemField: IFieldState<FieldType.SupplierDropdownItem, number>;
  pushFieldValue: (params: ISupplierField) => void;
}

interface IState {
  isModalVisible: boolean;
  isSelectItemsModalVisible: boolean;
}

export class ServicePaymentSelectButtonController extends Component<IConnectProps> {
  state: IState = {
    isModalVisible: false,
    isSelectItemsModalVisible: false
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

  openSelectItemsModal = () => {
    this.setState({
      isSelectItemsModalVisible: true
    });
  }

  closeSelectItemsModal = () => {
    this.setState({
      isSelectItemsModalVisible: false
    });
  }

  onChangeSelect = (value: number) => {
    const { pushFieldValue } = this.props;
    const selectForm = this.getSelectForm();
    const nestedSelect = selectForm.options.items.some(item => !!item.items);
    
    pushFieldValue({
      type: FieldType.SupplierDropdown,
      value
    });

    if (nestedSelect) {
      const selectInitItem = selectForm?.options.items.find(item => item.value === value)?.items[0];

      pushFieldValue({
        type: FieldType.SupplierDropdownItem,
        value: selectInitItem.extra.amount
      });

      pushFieldValue({
        type: FieldType.SupplierFieldStaticAmount,
        value: selectInitItem.extra.amount
      });
    }
  }

  onChangeSelectItem = (value: number) => {
    const { pushFieldValue } = this.props;

    pushFieldValue({
      type: FieldType.SupplierDropdownItem,
      value
    });

    pushFieldValue({
      type: FieldType.SupplierFieldStaticAmount,
      value: value
    });
  }

  getSelectForm = () => {
    const { supplierForm } = this.props;

    return supplierForm?.form[supplierForm?.form
      .findIndex(item => !!item.length && item[0]?.type === FormTypes.Dropdown_Combobox)][0];
  }

  render() {
    const { selectField, selectItemField } = this.props;
    const { isModalVisible, isSelectItemsModalVisible } = this.state;
    const selectForm = this.getSelectForm();
    const selectData = selectForm?.options.items;
    const selectItemsData = selectForm?.options.items.find(item => item.value === selectField.value)?.items;
    const selectValue = !!selectField.value ? selectForm?.options.items.find(item => item.value === selectField.value).title : selectForm?.options.label;
    const selectItemFieldValue = !!selectField.value && !!selectItemField.value && selectForm?.options.items.find(item => item.value === selectField.value)?.items.find(item => item.extra.amount === selectItemField.value)?.title;

    return (
      <>
        <ServicePaymentSelectButtonView 
          selectForm={selectForm}
          field={selectField}
          selectItemFieldValue={selectItemFieldValue}
          fieldValue={selectValue}
          openModal={this.openModal}
          openSelectItemsModal={this.openSelectItemsModal}
        />

        <ServicePaymentOptionsModal 
          label={selectForm.options.label}
          fieldValue={selectValue}
          onChange={this.onChangeSelect}
          onClose={this.closeModal} 
          isVisible={isModalVisible} 
          data={selectData} 
        />

        <ServicePaymentOptionsModal 
          label={selectForm.options.label}
          fieldValue={selectItemFieldValue}
          onChange={this.onChangeSelectItem}
          onClose={this.closeSelectItemsModal} 
          isVisible={isSelectItemsModalVisible} 
          data={selectItemsData} 
        />
      </>
    )
  }
}