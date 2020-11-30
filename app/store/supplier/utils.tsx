import { IFieldState, FieldType, ISupplierState, ISupplierField, ISupplierForm } from "types";

export function genField({ type, value }: ISupplierField, { fields }: ISupplierState): IFieldState<FieldType, string>[] {
  return fields.map(field => field.type === type ? {
    ...field,
    value,
    errors: []
  } : field);
};