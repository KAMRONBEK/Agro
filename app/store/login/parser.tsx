import { ILoginParams, ILoginState, FieldType } from "types";

export function formatedRequestParams({ fields }: ILoginState): ILoginParams {
  return {
    phone: fields.find(field => field.type === FieldType.Phone).value,
    password: fields.find(field => field.type === FieldType.Password).value
  }
}