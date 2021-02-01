import React, { Component } from "react";
import { ScreenNewsView } from "./view";

interface IConnectProps {
	getNews: () => void;
	news: [];
}

export class ScreenNewsController extends Component<IConnectProps> {
	componentDidMount() {
		const { getNews } = this.props;
		getNews();
	}

	render() {
		const { news } = this.props;
		return <ScreenNewsView news={news} />;
	}
}
