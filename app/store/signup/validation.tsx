import { ISignupState, ISignupValidatedFields, IFieldState, FieldType } from 'types';
import { REQUIRED_FIELD } from 'const';

export function validateSignupFields({ fields }: ISignupState): ISignupValidatedFields {
  const validatedFields = fields
    .map(field => {
      if (field.required && !field.value) {
        return { 
          ...field, 
          errors: [ REQUIRED_FIELD ] 
        }
      };

      return field;
    })
    .map(field => {
      if (!!field.mask) {
        const regexRes = new RegExp(field.mask.mask).test(field.value);

        return {
          ...field,
          errors: !!regexRes ? field.errors : [ ...field.errors, field.mask.error ]
        }
      }

      return field;
    });;

  return {
    isError: hasErrors(validatedFields),
    result: validatedFields
  } ;
}

export function hasErrors(fields: IFieldState<FieldType, string>[]): boolean {
  return fields.some(field => !!field.errors.length);
}