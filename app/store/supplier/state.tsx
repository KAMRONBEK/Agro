import { ISupplierState, FieldType, FormTypes } from 'types';

export const initState: ISupplierState = {
  form: [],
  currentStep: null,
  supplierIsFetching: false,
  supplierIsError: false,
  supplier_id: null,
  fields: [
    {
      formType: FormTypes.Input_Text,
      type: FieldType.SupplierField,
      value: '',
      errors: []
    },
    {
      formType: FormTypes.Dropdown_Combobox,
      type: FieldType.SupplierDropdown,
      value: null,
      errors: []
    },
    {
      formType: FormTypes.Dropdown_Combobox,
      type: FieldType.SupplierDropdownItem,
      value: null,
      errors: []
    },
    {
      formType: FormTypes.Amount_Input,
      type: FieldType.SupplierFieldAmount,
      value: '',
      errors: []
    },
    {
      formType: FormTypes.Amount_Static,
      type: FieldType.SupplierFieldStaticAmount,
      value: '',
      errors: []
    }
  ]
};
