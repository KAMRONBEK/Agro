import { ISignupSendSmsCodeParams, ISignupState, FieldType, ISignupConfirmPhoneParams, ISignupParams } from "types";

export function formatedSendSmsCodeRequestParams({ fields }: ISignupState): ISignupSendSmsCodeParams {
  return {
    phone: fields.find(field => field.type === FieldType.Phone).value
  }
};

export function formatedConfirmPhoneRequestParams({ codeField, code }: ISignupState): ISignupConfirmPhoneParams {
  return {
    session_id: code.session_id,
    code: codeField.value
  }
};

export function formatedSignupRequestParams({ fields }: ISignupState): ISignupParams {
  return {
    name: fields.find(field => field.type === FieldType.Name).value,
    lastname: fields.find(field => field.type === FieldType.LastName).value,
    father_name: fields.find(field => field.type === FieldType.FatherName).value,
    gender: fields.find(field => field.type === FieldType.Gender).value,
    phone: fields.find(field => field.type === FieldType.Phone).value,
    password: fields.find(field => field.type === FieldType.Password).value
  }
};