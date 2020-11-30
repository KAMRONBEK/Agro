import { ISignupState, FieldType, MaskKeys } from 'types';
import { MASKS } from 'const';

export const initState: ISignupState = {
  fields: [
    {
      type: FieldType.LastName,
      value: '',
      errors: [],
      required: true
    },
    {
      type: FieldType.Name,
      value: '',
      errors: [],
      required: true
    },
    {
      type: FieldType.FatherName,
      value: '',
      errors: [],
      required: false
    },
    {
      type: FieldType.Gender,
      value: 'Male',
      errors: [],
      required: true
    },
    {
      type: FieldType.Phone,
      value: '',
      errors: [],
      required: true
    },
    {
      type: FieldType.Password,
      value: '',
      errors: [],
      mask: MASKS[MaskKeys.PASSWORD],
      required: true
    }
  ],
  codeField: {
    type: FieldType.Code,
    value: '',
    errors: []
  },
  hidePassword: true,
  code: {
    session_id: null
  },
  codeIsFetching: false,
  codeIsError: false,
  confirmPhone: null,
  confirmIsFetching: false,
  confirmIsError: false,
  signup: null,
  signupIsFetching: false,
  signupIsError: false,
  signupSuccessModalVisible: false
};
