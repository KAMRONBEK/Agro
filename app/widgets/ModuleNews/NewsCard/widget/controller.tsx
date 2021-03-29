import { ROUTES } from "const";
import React, { Component } from "react";
import { NewsCardView } from "./view";

interface IConnectProps {
	item: {
		content: string;
		content_mini: string;
		created_at: Date;
		id: number;
		title: string;
		updated_at: Date;
		views: null;
	};
	getNewsSingle: (id: any) => void;
	navigation: any;
}

export class NewsCardController extends Component<IConnectProps> {
	onPressCard = id => {
		let { getNewsSingle, navigation } = this.props;
		getNewsSingle(id);
		navigation.navigate(ROUTES.SCREEN_NEWS_SINGLE);
	};
	render() {
		let { content, content_mini, created_at, id, title, updated_at, views } = this.props.item;

		return (
			<NewsCardView
				content={content}
				content_mini={content_mini}
				created_at={created_at}
				id={id}
				title={title}
				updated_at={updated_at}
				views={views}
				onPress={id => this.onPressCard(id)}
			/>
		);
	}
}
