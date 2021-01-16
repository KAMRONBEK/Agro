import React, { Component } from "react";
import { SettingsContentView } from "./view";
import { Props } from "./connect";

export class SettingsContentController extends Component<Props> {

	render() {
		return <SettingsContentView />;
	}
}

export default SettingsContentController;
