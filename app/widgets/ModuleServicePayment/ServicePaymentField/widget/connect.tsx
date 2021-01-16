import { connect } from 'react-redux';
import { ServicePaymentFieldController } from './controller';
import { IStoreState, FieldType } from 'types';
import { IDispatch } from 'store';
import { compose } from 'utils';
import { ComponentType } from 'react';

const mapState = ({ supplier, suppliers: suppliersData }: IStoreState) => ({
  suppliers: suppliersData.suppliers,
  supplierForm: supplier?.form[supplier?.form.findIndex(item => item.step === supplier?.currentStep)],
  field: supplier.fields.find(item => item.type === FieldType.SupplierField),
  dropdownField: supplier.fields.find(field => field.type === FieldType.SupplierDropdown)
});

const mapDispatch = ({ supplier }: IDispatch) => ({
  pushFieldValue: supplier.pushFieldValue
});

type ExportComponent = ComponentType<{}>;

export const ServicePaymentFieldConnect = compose<ExportComponent>(
  connect(
    mapState,
    mapDispatch
  ),
)(ServicePaymentFieldController);
