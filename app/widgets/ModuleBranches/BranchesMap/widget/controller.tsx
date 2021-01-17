import React, { Component } from "react";
import { BranchesMapView } from "./view";
import { Props } from "./connect";

export class BranchesMapController extends Component<Props> {
	componentDidMount() {
		this.props.getBranches();
	}

	render() {
		return <BranchesMapView branches={this.props.branches}/>;
	}
}

export default BranchesMapController;
