import React, { Component } from 'react';
import { ScreenPinCodeView } from './view';

interface IConnectProps {}

export class ScreenPaymentController extends Component<IConnectProps> {
	render() {
		return <ScreenPinCodeView />;
	}
}
