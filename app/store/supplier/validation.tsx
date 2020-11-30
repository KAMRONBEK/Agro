import { ISupplierField, ISupplierState, IFieldState, FieldType, FormTypes, ISupplierFormData } from "types";
import { formatedPureValue } from "utils";
import { REQUIRED_FIELD, WRONG_FORMAT, MIN_LENGTH, MIN_AMOUNT, MAX_AMOUNT } from "const";

export function validateFields(state: ISupplierState): { isError: boolean, result: IFieldState<FieldType>[] } {
  const { fields, form: formData, currentStep } = state;

  const result = fields.map(field => {
    const params = { 
      type: field.type, 
      value: field.value 
    };

    const fieldForm = formData[formData.findIndex(item => item.step === currentStep)]
      .form.find(form => form[form.findIndex(item => item.type === field.formType)]?.type === field.formType)?.[0];
    const isRequired = fieldForm?.options.required;

    if (!!fieldForm) {
      if (fieldForm.type === FormTypes.Input_Text) {
        return checkInput(params, fieldForm, field);
      }
  
      if (fieldForm.type === FormTypes.Amount_Input) {
        const amountMinMaxAmountResult = fieldForm.type === FormTypes.Amount_Input && validateAmountMinMaxAmount(params, fieldForm);
        const isRequiredResult = validateRequiredField(isRequired, params);
  
        const errors = getErrors([amountMinMaxAmountResult, isRequiredResult]);
  
        return {
          ...field,
          value: field.value,
          required: isRequired,
          errors
        };
      }
    }

    return field;
  });

  console.log(result, 'result');

  return {
    isError: result.some(field => !!field.errors.length),
    result
  }
}

export function validateField(params: ISupplierField, { form: formData, fields, currentStep }: ISupplierState): IFieldState<FieldType>[] {
  const fieldForm = formData[formData.findIndex(item => item.step === currentStep)]
    .form.find(form => form[0].type === fields.find(item => item.type === params.type).formType)[0];
  const isRequired = fieldForm.options.required;

  if (fieldForm.type === FormTypes.Input_Text) {
    return fields.map(field => field.type === params.type ? checkInput(params, fieldForm, field) : field);
  }

  if (fieldForm.type === FormTypes.Amount_Input) {
    const amountMinMaxAmountResult = fieldForm.type === FormTypes.Amount_Input && validateAmountMinMaxAmount(params, fieldForm);
    const isRequiredResult = validateRequiredField(isRequired, params);

    const errors = getErrors([amountMinMaxAmountResult, isRequiredResult]);

    return fields.map(field => field.type === params.type ? {
      ...field,
      value: params.value,
      required: isRequired,
      errors
    } : field);
  }

  return fields.map(field => field.type === params.type ? {
    ...field,
    value: params.value,
    required: isRequired,
    errors: []
  } : field);
}

export function checkInput(params: ISupplierField, fieldForm: ISupplierFormData, field: IFieldState<FieldType, any>) {
  const regex = fieldForm.options.regex;
  const min = fieldForm.options.min;
  const isRequired = fieldForm.options.required;
  const valueLength = params.value.length;
  const validationResult = !!regex && valueLength >= min && validateByRegEx(params, regex);
  const lengthResult = valueLength < min && validateLengthField(min, params);
  const isRequiredResult = validateRequiredField(isRequired, params);

  const errors = getErrors([validationResult, isRequiredResult, lengthResult]);

  return {
    ...field,
    value: params.value,
    required: isRequired,
    errors
  };
}

export function validateByRegEx(params: ISupplierField, regex: string): string {
  return !new RegExp(regex).test(formatedPureValue(params.value)) && WRONG_FORMAT;
}

export function validateRequiredField(required: boolean, params: ISupplierField): string {
  return !params.value.length && required && REQUIRED_FIELD;
}

export function getErrors(value: string[]): string[] {
  return value.filter(error => !!error);
}

export function validateLengthField(minLength: number, params: ISupplierField): string {
  return params.value.length < minLength && MIN_LENGTH + minLength;
}

export function validateAmountMinMaxAmount(params: ISupplierField, { options: { min, max, input_currency } }: ISupplierFormData): string {
  return (Number(params.value) < min && MIN_AMOUNT + min + ` ${input_currency}`) || (Number(params.value) > max && MAX_AMOUNT + max + ` ${input_currency}`);
}