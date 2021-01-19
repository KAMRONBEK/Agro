import React, { Component } from 'react';
import { PinCodeView as ScreenPinCodeView } from './view';

interface IConnectProps {}

export class ScreenPinController extends Component<IConnectProps> {
	render() {
		return <ScreenPinCodeView {...this.props} />;
	}
}
