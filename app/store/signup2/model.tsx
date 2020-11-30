import { initState } from './state';
import { 
  ISignupState, 
  ISignupField, 
  IStoreState, 
  IFieldState, 
  FieldType, 
  ISignupSmsCode, 
  IError, 
  IConfirmPhoneError, 
  ISignup 
} from 'types';
import { setFieldValue, setConfirmError } from './utils';
import { createLoggedAsyncAction, isFieldErrorExist } from 'utils';
import { 
  formatedSendSmsCodeRequestParams, 
  formatedConfirmPhoneRequestParams, 
  formatedSignupRequestParams
} from './parser';
import { validateSignupFields } from './validation';
import { callSendSmsCode, callConfirmPhone, callSignup } from './request';
import { AxiosResponse } from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import { USER_TOKEN, PHONE_NUMBER } from 'const';
import { BEARER } from 'api';

export const signup2 = {
  state: initState,
  reducers: {
    resetState: () => {
      return initState;
    },

    resetSecondStep: (state: ISignupState): ISignupState => {
      return { ...state, codeField: initState.codeField, confirmPhone: null };
    },

    setField: (state: ISignupState, payload: ISignupField): ISignupState => {
      return { ...state, fields: setFieldValue(payload, state) }
    },

    setCode: (state: ISignupState, { value }: ISignupField): ISignupState => {
      return { ...state, codeField: { ...state.codeField, value, errors: [] } }
    },

    toggleHidePassword: (state: ISignupState): ISignupState => {
      return { ...state, hidePassword: !state.hidePassword }
    },

    pushSendCode: (state: ISignupState): ISignupState => {
      return { ...state, codeIsFetching: true }
    },
    
    pushSendCodeDone: (state: ISignupState, payload: ISignupSmsCode): ISignupState => {
      return { ...state, code: payload, codeIsFetching: false, codeIsError: false }
    },

    pushSendCodeFail: (state: ISignupState): ISignupState => {
      return { ...state, codeIsFetching: false, codeIsError: true }
    },

    setSignupFieldErrors: (state: ISignupState, payload: IFieldState<FieldType>[]): ISignupState => {
      return { ...state, fields: payload, codeIsFetching: false, codeIsError: true }
    },

    pushConfirmPhone: (state: ISignupState): ISignupState => {
      return { ...state, confirmIsFetching: true, confirmPhone: null }
    },
    
    pushConfirmPhoneDone: (state: ISignupState): ISignupState => {
      return { ...state, confirmPhone: true, confirmIsFetching: false, confirmIsError: false }
    },

    pushConfirmPhoneFail: (state: ISignupState): ISignupState => {
      return { ...state, confirmPhone: false, confirmIsFetching: false, confirmIsError: true }
    },

    setConfirmError: (state: ISignupState, error: IError<IConfirmPhoneError>): ISignupState => {
      return setConfirmError(error, state);
    },

    pushSignup: (state: ISignupState): ISignupState => {
      return { ...state, signupIsFetching: true }
    },
    
    pushSignupDone: (state: ISignupState): ISignupState => {
      return { ...state, signup: true, signupIsFetching: false, signupIsError: false }
    },

    pushSignupFail: (state: ISignupState): ISignupState => {
      return { ...state, signup: false, signupIsFetching: false, signupIsError: true }
    },

    setSignupSuccessModalState: (state: ISignupState, payload: boolean): ISignupState => {
      return { ...state, signupSuccessModalVisible: payload };
    }
  },
  effects: dispatch => ({
    pushSendCode: createLoggedAsyncAction<void, void>(
      async (_: void, { signup2 }: IStoreState) => {
        const requestParams = formatedSendSmsCodeRequestParams(signup2);
        const res = await callSendSmsCode(requestParams) as ISignupSmsCode;
        console.log(res);
        dispatch.signup2.pushSendCodeDone(res);
      },
      async () => {
        dispatch.signup2.pushSendCodeFail();
      }
    ),

    pushConfirmPhone: createLoggedAsyncAction<void, void>(
      async (_: void, { signup2 }: IStoreState) => {
        const requestParams = formatedConfirmPhoneRequestParams(signup2);
        const res = await callConfirmPhone(requestParams) as AxiosResponse;
        const isError = isFieldErrorExist(res.data);

        if (isError) {
          dispatch.signup2.setConfirmError(res.data);
          
          return;
        }
        console.log(res);
        if (res.status === 204) {
          dispatch.signup2.pushConfirmPhoneDone();
        }
      },
      async () => {
        dispatch.signup2.pushConfirmPhoneFail();
      }
    ),

    pushSignup: createLoggedAsyncAction<void, void>(
      async (_: void, { signup2 }: IStoreState) => {
        const requestParams = formatedSignupRequestParams(signup2);
        const res = await callSignup(requestParams)
        const isError = isFieldErrorExist(res);

        if (isError) {
          dispatch.signup2.setConfirmError(res);
          
          return;
        }

        const checkedRes = res as ISignup;

        AsyncStorage.setItem(USER_TOKEN, BEARER + checkedRes.api_token);
        AsyncStorage.setItem(PHONE_NUMBER, checkedRes.user.phone);

        dispatch.signup2.setSignupSuccessModalState(true);
        dispatch.signup2.pushSignupDone();
      },
      async () => {
        dispatch.signup2.pushSignupFail();
      }
    )
  })
};
