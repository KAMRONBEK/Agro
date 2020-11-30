import { ISupplierState, FormTypes } from "types";

export function generatedPaymentParameters(supplier: ISupplierState): Object {
  return supplier.form.map(stepForm => 
    stepForm.form.filter(form => form[0].type !== FormTypes.Button_Button)
      .map(form => ({
        [form[0].name]: supplier.fields.find(field => field.formType === form[0].type).value
      }))
  )[0].reduce((prev, cur) => {
    const assignedObj = Object.assign(prev, cur);
    const value = supplier.fields.find(field => 
      (field.formType === FormTypes.Input_Text && !!field.value) || 
      (field.formType === FormTypes.Dropdown_Combobox && !!field.value)
    ).value;

    return {
      ...assignedObj,
      field: {
        title: supplier.form[0].form[0][0].options.label,
        value
      }
    }
  });
}