import React, { Component } from "react";
import { ScreenBankomatsView } from "./view";

interface IConnectProps {
	regions: [];
	getRegions: () => void;
	bankomats: [];
	getBankomats: (id: number) => void;
}

export class ScreenBankomatsController extends Component<IConnectProps> {
	render() {
		return (
			<ScreenBankomatsView
				regions={this.props.regions}
				getRegions={this.props.getRegions}
				bankomats={this.props.bankomats}
				getBankomats={this.props.getBankomats}
			/>
		);
	}
}
