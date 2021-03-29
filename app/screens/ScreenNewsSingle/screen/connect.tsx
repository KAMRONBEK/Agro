import { connect } from "react-redux";
import { ScreenNewsSingleController } from "./controller";
import { Dispatch, RootState } from "store";
import { withErrorAuthentication } from "templates";
import { compose } from "utils";
import { ComponentType } from "react";

const mapState = ({ payment }: RootState) => ({
	currentNews: payment.currentNews
});

const mapDispatch = ({ payment }: Dispatch) => ({
	getNewsSingle: payment.getNewsSingle
});

type ExportComponent = ComponentType<{}>;

export const ScreenNewsSingleConnect = compose<ExportComponent>(
	connect(
		mapState,
		mapDispatch
	),
	withErrorAuthentication
)(ScreenNewsSingleController);
