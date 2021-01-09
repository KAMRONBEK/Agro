import React, { Component } from 'react';
import { SmsConfirmationButtonView } from './view';
import { NavigationScreenProp, NavigationActions, StackActions } from 'react-navigation';
import { ROUTES } from 'const';

interface IConnectProps {
	confirmIsFetching: boolean;
	signup: boolean;
	signupIsFetching: boolean;
	navigation: NavigationScreenProp<void>;
	pushConfirmPhone: () => void;
}

export class SmsConfirmationButtonController extends Component<IConnectProps> {
	componentDidUpdate(prevProps: IConnectProps) {
		const { signup, navigation } = this.props;

		if (signup !== prevProps.signup) {
			//   if (signup) {
			//     const resetAction = StackActions.reset({
			//       index: 0,
			//       actions: [NavigationActions.navigate({ routeName: ROUTES.SCREEN_MAIN })],
			//     });

			//     navigation.dispatch(resetAction);
			//   }
			navigation.navigate(ROUTES.SCREEN_PIN_CODE);
			console.log('Navigating to PIN');
		}
	}

	confirm = () => {
		const { pushConfirmPhone } = this.props;

		pushConfirmPhone();
	};

	render() {
		const { confirmIsFetching } = this.props;

		return <SmsConfirmationButtonView confirmIsFetching={confirmIsFetching} confirm={this.confirm} />;
	}
}
