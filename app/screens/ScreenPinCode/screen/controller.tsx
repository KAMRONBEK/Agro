import React from "react";
import { PinCodeView as ScreenPinCodeView } from "./view";
import { IProps } from "./connect";

export function ScreenPinController(props: IProps) {
	return <ScreenPinCodeView {...props} />;
}
