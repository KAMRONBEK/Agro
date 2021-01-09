import { initState } from './state';
import { ILoginState, ILogin, IStoreState, ILoginField, IError, ILoginError, ILogoutData } from 'types';
import { createLoggedAsyncAction, isFieldErrorExist } from 'utils';
import { callLogin, callLogout } from './request';
import { formatedRequestParams } from './parser';
import { setFieldValue, setLoginError, resetLoginError } from './utils';
import AsyncStorage from '@react-native-community/async-storage';
import { USER_TOKEN, PHONE_NUMBER } from 'const';
import { BEARER } from 'api';

export const login = {
	state: initState,
	reducers: {
		resetState: () => {
			return initState;
		},

		pushLogin: (state: ILoginState): ILoginState => {
			return { ...state, loginIsFetching: true };
		},

		pushLoginDone: (state: ILoginState, payload: ILogin): ILoginState => {
			return { ...state, login: payload, loginIsFetching: false, loginIsError: false };
		},

		pushLoginFail: (state: ILoginState): ILoginState => {
			return { ...state, loginIsFetching: false, loginIsError: true };
		},

		setField: (state: ILoginState, payload: ILoginField): ILoginState => {
			return { ...state, fields: setFieldValue(payload, state) };
		},

		toggleHidePassword: (state: ILoginState): ILoginState => {
			return { ...state, hidePassword: !state.hidePassword };
		},

		setLoginError: (state: ILoginState, error: IError<ILoginError>): ILoginState => {
			return setLoginError(error, state);
		},

		resetLoginError: (state: ILoginState): ILoginState => {
			return resetLoginError(state);
		},

		pushLogout: (state: ILoginState): ILoginState => {
			return { ...state, logoutIsFetching: true };
		},

		pushLogoutDone: (state: ILoginState): ILoginState => {
			return { ...state, logout: true, logoutIsFetching: false };
		},

		pushLogoutFail: (state: ILoginState): ILoginState => {
			return { ...state, logout: false, logoutIsFetching: false };
		}
	},
	effects: dispatch => ({
		pushLogin: createLoggedAsyncAction<void, void>(
			async (_: void, { login }: IStoreState) => {
				const requestParams = formatedRequestParams(login);
				const res = await callLogin(requestParams);
				const isError = isFieldErrorExist(res);
				console.log(res);
				if (isError) {
					dispatch.login.setLoginError(res);

					return;
				}

				const checkedRes = res as ILogin;

				AsyncStorage.setItem(USER_TOKEN, BEARER + checkedRes.api_token);
				AsyncStorage.setItem(PHONE_NUMBER, checkedRes.user.phone);

				dispatch.login.resetLoginError();
				dispatch.login.pushLoginDone(res);
			},
			async () => {
				dispatch.login.pushLoginFail();
			}
		),

		pushLogout: createLoggedAsyncAction<void, void>(
			async (_: void) => {
				const response = await callLogout();

				AsyncStorage.removeItem(USER_TOKEN);

				dispatch.login.pushLogoutDone();
				dispatch.app.pushResetApp();
				dispatch.app.pushTokenExist();
			},
			async () => {
				dispatch.authorization.pushLogoutFail();
			}
		)
	})
};
