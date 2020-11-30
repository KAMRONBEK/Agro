import { ICardOperationsState, IStoreState, IFieldState, FieldType, ITransferField } from "types"
import { CREDIT_CARD_MASK } from "const/store/masks/consts";

export function validateFields({ cardOperations }: IStoreState): { hasErrors: boolean, state: ICardOperationsState } {
  const { fields } = cardOperations;

  const filteredFieldsWithMask = 
    fields.filter(field => !!field.mask)
    .filter(field => !!field.value.length)
    .map(field => {
      const regexRes = new RegExp(field.mask.mask).test(field.value);

      return {
        ...field,
        errors: !!regexRes ? field.errors : [ field.mask.error ]
      }
    });

  return { 
    hasErrors: hasErrors(filteredFieldsWithMask),
    state: {
      ...cardOperations,
      fields: fields.map(field => {
        const res = filteredFieldsWithMask.find(filterdField => filterdField.type === field.type);
        return !!res ? res : field
      }),
      transferIsFetching: false,
      transferIsError: false
    }
  }
}

export function hasErrors(fields: IFieldState<FieldType, string>[]): boolean {
  return fields.some(field => !!field.errors.length);
}

export function cardIsFilled({ value }: ITransferField) {
  return new RegExp(CREDIT_CARD_MASK).test(value);
}