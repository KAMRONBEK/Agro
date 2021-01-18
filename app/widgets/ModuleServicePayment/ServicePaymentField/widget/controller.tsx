import React, { Component } from 'react';
import { ServicePaymentFieldView } from './view';
import { ISupplierField, FieldType, IFieldState, ISupplier, ISupplierForm, FormTypes } from 'types';
import { NavigationScreenProp } from 'react-navigation';
import { SUPPLIER_ID } from './consts';
import reactotron from 'store/ReactatronConfig';

interface IConnectProps {
  supplierForm: ISupplierForm;
  field: IFieldState<FieldType.SupplierField, string>; 
  dropdownField: IFieldState<FieldType.SupplierDropdown, string>;
  suppliers: ISupplier[];
  navigation: NavigationScreenProp<any, any>;
  pushFieldValue: (payload: ISupplierField) => void;
}

export class ServicePaymentFieldController extends Component<IConnectProps> {
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
    const { supplierForm } = this.props;
    const selectForm = supplierForm?.form[supplierForm?.form
      .findIndex(item => !!item?.length && item[0]?.type === FormTypes.Dropdown_Combobox && !item[0].options.hidden)]?.[0];

    return !selectForm && supplierForm?.form.map(item => 
      item.filter(item => !item.options.hidden && item.type === FormTypes.Input_Text)
    ).filter(item => !!item?.length);
  }

  render() {
	const { field, suppliers, navigation,route } = this.props;
	reactotron.log({suppliers,navigation,route});
    const supplier_id =route.params[SUPPLIER_ID]; //navigation.getParam(SUPPLIER_ID);
    const supplier_logo = suppliers.find(item => item.id === supplier_id).image;
    const supplierInputFormData = this.filteredSupplierInputFormData();

    return !!supplierInputFormData?.length && (
      <ServicePaymentFieldView
        field={field}
        supplier_logo={supplier_logo}
        supplierInputFormData={supplierInputFormData}
        onChangeMasked={this.onChangeMasked}
        onChange={this.onChange}
      />
    )
  }
}
