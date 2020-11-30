import React, { Component } from 'react';
import { ServicePaymentDropdownFieldView } from './view';
import { ISupplierField, FieldType, IFieldState, ISupplier, ISupplierForm, FormTypes } from 'types';
import { NavigationScreenProp } from 'react-navigation';
import { SUPPLIER_ID } from './consts';

interface IConnectProps {
  supplierForm: ISupplierForm;
  field: IFieldState<FieldType.SupplierField, string>; 
  dropdownField: IFieldState<FieldType.SupplierDropdown, string>;
  suppliers: ISupplier[];
  navigation: NavigationScreenProp<any, any>;
  pushFieldValue: (payload: ISupplierField) => void;
}

export class ServicePaymentDropdownFieldController extends Component<IConnectProps> {
  onChangeMasked = (formatted: string, extracted: string) => {
    const { pushFieldValue } = this.props;

    pushFieldValue({
      type: FieldType.SupplierField,
      value: extracted
    });
  }

  onChange = (value: string) => {
    const { pushFieldValue } = this.props;

    pushFieldValue({
      type: FieldType.SupplierField,
      value
    });
  }

  filteredSupplierInputFormData = () => {
    const { supplierForm, dropdownField } = this.props;
    const selectForm = supplierForm?.form[supplierForm?.form
      .findIndex(item => !!item.length && item[0]?.type === FormTypes.Dropdown_Combobox && !item[0].options.hidden)]?.[0];
    
    const selectLabel = selectForm?.options.items.find(item => String(item.value) === dropdownField.value)?.title;
    const inputBySelectLabel = supplierForm?.form.map(item => 
      item.filter(item => item.type === (FormTypes.Input_Text) && item.options.label === selectLabel)
    ).filter(item => !!item.length);

    return !!selectLabel && !!inputBySelectLabel.length ? inputBySelectLabel : supplierForm?.form.map(item => 
      item.filter(item => item.type === (FormTypes.Input_Text))
    ).filter(item => !!item.length);
  }

  render() {
    const { field, suppliers, navigation } = this.props;
    const supplier_id = navigation.getParam(SUPPLIER_ID);
    const supplier_logo = suppliers.find(item => item.id === supplier_id).image;
    const supplierInputFormData = this.filteredSupplierInputFormData();

    return !!supplierInputFormData.length && supplierInputFormData.length === 1 && (
      <ServicePaymentDropdownFieldView
        field={field}
        supplier_logo={supplier_logo}
        supplierInputFormData={supplierInputFormData}
        onChangeMasked={this.onChangeMasked}
        onChange={this.onChange}
      />
    )
  }
}
