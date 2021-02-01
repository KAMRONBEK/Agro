import { connect } from "react-redux";
import { ScreenNewsController } from "./controller";
import { Dispatch, RootState } from "store";
import { withErrorAuthentication } from "templates";
import { compose } from "utils";
import { ComponentType } from "react";

const mapState = ({ payment: { news, currentNews } }: RootState) => ({
	news,
	currentNews
});

const mapDispatch = ({ payment }: Dispatch) => ({
	getNews: payment.getNews
});

type ExportComponent = ComponentType<{}>;

export const ScreenNewsConnect = compose<ExportComponent>(
	connect(
		mapState,
		mapDispatch
	),
	withErrorAuthentication
)(ScreenNewsController);
