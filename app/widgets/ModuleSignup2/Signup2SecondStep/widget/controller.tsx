import React, { Component } from 'react';
import { Signup2SecondStepView } from './view';
import { IFieldState, FieldType, ISignupField } from 'types';
import { StackActions, NavigationActions, NavigationScreenProp } from 'react-navigation';
import { ROUTES } from 'const';

interface IConnectProps {
	navigation: NavigationScreenProp<void>;
	phone: IFieldState<FieldType.Phone, string>;
	code: IFieldState<FieldType.Code, string>;
	confirmPhone: boolean;
	signup: boolean;
	setCode: (params: ISignupField) => void;
	pushConfirmPhone: () => void;
	resetSecondStep: () => void;
	pushSignup: () => void;
}

export class Signup2SecondStepController extends Component<IConnectProps> {
	componentDidUpdate(prevProps: IConnectProps) {
		const { code, pushConfirmPhone, confirmPhone, pushSignup, navigation, signup } = this.props;

		if (code !== prevProps.code) {
			if (!code.errors.length) {
				pushConfirmPhone();
			}
		}

		if (confirmPhone !== prevProps.confirmPhone) {
			if (confirmPhone) {
				pushSignup();
			}
		}

		if (signup !== prevProps.signup) {
			// if (signup) {
			// 	const resetAction = StackActions.reset({
			// 		index: 0,
			// 		actions: [NavigationActions.navigate({ routeName: ROUTES.SCREEN_PIN_CODE })]
			// 	});

			// 	navigation.dispatch(resetAction);
			// }
			navigation.navigate(ROUTES.SCREEN_PIN_CODE, { isSetup: true });
			console.log('Navigating to PIN - 2');
		}
	}

	componentWillUnmount() {
		const { resetSecondStep } = this.props;

		resetSecondStep();
	}

	onChange = (value: string) => {
		console.log(value);
		const { setCode } = this.props;

		setCode({
			type: FieldType.Code,
			value
		});
	};

	formatePhone = () => {
		const { phone } = this.props;

		return phone.value.substring(0, 5) + '*****' + phone.value.substring(10);
	};

	render() {
		const { phone, code } = this.props;
		const formatedPhone = this.formatePhone();

		return <Signup2SecondStepView phone={phone} formatedPhone={formatedPhone} code={code} onChange={this.onChange} />;
	}
}
