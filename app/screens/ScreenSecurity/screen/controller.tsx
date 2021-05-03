import React from "react";
import { ScreenSecurityView } from "./view";
import { IProps } from "./connect";

export function ScreenSecurityController({ useFingerPrint, setFingerPrint, navigation }: IProps) {
	return (
		<ScreenSecurityView useFingerPrint={useFingerPrint} setFingerPrint={setFingerPrint} navigation={navigation} />
	);
}
