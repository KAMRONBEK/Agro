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

export const signup = {
  state: initState,
  reducers: {
    resetState: () => {
      return initState;
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
      return { ...state, confirmIsFetching: true }
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
      async (_: void, { signup }: IStoreState) => {
        const requestParams = formatedSendSmsCodeRequestParams(signup);
        console.log(requestParams);
        const validatedSignupFields = validateSignupFields(signup);
        
        if (validatedSignupFields.isError) {
          dispatch.signup.setSignupFieldErrors(validatedSignupFields.result);

          return;
        }

        const res = await callSendSmsCode(requestParams) as ISignupSmsCode;

        dispatch.signup.pushSendCodeDone(res);
      },
      async () => {
        dispatch.signup.pushSendCodeFail();
      }
    ),

    pushConfirmPhone: createLoggedAsyncAction<void, void>(
      async (_: void, { signup }: IStoreState) => {
        const requestParams = formatedConfirmPhoneRequestParams(signup);
        const res = await callConfirmPhone(requestParams) as AxiosResponse;
        const isError = isFieldErrorExist(res.data);

        if (isError) {
          dispatch.signup.setConfirmError(res.data);
          
          return;
        }

        if (res.status === 204) {
          dispatch.signup.pushConfirmPhoneDone();
          dispatch.signup.pushSignup();
        }
      },
      async () => {
        dispatch.signup.pushConfirmPhoneFail();
      }
    ),

    pushSignup: createLoggedAsyncAction<void, void>(
      async (_: void, { signup }: IStoreState) => {
        const requestParams = formatedSignupRequestParams(signup);
        const res = await callSignup(requestParams)
        const isError = isFieldErrorExist(res);

        if (isError) {
          dispatch.signup.setConfirmError(res);
          
          return;
        }

        const checkedRes = res as ISignup;

        AsyncStorage.setItem(USER_TOKEN, BEARER + checkedRes.api_token);
        AsyncStorage.setItem(PHONE_NUMBER, checkedRes.user.phone);

        dispatch.signup.setSignupSuccessModalState(true);
        dispatch.signup.pushSignupDone();
      },
      async () => {
        dispatch.signup.pushSignupFail();
      }
    )
  })
};
