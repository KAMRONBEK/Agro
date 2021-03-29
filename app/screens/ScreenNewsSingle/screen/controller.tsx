import React, { Component } from "react";
import { getNewsList } from "store/payment/request";
import { ScreenNewsSingleView } from "./view";

interface IConnectProps {
	getNewsSingle: (id: number) => void;
	currentNews: {};
}

export class ScreenNewsSingleController extends Component<IConnectProps> {
	componentDidMount() {
		// const {} = this.props;
		console.log(this.props);

		// pushTokenExist();
		// pushCategories();
	}

	render() {
		return <ScreenNewsSingleView getNewsSingle={this.props.getNewsList} currentNews={this.props.currentNews} />;
	}
}
