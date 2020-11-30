import { IFieldState, FieldType } from "types";
import { IFieldKeyboardTypes } from "types/shared";

export interface ISupplierState {
  form: ISupplierForm[];
  currentStep: number;
  supplierIsFetching: boolean;
  supplierIsError: boolean;
  supplier_id: number;
  fields: IFieldState<FieldType>[];
}

export interface ISupplierData {
  id: number;
  jsonrpc: string;
  result: ISupplierForm;
}

export interface ISupplierForm {
  step: number;
  title: string;
  get_info: boolean;
  form: ISupplierFormData[][];
  condition: [];
  settings: ISupplierSettings;
}

export interface ISupplierFormData {
  type: string;
  options: ISupplierFormOptionsInputText & ISupplierFormOptionsButton & ISupplierFormOptionsDropdown & ISupplierFormOptionsAmountInput;
  name: string;
  weight: number;
}

export interface ISupplierFormOptionsInputText {
  label: string;
  placeholder: string;
  hint: string;
  required: boolean;
  hidden: boolean;
  offline: boolean;
  value: string;
  keyboard: IFieldKeyboardTypes;
  min: number;
  max: number;
  mask: string;
  regex: string;
  error_message: string;
  qr_scanner: boolean;
}

export interface ISupplierFormOptionsButton {
  text: string;
  color: string;
  value: ISupplierFormOptionsButtonsValue;
}

export interface ISupplierFormOptionsAmountInput {
  label: string;
  placeholder: string;
  hint: string;
  input_currency: string;
  deposit_currency: string;
  required: boolean;
  hidden: boolean;
  offline: boolean;
  min: number;
  max: number;
  decimal: boolean;
  withdrawal_currency: string;
  cost: number;
  rate: number;
  commission_percent: number;
  commission_min_amount: number;
  nds: number;
  low_ratio: number;
}

export interface ISupplierFormOptionsDropdown {
  label: string;
  placeholder: string;
  hint: string;
  required: boolean;
  hidden: boolean;
  offline: boolean;
  items: ISupplierFormOptionsDropdownItem[];
}

export interface ISupplierFormOptionsDropdownItem {
  title: string;
  value: number;
  items: ISupplierFormOptionsDropdownItem[];
  extra: ISupplierFormOptionsDropdownItemExtras;
}

export interface ISupplierFormOptionsDropdownItemExtras {
  amount: number;
}

export interface ISupplierButton {
  type: string;
  options: ISupplierButtonOptions;
  name: string;
  weight: number;
}

export interface ISupplierButtonOptions {
  text: string;
  color: string;
  value: string;
}

export interface ISupplierSettings {
  data: {};
}

export interface ISupplierParams {
  step: number;
  service_id: number;
}

export interface ISupplierField {
  type: FieldType;
  value: any;
}

export enum ISupplierFormOptionsButtonsValue {
  Next = 'next',
  Submit = 'submit'
}