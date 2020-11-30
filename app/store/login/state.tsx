import { ILoginState, FieldType } from 'types';

export const initState: ILoginState = {
  login: null,
  loginIsFetching: false,
  loginIsError: false,
  logout: false,
  logoutIsFetching: false,
  fields: [
    {
      type: FieldType.Phone,
      value: '998 ',
      required: true,
      errors: []
    },
    {
      type: FieldType.Password,
      value: '',
      required: true,
      errors: []
    }
  ],
  hidePassword: true
};
